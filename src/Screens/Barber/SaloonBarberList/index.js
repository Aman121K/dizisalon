import React from 'react';
import { Text, View, TouchableOpacity, SafeAreaView, FlatList, Image, StyleSheet } from 'react-native';
import UserCartHeader from '../../../Components/UserCartHeader';
import SearchConatiner from '../../../Components/SearchConatiner';
import { Images } from '../../../Constant/Images';
import BarberList from '../../../Components/FlatListData/barberList';
import { normalize, scaleHeight, scaleWidth } from '../../../Constant/DynamicSize';
import { FONTS } from '../../../Constant/fonts';
import { Routes } from '../../../Constant/Routes';
const style = StyleSheet.create({
    barberSort: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: scaleWidth(20),
        marginTop: scaleHeight(10)
    },
    barberSort1: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: .5,
        padding: scaleHeight(4),
        borderColor: 'white',
        // paddingHorizontal:10,
        justifyContent: 'space-between',
        width: '30%',
        borderRadius: scaleHeight(5)
    },
    listingSize: {
        fontSize: normalize(20),
        fontFamily: FONTS.MontserratMedium,
        color: 'black'
    },
    addBarberConatiner: {
        alignSelf: 'flex-end',
        margin: scaleWidth(20),
        backgroundColor: '#022A6D',
        padding: scaleHeight(10),
        borderRadius: scaleHeight(10)
    },
    addText: {
        color: 'white',
        fontFamily: FONTS.MontserratBold
    }
})
const SaloonBarberList = ({ navigation }) => {
    const [barberList, setBarberList] = React.useState([
        {
            name: 'vikas',
            mobile: '7970000000',
            attendenaceStatus: 'Absent',
            time: '05:00 Pm',
            image: Images.BarberIcon
        },
        {
            name: 'vikas',
            mobile: '7970000000',
            attendenaceStatus: 'Present',
            time: '05:00 Pm',
            image: Images.BarberIcon
        },


    ])

    const renderItem = ({ item }) => {
        return (
            <BarberList item={item} navigation={navigation} />
        )
    }
    const onAddBarberClick = () => {
        navigation.navigate(Routes.AddBarberList)
    }
    return (
        <SafeAreaView>
            <UserCartHeader navigation={navigation} title="My Barbers" />
            <TouchableOpacity onPress={() => onAddBarberClick()} style={style.addBarberConatiner}>
                <Text style={style.addText}>+ Add Barber</Text>
            </TouchableOpacity>
            <SearchConatiner placeholdertext="Search for Barbers " />
            <View style={style.barberSort}>
                <Text style={style.listingSize}>Listing of Barbers</Text>
                <View style={style.barberSort1}>
                    <Text>sort</Text>
                    <Image source={Images.SORT} />
                </View>
            </View>
            <View>
                <FlatList
                    data={barberList}
                    renderItem={renderItem}
                />
            </View>
        </SafeAreaView>
    )
}
export default SaloonBarberList