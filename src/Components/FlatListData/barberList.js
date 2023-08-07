import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { makeMutable } from 'react-native-reanimated';
import { normalize, scaleHeight } from '../../Constant/DynamicSize';
import { FONTS } from '../../Constant/fonts';
import { Routes } from '../../Constant/Routes';
const style = StyleSheet.create({
    mainConatiner: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: scaleHeight(10),
        alignItems: 'center',

    },
    oneConatiner: {
        flex: 1
    },
    secondConatiner: {
        flex: 3
    },
    thirdConatiner: {
        flex: 1
    },
    lastConatiner: {
        flexDirection: 'row',
        marginLeft: scaleHeight(100),
        justifyContent: 'space-evenly',
        marginBottom: scaleHeight(10)
    },
    removeCon: {
        backgroundColor: '#022A6D',
        padding: scaleHeight(5),
        borderRadius: scaleHeight(5),
        alignSelf: 'center'
    },
    removeText: {
        fontSize: normalize(12),
        fontFamily: FONTS.MontserratBold,
        color: 'white',
        paddingHorizontal: scaleHeight(5)
    },
    attentext: {
        fontFamily: FONTS.MontserratMedium,
        fontSize: normalize(16),
        color: 'green'
    }
})
const barberList = ({ item, navigation }) => {
    console.log("item>", item)
    const goToDetailsPage = (item) => {
        navigation.navigate(Routes.SaloonBarberDetialPage, {data: item })
    }
    return (
        <TouchableOpacity onPress={() => goToDetailsPage(item)} style={{ backgroundColor: 'white', margin: scaleHeight(5), borderRadius: scaleHeight(10), marginHorizontal: scaleHeight(10), marginTop: scaleHeight(10) }}>
            <View style={style.mainConatiner}>
                <View style={style.oneConatiner}>
                    <Image source={item?.image} />
                </View>
                <View style={style.secondConatiner}>
                    <Text>{item?.name}</Text>
                    <Text>{item?.mobile}</Text>
                    <Text>Time: {item.time}</Text>
                </View>

            </View>
            <View style={style.lastConatiner}>
                <Text style={style.attentext}>{item?.attendenaceStatus}</Text>
                <TouchableOpacity style={style.removeCon}>
                    <Text style={style.removeText}>Remove</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}
export default barberList;