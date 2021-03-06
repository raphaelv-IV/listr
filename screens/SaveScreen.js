import React, { useState } from 'react'
import { View, TextInput, Image, Button } from 'react-native';
import firebase from 'firebase';

require("firebase/firestore")
require("firebase/firebase-storage")

export default function SaveScreen(props) {
    const [caption, setCaption] = useState(" ")

    const uploadImage = async() => {
        const uri = props.route.params.image;
        const response = await fetch(uri);
        const blob = await response.blob();
        const task = firebase
        .storage()
        .ref()
        .child(`post/${firebase.auth().currentUser.uid}/${Math.random().toString(36)}`)
        .put(blob)

        const taskProgress = snapshot => {
            console.log(`transferred: ${snapshot.bytesTransferrd}`)
        }

        const taskCompleted = () => {
            task.snapshot.ref.getDownloadURL().then((snapshot) => {
                savePostData(snapshot);
                console.log(snapshot)
            })
        }

        const taskError = snapshot => {
            console.log(snapshot)
        }

        task.on("state_changed", taskProgress, taskError, taskCompleted)
    }

    const savePostData = (getDownloadURL, navigation)  => {
        firebase.firestore()
        .collection('posts')
        .collection("usersPosts")
        .add({
            getDownloadURL,
            caption,
            creation: firebase.firestore.FieldValue.serverTimestamp()
        }).then((function () {
            props.navigation.navigate("Home")
        }))
    }
    return (
        <View style={{ flex: 1 }}>
            <Image source={{uri: props.route.params.image }} />
            <TextInput
                placeholder="Caption"
                onChangeText={(caption) => setCaption(caption)}
            />
            <Button title="Save" onPress={() => uploadImage()}/>
        </View>
    )
}



