import firebase from 'firebase';
import { USER_POSTS_STATE_CHANGE, USERS_POSTS_STATE_CHANGE, USERS_DATA_STATE_CHANGE, USER_STATE_CHANGE } from '../constants/index'

export function fetchUser() {
    return ((dispatch) => {
        firebase.firestore()
        .collection("users")
        .doc(firebase.auth().currentUser.uid)
        .get()
        .then((snapshot) => {
            if(snapshot.exists) {
                dispatch({type: USER_STATE_CHANGE, currentUser: snapshot.data()})
            } else {
                alert("DOES NOT EXIST")
            }
        })
    })
}


export function fetchUserPosts() {
    return ((dispatch) => {
        firebase.firestore()
        .collection("posts")
        .doc(firebase.auth().currentUser.uid)
        .collection("userPosts")
        .orderBy("creation", "asc")
        .get()
        .then((snapshot) => {
            let posts = snapshot.docs.map(doc => {
                const data = doc.data();
                const id = doc.id;
                return {id, ...data}
            })
            dispatch({ type: USER_POSTS_STATE_CHANGE, posts})
        })

    })
}

export function fetchUsersPosts(uid) {
    return ((dispatch, getState) => {
        firebase.firestore()
        .collection("posts")
        .doc(firebase.auth().currentUser.uid)
        .collection("userPosts")
        .orderBy("creation", "asc")
        .get()
        .then((snapshot) => {
            const uid = snapshot.query.EP.path.segments[1]
            const user = getState().usersState.users.find(el => el.uid === uid)
            let posts = snapshot.docs.map(doc => {
                const data = doc.data();
                const id = doc.id;
                return {id, ...data, user}
            })
            dispatch({ type: USERS_POSTS_STATE_CHANGE, posts})
        })

    })
}

