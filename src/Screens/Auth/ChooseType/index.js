import React from 'react';
import { Image, SafeAreaView, StyleSheet, View } from 'react-native';
import AuthHeader from '../../../Components/AuthHeader';
import { Images } from '../../../Constant/Images';
import { scaleHeight, scaleWidth } from '../../../Constant/DynamicSize';
import SaloonType from '../../../Components/SallonTypeButton';
import { TextConstant } from '../../../Constant/TextConstant';
import { Routes } from '../../../Constant/Routes';
import { useDispatch } from 'react-redux';
import { userType } from '../../../redux/action';
const Styles = StyleSheet.create({
    mainConainer: {

    },
    sallonTypeImage: {
        marginHorizontal: scaleWidth(60.5),
        marginTop: scaleHeight(20)
    },
    saloonTypes: {
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: scaleHeight(60)
    }
})
const ChooseType = ({ navigation }) => {
    const dispatch = useDispatch();
    const onClick = (text) => {
        switch (text) {
            case TextConstant.FOR_SALOON:
                dispatch(userType('saloon'))
                navigation.navigate(Routes.Signin, { type: text })
                break;
            case TextConstant.FOR_USER:
                dispatch(userType('user'))
                navigation.navigate(Routes.Signin, { type: text })
                break;
            default:
                break;
        }
    }
    return (
        <SafeAreaView>
            <AuthHeader backbutton={true} navigation={navigation} />
            <Image source={Images.SALOON_TYPES} style={Styles.sallonTypeImage} />
            <View style={Styles.saloonTypes}>
                <SaloonType color="white" level={TextConstant.FOR_SALOON} image={Images.SALOON_TYPE} onClick={onClick} />
                <SaloonType color="white" level={TextConstant.FOR_USER} image={Images.USER_TYPE} onClick={onClick} />
            </View>
        </SafeAreaView>
    )

}
export default ChooseType;