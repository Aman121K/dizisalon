import React from "react";
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import UserSubComponent from "../../../../Components/UserSubComponent";
import InnerTexttInput from "../../../../Components/InnerTextInput";
import { normalize, scaleHeight, scaleWidth } from "../../../../Constant/DynamicSize";
import { FONTS } from "../../../../Constant/fonts";
// import OTPInputView from "@twotalltotems/react-native-otp-input";
import ServiceModal from "../../../../Components/ModalComponent/serviceModal";
import ButtonBlue from "../../../../Components/Button_Blue";
const style = StyleSheet.create({
    sendButton: {
        backgroundColor: '#022A6D',
        padding: scaleHeight(10),
        borderRadius: scaleHeight(10),
        marginTop: scaleHeight(30)
    },
    underlineStyleBase: {
        width: scaleWidth(45),
        height: scaleHeight(45),
        borderWidth: 1,
        borderColor: '#CECECE',
        borderRadius: scaleWidth(12)
        // borderBottomWidth: 1,
    },
    scrollstyle: {
        height: '100%'
    },
    logoConatiner: {
        backgroundColor: 'white',
        padding: scaleHeight(5),
        marginTop: scaleHeight(10),
        borderRadius: scaleHeight(5),
        marginHorizontal: scaleWidth(16)
    },
    selectText: {
        color: 'white',
        textAlign: 'center',
        fontFamily: FONTS.MontserratRegular,
        fontSize: normalize(12)
    },
    noSelectedtext: {
        color: '#6F6F6F',
        textAlign: 'center',
        fontFamily: FONTS.MontserratRegular,
        fontSize: normalize(12),
        marginLeft: scaleWidth(20)
    },
    selectConatiner: {
        backgroundColor: '#022A6D',
        borderRadius: scaleHeight(5),
        padding: scaleHeight(5),
        width: scaleWidth(100)
    },
    serviceProvideConatiner: {
        marginLeft: scaleWidth(16),
        marginTop: scaleHeight(10),
    },
    buttonStyle: {
        alignSelf: 'center',
        marginTop: scaleHeight(20),
        marginBottom: scaleHeight(50)
    },
    itemConatiner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: scaleWidth(20),
        marginTop: scaleHeight(10)
    },
    titleContainer: {
        backgroundColor: '#022A6D',
        padding: scaleHeight(5),
        borderRadius: scaleHeight(5),
    },
    priceConatiner: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#929292',
        padding: scaleHeight(5),
        width: scaleWidth(100),
        alignItems: 'center'
    },
    flatListDesgn: {
        height: scaleHeight(100)
    }
})
const AddBarberList = ({ navigation }) => {
    const [showModal, setShowModalVisible] = React.useState(false)
    const [servicesList, setServicesList] = React.useState([
        {
            title: 'Hair Cutting',
            price: 100,
            timeTaken: '2hr'
        },
        {
            title: 'Hair Cutting',
            price: 100,
            timeTaken: '2hr'
        },
        {
            title: 'Hair Cutting',
            price: 100,
            timeTaken: '2hr'
        },
    ])
    const onCancelClick = () => {
        setShowModalVisible(false);
    }
    const onSubmitClick = () => {
        setShowModalVisible(false)
    }
    const onClick = () => {
        navigation.navigate('BarberBottoNavigation')
    }
    const renderItem = ({ item }) => {
        return (
            <View style={style.itemConatiner}>
                <View style={style.titleContainer}>
                    <Text style={{ color: 'white' }}>{item?.title}</Text>
                </View>
                <View style={style.priceConatiner}>
                    <Text>{item?.price}</Text>
                </View>
                <View style={style.priceConatiner}>
                    <Text>{item?.timeTaken}</Text>
                </View>
            </View>
        )

    }

    return (
        <SafeAreaView>
            <UserSubComponent navigation={navigation} />
            <ScrollView style={style.scrollstyle}>
                <Text>Barbers Listing</Text>
                <Text>1. Barber</Text>
                <InnerTexttInput placeholderText="Barber Name" />
                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: scaleWidth(16), marginTop: scaleHeight(20) }}>
                    <View style={{ width: '70%' }}>
                        <Text>Phone Number*</Text>
                        <InnerTexttInput placeholderText="" />
                    </View>
                    <TouchableOpacity style={style.sendButton}>
                        <Text style={{ color: 'white', fontSize: normalize(14), fontFamily: FONTS.MontserratRegular }}>Send</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginLeft: scaleWidth(16), marginTop: scaleHeight(20) }}>
                    <Text>OTP</Text>
                    {/* <OTPInputView
                        style={{ width: '70%', height: 100 }}
                        pinCount={4}
                        autoFocusOnLoad
                        codeInputFieldStyle={style.underlineStyleBase}
                        codeInputHighlightStyle={style.underlineStyleHighLighted}
                        onCodeFilled={(code => {
                            console.log(`Code is ${code}, you are good to go!`)
                        })}
                    /> */}
                    <TouchableOpacity>
                        <Text>Resend</Text>
                        <Text>00:30</Text>
                    </TouchableOpacity>
                </View>
                <InnerTexttInput placeholderText="Barber Address" />
                <InnerTexttInput placeholderText="State*" />
                <View style={{ flexDirection: 'row' }}>
                    <InnerTexttInput width={100} placeholderText="City*" />
                    <InnerTexttInput width={100} placeholderText="Zip Code*" />
                </View>
                <View style={style.logoConatiner}>
                    <Text>Salon Logo</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: scaleHeight(20) }}>
                        <TouchableOpacity style={style.selectConatiner}>
                            <Text style={style.selectText}>Select</Text>
                        </TouchableOpacity>
                        <Text style={style.noSelectedtext}>No file selected</Text>
                    </View>
                </View>
                <View style={style.serviceProvideConatiner}>
                    <Text>Services Provided by Barber</Text>
                    <FlatList />
                    <TouchableOpacity style={{}} onPress={() => setShowModalVisible(!showModal)}>
                        <Text>Add Services + </Text>
                    </TouchableOpacity>
                </View>
                <View style={style.flatListDesgn}>
                    <FlatList
                        data={servicesList}
                        renderItem={renderItem}
                    />
                </View>
                <View style={style.buttonStyle}>
                    <ButtonBlue buttonText="List Barber & Services" onClick={onClick} />
                </View>
                <ServiceModal modalVisible={showModal} onCancelClick={onCancelClick} onSubmitClick={onSubmitClick} />
            </ScrollView>
        </SafeAreaView>
    )
}
export default AddBarberList;