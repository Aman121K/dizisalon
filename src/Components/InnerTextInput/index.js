import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { scaleHeight, scaleWidth } from '../../Constant/DynamicSize';
const style = StyleSheet.create({
    mainConatiner: {
        borderWidth: 1,
        borderColor: '#9B9B9B',
        marginHorizontal: scaleWidth(12),
        padding: scaleHeight(10),
        borderRadius: scaleHeight(10),
        marginTop: scaleHeight(10)
    },
    InputStyle: {
        // width: 
    }
})
const InnerTexttInput = ({ placeholderText, value, onChange }) => {
    return (
        <View style={style.mainConatiner}>
            <TextInput style={style.InputStyle} placeholder={placeholderText} onChangeText={onChange} value={value} />
        </View>
    )
}
export default InnerTexttInput