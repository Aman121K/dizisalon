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
    const [password, setPassword] = React.useState();
    const [confirmPassword, setConfirmpassword] = React.useState();
    const onChnageText = (e, name) => {
        console.log("e>>", e, name);
        switch (name) {
            case 'password':
                setPassword(e)
                break;
            case 'confirmPassword':
                setConfirmpassword(e)
                break;
            default:
                break;
        }
    }
    const onClick = async() => {
        let body = {
            pin: confirmPin
        }
        console.log("body is>", body)
        try {
            const response = await fetch(BASE_URL + Apis.CREATE_MPIN, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                },
                body: JSON.stringify(body), 
            });
            const data = await response.json();
            console.log("Create pin data>>", data)
            if (data?.message) {
                navigation.navigate(Routes.Signin)
                Toast.show(data?.message);
            } else {
                clearAllState()
                Toast.show(data?.error)
            }
        } catch (error) {
            Toast.show(error);
        }
    }
    return (
        <SafeAreaView>
            <UserCartHeader navigation={navigation} title="New password" />
            <View style={style.container}>
                <Text style={[style.BothText, { textAlign: 'center', marginHorizontal: scaleWidth(30) }]}>Your new password must be different
                    from previous used passwords.</Text>
                <InputBoxComponent
                    label="Password"
                    name="password"
                    placeholder="*********"
                    value={userDetails.password}
                    onChnageText={onChnageText} />
                <InputBoxComponent
                    label="Confirm Password"
                    name="confirmPassword"
                    placeholder="************"
                    value={userDetails.confirmPassword}
                    onChnageText={onChnageText} />
                <Text style={style.BothText}>Both password must match.</Text>
                <View style={style.buttonConatiner}>
                    <ButtonBlue buttonText="Reset Password" onClick={onClick} />
                </View>
            </View>
        </SafeAreaView>
    )
}
export default SaloonChangePassword;