import React from "react";
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, StyleSheet, FlatList, Alert } from 'react-native';
import UserSubComponent from "../../../../Components/UserSubComponent";
import InnerTexttInput from "../../../../Components/InnerTextInput";
import { normalize, scaleHeight, scaleWidth } from "../../../../Constant/DynamicSize";
import { FONTS } from "../../../../Constant/fonts";
// import OTPInputView from "@twotalltotems/react-native-otp-input";
import ServiceModal from "../../../../Components/ModalComponent/serviceModal";
import ButtonBlue from "../../../../Components/Button_Blue";
import { TabContext } from "../../../../Context/TabProvider";
import ImageCropPicker from "react-native-image-crop-picker";
import { Apis, BASE_URL } from "../../../../Constant/APisUrl";
import Toast from 'react-native-simple-toast';
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
    },
    barberListing: {
        color: '#000',
        fontFamily: FONTS.MontserratRegular,
        fontWeight: '700',
        fontSize: normalize(15),
        marginHorizontal: scaleWidth(16)
    },
    otherHeadlines: {
        color: '#3A3A3A',
        fontSize: normalize(16),
        fontFamily: FONTS.MontserratRegular,
    }
})
const AddBarberList = ({ navigation }) => {
    const TabBottomValues = React.useContext(TabContext);
    console.log("All context data>>", TabBottomValues)
    const [showModal, setShowModalVisible] = React.useState(false)
    const [barberName, setBarberName] = React.useState();
    const [phoneNumber, setPhoneNumber] = React.useState();
    const [barberAddress, setBarberAddress] = React.useState();
    const [barberCity, setBarberCity] = React.useState();
    const [barberState, setBarberState] = React.useState();
    const [barberZipCode, setBarberZipCode] = React.useState()
    const [barberProfile, setBarberProfile] = React.useState();
    const [servicesList, setServicesList] = React.useState([
        {
            title: 'Hair Cutting',
            price: 100,
            timeTaken: '2hr'
        }
    ])
    const onCancelClick = () => {
        setShowModalVisible(false);
    }
    const onSubmitClick = () => {
        setShowModalVisible(false)
    }
    const onClick = () => {
        TabBottomValues.setHomeStackValue('fromBarber')

        if (!barberName && !phoneNumber && !barberAddress && !barberCity && !barberState && !barberZipCode) {
            Alert.alert("Please fill all the column")
        } else {
            const formData = new FormData();
            formData.append('barberName', barberName)
            formData.append('countryCode', '+91')
            formData.append('phone', phoneNumber)
            formData.append('address', barberAddress)
            formData.append('city', barberCity)
            formData.append('state', barberState)
            formData.append('zipcode', barberZipCode)
            formData.append('addressProof', '5995jvghghgjh')
            formData.append('country', 'India')
            formData.append('fcmToken', '763heuru')
            formData.append('passPortImage', {
                uri: barberProfile.path,
                type: barberProfile.mime,
                name: 'passPortImage.jpg',
            })
            fetch(BASE_URL + Apis.CREATE_BARBER, {
                method: 'POST',
                body: formData,
                headers: {
                    'Content-Type': 'multipart/form-data',
                    // Add any additional headers you may need
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log("Barber Added Successfully")
                    // navigation.navigate('BarberBottoNavigation')

                }).catch((err) => {
                    console.log(err)
                })
        }
        navigation.navigate('BarberBottoNavigation')
        Toast.show('Barber Created Successfully')

        
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
    const onChange = (e, name) => {
        console.log("click is>>", e, name)
        switch (name) {
            case 'barberName':
                setBarberName(e)
                break;
            case 'phoneNumber':
                setPhoneNumber(e)
                break;
            case 'barberAddress':
                setBarberAddress(e)
                break;
            case 'city':
                setBarberCity(e)
                break;
            case 'state':
                setBarberState(e)
                break;
            case 'zipCode':
                setBarberZipCode(e)
                break;
            default:
                break;
        }
    }
    const selectBarberProfile = () => {
        ImageCropPicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log("image>>", image)
            setBarberProfile(image)
        });
    }
    return (
        <SafeAreaView>
            <UserSubComponent navigation={navigation} />
            <ScrollView style={style.scrollstyle}>
                <Text style={style.barberListing}>Barbers Listing</Text>
                <Text style={style.barberListing}>1. Barber</Text>
                <InnerTexttInput
                    placeholderText="Barber Name"
                    name="barberName"
                    onChange={onChange}
                />
                <View style={{ marginTop: scaleHeight(10) }}>
                    {/* <View> */}
                    <Text style={style.barberListing}>Phone Number*</Text>
                    <InnerTexttInput
                        placeholderText="Phone number"
                        keyboardType="numeric"
                        name="phoneNumber"
                        onChange={onChange} />
                    {/* </View> */}
                    {/* <TouchableOpacity style={style.sendButton}>
                        <Text style={{ color: 'white', fontSize: normalize(14), fontFamily: FONTS.MontserratRegular }}>Send</Text>
                    </TouchableOpacity> */}
                </View>
                <View style={{ marginLeft: scaleWidth(16), marginTop: scaleHeight(20) }}>
                    {/* <Text style={style.otherHeadlines}>OTP</Text> */}
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
                    {/* <TouchableOpacity>
                        <Text>Resend</Text>
                        <Text>00:30</Text>
                    </TouchableOpacity> */}
                </View>
                <InnerTexttInput
                    placeholderText="Barber Address"
                    name="barberAddress"
                    onChange={onChange}
                />
                <InnerTexttInput placeholderText="State*" name="state" onChange={onChange} />
                <View style={{ flexDirection: 'row' }}>
                    <InnerTexttInput
                        width={100}
                        placeholderText="City*"
                        name="city"
                        onChange={onChange}
                    />
                    <InnerTexttInput
                        width={100}
                        placeholderText="Zip Code*"
                        keyboardType="numeric"
                        name="zipCode"
                        onChange={onChange}
                    />
                </View>
                <View style={style.logoConatiner}>
                    <Text style={style.otherHeadlines}>Barber Profile</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: scaleHeight(20) }}>
                        <TouchableOpacity onPress={() => selectBarberProfile()} style={style.selectConatiner}>
                            <Text style={style.selectText}>Select</Text>
                        </TouchableOpacity>
                        <Text style={style.noSelectedtext}>No file selected</Text>
                    </View>
                </View>
                <View style={style.serviceProvideConatiner}>
                    <Text style={style.otherHeadlines}>Services Provided by Barber</Text>
                    <FlatList />
                    <TouchableOpacity style={{}} onPress={() => setShowModalVisible(!showModal)}>
                        <Text style={style.otherHeadlines}>Add Services + </Text>
                    </TouchableOpacity>
                </View>
                <View style={style.flatListDesgn}>
                    <FlatList
                        data={servicesList}
                        renderItem={renderItem}
                    />
                </View>
                <View style={style.buttonStyle}>
                    <ButtonBlue
                        buttonText="List Barber & Services"
                        onClick={onClick} />
                </View>
                <ServiceModal
                    modalVisible={showModal}
                    onCancelClick={onCancelClick}
                    onSubmitClick={onSubmitClick} />
            </ScrollView>
        </SafeAreaView>
    )
}
export default AddBarberList;