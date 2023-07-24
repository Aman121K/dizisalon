import React from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import UserSubComponent from "../../../../Components/UserSubComponent";
import { normalize, scaleHeight, scaleWidth } from "../../../../Constant/DynamicSize";
import { FONTS } from "../../../../Constant/fonts";
import { Images } from "../../../../Constant/Images";
import ButtonBlue from "../../../../Components/Button_Blue";
import { Routes } from "../../../../Constant/Routes";
const style = StyleSheet.create({
    mainConatiner: {

    },
    container: {
        marginTop: scaleHeight(20),
        marginLeft: scaleWidth(16),
        // flexDirection:'row'
    },
    category: {
        fontSize: normalize(15),
        fontFamily: FONTS.MontserratMedium,
        color: 'black'
    },
    subCategory: {
        fontFamily: FONTS.MontserratRegular,
        fontSize: normalize(12)
    },
    itemtext: {
        fontSize: normalize(10),
        fontFamily: FONTS.PoppinsRegular,
        marginLeft: scaleWidth(10)
    },
    buttonConatiner: {
        alignSelf: 'center',
        marginTop: scaleHeight(20)
    }
})
const AddUnisexServices = ({ navigation }) => {
    const [menServices, setMenServices] = React.useState([
        {
            id: 1,
            title: 'Head Massage'
        },
        {
            id: 1,
            title: 'Beard Trim'
        },
        {
            id: 1,
            title: 'Head Massage'
        },
        {
            id: 1,
            title: 'Head Massage'
        },
        {
            id: 1,
            title: 'Head Massage'
        },
        {
            id: 1,
            title: 'Head Massage'
        },
        {
            id: 1,
            title: 'Head Massage'
        },
        {
            id: 1,
            title: 'Head Massage'
        },
        {
            id: 1,
            title: 'Head Massage'
        },
        {
            id: 1,
            title: 'Head Massage'
        },
        {
            id: 1,
            title: 'Head Massage'
        },
    ])
    const [womenServices, SetWomenservices] = React.useState([
        {
            id: 1,
            title: 'Head Massage'
        },
        {
            id: 1,
            title: 'Beard Trim'
        },
        {
            id: 1,
            title: 'Head Massage'
        },
        {
            id: 1,
            title: 'Head Massage'
        },
        {
            id: 1,
            title: 'Head Massage'
        },
        {
            id: 1,
            title: 'Head Massage'
        },
        {
            id: 1,
            title: 'Head Massage'
        },
        {
            id: 1,
            title: 'Head Massage'
        },
        {
            id: 1,
            title: 'Head Massage'
        },
        {
            id: 1,
            title: 'Head Massage'
        },
        {
            id: 1,
            title: 'Head Massage'
        },
    ])
    const onClick = () => {
        navigation.navigate(Routes.AddBarberList)
    }
    const renderItem = ({ item, index }) => {
        return (
            <View key={index} style={style.container}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity>
                        <Image source={Images.UnCheck} />
                    </TouchableOpacity>
                    <Text style={style.itemtext}>{item?.title}</Text>
                </View>
            </View>
        )
    }
    return (
        <SafeAreaView>
            <UserSubComponent navigation={navigation} />
            <View style={style.container}>
                <Text style={style.category}>For Men</Text>
                <Text style={style.subCategory}>Select the services that you want to list </Text>
                <FlatList
                    data={menServices}
                    renderItem={renderItem}
                    numColumns={2}
                />
            </View>
            <View style={style.container}>
                <Text style={style.category}>For Women</Text>
                <Text style={style.subCategory}>Select the services that you want to list </Text>
                <FlatList
                    data={womenServices}
                    renderItem={renderItem}
                    numColumns={2}
                />
            </View>
            <View style={style.buttonConatiner}>
                <ButtonBlue buttonText="Submit" onClick={onClick} />
            </View>
        </SafeAreaView>
    )
}
export default AddUnisexServices;