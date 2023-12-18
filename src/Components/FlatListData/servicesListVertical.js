import React from "react";
import { Image, StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { Images } from "../../Constant/Images";
import { scaleHeight, scaleWidth } from "../../Constant/DynamicSize";
const style = StyleSheet.create({
    mainConatiner: {
        flexDirection: 'row',
        justifyContent:'space-evenly',
        marginTop:scaleHeight(10)
    },
    nameConatiner: {
        backgroundColor: '#022A6D',
        borderRadius: scaleHeight(5),
        padding: scaleHeight(5),
        width: scaleWidth(100)
    },
    priceConatiner: {
        borderRadius: scaleHeight(5),
        padding: scaleHeight(5),
        width: scaleWidth(100),
        borderWidth: 1,
        borderColor: '#022A6D'
    },
    timeConatiner: {
        borderRadius: scaleHeight(5),
        padding: scaleHeight(5),
        width: scaleWidth(100),
        borderWidth: 1,
        borderColor: '#022A6D'
    }

})
const ServicesListVertical = ({ item, onClick }) => {
    return (
        <View style={style.mainConatiner}>
            <View style={style.nameConatiner}>
                <Text style={{color:'white',alignSelf:'center'}}>{item?.name}</Text>
            </View>
            <View style={style.priceConatiner}>
                <Text style={{alignSelf:'center'}}>{item?.price}</Text>
            </View>
            <View style={style.priceConatiner}>
                <Text style={{alignSelf:'center'}}>{item?.time}</Text>
            </View>
        </View>
    )
}
export default ServicesListVertical;