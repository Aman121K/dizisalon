import React from 'react';
import { Platform, StyleSheet, TextInput, View } from 'react-native';
import { scaleHeight, scaleWidth } from '../../Constant/DynamicSize';
const style = StyleSheet.create({
    mainConatiner: {
        borderWidth: 1,
        borderColor: '#9B9B9B',
        marginHorizontal: scaleWidth(12),
        padding: scaleHeight(Platform.OS === 'android' ? 3 : 10),
        borderRadius: scaleHeight(10),
        marginTop: scaleHeight(15),
        height:45
    },
    InputStyle1: {
        width: scaleWidth(120)
    },
    InputStyle:{

    }
})
const InnerTexttInput = ({ placeholderText, value, onChange, width }) => {
    return (
        <View style={style.mainConatiner}>
            {width ?
                <TextInput style={style.InputStyle1} placeholder={placeholderText} onChangeText={onChange} value={value} /> :
                <TextInput style={style.InputStyle} placeholder={placeholderText} onChangeText={onChange} value={value} />}
        </View>
    )
}
export default InnerTexttInput