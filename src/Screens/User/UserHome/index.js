import React from "react";
import { Dimensions, FlatList, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import UserHeader from "../../../Components/UserHeader";
import LocationConatiner from "../../../Components/LocationConatiner";
import { normalize, scaleHeight, scaleWidth } from "../../../Constant/DynamicSize";
import { TextConstant } from "../../../Constant/TextConstant";
import { FONTS } from "../../../Constant/fonts";
import { Images } from "../../../Constant/Images";
const { width } = Dimensions.get('window');
const itemWidth = 50;
const style = StyleSheet.create({
    mainConatiner: {

    },
    locationConainer: {
        marginTop: scaleHeight(9.5)
    },
    categoriesConatiner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: scaleWidth(16),
        alignItems: 'center'
    },
    categoryText: {
        fontSize: normalize(16),
        fontFamily: FONTS.MontserratSemiBold
    },
    knowmoreText: {
        fontFamily: FONTS.MontserratRegular,
        fontSize: normalize(12)
    },
    itemConatiner: {
        width: 100,
        alignItems:'center'
    },
    title:{
        fontSize:normalize(12),
        fontWeight:'500',
        lineHeight:scaleHeight(15)
    }
})
const UserHome = () => {
    const openCategory = () => {
    }
    const [categoryList, setCategoryList] = React.useState([
        {
            title: 'Hairs cuting',
            Images: Images.HAIRCUTTINGS
        },
        {
            title: 'Hairs cuting',
            Images: Images.HAIRCUTTINGS
        },
        {
            title: 'Hairs cuting',
            Images: Images.HAIRCUTTINGS
        },
        {
            title: 'Hairs cuting',
            Images: Images.HAIRCUTTINGS
        },
        {
            title: 'Hairs cuting',
            Images: Images.HAIRCUTTINGS
        },
        {
            title: 'Hairs cuting',
            Images: Images.HAIRCUTTINGS
        }

    ])
    const renderItem = (item, index) => {
        console.log("item", item?.item)
        return (
            <View key={index} style={style.itemConatiner}>
                <Image source={Images.HAIRCUTTINGS} />
                <Text style={style.title}>{item?.item?.title}</Text>
            </View>
        )
    }
    const calculateColumns = () => Math.floor(width / itemWidth);
    return (
        <SafeAreaView>
            <UserHeader />
            <View style={style.locationConainer}>
                <LocationConatiner />
            </View>
            <View style={style.categoriesConatiner}>
                <Text style={style.categoryText}>{TextConstant.CATEGORIES}</Text>
                <Text style={style.knowmoreText} onPress={() => openCategory()}>{TextConstant.SHOW_MORE}</Text>

            </View>
            <View>
            <FlatList
                data={categoryList}
                renderItem={renderItem}
                // keyExtractor={(item) => item}
                numColumns={calculateColumns()}
            />
            </View>
            {/* <Text>User Home</Text> */}
        </SafeAreaView>
    )
}
export default UserHome;