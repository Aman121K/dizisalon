import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import UserCartHeader from '../../../Components/UserCartHeader';
import InputBoxComponent from '../../../Components/InputBoxComponent';
import ButtonBlue from '../../../Components/Button_Blue';
import { normalize, scaleHeight, scaleWidth } from '../../../Constant/DynamicSize';
import { FONTS } from '../../../Constant/fonts';
const style = StyleSheet.create({
    mainConatiner: {

    },
    container: {
        alignSelf: 'center',
        // alignItems: 'center',
        marginTop: scaleHeight(20)
    },
    buttonConatiner: {
        marginTop: scaleHeight(20)
    },
    BothText: {
        fontSize: normalize(12),
        fontFamily: FONTS.PoppinsRegular,
        lineHeight: scaleHeight(20)
    }
})
const SaloonChangePassword = ({ navigation }) => {
    const [userDetails, setUserDetails] = React.useState({
        password: '',
        confirmPassword: ''
    })
    const onChnageText = () => {

    }
    return (
        <SafeAreaView>
            <UserCartHeader navigation={navigation} title="New password" />
            <View style={style.container}>
                <Text style={[style.BothText, { textAlign: 'center', marginHorizontal: scaleWidth(30) }]}>Your new password must be different
                    from previous used passwords.</Text>
                <InputBoxComponent label="Password" placeholder="*********" value={userDetails.password} onChnageText={onChnageText} />
                <InputBoxComponent label="Confirm Password" placeholder="************" value={userDetails.confirmPassword} onChnageText={onChnageText} />
                <Text style={style.BothText}>Both password must match.</Text>
                <View style={style.buttonConatiner}>
                    <ButtonBlue buttonText="Reset Password" />
                </View>
            </View>
        </SafeAreaView>
    )
}
export default SaloonChangePassword;