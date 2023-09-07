import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Images } from '../../../Constant/Images';
import { TextConstant } from '../../../Constant/TextConstant';
import { normalize, scaleHeight, scaleWidth } from '../../../Constant/DynamicSize';
import { FONTS } from '../../../Constant/fonts';
import ButtonBlue from '../../../Components/Button_Blue';
import { Routes } from '../../../Constant/Routes';
import ModalConatiner from '../../../Components/ModalComponent';
import ConfirmModal from '../../../Components/ModalComponent/ConfirmModal';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
        fontSize: normalize(16),
        fontFamily: FONTS.PoppinsRegular,
        lineHeight: scaleHeight(27)
    },
    valueStyle: {
        fontSize: normalize(12),
        fontFamily: FONTS.PoppinsRegular,
        color: '#646464',
        lineHeight: scaleHeight(21)
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
        title: 'Password',
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
const BarberProfileDetails = ({ navigation }) => {
    const [loginData, setLoginData] = React.useState();
    React.useLayoutEffect(() => {
        getLoginData()
    }, [])
    const getLoginData = async () => {
        let data = await AsyncStorage.getItem('loginData');
        console.log("data>>",data)
        if (data) {
            setLoginData(JSON.parse(data))
        }
    }
    const [showModalVisible, setShowModalVisisble] = React.useState(false)
    const onClick = () => {
        navigation.navigate(Routes.Signin)
    }

    const buttonClick = (value) => {
        switch (value) {
            case 'Password':
                navigation.navigate(Routes.SaloonChangePassword)
                break;
            case 'Notification':
                navigation.navigate(Routes.SaloonNotificationLists)
                break;
            case 'Delete My Account':
                setShowModalVisisble(true)
                break;
            default:
                break;
        }
    }
    const onEditButtonClick = () => {
        console.log("vikas")
        navigation.navigate(Routes.SaloonEditProfile)
    }
    const onCancelClick = () => {
        setShowModalVisisble(false)
    }
    const onSubmitClick = () => {
        setShowModalVisisble(false)
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
                    <Text style={style.valueStyle}>{loginData?.salonOwnerName}</Text>
                </View>
                <View style={style.nameConatiner}>
                    <Text style={style.titleStyle}>Salon Name</Text>
                    <Text style={style.valueStyle}>{loginData?.salonName}</Text>
                </View>
                <View style={style.nameConatiner}>
                    <Text style={style.titleStyle}>Contact Email</Text>
                    <Text style={style.valueStyle}>{loginData?.email}</Text>
                </View>
                <View style={style.nameConatiner}>
                    <Text style={style.titleStyle}>Contact Phone</Text>
                    <Text style={style.valueStyle}>{loginData?.phone}</Text>
                </View>
                <View style={style.nameConatiner}>
                    <Text style={style.titleStyle}>Your Addresss</Text>
                    <Text style={style.valueStyle}>{loginData?.address} {loginData?.country}, {loginData?.state}</Text>
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
                <ConfirmModal
                    modalVisible={showModalVisible}
                    onCancelClick={onCancelClick}
                    Icon={Images.ConfirmUser}
                    title="Are you sure?"
                    subTitle="Do you want to Logout “your account”?"
                    buttonText="Yes"
                    onCancelClick={onCancelClick}
                    onSubmitClick={onSubmitClick}
                    closeModal={onCancelClick}
                />
                {/* <ModalConatiner modalVisible={showModalVisible} onCancelClick={onCancelClick}/> */}
            </ScrollView>

        </SafeAreaView>
    )
}
export default BarberProfileDetails

// import React from 'react';
// import { View, Text } from 'react-native';
// const BarberProfileDetails = () => {
//     return (
//         <View>
//             <Text>Text</Text>
//         </View>
//     )
// }
// export default BarberProfileDetails;