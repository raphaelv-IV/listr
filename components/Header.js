import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


const Header = props => {
    return (
        <View style={styles.head}>
        </View>
    )
}

const styles = StyleSheet.create ({
    head: {
        backgroundColor: 'black',
        height: 100,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 35,
    }
});


export default Header;

