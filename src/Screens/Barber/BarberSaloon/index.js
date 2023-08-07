import React from "react";
import { View, SafeAreaView, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import AuthHeader from "../../../Components/AuthHeader";
import { normalize, scaleHeight, scaleWidth } from "../../../Constant/DynamicSize";
import UserSubComponent from "../../../Components/UserSubComponent";
import { Images } from "../../../Constant/Images";
import { FONTS } from "../../../Constant/fonts";
import SaloonBgConatiner from "../../../Components/SaloonBgContainer";
import BarberHeader from "../../../Components/BarberHeader";
import moment from "moment";
import CircularProgress from "react-native-circular-progress-indicator";
import { Routes } from "../../../Constant/Routes";
import LineChartDesign from "../../../Components/LineChartDesign.js";
const style = StyleSheet.create({
    conatiner: {
        // marginTop: scaleHeight(40),
        height: '100%',
        marginHorizontal: scaleWidth(20)
    },
    nameConatiner: {
        flexDirection: 'row',
        alignItems: 'center',
        // marginLeft:scaleWidth
    },
    clockContainer: {
        flexDirection: 'row'
    },
    dateFormat: {
        fontFamily: FONTS.MontserratMedium,
        fontSize: normalize(14),
        marginLeft: scaleWidth(10)
    },
    saloonName: {
        fontFamily: FONTS.MontserratExtraBold,
        fontSize: normalize(20)
    },
    orderDetailConatiner: {
        backgroundColor: 'white',
        padding: scaleHeight(10),
        borderRadius: 10,
        marginTop: scaleHeight(10)
    },
    salonDs:
        { flexDirection: 'row', justifyContent: 'space-between' },
    textUnderLine: {
        fontFamily: FONTS.MontserratMedium,
        textDecorationLine: 'underline',
        fontSize: normalize(12)
    },
    rntCustomer: {
        fontFamily: FONTS.MontserratMedium,
        fontSize: normalize(15),
    },
    addCustConatiner: {
        backgroundColor: '#022A6D',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center'
    },
    addCustConatiner1: {
        backgroundColor: '#022A6D',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        marginLeft: 5
    },
    rntCustomerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: scaleHeight(10)
    },
    btnText: {
        fontFamily: FONTS.MontserratMedium,
        fontSize: normalize(14),
        color: 'white'
    }


})
const BarberSaloon = ({ navigation }) => {
    const currentDate = moment();

    // Format the date and time as desired
    const formattedDate = currentDate.format('D,MMM, YYYY | ddd | h:mm A');
    return (
        <SafeAreaView>
            <BarberHeader />

            <View style={{ marginTop: scaleHeight(40), marginLeft: scaleHeight(20) }}>
                <Image source={Images.BackBuuton} />
            </View>
            <ScrollView style={style.conatiner}>
                <View style={style.nameConatiner}>
                    <View style={{ flex: 1 }}>
                        <Text style={style.saloonName}>Saloon Name</Text>
                        <View style={style.clockContainer}>
                            <Image source={Images.clock} />
                            <Text style={style.dateFormat}>{formattedDate}</Text>
                        </View>
                    </View>
                    <View style={{ height: 50, width: 50 }}>
                        {/* <CircularProgress size={100}
                            width={10}
                            fill={50}
                            tintColor="#00e0ff"
                            backgroundColor="#3d5875"
                        /> */}
                    </View>

                </View>
                <View style={style.orderDetailConatiner}>
                    <View style={style.salonDs}>
                        <View style={style.nameConatiner}>
                            <Image source={Images.SloonOrder} />
                            <View>
                                <Text style={style.saloonName}>50</Text>
                                <Text style={style.textUnderLine}>Total Order</Text>
                            </View>
                        </View>
                        <View style={style.nameConatiner}>
                            <Image source={Images.saloonPending} />
                            <View>
                                <Text style={style.saloonName}>20</Text>
                                <Text style={style.textUnderLine}>Orders Pending</Text>
                            </View>
                        </View>
                    </View>
                    <View style={style.salonDs}>
                        <View style={style.nameConatiner}>
                            <Image source={Images.SaloonComplete} />
                            <View>
                                <Text style={style.saloonName}>10</Text>
                                <Text style={style.textUnderLine}>Orders complete</Text>
                            </View>
                        </View>
                        <View style={style.nameConatiner}>
                            <Image source={Images.SaloonCancel} />
                            <View>
                                <Text style={style.saloonName}>20</Text>
                                <Text style={style.textUnderLine}>Orders Cancel</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={style.rntCustomerContainer}>
                    <View>
                        <Text style={style.rntCustomer}>Recent Customers</Text>
                    </View>
                    <View style={style.nameConatiner}>
                        <TouchableOpacity onPress={() => navigation.navigate(Routes.SaloonAddCustomer)} style={style.addCustConatiner}>
                            <Text style={style.btnText}>Add cust +</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate(Routes.SaloonCustomerList)} style={style.addCustConatiner1}>
                            <Text style={style.btnText}>Show More</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ alignSelf: 'center', margin: 10 }}>
                    <Text>List of customers</Text>
                </View>
                <LineChartDesign />
            </ScrollView>
        </SafeAreaView>
    )
}
export default BarberSaloon;