import React from 'react';
import { View, SafeAreaView, Text, StyleSheet, ScrollView } from 'react-native';
import UserSaloonDetailsHeader from '../../../Components/UserSaloonDetailHeader';
import { scaleHeight, scaleWidth } from '../../../Constant/DynamicSize';
import SaloonuserDesign from './SaloonuserDesign';
import { Routes } from '../../../Constant/Routes';
import { Images } from '../../../Constant/Images';
import BarberRateList from '../../../Components/BarberRateList';
const style = StyleSheet.create({
    mainContainer: {
        backgroundColor: 'white',
        marginTop: scaleHeight(-50),
        borderTopLeftRadius: scaleWidth(50),
        height: '90%'
    },
    barberRateDesign: {
        backgroundColor: '#FAFAFA',
        height: '100%'
    }
})
const UserSaloonDetails = ({ navigation }) => {
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
    const GalleryPage = () => {
        console.log("gallery")
        navigation.navigate(Routes.SaloonGallery)
    }
    return (
        <SafeAreaView>
            <ScrollView>
                <UserSaloonDetailsHeader navigation={navigation} galleryDesign={GalleryPage} />
                <View style={style.mainContainer}>
                    <SaloonuserDesign navigation={navigation} />
                    <View style={style.barberRateDesign}>
                        <BarberRateList showHeader={true} navigation={navigation} barberList={barberList} />
                    </View>
                    
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default UserSaloonDetails;