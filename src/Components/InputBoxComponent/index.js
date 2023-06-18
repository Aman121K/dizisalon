import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'
import { StylesContants } from '../../Constant/StylesContants'

const styles = StyleSheet.create({
  inputContainer:{
    marginVertical:12
  },
    inputField:{
        height: 50,
        borderWidth: 2,
        padding: 10,
        borderColor:"#CECECE",
        borderRadius:12 ,
        color:"#6C6C6C",
        fontSize:16,
        paddingLeft:22

    }
})

const InputBoxComponent = ({label, keyboardType,placeholder,secure}) => {
  return (
    <View style={styles.inputContainer}> 
      <Text style={StylesContants.auth_screen_label}>{label}</Text>
      <TextInput style={styles.inputField} placeholder={placeholder} keyboardType={keyboardType} secureTextEntry={secure}/>
    </View>

  )
}

export default InputBoxComponent