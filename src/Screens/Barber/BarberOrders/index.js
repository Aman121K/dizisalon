import React from "react";
import { View, SafeAreaView, Text, StyleSheet, Image } from 'react-native';
import AuthHeader from "../../../Components/AuthHeader";
import { normalize, scaleHeight, scaleWidth } from "../../../Constant/DynamicSize";
import { FONTS } from "../../../Constant/fonts";
import SearchConatiner from "../../../Components/SearchConatiner";
import SearchNearSaloon from "../../../Components/SearchNearSaloon";
import { Images } from "../../../Constant/Images";
const styles = StyleSheet.create({
    mainContainer: {

    },
    orderListText: {
        fontSize: normalize(18),
        color: 'black',
        fontFamily: FONTS.MontserratSemiBold,
        marginLeft: scaleWidth(10)
    },
    searchConatiner: {
        flexDirection: 'row',
        marginTop: scaleHeight(20)
    },
    dateContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: .5,
        width: scaleWidth(130),
        borderRadius: scaleHeight(5),
        borderColor: '#BAB8B8',
        paddingLeft: scaleWidth(10)
    }

})
const BarberOrders = () => {
    return (
        <SafeAreaView>
            <AuthHeader />
            <Text style={styles.orderListText}>Orders List</Text>
            <View style={styles.searchConatiner}>
                <SearchConatiner />
                <View style={styles.dateContainer}>
                    <Text style={{color:'#BAB8B8'}}>Date Range</Text>
                    <Image style={{tintColor:'#BAB8B8'}} source={Images.ArrowKey} />
                </View>
            </View>

            {/* <SearchNearSaloon/> */}
        </SafeAreaView>
    )
}
export default BarberOrders;