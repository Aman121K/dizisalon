import React from 'react';
import { Text, View, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { normalize, scaleHeight, scaleWidth } from '../../Constant/DynamicSize';
import { FONTS } from '../../Constant/fonts';
import { Routes } from '../../Constant/Routes';
const style = StyleSheet.create({
    mainConatiner: {
        backgroundColor: 'white',
        marginHorizontal: scaleWidth(16),
        marginTop: scaleHeight(10),
        flexDirection: 'row',
        borderRadius: scaleHeight(10),
        padding: scaleHeight(2)
        // alignItems:'center'
    },
    ImageStyle: {
        height: 100,
        width: 100,
        borderRadius: scaleHeight(10)
    },
    BarberConatiner: {
        flexDirection: 'row',
        marginHorizontal: scaleWidth(14),
        marginTop: scaleHeight(10)
    },
    barberStatus: {
        backgroundColor: '#022A6D',
        padding: scaleHeight(5),
        borderRadius: scaleHeight(5)
    },
    statusText: {
        color: 'white',
        fontSize: normalize(12),
        fontFamily: FONTS.MontserratSemiBold
    },
    barberName: {
        fontSize: normalize(14),
        fontFamily: FONTS.MontserratRegular,
        color: '#2D2D2D'
    },
    barberContact: {
        fontSize: normalize(12),
        fontFamily: FONTS.MontserratRegular,
        color: '#818181'
    },
    priceContainer: {
        marginLeft: scaleWidth(70),
        alignItems: 'center'
    },
    headerConatiner: {
        flexDirection: 'row',
        marginHorizontal: scaleWidth(16),
        justifyContent: 'space-between'
    }

})
const BarberRateList = ({ barberList, navigation, showHeader }) => {
    const renderItem = ({ item }) => {
        console.log("item,,", item)
        return (
            <TouchableOpacity onPress={()=>navigation.navigate(Routes.SaloonBookingScreen)} style={style.mainConatiner}>
                <View>
                    <Image style={style.ImageStyle} source={item?.barberImage} />
                </View>
                <View style={style.BarberConatiner}>
                    <View>
                        <Text style={style.barberName}>{item?.barberName}</Text>
                        <Text style={style.barberContact}>{item?.barberContactNo}</Text>
                        <Text style={style.barberContact}>{item?.title}</Text>
                    </View>
                    <View style={style.priceContainer}>
                        <Text>{item?.barberRate}</Text>
                        <Text>{item?.duration}</Text>
                        <TouchableOpacity style={style.barberStatus}>
                            <Text style={style.statusText}>{item?.barberStatus}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <View>
            {showHeader && <View style={style.headerConatiner}>
                <Text>Recommended Babers & Services</Text>
                <Text onPress={() => navigation.navigate(Routes.UserRecommendedBarber)}>View More</Text>
            </View>}
            <FlatList
                data={barberList}
                renderItem={renderItem}
            />
        </View>
    )
}
export default BarberRateList;