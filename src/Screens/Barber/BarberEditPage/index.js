import React, { useEffect } from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import UserCartHeader from '../../../Components/UserCartHeader';
import UserSubComponent from '../../../Components/UserSubComponent';
import InnerTexttInput from '../../../Components/InnerTextInput';
import ButtonBlue from '../../../Components/Button_Blue';
import { normalize, scaleHeight, scaleWidth } from '../../../Constant/DynamicSize';
import { FONTS } from '../../../Constant/fonts';
import ServiceModal from '../../../Components/ModalComponent/serviceModal';
import ServicesList from '../../../Components/FlatListData/servicesList';
import ServicesListVertical from '../../../Components/FlatListData/servicesListVertical';
import ImageCropPicker from 'react-native-image-crop-picker';
const style = StyleSheet.create({
    mainConatiner: {
    },
    saveConatiner: {
        alignSelf: 'center',
        marginTop: scaleHeight(20)
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
    selectConatiner: {
        backgroundColor: '#022A6D',
        borderRadius: scaleHeight(5),
        padding: scaleHeight(5),
        width: scaleWidth(100)
    },
    serviceProvideConatiner: {
        marginLeft: scaleWidth(5),
        // marginTop: scaleHeight(10)
    },
    row: {
        flexDirection: 'row',
    },
    item: {
        width: 100,
        height: 100,
        backgroundColor: 'lightgray',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
    },
    AddServiceConatiner: {
        backgroundColor: '#022A6D',
        borderRadius: scaleHeight(5),
        padding: scaleHeight(5),
        width: scaleWidth(100),
        margin: 10
    },
    barberText: {
        fontFamily: FONTS.MontserratBold,
        fontSize: normalize(20),
        marginLeft: scaleWidth(20)
    }
})
const BarberEditPage = ({ navigation }) => {
    const [showModal, setShowModalVisible] = React.useState(false)
    const [selectImage, setSelectImage] = React.useState();
    const itemsPerRow = 3;
    const [servicesList, setServicesList] = React.useState([
        {
            name: 'Hair Cutting',
            id: 1,
            price: 'Rs.200',
            time: '30 Mint'
        },
        {
            name: 'shaving',
            id: 2,
            price: 'Rs.200',
            time: '30 Mint'
        },
        {
            name: 'massage',
            id: 3,
            price: 'Rs.200',
            time: '30 Mint'
        },
        {
            name: 'massage',
            id: 4,
            price: 'Rs.200',
            time: '30 Mint'
        },
        {
            name: 'massage',
            id: 5,
            price: 'Rs.200',
            time: '30 Mint'
        }


    ])
    useEffect(() => {

    }, [servicesList])
    const onEditSaveButtonClick = () => {
    }
    const onCancelClick = () => {
        setShowModalVisible(false)
    }
    const onSubmitClick = () => {
        setShowModalVisible(false)
    }
    const onCrossClick = (items) => {
        const existingIndex = servicesList.findIndex((item) => item.id === items.id);
        if (existingIndex !== -1) {
            servicesList.splice(existingIndex, 1);
        } else {
            servicesList.push(items);
        }
        setServicesList(servicesList);
    }

    const renderItem1 = ({ item }) => {
        return <ServicesListVertical item={item} />
    }
    const onSelectImage = () => {
        ImageCropPicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log("image>>", image.path)
            setSelectImage(image?.path)
            // console.log(image);
        });
    }
    const onClickImage = () => {
        console.log("selected image>>")
    }
    return (
        <SafeAreaView>
            <UserSubComponent navigation={navigation} />
            <Text style={style.barberText}>Barber</Text>
            <ScrollView style={{ marginBottom: scaleHeight(80) }}>
                <InnerTexttInput placeholderText="Name*" />
                <InnerTexttInput placeholderText="Salon Name*" />
                <InnerTexttInput placeholderText="Salon Address*" />
                <InnerTexttInput placeholderText="State*" />
                <View style={{ flexDirection: 'row' }}>
                    <InnerTexttInput width={100} placeholderText="City*" />
                    <InnerTexttInput width={100} placeholderText="Zip Code*" />
                </View>
                <View style={style.saveConatiner}>

                </View>
                <View style={style.logoConatiner}>
                    <Text>Passport size photo</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: scaleHeight(20) }}>
                        {selectImage ?
                            <TouchableOpacity onPress={() => onClickImage()}>
                                <Image source={{ uri: selectImage }} style={{ height: 50, width: 50, borderRadius: 10, marginLeft: scaleWidth(10) }} />
                            </TouchableOpacity> :
                            <>
                                <TouchableOpacity onPress={() => onSelectImage()} style={style.selectConatiner}>
                                    <Text style={style.selectText}>Select</Text>
                                </TouchableOpacity>
                                <Text style={style.noSelectedtext}>No file selected</Text>
                            </>
                        }


                    </View>
                </View>
                <View style={style.serviceProvideConatiner}>
                    <Text>Services Provided by Barber</Text>
                    {Array.from({ length: Math.ceil(servicesList.length / itemsPerRow) }).map((_, rowIndex) => (
                        <View key={rowIndex} style={style.row}>
                            {servicesList.slice(rowIndex * itemsPerRow, rowIndex * itemsPerRow + itemsPerRow).map((item) => (
                                <ServicesList item={item} onClick={onCrossClick} />
                            ))}
                        </View>
                    ))}
                    <TouchableOpacity style={style.AddServiceConatiner} onPress={() => setShowModalVisible(!showModal)}>
                        <Text style={{ color: 'white' }}>Add Services + </Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={servicesList}
                    renderItem={renderItem1}
                />
                <View style={{ alignSelf: 'center', marginTop: scaleHeight(10) }}>
                    <ButtonBlue onClick={() => onEditSaveButtonClick()} buttonText="Save" />
                </View>
            </ScrollView>
            <ServiceModal modalVisible={showModal} onCancelClick={onCancelClick} onSubmitClick={onSubmitClick} />
        </SafeAreaView>
    )
}
export default BarberEditPage;