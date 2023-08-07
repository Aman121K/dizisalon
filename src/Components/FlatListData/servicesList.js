import React from "react";
import { Image, StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { Images } from "../../Constant/Images";
import { normalize, scaleHeight, scaleWidth } from "../../Constant/DynamicSize";
const style = StyleSheet.create({
    mainConatiner: {
        flexDirection: 'row',
        backgroundColor: '#022A6D',
        borderRadius: scaleHeight(5),
        padding: scaleHeight(5),
        width: scaleWidth(90),
        margin: 10,
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})
const ServicesList = ({ item, onClick }) => {
    return (
        <View style={style.mainConatiner}>
            <Text style={{ color: 'white', fontSize: normalize(12), flex: 2 }}>{item.name}</Text>
            <TouchableOpacity style={{ height: 20, width: 20, flex: 1 }} onPress={() => onClick(item)}>
                <Text style={{ color: 'white', fontSize: normalize(17) }}>X</Text>
            </TouchableOpacity>
        </View>
    )
}
export default ServicesList;