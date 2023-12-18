import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { Images } from '../../Constant/Images';
import { FONTS } from '../../Constant/fonts';
import { normalize, scaleHeight, scaleWidth } from '../../Constant/DynamicSize';
import { Routes } from '../../Constant/Routes';
const style = StyleSheet.create({
    mainConatiner: {
        marginTop: scaleHeight(20),
        backgroundColor: 'white',
        padding: scaleHeight(10),
        borderRadius: scaleHeight(5)
    },
    saloonconatiner: {
        flexDirection: 'row',
        alignItems: 'center',
        width: scaleWidth(170)
    },
    textSTyle: {
        fontFamily: FONTS.MontserratMedium,
        fontSize: normalize(13),
        color: '#022A6D',
        marginLeft: scaleWidth(12)
    },
    rowConatiner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: scaleHeight(10)
    },
    viewconatiner: {
        backgroundColor: '#022A6D',
        padding: scaleHeight(10),
        borderRadius: scaleHeight(10)
    },
    textSTyle1: {
        color: 'white'
    }
})
const SaloonDetailsHome = ({ navigation }) => {

    return (
        <View style={style.mainConatiner}>
            <View style={style.rowConatiner}>
                <View style={style.saloonconatiner}>
                    <Image source={Images.SaloonIcon} />
                    <Text style={style.textSTyle}>Salon Details</Text>
                </View>
                <TouchableOpacity style={style.viewconatiner} onPress={() => navigation.navigate(Routes.SaloonDetailsPage)}>
                    <Text style={style.textSTyle1}>View More</Text>
                </TouchableOpacity>
            </View>
            <View style={style.rowConatiner}>
                <View style={style.saloonconatiner}>
                    <Image source={Images.BarberIcon} />
                    <Text style={style.textSTyle}>Barbers: 5</Text>
                </View>
                <View style={style.saloonconatiner}>
                    <Image source={Images.CustomerIcon} />
                    <Text style={style.textSTyle}>Customers: 105</Text>
                </View>
            </View>
            <View style={style.rowConatiner}>
                <View style={style.saloonconatiner}>
                    <Image source={Images.BarberSales} />
                    <Text style={style.textSTyle}>Sale: 5000 ₹</Text>
                </View>
                <View style={style.saloonconatiner}>
                    <Image source={Images.EDIT} />
                    <Text style={style.textSTyle}>Feedback: 15</Text>
                </View>
            </View>
        </View>
    )
}
export default SaloonDetailsHome;