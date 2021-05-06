import firebase from 'firebase';
import { USER_POSTS_STATE_CHANGE, USERS_POSTS_STATE_CHANGE, USERS_DATA_STATE_CHANGE, USER_STATE_CHANGE } from '../constants/index'

export function fetchUser() {
    return ((dispatch) => {
        firebase.firestore()
        .collection("user")
        .doc(firebase.auth().currentUser.uid)
        .get()
        .then((snapshot) => {
            if(snapshot.exists) {
                dispatch({type: USER_STATE_CHANGE, currentUser: snapshot.data()})
            } else {
                console.log("does not exist")
            }
        })
    })
}

export function fetchUserPosts() {
    return ((dispatch) => {
        firebase.firestore()
        .collection("posts")
        .doc(firebase.auth().currentUser.uid)
        .collection("usersPosts")
        .orderBy("creation", "asc")
        .get()
        .then((snapshot) => {
            let posts = snapshot.docs.map(doc => {
                const data = doc.data();
                const id = doc.id;
                return {id, ...data}
            })
            console.log(posts)
            dispatch({type: USER_POSTS_STATE_CHANGE, posts})
        })
    })
}


export function fetchUsersData(uid) {
    return((dispatch, getState) => {
        const found = getState().usersState.users.some(el => el.uid === uid)
        if (!found) {
            firebase.firestore()
            .collection("user")
            .doc(uid)
            .get()
            .then((snapshot) => {
                if (snapshot.exists) {
                    let user = snapshot.data()
                    user.uid = snapshot.id;
                    dispatch({type: USERS_DATA_STATE_CHANGE, user})
                } else {
                    console.log("does not exist")
                }
            })
        }
    })
}



