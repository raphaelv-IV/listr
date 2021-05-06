import React from 'react';
import { PanResponder, Image, Animated, View, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUser, fetchUserPosts, fetchUsersData} from '../components/redux/actions/index';
import firebase from 'firebase';
import { user } from '../components/redux/reducers/user';
import { users } from '../components/redux/reducers/users';


const ScreenWidth = Dimensions.get("window").width
const ScreenHeight = Dimensions.get("window").height


export class DashBoardScreen extends React.Component {
    constructor(props){
        super(props)
        this.position = new Animated.ValueXY()
        this.state={
            posts: []

        }
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
                        this.setState({currentIndex: uri}, () => {
                            this.position.setValue({x: 0, y: 0})
                        })
                    })
                } 
                else if (gestureState.dx < -130){
                    Animated.spring(this.position, {
                        toValue: {x: -ScreenWidth - 150, y: gestureState.dy},
                        useNativeDriver: true
                    }) .start(() => {
                        this.setState({currentIndex: uri}, () => {
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
    
    componentDidMount() {
        this.props.fetchUser()
        this.props.fetchUserPosts()
    
    }
    
    renderPics = () => {
        return ((uri) => {
            if( uri === undefined) {
                return null
            } else if (uri) {
                return (
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
                           source={uri}
                        /> 
                    </Animated.View>
                )
            }
        }) 
    };

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



const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser,
    users: store.usersState.users
   
})

const mapDispatachProps = (dispatch) => bindActionCreators({fetchUser, fetchUserPosts, fetchUsersData}, dispatch)

export default connect(mapStateToProps, mapDispatachProps)(DashBoardScreen);
