import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import UserCartHeader from '../../../Components/UserCartHeader';
import SearchConatiner from '../../../Components/SearchConatiner';
import { scaleHeight, scaleWidth } from '../../../Constant/DynamicSize';
import BarberRateList from '../../../Components/BarberRateList';
import { Images } from '../../../Constant/Images';
import CustomerList from '../../../Components/FlatListData/customerList';
import ModalConatiner from '../../../Components/ModalComponent';
import CalenderModal from '../../../Components/ModalComponent/calenderModal';

// import BottomCalenderModal from '../../../Components/ModalComponent/BottomCalenderModal';
const style = StyleSheet.create({
    searchContainer: {
        marginTop: scaleHeight(20)
    },
    textStyle: {
        // alignSelf: 'center',
        // marginTop: scaleHeight(10),
        marginLeft: scaleHeight(10)
    },
    DateConatiner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: scaleWidth(20),
        alignItems: 'center',
        marginTop: scaleHeight(10)
    },
    Dates: {
        borderWidth: 1,
        borderColor: 'white',
        padding: scaleHeight(5),
        borderRadius: 5
    },
    date: {
        marginHorizontal: scaleWidth(10)
    }
})
const SaloonCustomerList = ({ navigation }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [barberList, setBarberList] = React.useState([
        {
            barberName: 'Manish Rawat',
            barberContactNo: '+91+910000000',
            barberImage: Images.SALLON_BG_IMAGE,
            barberRate: '500',
            duration: '30 min',
            title: 'Hair cutting',
            barberStatus: 'open'
        },
        {
            barberName: 'Manish Rawat',
            barberContactNo: '+91+910000000',
            barberImage: Images.SALLON_BG_IMAGE,
            barberRate: '500',
            duration: '30 min',
            title: 'Hair cutting',
            barberStatus: 'open'
        }
    ])
    const renderItem = ({ item }) => {
        return (
            <CustomerList item={item} navigation={navigation} />
        )
    }


    const openModal = () => {
        // setIsModalVisible(true);
    };

    const closeModal = () => {
        setIsModalVisible(false);
    };

    const handleDateSelect = (date) => {
        setSelectedDate(date);
        // Do something with the selected date
        // For example, you can use it to set a date in your main component's state
    };
    const onCloseModal = () => {
        setIsModalVisible(false)
    }
    return (
        <>
            <UserCartHeader navigation={navigation} title="Customer List" />
            <View style={style.searchContainer}>
                <SearchConatiner />
            </View>
            <View>
                <View style={style.DateConatiner}>
                    <Text style={style.textStyle}>Listing of Customers</Text>
                    <TouchableOpacity onPress={() => setIsModalVisible(true)} style={style.Dates}>
                        <Text style={style.date}>Date</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <FlatList
                        data={barberList}
                        renderItem={renderItem}
                    />
                </View>
                <CalenderModal isVisible={isModalVisible} closeModal={onCloseModal} />
                {/* <BottomCalenderModal
                isVisible={isModalVisible}
            /> */}
                {/* <CustomersList barberList={barberList}/> */}
            </View>
        </>

    )
}
export default SaloonCustomerList;