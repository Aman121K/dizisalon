import React from 'react';
import { View, Text, SafeAreaView, ScrollView, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import AuthHeader from '../../../Components/AuthHeader';
import { normalize, scaleHeight, scaleWidth } from '../../../Constant/DynamicSize';
import InnerTexttInput from '../../../Components/InnerTextInput';
import ButtonBlue from '../../../Components/Button_Blue';
import { FONTS } from '../../../Constant/fonts';
const style = StyleSheet.create({
    mainConatiner: {
        marginTop: scaleHeight(30),
        height: '100%'
    },
    zipConatiner: {
        flexDirection: 'row'
    },
    serviceProvideConatiner: {
        marginLeft: scaleWidth(16),
        marginTop: scaleHeight(10)
    },
    buttonStyle: {
        alignSelf: 'center',
        marginTop: scaleHeight(20)
    },
    addCustomerText: {
        fontSize: normalize(15),
        fontFamily: FONTS.MontserratSemiBold,
        marginLeft: scaleWidth(16),
        color: 'black',
        marginTop: scaleHeight(10)
    }
})
const SaloonAddCustomer = ({ navigation }) => {
    return (
        <SafeAreaView>
            <AuthHeader backbutton={true} navigation={navigation} />
            <ScrollView style={style.mainConatiner}>
                <Text style={{ alignSelf: 'center' }}>For Next Appointment will Book</Text>
                <Text style={style.addCustomerText}>Add Customer</Text>
                <InnerTexttInput placeholderText="Customer Name*" />
                <InnerTexttInput placeholderText="Customer Phone Number*" />
                <InnerTexttInput placeholderText="Customer E-Mail" />
                <InnerTexttInput placeholderText="Customer Address" />
                <InnerTexttInput placeholderText="Satate" />
                <View style={style.zipConatiner}>
                    <InnerTexttInput placeholderText="City*" />
                    <InnerTexttInput placeholderText="Zip Code*" />
                </View>
                <View style={style.serviceProvideConatiner}>
                    <Text>Services Provided by Barber</Text>
                    <FlatList />
                    <TouchableOpacity>
                        <Text>Add Services + </Text>
                    </TouchableOpacity>
                </View>
                <InnerTexttInput placeholderText="Barber Name*" />
                <View style={style.serviceProvideConatiner}>
                    <Text>Customer Name</Text>
                    <FlatList />
                    <TouchableOpacity>
                        <Text>Select + </Text>
                    </TouchableOpacity>
                </View>
                <View style={style.buttonStyle}>
                    <ButtonBlue buttonText="Submit" />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default SaloonAddCustomer;