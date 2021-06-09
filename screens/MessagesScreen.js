// @refesh reset
import React, {useState, useEffect, useCallback} from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'
import { fetchUser } from '../components/redux/actions'
import firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyBA8473wfKUb1AokPxuoaoAZSs5tv5i70c",
    authDomain: "listr-ecbe5.firebaseapp.com",
    databaseURL: "https://listr-ecbe5-default-rtdb.firebaseio.com",
    projectId: "listr-ecbe5",
    storageBucket: "listr-ecbe5.appspot.com",
    messagingSenderId: "1053803065760",
    appId: "1:1053803065760:web:29af2fe7d51eb3a18f74c5",
    measurementId: "G-T8G6VVEM5H"
};
if (!firebase.apps.length) {firebase.initializeApp(firebaseConfig)};

const db = firebase.firestore()
const chatRef = db.collection('messages')   

function MessagesScreen() {
    const [user, setUser] = useState(user)
    const [name, setName] = useState('')
    const [messages, setMessages] = useState([])

    useEffect(() => {
        readUser()
        const unsubscribe2 = onAuthStateChange(setUser);
        const unsubscribe = chatRef.onSnapshot(querySnapshot => {
            const messagesFirestrore = querySnapshot
                .docChanges()
                .filter(({type}) => type == 'added')
                .map(({doc}) => {
                    const message = doc.data()
                    return { ...message, createdAt: message.createdAt.toDate()}
                }).sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
            appendMessages(messagesFirestrore)
        })
        return () => unsubscribe(), unsubscribe2()

    }, [])


    const appendMessages = useCallback((messages)=> {
        setMessages((previousMessages) => GiftedChat.append(previousMessages, messages))
    }, [messages])


    async function handleSend(messages) {
        const writes = messages.map(m => chatRef.add(m))
        await Promise.all(writes)
    }

    async function readUser() {
        const user = await AsyncStorage.getItem('user')
        if (user) {
            setUser(JSON.parse(user))
        }
    }

    function onAuthStateChange(callback) {
        return firebase.auth().onAuthStateChanged(user => {
          if (user) {
            callback({loggedIn: true});
          } else {
            callback({loggedIn: false});
          }
        });
      }
      

    if(!user) {
        return (
            <View>
                <Text>SIGN IN</Text>
            </View>
        )   
    }

    return (
        <GiftedChat messages={messages} user={user} onSend={handleSend}/> 
    ) 
}

export default MessagesScreen;
