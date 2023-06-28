import React from "react";
import { FlatList, Image, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import UserProfileHeader from "../../../Components/UserProfileHeader";
import { Images } from "../../../Constant/Images";
import { normalize, scaleHeight, scaleWidth } from "../../../Constant/DynamicSize";
import { FONTS } from "../../../Constant/fonts";
import { Routes } from "../../../Constant/Routes";
const style = StyleSheet.create({
    dataContainer: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: scaleHeight(10),
        paddingVertical: scaleHeight(23),
        width: '90%',
        alignSelf: 'center',
        borderRadius: scaleHeight(10),
        paddingHorizontal: scaleHeight(23)
    },
    listConatinet: {
        marginTop: scaleHeight(13),
        marginBottom:Platform.OS==='ios'?scaleHeight(260):scaleHeight(310)
    },
    profileConatiner: {
        flex: 1
    },
    titleStyle: {
        marginLeft: scaleWidth(10),
        fontSize: normalize(13),
        fontFamily: FONTS.MontserratRegular
    }
})
const UserProfile = ({ navigation }) => {
    const [loginData, setLoginData] = React.useState([
        { title: 'My Booking', Image: Images.BOTTOM_BOOKING },
        { title: 'My Favourite Salon', Image: Images.BOTTOM_BOOKING },
        { title: 'Refer & Earn', Image: Images.BOTTOM_BOOKING },
        { title: 'Contact Us', Image: Images.BOTTOM_BOOKING },
        { title: 'FeedBack', Image: Images.BOTTOM_BOOKING },
        { title: 'Reviews', Image: Images.BOTTOM_BOOKING },
        { title: 'App Version', Image: Images.BOTTOM_BOOKING },
        { title: 'Privacy Policy', Image: Images.BOTTOM_BOOKING },
        { title: 'Logout', Image: Images.BOTTOM_BOOKING },

    ])
    const gotoPage = (item) => {
        switch (item) {
            case 'My Booking':
                navigation.navigate(Routes.UserBookingSaloon)
                break;
            case 'My Favourite Salon':
                navigation.navigate(Routes.UserFavouriteSaloon)
                break;
            case 'Refer & Earn':
                navigation.navigate(Routes.ReferEarn)
                break;
            case 'Contact Us':
                navigation.navigate(Routes.ContactUs)
                break;
            case 'FeedBack':
                navigation.navigate(Routes.FeedBack)
                break;
            case 'App Version':
                navigation.navigate(Routes.AppVersion)
                break;
            case 'Privacy Policy':
                navigation.navigate(Routes.PrivacyPolicy)
                break;
            case 'Logout':

                break;



            default:
                break;
        }
    }
    const renderItems = (item) => {
        return (
            <TouchableOpacity style={style.dataContainer} onPress={() => gotoPage(item?.item?.title)}>
                <Image source={item?.item?.Image} />
                <Text style={style.titleStyle}>{item.item.title}</Text>
            </TouchableOpacity>
        )
    }
    return (
        <SafeAreaView style={style.profileConatiner}>
            <UserProfileHeader />
            <View style={style.listConatinet}>
                <FlatList
                    data={loginData}
                    renderItem={renderItems}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </SafeAreaView>
    )
}
export default UserProfile;