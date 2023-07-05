import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, FlatList } from 'react-native';
import UserCartHeader from '../../../Components/UserCartHeader';
import SearchConatiner from '../../../Components/SearchConatiner';
import { scaleHeight } from '../../../Constant/DynamicSize';
import BarberRateList from '../../../Components/BarberRateList';
import { Images } from '../../../Constant/Images';
const style = StyleSheet.create({
    searchContainer: {
        marginTop: scaleHeight(20)
    },
    textStyle: {
        alignSelf: 'center',
        marginTop: scaleHeight(10)
    }
})
const SaloonCustomerList = ({ navigation }) => {
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
    return (
        <SafeAreaView>
            <UserCartHeader navigation={navigation} title="Customer List" />
            <View style={style.searchContainer}>
                <SearchConatiner />
            </View>
            <View>
                <Text style={style.textStyle}>Listing of Customers</Text>
                {/* <CustomersList barberList={barberList}/> */}
            </View>
        </SafeAreaView>
    )
}
export default SaloonCustomerList;