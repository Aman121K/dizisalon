import React from 'react'
import { Image, Linking, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { normalize, scaleHeight, scaleWidth } from '../../../../Constant/DynamicSize';
import InnerTexttInput from '../../../../Components/InnerTextInput';
import ButtonBlue from '../../../../Components/Button_Blue';
import { FONTS } from '../../../../Constant/fonts';
import { Images } from '../../../../Constant/Images';
import CheckBox from '@react-native-community/checkbox';
import UserSubComponent from '../../../../Components/UserSubComponent';
const style = StyleSheet.create({
    mainConatiner: {

    },
    container: {
        height: '100%',
        marginHorizontal: scaleWidth(16)
    },
    buttonContainer: {
        marginTop: scaleHeight(20)
    },
    selectConatiner: {
        backgroundColor: '#022A6D',
        borderRadius: scaleHeight(5),
        padding: scaleHeight(5),
        width: scaleWidth(100)
    },
    logoConatiner: {
        backgroundColor: 'white',
        padding: scaleHeight(5),
        marginTop: scaleHeight(10),
        borderRadius: scaleHeight(5)
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
    openButton: {
        padding: scaleHeight(5),
        backgroundColor: '#022A6D',
        alignItems: 'center',
        borderRadius: scaleHeight(5),
        marginTop: scaleHeight(10),
        flexDirection: 'row'
    },
    timeConatiner: {
        flexDirection: 'row',
        width: scaleWidth(100),
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#A9A9A9',
        marginTop: scaleHeight(10),
        padding: scaleHeight(5),
        borderRadius: scaleHeight(5)
    },
    dayConatiner: {
        backgroundColor: 'gray',
        borderRadius: scaleHeight(50),
        padding: scaleHeight(4),
        paddingHorizontal: scaleWidth(8),
        margin: scaleHeight(10)
    },
    locationConateinr: {
        flexDirection: 'row', alignItems: 'center', borderWidth: 1,
        marginHorizontal: scaleWidth(15),
        marginTop: scaleHeight(15),
        justifyContent: 'space-between',
        padding: scaleHeight(5),
        borderRadius: scaleHeight(10),
        borderColor: '#9B9B9B'
    },
    editStyle: {
        fontSize: normalize(15),
        fontFamily: FONTS.MontserratBold,
        color: '#000'
    }
})
const AddSaloonkycDetails = ({ navigation }) => {
    const [selectedOption, setSelectedOption] = React.useState('');
    const [toggleCheckBox, setToggleCheckBox] = React.useState(false)

    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };
    const openMap = () => {
        const url = `https://www.google.com/maps/dir/?api=1&travelmode=driving&destination=`;
        Linking.openURL(url).catch((err) => {
            // showToast(err.message);
        })
    }
    const openGallaery = () => {
        // ImagePicker.openPicker({
        //     width: 300,
        //     height: 400,
        //     cropping: true
        // }).then(image => {
        //     console.log(image);
        // });
    }
    return (
        <SafeAreaView>
            <UserSubComponent navigation={navigation} />
            {/* <UserCartHeader navigation={navigation} /> */}
            <ScrollView style={style.container} showsVerticalScrollIndicator={false}>
                <Text style={style.editStyle}>Please Provide your Salon Info for KYC</Text>
                <InnerTexttInput placeholderText="Name*" />
                <InnerTexttInput placeholderText="Salon Name*" />
                <InnerTexttInput placeholderText="Salon Address*" />
                <InnerTexttInput placeholderText="State*" />
                <View style={{ flexDirection: 'row' }}>
                    <InnerTexttInput placeholderText="City*" />
                    <InnerTexttInput placeholderText="Zip Code*" />
                </View>
                <View>
                    <CheckBox
                        disabled={false}
                        value={toggleCheckBox}
                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                    />
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
                <View style={style.logoConatiner}>
                    <Text>Salon Address Proof</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: scaleHeight(20) }}>
                        <TouchableOpacity style={style.selectConatiner}>
                            <Text style={style.selectText}>Select</Text>
                        </TouchableOpacity>
                        <Text style={style.noSelectedtext}>No file selected</Text>
                    </View>
                </View>
                {/* <Picker
                    selectedValue={selectedOption}
                    onValueChange={handleOptionChange}
                >
                    <Picker.Item label="Option 1" value="option1" />
                    <Picker.Item label="Option 2" value="option2" />
                    <Picker.Item label="Option 3" value="option3" />
                </Picker> */}
                <View style={style.logoConatiner}>
                    <Text>Images of Salon*</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: scaleHeight(20) }}>
                        <TouchableOpacity style={style.selectConatiner} onPress={() => openGallaery()}>
                            <Text style={style.selectText}>Select</Text>
                        </TouchableOpacity>
                        <Text style={style.noSelectedtext}>No file selected</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={style.openButton}>
                        <Text style={style.selectText}>Salon Open Time</Text>
                    </View>
                    <View style={style.timeConatiner}>
                        <Text>hh:mm</Text>
                        <Image source={Images.ArrowKey} />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={style.openButton}>
                        <Text style={style.selectText}>Salon Close Time</Text>
                    </View>
                    <View style={style.timeConatiner}>
                        <Text>hh:mm</Text>
                        <Image source={Images.ArrowKey} />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={style.openButton}>
                        <Text style={style.selectText}>Lunch Time:</Text>
                        <View>
                            <Text style={style.selectText}>1hr</Text>
                        </View>
                    </View>
                    <View style={style.timeConatiner}>
                        <Text>hh:mm</Text>
                        <Image source={Images.ArrowKey} />
                    </View>
                </View>
                <View>
                    <Text>Available Days</Text>
                    <Text>Mon,tues,Wed,Thru, Fri, Sat</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={style.dayConatiner}>
                            <Text>S</Text>
                        </View>
                        <View style={style.dayConatiner}>
                            <Text>M</Text>
                        </View>
                        <View style={style.dayConatiner}>
                            <Text>T</Text>
                        </View>
                        <View style={style.dayConatiner}>
                            <Text>W</Text>
                        </View>
                        <View style={style.dayConatiner}>
                            <Text>T</Text>
                        </View>
                        <View style={style.dayConatiner}>
                            <Text>F</Text>
                        </View>
                        <View style={style.dayConatiner}>
                            <Text>S</Text>
                        </View>

                    </View>
                </View>
                <InnerTexttInput placeholderText="Number of Seats in Salon" />
                <InnerTexttInput placeholderText="Number of Barbers in Salon" />
                <View style={style.locationConateinr}>
                    <Text>Salon Location on Map</Text>
                    <TouchableOpacity style={style.selectConatiner} onPress={() => openMap()}>
                        <Text style={style.selectText}>Open Map</Text>
                    </TouchableOpacity>
                </View>
                <View style={style.buttonContainer}>
                    <ButtonBlue buttonText="Edit & Update" />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default AddSaloonkycDetails;