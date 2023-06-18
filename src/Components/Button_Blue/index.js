import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const styles = StyleSheet.create({
    btnText:{
        flex:1,
        color:"#fff",
        textAlign:"center",
        fontSize:18,
        lineHeight:20,
        paddingVertical:16,
    }
})

const ButtonBlue = ({buttonText,btnStyle}) => {
  return (
    <View>
      <TouchableOpacity style={btnStyle}>
        <Text style={styles.btnText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ButtonBlue