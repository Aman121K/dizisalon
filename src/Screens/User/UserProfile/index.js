import React from "react";
import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import UserProfileHeader from "../../../Components/UserProfileHeader";
import { Images } from "../../../Constant/Images";
import { scaleHeight } from "../../../Constant/DynamicSize";
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
        paddingHorizontal:scaleHeight(23)
    },
    listConatinet: {
        marginTop: scaleHeight(13)
    }
})
const UserProfile = () => {
    const [loginData, setLoginData] = React.useState([
        { title: 'My Booking', Image: Images.BOTTOM_BOOKING },
        { title: 'My Favourite Salon', Image: Images.BOTTOM_BOOKING },
        { title: 'Refer & Earn', Image: Images.BOTTOM_BOOKING },
        { title: 'Contact Us', Image: Images.BOTTOM_BOOKING },

    ])
    const gotoPage=()=>{
        
    }
    const renderItems = (item) => {
        return (
            <TouchableOpacity style={style.dataContainer} onPress={()=>gotoPage()}>
                <Image source={item?.item?.Image} />
                <Text>{item.item.title}</Text>
            </TouchableOpacity>
        )
    }
    return (
        <SafeAreaView>
            <UserProfileHeader />
            <View style={style.listConatinet}>
                <FlatList
                    data={loginData}
                    renderItem={renderItems}
                />
            </View>
        </SafeAreaView>
    )
}
export default UserProfile;