import React from 'react';
import { View, Text, SafeAreaView, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import BarberHeader from '../../../Components/BarberHeader';
import { Images } from '../../../Constant/Images';
import { normalize, scaleHeight, scaleWidth } from '../../../Constant/DynamicSize';
import OrderList from '../../../Components/OrderList';
import { Routes } from '../../../Constant/Routes';
import { FONTS } from '../../../Constant/fonts';
const style = StyleSheet.create({
    scrollContainer: {
        marginTop: scaleHeight(30),
        height: '100%'
    },
    backbutton: {
        marginLeft: scaleWidth(16)
    },
    timerConatiner: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    mainContainer: {
        marginLeft: scaleWidth(16)
    },
    customerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: scaleWidth(16),
        marginTop: scaleHeight(15)
    },
    textConatiner: {
        padding: scaleHeight(10),
        borderRadius: scaleHeight(5)
    },
    textDesign: {
        fontSize: normalize(12),
        fontFamily: FONTS.MontserratMedium
    },
    customertext: {
        fontFamily: FONTS.MontserratSemiBold,
        fontSize: normalize(14)
    },
    sallonName:{
        
    }
})
const SaloonDetailsPage = ({ navigation }) => {
    return (
        <SafeAreaView>
            <BarberHeader />
            <ScrollView style={style.scrollContainer}>
                <TouchableOpacity>
                    <Image source={Images.BackBuuton} style={style.backbutton} />
                </TouchableOpacity>
                <View style={style.mainContainer}>
                    <Text style={style.sallonName}>Saloon Name</Text>
                    <View style={style.timerConatiner}>
                        <Image source={Images.Timer} />
                        <Text>25, Feb, 2023 | Sat | 09:00 AM </Text>
                    </View>
                </View>
                <OrderList />
                <View style={style.customerStyle}>
                    <Text style={style.customertext}>Recent Customers</Text>
                    <TouchableOpacity onPress={() => navigation.navigate(Routes.SaloonAddCustomer)} style={[style.textConatiner, { backgroundColor: 'white' }]}>
                        <Text style={[style.textDesign, {}]}>Add Cust + </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate(Routes.SaloonCustomerList)} style={[style.textConatiner, { backgroundColor: '#022A6D' }]}>
                        <Text style={[style.textDesign, { color: 'white' }]}>Show More</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default SaloonDetailsPage;