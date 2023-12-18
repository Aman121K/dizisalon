import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { StylesContants } from '../../Constant/StylesContants'
import { normalize, scaleHeight, scaleWidth } from '../../Constant/DynamicSize'

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: scaleHeight(10),
    // size:scaleWidth(248)
  },
  inputField: {
    height: scaleHeight(50),
    borderWidth: scaleHeight(2),
    padding: scaleHeight(10),
    borderColor: "#CECECE",
    borderRadius: scaleHeight(12),
    color: "#6C6C6C",
    fontSize: normalize(16),
    paddingLeft: scaleWidth(22),
    // width:scaleHeight(248)
  }
})

const InputBoxComponent = ({ label, keyboardType, placeholder, secure, value, onChnageText, size, name, limit }) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={StylesContants.auth_screen_label}>{label}</Text>
      <TextInput maxLength={limit} style={[styles.inputField, { width: size ? size : scaleWidth(330) }]} placeholder={placeholder} value={value} onChangeText={(e) => onChnageText(e, name)} keyboardType={keyboardType} secureTextEntry={secure} />
    </View>

  )
}

export default InputBoxComponent