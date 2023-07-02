import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import InnerTexttInput from '../../../Components/InnerTextInput';
import UserCartHeader from '../../../Components/UserCartHeader';
import { TextConstant } from '../../../Constant/TextConstant';
import { normalize, scaleHeight, scaleWidth } from '../../../Constant/DynamicSize';
import { FONTS } from '../../../Constant/fonts';
const style = StyleSheet.create({
    addressConatiner: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    scrollContainer: {
        height: '100%',
        marginTop: scaleHeight(20)
    },
    buttonConatiner: {
        backgroundColor: '#022A6D',
        marginHorizontal: scaleWidth(12),
        marginTop: scaleHeight(30),
        padding: scaleHeight(10),
        borderRadius: scaleHeight(10),
        width: scaleWidth(200),
    },
    editText: {
        color: 'white',
        textAlign: 'center',
        fontFamily: FONTS.MontserratMedium,
        fontSize: normalize(18)
        // alignSelf:'center'
    }
})
const EditUserScreen = ({navigation}) => {
    return (
        <SafeAreaView>
            <UserCartHeader navigation={navigation} title="Edit User Details and Submit" />
            <ScrollView style={style.scrollContainer}>
                <InnerTexttInput placeholderText="Name*" />
                <InnerTexttInput placeholderText="Email Address*" />
                <InnerTexttInput placeholderText="Address*" />
                <InnerTexttInput placeholderText="Address*" />
                <View style={style.addressConatiner}>
                    <InnerTexttInput placeholderText="City*" />
                    <InnerTexttInput placeholderText="Zip Code*" />
                </View>
                <View style={style.addressConatiner}>
                    <InnerTexttInput placeholderText="DD/MM/YYYY*" />
                    <InnerTexttInput placeholderText="Gender*" />
                </View>
                <TouchableOpacity style={style.buttonConatiner}>
                    <Text style={style.editText}>Edit & Update</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>

    )
}
export default EditUserScreen;