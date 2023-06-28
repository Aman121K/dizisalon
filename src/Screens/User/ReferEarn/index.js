import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import UserSubComponent from '../../../Components/UserSubComponent';
import { TextConstant } from '../../../Constant/TextConstant';
import SaloonType from '../../../Components/SallonTypeButton';
import { Images } from '../../../Constant/Images';
import { normalize, scaleHeight, scaleWidth } from '../../../Constant/DynamicSize';
import { FONTS } from '../../../Constant/fonts';
const style = StyleSheet.create(
    {
        profiteConatiner: {
            flexDirection: 'row',
            justifyContent: 'space-evenly'
        },
        refferConatiner: {
            marginHorizontal: scaleWidth(16),
            marginTop: scaleHeight(25),
            fontFamily: FONTS.MontserratSemiBold
        },
        text1: {
            fontSize: normalize(25),
            textAlign: 'center',
            fontFamily: FONTS.MontserratBold,
            color: '#022A6D'
        },
        text2: {
            fontFamily: FONTS.MontserratRegular,
            marginLeft: scaleHeight(20),
            textAlign: 'center',
            fontSize: normalize(25),
            color: '#022A6D'
        },
        text3: {
            fontFamily: FONTS.MontserratRegular,
            marginTop: scaleHeight(10),
            textAlign: 'center',
            fontSize: normalize(25),
            color: '#022A6D'
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
        memberConatiner: {
            backgroundColor: 'white',
            borderRadius: scaleHeight(10),
            padding: scaleHeight(10)
        },
        famiyContainer: {
            marginHorizontal: scaleWidth(16),
            marginTop: scaleHeight(20),
        },
        socialConatiner: {
            marginHorizontal: scaleWidth(16),
            marginTop: scaleHeight(20)
        },
        socialIconConatiner: {
            flexDirection: 'row'
        }
    }
)
const ReferEarn = ({ navigation }) => {
    return (
        <SafeAreaView>
            <UserSubComponent navigation={navigation} titel={TextConstant.REFEREARN} />
            <ScrollView>
                <View style={style.profiteConatiner}>
                    <SaloonType amount="5000" color="#F9ECCA" image={Images.Profit} level={TextConstant.TOTAL_POINTS} />
                    <SaloonType amount="500" color="#CADCF9" image={Images.BottomUsers} level={TextConstant.TOTAL_POINTS} />
                </View>
                <View style={style.refferConatiner}>
                    <Text style={style.text1}>Refer To Anyone</Text>
                    <Text style={style.text2}>&</Text>
                    <Text style={style.text3}>Get Awesome Gift’s</Text>
                </View>
                <View style={style.shareConatiner}>
                    <Text style={style.shareTextStyle}>{TextConstant.SHARE_EMAIL}</Text>
                    <View style={style.mailConatiner}>
                        <View style={style.mailSubConatiner}>
                            <Image source={Images.EMAIL}></Image>
                            <TextInput style={style.inputTextStyle} placeholder={TextConstant.ENTER_EMAIL} />
                        </View>
                        <TouchableOpacity style={style.sendBUtton}>
                            <Text style={style.sendStyle}>{TextConstant.Send}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={style.famiyContainer}>
                    <Text style={style.shareTextStyle}>{TextConstant.SHARE_WITH_FAMILY}</Text>
                    <View style={style.familySubConatiner}>
                        <View style={style.memberConatiner}>
                            <Text>{TextConstant.Member}</Text>
                        </View>
                        <View style={style.memberConatiner}>
                            <TextInput placeholder={TextConstant.Phone_number} />
                        </View>
                        <TouchableOpacity style={style.sendBUtton}>
                            <Text style={style.sendStyle}>{TextConstant.Send}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={style.socialConatiner}>
                    <Text style={style.shareTextStyle}>{TextConstant.SHARE_SOCAIL_TEXT}</Text>
                    <View style={style.socialIconConatiner}>
                        <TouchableOpacity>
                            <Image source={Images.Instagram} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={Images.Facebook} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={Images.Twitter} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={Images.Whatsapp} />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default ReferEarn;