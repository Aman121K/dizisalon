import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Images } from '../../Constant/Images';
import { TextConstant } from '../../Constant/TextConstant';
import { normalize, scaleHeight, scaleWidth } from '../../Constant/DynamicSize';
import { FONTS } from '../../Constant/fonts';
const style = StyleSheet.create({
    mainConatiner: {
        backgroundColor: '#022A6D',
        paddingBottom:scaleHeight(20),
        borderBottomLeftRadius:scaleHeight(50),
        borderBottomRightRadius:scaleHeight(50)
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
        color: 'white',
        fontSize: normalize(23),
        fontFamily: FONTS.MontserratSemiBold
    },
    editConatiner: {
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingHorizontal: scaleHeight(10),
        borderRadius: scaleHeight(10),
        paddingVertical: scaleHeight(4),
        alignItems: 'center'
    },
    editText: {
        marginLeft: scaleWidth(5),
        fontSize: normalize(10),
        fontFamily: FONTS.MontserratSemiBold
    },
    loginImage: {
        borderRadius: scaleHeight(99),
        alignSelf: 'center',
        marginTop:scaleHeight(20)
    },
    userDetailsConatiner: {
        alignSelf: 'center'
    },
    nameStyle: {
        textAlign: 'center',
        color:'white',
        marginTop:scaleHeight(7)
    }
})
const UserProfileHeader = ({onEditButtonClick,data}) => {
    return (
        <View style={style.mainConatiner}>
            <View style={style.subMainContainer}>
                <View style={style.backButtonConatiner}>
                    <Image source={Images.BackBuuton} />
                    <Text style={style.profileText}>Profile</Text>
                </View>
                <TouchableOpacity onPress={onEditButtonClick} style={style.editConatiner}>
                    <Image source={Images.EDIT} />
                    <Text style={style.editText}>{TextConstant.EDIT}</Text>
                </TouchableOpacity>
            </View>
            <View style={style.userDetailsConatiner}>
                <Image style={style.loginImage} source={Images.LOGIN_USER_IMAGE} />
                <Text style={style.nameStyle}>{data?.salonOwnerName}</Text>
                <Text style={style.nameStyle}>{data?.email}</Text>
                <Text style={style.nameStyle}>{data?.address ||'Noida'}</Text>
            </View>
        </View>
    )
}
export default UserProfileHeader;