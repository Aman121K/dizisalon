import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { normalize, scaleHeight } from '../../Constant/DynamicSize'
import { FONTS } from '../../Constant/fonts'

const styles = StyleSheet.create({
  btnText: {
    color: "#fff",
    textAlign: "center",
    fontSize: normalize(16),
    lineHeight: scaleHeight(20),
    paddingVertical: scaleHeight(16),
    fontFamily: FONTS.MontserratSemiBold
  },
  btnStyle: {
    backgroundColor: "#022A6D",
    height: scaleHeight(48),
    borderRadius: scaleHeight(12),
    alignItems: "center"
  }
})

const ButtonBlue = ({ buttonText, onClick }) => {
  return (
    <View>
      <TouchableOpacity style={styles.btnStyle} onPress={onClick}>
        <Text style={styles.btnText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ButtonBlue