import React from 'react';
import { Text, View, TouchableOpacity, SafeAreaView, ScrollView, Image, StyleSheet, TextInput } from 'react-native';
import UserCartHeader from '../../../Components/UserCartHeader';
import { Images } from '../../../Constant/Images';
import { normalize, scaleHeight, scaleWidth } from '../../../Constant/DynamicSize';
import { FONTS } from '../../../Constant/fonts';
import { TextConstant } from '../../../Constant/TextConstant';
const styles = StyleSheet.create({
    mainConatiner: {

    },
    scrollviewDesign: {
        height: '100%',
    },
    referText: {
        fontSize: normalize(25),
        fontFamily: FONTS.MontserratSemiBold,
        textAlign: 'center',
        color: '#022A6D'
    },
    shareConatiner: {
        marginHorizontal: scaleHeight(16)
    },
    mailSubConatiner: {
        flexDirection: 'row'
    },
    sendBUtton: {
        backgroundColor: '#022A6D',
        padding: scaleHeight(5),
        borderRadius: scaleHeight(5)
    },
    sendStyle: {
        fontSize: normalize(12),
        color: 'white',
        fontFamily: FONTS.MontserratRegular
    },
    shareTextStyle: {
        fontFamily: FONTS.MontserratRegular,
        fontSize: normalize(14),
        lineHeight: scaleHeight(21),
        marginTop: scaleHeight(16),
        marginBottom: scaleHeight(5)
    },
    inputTextStyle: {
        fontFamily: FONTS.MontserratRegular,
        fontSize: normalize(15),
        marginLeft: scaleWidth(10)
    },
    familySubConatiner: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    mailConatiner: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // marginHorizontal: scaleWidth(8)
        borderRadius: scaleHeight(10),
        padding: scaleHeight(10)
    },
})
const SaloonBarberReferAndEarn = ({ navigation }) => {
    return (
        <SafeAreaView>
            <UserCartHeader navigation={navigation} title="Refer & Earn" />
            <ScrollView style={styles.scrollviewDesign}>
                <Image source={Images.Saloonrefer} />
                <Text style={styles.referText}>Refer To Anyone</Text>
                <Text style={styles.referText}>&</Text>
                <Text style={styles.referText}>Get Awesome Gift’s</Text>
                <View style={styles.shareConatiner}>
                    <Text style={styles.shareTextStyle}>{TextConstant.SHARE_EMAIL}</Text>
                    <View style={styles.mailConatiner}>
                        <View style={styles.mailSubConatiner}>
                            <Image source={Images.EMAIL}></Image>
                            <TextInput style={styles.inputTextStyle} placeholder={TextConstant.ENTER_EMAIL} />
                        </View>
                        <TouchableOpacity style={styles.sendBUtton}>
                            <Text style={styles.sendStyle}>{TextConstant.Send}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default SaloonBarberReferAndEarn