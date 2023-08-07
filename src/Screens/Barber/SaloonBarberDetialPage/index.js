import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, Linking } from 'react-native';
import UserCartHeader from '../../../Components/UserCartHeader';
import { normalize, scaleHeight, scaleWidth } from '../../../Constant/DynamicSize';
import { FONTS } from '../../../Constant/fonts';
import QRCode from 'react-native-qrcode-svg';
import ButtonBlue from '../../../Components/Button_Blue';
import { Images } from '../../../Constant/Images';
import { Routes } from '../../../Constant/Routes';
const style = StyleSheet.create({
    mainConatiner: {
        backgroundColor: 'white',
        padding: scaleHeight(10),
        backgroundColor: 'white',
        flexDirection: 'row'
    },
    oneConatiner: {
        flex: 1
    },
    secondConatiner: {
        flex: 3
    },
    thirdConatiner: {
        flex: 1
    },
    lastConatiner: {
        // flexDirection: 'row',
        // marginLeft: scaleHeight(100),
        // justifyContent: 'space-evenly',
        // marginBottom: scaleHeight(10)
        alignItems: 'center'
    },
    removeCon: {
        backgroundColor: '#022A6D',
        padding: scaleHeight(5),
        borderRadius: scaleHeight(5),
        alignSelf: 'center',
        marginTop: 10
    },
    removeText: {
        fontSize: normalize(12),
        fontFamily: FONTS.MontserratBold,
        color: 'white',
        paddingHorizontal: scaleHeight(5)
    },
    attentext: {
        fontFamily: FONTS.MontserratMedium,
        fontSize: normalize(16),
        color: 'green'
    },
    barberContainer: {
        flexDirection: 'row',
        marginLeft: scaleWidth(50),
        marginTop: scaleHeight(10)
    },
    headline: {
        fontFamily: FONTS.MontserratMedium,
        fontSize: normalize(15)
    },
    barberDetails: {
        flexDirection: 'row',
        marginLeft: scaleWidth(20)
    },
    barberDetails1: {
        flexDirection: 'row',
        marginLeft: scaleWidth(20),
        justifyContent: 'space-evenly',
        marginTop: scaleHeight(20)
    },
    barberDetails2: {
        flexDirection: 'row',
        marginLeft: scaleWidth(20),
        backgroundColor: '#022A6D',
        borderRadius: scaleHeight(10),
        padding: scaleHeight(5),
        width: scaleWidth(100),

    },
    barberDetails3: {
        borderColor: '#022A6D',
        borderRadius: scaleHeight(10),
        padding: scaleHeight(5),
        borderWidth: 2,
        width: scaleWidth(100),
        alignItems: 'center'
    },
    barberDetailsbutton: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: scaleHeight(20)
    },
    attendance: {
        backgroundColor: 'red',
        marginHorizontal: scaleWidth(30),
        alignItems: 'center',
        padding: scaleHeight(5),
        borderRadius: scaleHeight(10),
        marginTop: scaleHeight(10),
        marginBottom: scaleHeight(20)
    }
})
const SaloonBarberDetialPage = ({ navigation, route }) => {
    const item = route?.params?.data;
    console.log(item)
    const onClickPhone = () => {
        let phoneNumber = '9592704535';
        Linking.openURL(`tel:${phoneNumber}`)
    }
    const onEditClick = () => {
        navigation.navigate(Routes.BarberEditPage)
    }
    return (
        <View>
            <UserCartHeader navigation={navigation} title="Barber Details" />
            <View style={{ backgroundColor: 'white', borderRadius: 10, width: '95%', alignSelf: 'center' }}>
                <View style={style.mainConatiner}>
                    <View style={style.oneConatiner}>
                        <Image source={item?.image} />
                    </View>
                    <View style={style.secondConatiner}>
                        <Text>{item?.name}</Text>
                        <Text>{item?.mobile}</Text>
                        <Text>Hair Cutting</Text>
                    </View>
                    <View style={style.lastConatiner}>
                        <QRCode
                            value='some string value'
                            color={'#2C8DDB'}
                            backgroundColor={'white'}
                            size={50}
                            // logo={require('../../../embed_logo_file_path')} // or logo={{ uri: base64logo }}
                            logoMargin={2}
                            logoSize={20}
                            logoBorderRadius={10}
                            logoBackgroundColor={'transparent'}
                        />
                        <TouchableOpacity style={style.removeCon}>
                            <Text style={style.removeText}>Remove</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={style.barberDetails}>
                    <View style={style.heads}>
                        <Text style={style.headline}>Barber Name</Text>
                        <Text style={style.headline}>Phone Number</Text>
                        <Text style={style.headline}>Address</Text>
                        <Text>Available Time</Text>

                    </View>
                    <View style={style.values}>
                        <Text>:- {item?.name}</Text>
                        <Text>:- {item?.mobile}</Text>
                        <Text>:- XYZ rest house morinda</Text>
                        <Text>09:00 AM To 09:00PM</Text>
                    </View>
                </View>
                <View style={style.barberDetails1}>
                    <View>
                        <Text>Service Name</Text>
                    </View>
                    <View>
                        <Text>Price</Text>
                    </View>
                    <View>
                        <Text>Time</Text>
                    </View>
                </View>
                <View style={style.barberDetailsbutton}>
                    <TouchableOpacity onPress={() => onEditClick()} style={style.barberDetails2}>
                        <Image source={Images.EDIT} style={{ tintColor: 'white', marginLeft: scaleWidth(10) }} />
                        <Text style={{ color: 'white', alignSelf: 'center', marginLeft: scaleWidth(10) }}>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onClickPhone()} style={style.barberDetails3}>

                        <Text>Call Now</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={style.attendance}>
                    <Text style={{ color: 'white', fontFamily: FONTS.MontserratMedium, fontSize: normalize(20) }}>{item?.attendenaceStatus}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default SaloonBarberDetialPage