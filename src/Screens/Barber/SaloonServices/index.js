import React from 'react';
import { Text, View, TouchableOpacity, SafeAreaView, Image, StyleSheet, ScrollView } from 'react-native';
import UserSubComponent from '../../../Components/UserSubComponent';
import { Images } from '../../../Constant/Images';
import { normalize, scaleHeight, scaleWidth } from '../../../Constant/DynamicSize';
import { FONTS } from '../../../Constant/fonts';
import { Routes } from '../../../Constant/Routes';
const style = StyleSheet.create({
    mainConatiner: {

    },
    scrollDesign: {
        height: '100%',
    },
    plusButton: {
        backgroundColor: '#022A6D',
        flexDirection: 'row',
        width: scaleWidth(100),
        alignSelf: 'flex-end',
        padding: scaleHeight(5),
        marginHorizontal: scaleWidth(10),
        alignItems: 'center',
        borderRadius: scaleHeight(5),
        marginTop: scaleHeight(10)
    },
    serviceText: {
        color: 'white',
        marginLeft: scaleWidth(5),
        fontSize: normalize(15),
        fontFamily: FONTS.MontserratMedium

    }
})
const SaloonServices = ({ navigation }) => {
    return (
        <SafeAreaView>
            <UserSubComponent navigation={navigation} titel="My Services" />
            <ScrollView>
                <TouchableOpacity onPress={()=>navigation.navigate(Routes.SaloonAddServices)}  style={style.plusButton}>
                    <Image source={Images.AddPlus} />
                    <Text style={style.serviceText}>Service</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}
export default SaloonServices