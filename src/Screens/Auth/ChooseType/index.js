import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import AuthHeader from '../../../Components/AuthHeader';
import { Images } from '../../../Constant/Images';
import { scaleHeight, scaleWidth } from '../../../Constant/DynamicSize';
import SaloonType from '../../../Components/SallonTypeButton';
import { TextConstant } from '../../../Constant/TextConstant';
import { Routes } from '../../../Constant/Routes';
const Styles = StyleSheet.create({
    mainConainer: {

    },
    sallonTypeImage: {
        marginHorizontal: scaleWidth(60.5)
    },
    saloonTypes: {
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: scaleHeight(60)
    }
})
const ChooseType = ({ navigation }) => {
    const onClick = (text) => {
        switch (text) {
            case TextConstant.FOR_SALOON:
                navigation.navigate(Routes.Barber)
                break;
            case TextConstant.FOR_USER:
                navigation.navigate(Routes.User)
                break;
            default:
                break;
        }
    }
    return (
        <View>
            <AuthHeader backbutton={true} />
            <Image source={Images.SALOON_TYPES} style={Styles.sallonTypeImage} />
            <View style={Styles.saloonTypes}>
                <SaloonType level={TextConstant.FOR_SALOON} image={Images.SALOON_TYPE} onClick={onClick} />
                <SaloonType level={TextConstant.FOR_USER} image={Images.USER_TYPE} onClick={onClick} />
            </View>
        </View>
    )

}
export default ChooseType;