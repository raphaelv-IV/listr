import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { StyleSheet, Text, View, Image } from 'react-native';
import { connect } from 'react-redux';
import firebase from 'firebase'


require("firebase/firestore")

const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser,
    posts: store.userState.posts
}) 


export function profileScreen(props) {
    const[userPosts, setUserPosts] = useState([])
    const [user, setUser] = useState(null)

    useEffect(() => {
        const {currentUser, posts } = props;
        if (props.route.params.uid == firebase.auth().currentUser.uid) {
            setUser(currentUser)
            setUserPosts(posts)
        } else {
            firebase.firestore(props.route.params.uid)
                .collection("user")
                .doc()
                .get()
                .then((snapshot) => {
                    if(snapshot.exists) {
                       setUser(snapshot.data());
                    } else {
                        alert("DOES NOT EXIST")
                    }
                })
            firebase.firestore()
                .collection("posts")
                .doc(props.route.params.uid)
                .collection("usersPosts")
                .orderBy("creation", "asc")
                .get()
                .then((snapshot) => {
                    let posts = snapshot.docs.map(doc => {
                        const data = doc.data();
                        const id = doc.id;
                        return {id, ...data}
                    })
                    setUserPosts(posts)
                })
        }
    }), [props.route.params.uid]



    if (user == null) {
        return <View/>
    }
    return (
        <View style={styles.containter}>
            <View>
                <Text>{currentUser.name}</Text>
            </View>

            <View>
                <FlatList
                numColumns={3}
                horizontal={false}
                data={posts}
                renderItem={({item}) => (
                    <View style={styles.containerImg}>
                        <Image
                        style={styles.image}
                            source={{uri: item.downloadURL}}    
                        />
                    </View>
                )}
                />
            </View>

        </View>
    )
}







const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        flex: 1,
        aspectRatio: 1/1
    },
    containerImg: {
        flex: 1/3
    }
})








export default connect(mapStateToProps, null)(ProfileScreen);
