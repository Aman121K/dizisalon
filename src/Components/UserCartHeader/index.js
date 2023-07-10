import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Images } from '../../Constant/Images';
import { TextConstant } from '../../Constant/TextConstant';
import { normalize, scaleHeight, scaleWidth } from '../../Constant/DynamicSize';
import { FONTS } from '../../Constant/fonts';
import { Routes } from '../../Constant/Routes';
const style = StyleSheet.create({
    mainConatiner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: scaleWidth(16),
        alignItems: 'center'
    },
    backButtonConatiner: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    AddServiceConatiner: {
        backgroundColor: '#022A6D',
        padding: scaleHeight(10),
        borderRadius: scaleHeight(10)
    },
    addServiceText: {
        color: 'white',
        fontSize: normalize(16),
        fontFamily: FONTS.MontserratRegular,
    },
    cartTextStyle: {
        fontFamily: FONTS.MontserratBold,
        fontSize: normalize(25),
        marginLeft: scaleWidth(17)
    }
})
const UserCartHeader = ({ title, addButton, navigation, addSetting }) => {
    return (
        <View style={style.mainConatiner}>
            <View style={style.backButtonConatiner}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={Images.BackBuuton} />
                </TouchableOpacity>
                <Text style={style.cartTextStyle}>{title}</Text>
            </View>
            {addButton &&
                <TouchableOpacity style={style.AddServiceConatiner}>
                    <Text style={style.addServiceText}>{TextConstant.ADD_SERVICES}</Text>
                </TouchableOpacity>
            }
            {
                addSetting &&
                <TouchableOpacity onPress={()=>navigation.navigate(Routes.SaloonNotification)}>
                    <Image source={Images.SEARCH_ICON}/>
                </TouchableOpacity>
            }
        </View>
    )
}
export default UserCartHeader;