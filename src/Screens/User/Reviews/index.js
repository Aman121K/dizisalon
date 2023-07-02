import React from 'react';
import { SafeAreaView, View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import UserCartHeader from '../../../Components/UserCartHeader';
import { Images } from '../../../Constant/Images';
import { scaleHeight, scaleWidth } from '../../../Constant/DynamicSize';
const style = StyleSheet.create({
    mainConatiner: {
        // height:'100%'
    },
    cardConatiner: {
        alignItems: 'center',
        width: scaleHeight(160),
        backgroundColor: 'white',
        margin: scaleHeight(5),
        padding: scaleHeight(10),
        borderRadius: scaleHeight(10)
        // alignSelf:'center'
    },
    imageStyle: {
        borderRadius: 99
    },
    flatListConatiner: {
        marginHorizontal: scaleWidth(10),
        marginBottom: scaleHeight(80),
        alignSelf: 'center'
    },
    starConatiner: {
        flexDirection: 'row'
    }
})
const Reviews = ({ navigation }) => {
    const [reviewsData, setreviewsData] = React.useState([
        {
            customerName: 'Manish Singh',
            saloonName: 'Salon Name',
            CustomerUrl: Images.LOGIN_USER_IMAGE,
            title: 'Hair cutting',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
            serviceDate: '5 days ago'
        },
        {
            customerName: 'Manish Singh',
            saloonName: 'Salon Name',
            CustomerUrl: Images.LOGIN_USER_IMAGE,
            title: 'Hair cutting',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
            serviceDate: '5 days ago'
        },
        {
            customerName: 'Manish Singh',
            saloonName: 'Salon Name',
            CustomerUrl: Images.LOGIN_USER_IMAGE,
            title: 'Hair cutting',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
            serviceDate: '5 days ago'
        },
        {
            customerName: 'Manish Singh',
            saloonName: 'Salon Name',
            CustomerUrl: Images.LOGIN_USER_IMAGE,
            title: 'Hair cutting',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
            serviceDate: '5 days ago'
        },
        {
            customerName: 'Manish Singh',
            saloonName: 'Salon Name',
            CustomerUrl: Images.LOGIN_USER_IMAGE,
            title: 'Hair cutting',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
            serviceDate: '5 days ago'
        },
        {
            customerName: 'Manish Singh',
            saloonName: 'Salon Name',
            CustomerUrl: Images.LOGIN_USER_IMAGE,
            title: 'Hair cutting',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
            serviceDate: '5 days ago'
        },
        {
            customerName: 'Manish Singh',
            saloonName: 'Salon Name',
            CustomerUrl: Images.LOGIN_USER_IMAGE,
            title: 'Hair cutting',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
            serviceDate: '5 days ago'
        },
    ])
    const renderItem = ({ item }) => {
        console.log("reviews items>>", item)
        return (
            <TouchableOpacity style={style.cardConatiner}>
                <View style={style.cardConatiner}>
                    <Image style={style.imageStyle} source={item?.CustomerUrl} />
                    <Text>{item?.customerName}</Text>
                    <Text>{item?.saloonName}</Text>
                </View>
                <View style={style.starConatiner}>
                    <Image source={Images.STAR} />
                    <Image source={Images.STAR} />
                    <Image source={Images.STAR} />
                    <Image source={Images.STAR} />
                    <Image source={Images.STAR} />
                </View>
                <Text>{item?.description}</Text>
                <Text>{item?.serviceDate}</Text>
            </TouchableOpacity>
        )
    }
    return (
        <SafeAreaView style={style.mainConatiner}>
            <UserCartHeader title="Reviews" navigation={navigation} />
            <View style={style.flatListConatiner}>
                <FlatList
                    data={reviewsData}
                    renderItem={renderItem}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}

                />
            </View>
        </SafeAreaView>
    )
}
export default Reviews;