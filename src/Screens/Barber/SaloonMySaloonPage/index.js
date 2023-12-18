// import React from 'react';
// import { SafeAreaView } from 'react-native';
// const SaloonMySaloonPage=()=>{
//     return(
//         <SafeAreaView>

//         </SafeAreaView>
//     )
// }
// export default SaloonMySaloonPage;

import React from "react";
import { View, SafeAreaView, Text, StyleSheet, ScrollView, Image } from 'react-native';
import AuthHeader from "../../../Components/AuthHeader";
import { normalize, scaleHeight, scaleWidth } from "../../../Constant/DynamicSize";
import UserSubComponent from "../../../Components/UserSubComponent";
import { Images } from "../../../Constant/Images";
import { FONTS } from "../../../Constant/fonts";
import SaloonBgConatiner from "../../../Components/SaloonBgContainer";
import { Routes } from "../../../Constant/Routes";
const style = StyleSheet.create({
    conatiner: {
        marginTop: scaleHeight(40),
        height: '100%'
    },
    saloonConatiner: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: scaleWidth(16)
    },
    saloonText: {
        fontFamily: FONTS.MontserratSemiBold,
        fontSize: normalize(15),
        marginLeft: scaleWidth(10)
    },
    SaloonDetailContainer: {
        flexDirection: 'row'
    }
})
const SaloonMySaloonPage = ({ navigation }) => {
    const onClick = (key) => {
        console.log('key>>', key)
        switch (key) {
            case 'Barbers':
                navigation.navigate(Routes.SaloonBarberList)
                break;
            case 'Customers':
                navigation.navigate(Routes.SaloonCustomerList)
                break;
            case 'Feedback':
                navigation.navigate(Routes.SaloonFeedback)
                break;
            case 'Sales':
                navigation.navigate(Routes.SaloonSales)
            default:
                break;
        }
    }
    return (
        <SafeAreaView>
            <UserSubComponent navigation={navigation} titel="My Salon" />
            <ScrollView style={style.conatiner}>
                <View style={style.saloonConatiner}>
                    <Image source={Images.SaloonIcon} />
                    <Text style={style.saloonText}>Salon Details</Text>
                </View>
                <View style={style.SaloonDetailContainer}>
                    <SaloonBgConatiner onClick={onClick} bgImage={Images.BarberBG} normaImage={Images.BarberIcon} text="Barbers" Count={5} />
                    <SaloonBgConatiner onClick={onClick} bgImage={Images.CustomerBg} normaImage={Images.CustomerIcon} text="Customers" Count={5} />
                </View>
                <View style={style.SaloonDetailContainer}>
                    <SaloonBgConatiner onClick={onClick} bgImage={Images.SalesBG} normaImage={Images.CustomerIcon} text="Sales" Count={5} />
                    <SaloonBgConatiner onClick={onClick} bgImage={Images.FeedBackBg} normaImage={Images.EDIT} text="Feedback" Count={5} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default SaloonMySaloonPage;