import React from 'react'
import { Image, Linking, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { normalize, scaleHeight, scaleWidth } from '../../../../Constant/DynamicSize';
import InnerTexttInput from '../../../../Components/InnerTextInput';
import ButtonBlue from '../../../../Components/Button_Blue';
import { FONTS } from '../../../../Constant/fonts';
import { Images } from '../../../../Constant/Images';
import UserSubComponent from '../../../../Components/UserSubComponent';
import { Routes } from '../../../../Constant/Routes';
import TimePicker from '../../../../Components/TimerPicker';
import ImageCropPicker from 'react-native-image-crop-picker';
import { Apis, BASE_URL } from '../../../../Constant/APisUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';
const daysOfWeek = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
const style = StyleSheet.create({
    mainConatiner: {
    },
    container: {
        height: '100%',
        marginHorizontal: scaleWidth(16),
        marginBottom: scaleHeight(50)
    },
    buttonContainer: {
        marginTop: scaleHeight(20),
        marginBottom: scaleHeight(50),
        alignSelf: 'center'
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
        borderRadius: scaleHeight(5),
        justifyContent: 'center'
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
    },
    dayButton: {
        width: 30,
        height: 30,
        borderRadius: 20,
        margin: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dayText: {
        color: 'white',
        fontSize: 12
    },
})
const AddSaloonkycDetails = ({ navigation }) => {
    const [selectedOption, setSelectedOption] = React.useState('');
    const [toggleCheckBox, setToggleCheckBox] = React.useState(false)
    const [saloonName, setSaloonName] = React.useState();
    const [ownerName, setOwnerName] = React.useState();
    const [address, setAddress] = React.useState();
    const [state, setState] = React.useState();
    const [city, setCity] = React.useState();
    const [zipcode, setZipcode] = React.useState();
    const [salonLogo, setSalonLogo] = React.useState();
    const [addressProof, setAddressProof] = React.useState();
    const [salonImage, setSalonImage] = React.useState()
    const [openTime, setOpenTime] = React.useState();
    const [closeTime, setCloseTime] = React.useState();
    const [lunchTime, setLunchTime] = React.useState();
    const [avialabledays, setAvailableDays] = React.useState([]);
    const [seat, setSeatCount] = React.useState();
    const [barberCounts, setBarberCounts] = React.useState();
    const [locations, setLocation] = React.useState();
    const [accesoryInfo, setaccesoryInfo] = React.useState({ "AC": false, "Sofa": true, "TV": true, "Newspaper": true, "wifi": true, "magazine": true })
    const [token, setToken] = React.useState();
    React.useLayoutEffect(() => {
        getToken()
    }, [])
    const getToken = async () => {
        let token = await AsyncStorage.getItem('token');
        console.log("Token is>>", token)
        if (token) {
            setToken(token)
        }
    }
    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };
    const openMap = () => {
        const url = `https://www.google.com/maps/dir/?api=1&travelmode=driving&destination=`;
        Linking.openURL(url).catch((err) => {
        })
    }
    const openGallaery = (setData) => {
        ImageCropPicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log("image>>", image.path)
            setData(image?.path)
        });
    }
    const onClick = async() => {
        console.log("data>>")
        const formData = new FormData();
        formData.append('salonName', saloonName);
        formData.append('accessoryInfo', accesoryInfo);
        formData.append('salonType', "");
        formData.append('address', address);
        formData.append('state', state);
        formData.append('country', city);
        formData.append('zipcode', zipcode);
        formData.append('openTime', "10.00 AM");
        formData.append('closeTime', "10.00 PM");
        formData.append('lunchTime', "2");
        formData.append('seats', seat);
        formData.append('barbers', barberCounts);
        formData.append('location', "");
        formData.append('availableDays', avialabledays);
        formData.append('images', {
            uri: salonImage,
            type: 'image/jpeg',
            name: 'images.jpg',
        });
        formData.append('salonLogo', {
            uri: salonLogo,
            type: 'image/jpeg',
            name: 'saloonLogo.jpg',
        });
        formData.append('addressProof', {
            uri: addressProof,
            type: 'image/jpeg',
            name: 'addressProof.jpg',
        });
        console.log("form data>>",formData)
        const response = await fetch(BASE_URL + Apis.SALOON_UPDATE, {
            method: 'PUT',
            headers: {
              'Content-Type': 'multipart/form-data',
              'Authorization': token
            },
            body: formData,
          });
      
          const data = await response.json();
          console.log("respone >>",data)
      

    }
    const onChangeText = (e, name) => {
        console.log("e,name", e, name);
        switch (name) {
            case 'name':
                setOwnerName(e)
                break;
            case 'salonName':
                setSaloonName(e)
                break;
            case 'address':
                setAddress(e)
                break;
            case 'state':
                setState(e)
                break;
            case 'city':
                setCity(e)
                break;
            case 'zipCode':
                setZipcode(e)
                break;
            case 'seatCount':
                setSeatCount(e)
                break;
            case 'barberCount':
                setBarberCounts(e)
                break;

            default:
                break;
        }

    }
    const toggleDaySelection = (day) => {
        if (avialabledays.includes(day)) {
            setAvailableDays(avialabledays.filter(item => item !== day));
        } else {
            setAvailableDays([...avialabledays, day]);
        }
    };
    console.log("all times>>", openTime, closeTime, lunchTime)
    return (
        <SafeAreaView>
            <UserSubComponent navigation={navigation} />
            <ScrollView style={style.container} showsVerticalScrollIndicator={false}>
                <Text style={style.editStyle}>Please Provide your Salon Info for KYC</Text>
                <InnerTexttInput
                    placeholderText="Name*"
                    name="name"
                    value={ownerName}
                    onChange={onChangeText}
                />
                <InnerTexttInput
                    name="salonName"
                    value={saloonName}
                    onChange={onChangeText}
                    placeholderText="Salon Name*"
                />
                <InnerTexttInput
                    name="address"
                    value={address}
                    onChange={onChangeText}
                    placeholderText="Salon Address*"
                />
                <InnerTexttInput
                    name="state"
                    value={state}
                    onChange={onChangeText}
                    placeholderText="State*"
                />
                <View style={{ flexDirection: 'row' }}>
                    <InnerTexttInput
                        width={90}
                        name="city"
                        value={city}
                        onChange={onChangeText}
                        placeholderText="City*"
                    />
                    <InnerTexttInput
                        width={120}
                        name="zipCode"
                        value={zipcode}
                        onChange={onChangeText}
                        placeholderText="Zip Code*"
                        keyboardType="Numeric"
                    />
                </View>
                <View>
                </View>
                <View style={style.logoConatiner}>
                    <Text>Salon Logo</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: scaleHeight(20) }}>
                        <TouchableOpacity onPress={() => openGallaery(setSalonLogo)} style={style.selectConatiner}>
                            <Text style={style.selectText}>Select</Text>
                        </TouchableOpacity>
                        {salonLogo ?
                            <Image source={{ uri: salonLogo }} style={{ height: 50, width: 50, borderRadius: 10, marginLeft: scaleWidth(10) }} /> :
                            <Text style={style.noSelectedtext}>No file selected</Text>
                        }
                    </View>
                </View>
                <View style={style.logoConatiner}>
                    <Text>Salon Address Proof</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: scaleHeight(20) }}>
                        <TouchableOpacity onPress={() => openGallaery(setAddressProof)} style={style.selectConatiner}>
                            <Text style={style.selectText}>Select</Text>
                        </TouchableOpacity>
                        {addressProof ?
                            <Image source={{ uri: addressProof }} style={{ height: 50, width: 50, borderRadius: 10, marginLeft: scaleWidth(10) }} /> :
                            <Text style={style.noSelectedtext}>No file selected</Text>
                        }
                    </View>
                </View>
                <View style={style.logoConatiner}>
                    <Text>Images of Salon*</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: scaleHeight(20) }}>
                        <TouchableOpacity onPress={() => openGallaery(setSalonImage)} style={style.selectConatiner}>
                            <Text style={style.selectText}>Select</Text>
                        </TouchableOpacity>
                        {salonImage ?
                            <Image source={{ uri: salonImage }} style={{ height: 50, width: 50, borderRadius: 10, marginLeft: scaleWidth(10) }} /> :
                            <Text style={style.noSelectedtext}>No file selected</Text>
                        }
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={style.openButton}>
                        <Text style={style.selectText}>Salon Open Time</Text>
                    </View>
                    <TouchableOpacity style={style.timeConatiner}>
                        <TimePicker selectedTimes={setOpenTime} />
                        <Image source={Images.ArrowKey} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={style.openButton}>
                        <Text style={style.selectText}>Salon Close Time</Text>
                    </View>
                    <TouchableOpacity style={style.timeConatiner}>
                        <TimePicker selectedTimes={setCloseTime} />
                        <Image source={Images.ArrowKey} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={style.openButton}>
                        <Text style={style.selectText}>Lunch Time:</Text>
                        <View>
                            <Text style={style.selectText}>1hr</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={style.timeConatiner}>
                        <TimePicker selectedTimes={setLunchTime} />
                        <Image source={Images.ArrowKey} />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text>Available Days</Text>
                    <View style={{ flexDirection: 'row' }}>
                        {daysOfWeek.map((day, index) => {
                            let selected = avialabledays.includes(day)
                            return (
                                <TouchableOpacity
                                    style={[style.dayButton, { backgroundColor: selected ? 'blue' : 'gray' }]}
                                    onPress={() => toggleDaySelection(day)}
                                >
                                    <Text style={style.dayText}>{day}</Text>
                                </TouchableOpacity>
                            )
                        })
                        }
                    </View>
                </View>
                <InnerTexttInput
                    name="seatCount"
                    value={seat}
                    onChange={onChangeText}
                    keyboardType="Numeric"
                    placeholderText="Number of Seats in Salon"
                />
                <InnerTexttInput
                    placeholderText="Number of Barbers in Salon"
                    name="barberCount"
                    value={barberCounts}
                    keyboardType="Numeric"
                    onChange={onChangeText}
                />
                <View style={style.locationConateinr}>
                    <Text>Salon Location on Map</Text>
                    <TouchableOpacity style={style.selectConatiner} onPress={() => openMap()}>
                        <Text style={style.selectText}>Open Map</Text>
                    </TouchableOpacity>
                </View>
                <View style={style.buttonContainer}>
                    <ButtonBlue buttonText="Submit" onClick={onClick} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default AddSaloonkycDetails;