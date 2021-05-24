import React from 'react';
import { PanResponder, Image, Animated, View, Dimensions, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUser, fetchUserPosts, fetchUsersData} from '../components/redux/actions/index';
import firestore from '@react-native-firebase/firestore';
import firebase from 'firebase';
import { TouchableHighlightBase } from 'react-native';


const ScreenWidth = Dimensions.get("window").width
const ScreenHeight = Dimensions.get("window").height

const mapStateToProps = (store) => ({
    posts: store.userState.posts
}) 

const mapDispatchToProps = dispatch => {
    return {

    }
}


class DashBoardScreen extends React.Component {
    state = {
        usersPosts: []
    }
    constructor(props){
        super(props)
        this.fetchUser
        this.position = new Animated.ValueXY()
        this.subscriber =
            firebase.firestore()
                .collection("posts")
                .doc()
                .collection("usersPosts")
                .doc()
                .onSnapshot(doc => {
                    this.setState({
                        posts: {
                            usersPosts: doc.data()
                        }
                    })

                })
    

        this.PanResponder = PanResponder.create({
            onStartShouldSetPanResponder: (event, gestureState) => true,
            onPanResponderMove: (event, gestureState) => {
                this.position.setValue({ x: gestureState.dx, y: gestureState.dy })
            },
            onPanResponderRelease: (event, gestureState) => {
                if(gestureState.dx > 130){
                    Animated.spring(this.position, {
                        toValue: {x: ScreenWidth + 100, y: gestureState.dy},
                        useNativeDriver: true
                    }) .start(() => {
                        this.setState({posts}, () => {
                            this.position.setValue({x: 0, y: 0})
                        })
                    })
                } 
                else if (gestureState.dx < -130){
                    Animated.spring(this.position, {
                        toValue: {x: -ScreenWidth - 150, y: gestureState.dy},
                        useNativeDriver: true
                    }) .start(() => {
                        this.setState({posts}, () => {
                            this.position.setValue({x: 0, y: 0})
                        })
                    })
                } else {
                    Animated.spring(this.position, {
                        toValue: {x: 0, y: 0},
                        friction: 4,
                        useNativeDriver: true
                    }) .start()
                }
               
            }
        })
        this.rotate = this.position.x.interpolate({
            inputRange: [ -ScreenWidth/2, 0, ScreenWidth/2 ],
            outputRange: ['-10deg', '0deg', '10deg'],
            extrapolate: 'clamp'
        })
        this.rotateTranslate = {
            transform: [{
                rotate: this.rotate
            },
            ...this.position.getTranslateTransform()
            ]
        }
        this.nextCardOpacity = this.position.x.interpolate({
            inputRange: [ -ScreenWidth/2, 0, ScreenWidth/2 ],
            outputRange: [1,-1, 1],
            extrapolate: 'clamp'
        })
        this.nextCardScale = this.position.x.interpolate({
            inputRange: [ -ScreenWidth/2, 0, ScreenWidth/2 ],
            outputRange: [1, 0.09, 1],
            extrapolate: 'clamp'
        })
    }


    fetchUser = async () => {
        const users = await firestore()
        .collection("users")
        .get()
    }

  


    renderPics = () => {
        return (
            <View>
                <Animated.View
                {...this.PanResponder.panHandlers}  
                style={[this.rotateTranslate,
                    {width: ScreenWidth,
                    height: ScreenHeight - 280,
                    position: 'absolute',
                    padding: 10
                }]}>
                    <Image style={{
                            flex: 1,
                            resizeMode: 'cover',
                            height: null,
                            width: null,
                            borderRadius: 30
                        }}
                        source={userPosts.downloadURL}
                        
                    /> 
                    <Text>Caption</Text> 
                </Animated.View>
            </View>
        )
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
            <View style={{height: 5}}>
            </View>
            <View style={{flex: 1}}>
                {this.renderPics()}
            </View>
            <View style={{height: 60}}>
            </View>
            </View>
        )
    }
}





export default connect(mapStateToProps, mapDispatchToProps)(DashBoardScreen);
