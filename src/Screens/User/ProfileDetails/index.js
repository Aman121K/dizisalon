import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Images } from '../../../Constant/Images';
import { TextConstant } from '../../../Constant/TextConstant';
import { normalize, scaleHeight, scaleWidth } from '../../../Constant/DynamicSize';
import { FONTS } from '../../../Constant/fonts';
import { makeMutable } from 'react-native-reanimated';
import ButtonBlue from '../../../Components/Button_Blue';
import { Routes } from '../../../Constant/Routes';
const style = StyleSheet.create({
    mainConatiner: {
        backgroundColor: '#022A6D',
        paddingBottom: scaleHeight(20),
        borderBottomLeftRadius: scaleHeight(50),
        borderBottomRightRadius: scaleHeight(50)
    },
    subMainContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: scaleWidth(16)
    },
    backButtonConatiner: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    profileText: {
        marginLeft: scaleWidth(12),
        // color: 'white',
        fontSize: normalize(23),
        fontFamily: FONTS.MontserratSemiBold
    },
    editConatiner: {
        flexDirection: 'row',
        backgroundColor: '#022A6D',
        paddingHorizontal: scaleHeight(10),
        borderRadius: scaleHeight(10),
        paddingVertical: scaleHeight(4),
        alignItems: 'center',
        paddingVertical: scaleHeight(5)
    },
    editText: {
        marginLeft: scaleWidth(5),
        fontSize: normalize(10),
        fontFamily: FONTS.MontserratSemiBold,
        color: 'white'
    },
    loginImage: {
        borderRadius: scaleHeight(99),
        alignSelf: 'center',
        marginTop: scaleHeight(20)
    },
    userDetailsConatiner: {
        alignSelf: 'center'
    },
    nameStyle: {
        textAlign: 'center',
        color: 'white',
        marginTop: scaleHeight(7)
    },
    nameConatiner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: scaleWidth(16),
        marginTop: scaleHeight(10),
        padding: scaleHeight(10),
        borderBottomWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.10);'
    },
    titleStyle: {
        fontSize: normalize(18),
        fontFamily: FONTS.MontserratMedium,
        lineHeight: scaleHeight(20)
    },
    valueStyle: {
        fontSize: normalize(14),
        fontFamily: FONTS.MontserratRegular,
        color: '#646464',
        lineHeight: scaleHeight(20)
    },
    scrollConatiner: {
        height: '100%'
    },
    mapConatiner: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
        padding: scaleHeight(15),
        backgroundColor: '#F5F5F5',
        marginTop: scaleHeight(15),
        alignSelf: 'center',
        justifyContent: 'space-between',
        borderRadius: scaleHeight(10)
    },
    mapRightIcon: {
        // marginLeft:scaleWidth(163)
    },
    mapSubConatiner: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    LogoutConatiner: {
        alignSelf: 'center',
        marginTop: scaleHeight(20)
    },
    mapTitle: {
        fontSize: normalize(16),
        fontFamily: FONTS.MontserratMedium,
        lineHeight: scaleHeight(20),
        marginLeft: scaleWidth(10)
    }
})
const data = [
    {
        title: 'MPIN',
        Icon: Images.Key,
    },
    {
        title: 'Notification',
        Icon: Images.NotificatioIcon,
        Right_Icon: Images.ArrowKey

    },
    {
        title: 'Delete My Account',
        Right_Icon: Images.USER_DELETE,
    }
]
const ProfileDetials = ({ navigation }) => {
    const onClick = () => {
        navigation.navigate(Routes.Signin)
    }
    const buttonClick = (value) => {
        switch (value) {
            case 'MPIN':
                navigation.navigate(Routes.ForgotMpin)
                break;
            case 'Notification':
                navigation.navigate(Routes.UserNotification)
                break;
            case 'Delete My Account':

                break;
            default:
                break;
        }
    }
    const onEditButtonClick = () => {
        navigation.navigate(Routes.EditUserScreen)
    }
    return (
        <SafeAreaView>
            <View style={style.subMainContainer}>
                <View style={style.backButtonConatiner}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={Images.BackBuuton} />
                    </TouchableOpacity>
                    <Text style={style.profileText}>My Profile</Text>
                </View>
                <TouchableOpacity onPress={() => onEditButtonClick()} style={style.editConatiner}>
                    <Image source={Images.EDIT} style={{ tintColor: 'white' }} />
                    <Text style={style.editText}>{TextConstant.EDIT}</Text>
                </TouchableOpacity>

            </View>
            <ScrollView style={style.scrollConatiner}>
                <View style={style.nameConatiner}>
                    <Text style={style.titleStyle}>Name</Text>
                    <Text style={style.valueStyle}>Abc Tiwari</Text>
                </View>
                <View style={style.nameConatiner}>
                    <Text style={style.titleStyle}>Email</Text>
                    <Text style={style.valueStyle}>Abc@gmail.com</Text>
                </View>
                <View style={style.nameConatiner}>
                    <Text style={style.titleStyle}>Contact Phone</Text>
                    <Text style={style.valueStyle}>1234567890</Text>
                </View>
                <View style={style.nameConatiner}>
                    <Text style={style.titleStyle}>Contact Phone</Text>
                    <Text style={style.valueStyle}>768 gold city</Text>
                </View>
                <View style={style.nameConatiner}>
                    <Text style={style.titleStyle}>Profile</Text>
                    <Image source={Images.BottomUserIcon} />
                </View>
                {data.map((item, key) => {
                    return (
                        <TouchableOpacity style={style.mapConatiner} onPress={() => buttonClick(item?.title)}>
                            <View style={style.mapSubConatiner}>
                                <Image source={item.Icon} />
                                <Text style={style.mapTitle}>{item?.title}</Text>
                            </View>
                            <Image style={style.mapRightIcon} source={item?.Right_Icon} />
                        </TouchableOpacity>
                    )
                })}
                <View style={style.LogoutConatiner}>
                    <ButtonBlue onClick={onClick} buttonText="Logout" />
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}
export default ProfileDetials