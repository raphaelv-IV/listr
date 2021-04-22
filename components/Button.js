import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Button = ({ title, title2, onPress }) => {
    return (
      <View style={styles.btncon}>
        <TouchableOpacity onPress={onPress}>
          <View style={styles.button}>
              <Text style={styles.btntxt}>{title}</Text>
          </View>
        </TouchableOpacity>
      </View>   
    )
}



const styles = StyleSheet.create ({
    btncon: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'

    },
    button: {
        borderRadius: 8,
        paddingVertical: 15,
        paddingHorizontal: 10,
        backgroundColor: 'rgba(180, 180, 180, 0.4)',
        width: 350,
        marginVertical: 15
    },
    btntxt: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: 'center'
    }

});

export default Button;