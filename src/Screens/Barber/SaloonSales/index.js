import React from 'react';
import { Image, SafeAreaView, View, Text, StyleSheet } from 'react-native';
import UserSubComponent from '../../../Components/UserSubComponent';
import { Images } from '../../../Constant/Images';
import { normalize, scaleHeight, scaleWidth } from '../../../Constant/DynamicSize';
import { FONTS } from '../../../Constant/fonts';
const style = StyleSheet.create({
    conatiner: {
        backgroundColor: '#DDE4FD',
        alignItems: 'center',
        paddingHorizontal: scaleWidth(40),
        paddingVertical: scaleHeight(5),
        borderRadius: scaleHeight(10)
    },
    conatiner1: {
        backgroundColor: '#FDDDEC',
        alignItems: 'center',
        paddingHorizontal: scaleWidth(40),
        paddingVertical: scaleHeight(5),
        borderRadius: scaleHeight(10)
    },
    totalSalesText: {
        fontFamily: FONTS.MontserratMedium,
        fontSize: normalize(15)
    },
    amountstyle: {
        fontSize: normalize(18),
        fontFamily: FONTS.MontserratBold
    }
})
const SaloonSales = ({ navigation }) => {
    return (
        <SafeAreaView>
            <UserSubComponent navigation={navigation} titel="Sales" />
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: scaleHeight(20) }}>
                <View style={style.conatiner}>
                    <Image source={Images.SalesIcons} />
                    <Text style={style.totalSalesText}>Total Sales</Text>
                    <Text style={style.amountstyle}>50,000 ₹</Text>
                </View>
                <View style={style.conatiner1}>
                    <Image source={Images.SalesIcons} />
                    <Text style={style.totalSalesText}>Total Sales</Text>
                    <Text style={style.amountstyle}>50,000 ₹</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}
export default SaloonSales;