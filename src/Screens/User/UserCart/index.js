import React from "react";
import { SafeAreaView, StyleSheet, Text, View, FlatList, Image } from 'react-native';
import UserCartHeader from "../../../Components/UserCartHeader";
import ButtonBlue from "../../../Components/Button_Blue";
import { TextConstant } from "../../../Constant/TextConstant";
import { scaleHeight, scaleWidth } from "../../../Constant/DynamicSize";
import { Images } from "../../../Constant/Images";
// import { FlatList } from "react-native-gesture-handler";
const style = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    buttonConatiner: {
        // alignSelf: '',
        position: 'absolute',
        bottom: scaleHeight(35),
        alignSelf: 'center'
        // left:0,
    },
    ImageContainer: {
        width: scaleWidth(80.5),
        alignItems: 'center',
        // borderWidth: 1,
        // marginLeft:scaleWidth(15),
        marginRight: scaleHeight(5),
        padding: scaleHeight(5),
        height: scaleHeight(90),
        marginTop: scaleHeight(10)
    },
    dataConatiner: {
        marginHorizontal: scaleWidth(16)
    }
})
const UserCart = () => {
    const [cartData, setCartData] = React.useState([
        { title: 'Hair Cutting', Image: Images.HAIRCUTTINGS },
        { title: 'Hair Cutting', Image: Images.HAIRCUTTINGS },
        { title: 'Hair Cutting', Image: Images.HAIRCUTTINGS },
        { title: 'Hair Cutting', Image: Images.HAIRCUTTINGS },
        { title: 'Hair Cutting', Image: Images.HAIRCUTTINGS },

    ])
    const renderItems = (item) => {
        return (
            <View style={style.ImageContainer}>
                <Image source={item?.item?.Image} />
                <Text>{item.item.title}</Text>
            </View>
        )
    }
    return (
        <SafeAreaView style={style.mainContainer}>
            <UserCartHeader title={TextConstant.CART} addButton={true}/>
            <View style={style.dataConatiner}>
                <FlatList
                    data={cartData}
                    renderItem={renderItems}
                    numColumns={4}
                />

            </View>
            <View style={style.buttonConatiner}>
                <ButtonBlue buttonText={TextConstant.CHECKOUT} />
            </View>
        </SafeAreaView>
    )
}
export default UserCart;