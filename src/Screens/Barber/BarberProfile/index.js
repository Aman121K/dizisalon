import React from "react";
import { Alert, FlatList, Image, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import UserProfileHeader from "../../../Components/UserProfileHeader";
import { Images } from "../../../Constant/Images";
import { normalize, scaleHeight, scaleWidth } from "../../../Constant/DynamicSize";
import { FONTS } from "../../../Constant/fonts";
import { Routes } from "../../../Constant/Routes";
import AsyncStorage from "@react-native-async-storage/async-storage";
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
        marginBottom: Platform.OS === 'ios' ? scaleHeight(260) : scaleHeight(310)
    },
    profileConatiner: {
        flex: 1
    },
    titleStyle: {
        marginLeft: scaleWidth(10),
        fontSize: normalize(13),
        fontFamily: FONTS.MontserratRegular,
        color:'black'
    }
})
const BarberProfile = ({ navigation }) => {
    const [loginUserData,setLoginUserData]=React.useState();
    const [loginData, setLoginData] = React.useState([
        { title: 'My Salon', Image: Images.SaloonIcon },
        { title: 'Customer Lists', Image: Images.CustomerLists },
        { title: 'My Barber', Image: Images.BarberIcon },
        { title: 'Contact Us', Image: Images. Contactes},
        { title: 'My Services', Image: Images.Services },
        { title: 'Refer & Earn', Image: Images.Refers },
        { title: 'FeedBack', Image: Images.FeedBack },
        { title: 'App Version', Image: Images.Versions },
        { title: 'Privacy Policy', Image: Images.PrivacyPolicy },
        { title: 'Logout', Image: Images.Logout },

    ])
    React.useLayoutEffect(()=>{
        getLoginData()
    },[])
    const getLoginData=async()=>{
        let data=await AsyncStorage.getItem('loginData');
        if(data){
            setLoginUserData(JSON.parse(data));
        }
    }
    const gotoPage = (item) => {
        console.log("...",item)
        switch (item) {
            case 'My Salon':
                navigation.navigate(Routes.SaloonMySaloonPage)
                break;
            case 'Customer Lists':
                navigation.navigate(Routes.SaloonCustomerList)
                break;
            case 'My Barber':
                navigation.navigate(Routes.SaloonBarberList)
                break;
            case 'Contact Us':
                navigation.navigate(Routes.SaloonContactUs)
                break;
            case 'My Services':
                navigation.navigate(Routes.SaloonServices)
                break;
            case 'Refer & Earn':
                navigation.navigate(Routes.SaloonBarberReferAndEarn)
                break;
            case 'FeedBack':
                navigation.navigate(Routes.SaloonFeedback)
                break;
            case 'App Version':
                navigation.navigate(Routes.SaloonFeedback)
                break;
            case 'Privacy Policy':
                navigation.navigate(Routes.BarberPrivacyPolicy)
                break;
            case 'Logout':
                navigation.navigate(Routes.Signin)
                break;
            default:
                break;
        }
    }
    const renderItems = (item) => {
        return (
            <TouchableOpacity style={style.dataContainer} onPress={() => gotoPage(item?.item?.title)}>
                <Image source={item?.item?.Image} style={{tintColor:'black'}} />
                <Text style={style.titleStyle}>{item.item.title}</Text>
            </TouchableOpacity>
        )
    }
    const onEditClick = () => {
        navigation.navigate(Routes.BarberProfileDetails)
    }
    return (
        <SafeAreaView style={style.profileConatiner}>
            <UserProfileHeader data={loginUserData} naigation={navigation} onEditButtonClick={onEditClick} />
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
export default BarberProfile;