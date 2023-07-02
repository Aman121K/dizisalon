import React from "react";
import { SafeAreaView, StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, Linking } from 'react-native';
import AuthHeader from "../../../Components/AuthHeader";
import CircularProgress from "react-native-circular-progress-indicator";
import { normalize, scaleHeight } from "../../../Constant/DynamicSize";
import { Images } from "../../../Constant/Images";
import { FONTS } from "../../../Constant/fonts";
import { Routes } from "../../../Constant/Routes";
const style = StyleSheet.create({
    mainConatiner: {

    },
    loaderContainer: {
        alignSelf: 'center',
        marginTop: scaleHeight(50),
        // alignItems:'center'
    },
    iconConatiner: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: scaleHeight(50)
    },
    listConatiner: {
        marginTop: scaleHeight(20),
        alignSelf: 'center',
    },
    waitingStyle: {
        fontSize: normalize(20),
        fontFamily: FONTS.MontserratMedium
    },
    BookingAdsConatiner: {
        marginTop: scaleHeight(40)
    }
})
const UserBookingComplete = ({ navigation }) => {
    const openMap = (type) => {
        switch (type) {
            case 'map':
                const url = `https://www.google.com/maps/dir/?api=1&travelmode=driving&destination=`;
                Linking.openURL(url).catch((err) => {
                    showToast(err.message);
                })
                break;
            case 'qrcode':
                navigation.navigate(Routes.UserQrScanner)
                break;
            case 'contact':
                let phoneNumber = '9592704535';
                Linking.openURL(`tel:${phoneNumber}`)
                break;
            case 'refresh':
                refreshPage()
                break;
            default:
                break;
        }

    }
    const refreshPage = () => {
        console.log("refresh the page")
    }
    return (
        <SafeAreaView>
            <AuthHeader backbutton={true} navigation={navigation} />
            <ScrollView style={{ height: '100%' }}>
                <View style={style.loaderContainer}>
                    <View style={{ alignSelf: 'center' }}>
                        <CircularProgress
                            value={97}
                            radius={120}
                            title="Date"
                            inActiveStrokeOpacity={0.5}
                            activeStrokeWidth={15}
                            inActiveStrokeWidth={20}
                            progressValueStyle={{ fontWeight: '100', color: 'white' }}
                            activeStrokeSecondaryColor="yellow"
                            inActiveStrokeColor="black"
                            duration={5000}
                            dashedStrokeConfig={{
                                count: 50,
                                width: 4,
                            }}
                        />
                    </View>
                    <View style={style.listConatiner}>
                        <Text style={style.waitingStyle}>Waiting List # 7</Text>
                    </View>
                    <View style={style.iconConatiner}>
                        <TouchableOpacity onPress={() => openMap('map')}>
                            <Image source={Images.MAP_ICON} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => openMap('qrcode')}>
                            <Image source={Images.QR_SCAN_ICON} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => openMap('contact')}>
                            <Image source={Images.ContactIcon} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => openMap('refresh')}>
                            <Image source={Images.RefreshIcon} />
                        </TouchableOpacity>
                    </View>
                    <View style={style.BookingAdsConatiner}>
                        <Image source={Images.Booking_Ads} />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default UserBookingComplete;