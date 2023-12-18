import React from "react";
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { normalize, scaleHeight, scaleWidth } from "../../Constant/DynamicSize";
import { FONTS } from "../../Constant/fonts";
const style = StyleSheet.create({
    mainConatiner: {
        flex: 1
    },
    itemConatiner: {
        backgroundColor: 'white',
        width: '95%',
        borderRadius: scaleWidth(10),
        alignSelf: 'center',
        marginTop: scaleHeigh(10),
        //   padding:scaleHeight(10),
        flexDirection: 'row'
    },
    borderColor: {
        borderWidth: 5,
        borderColor: 'red',
        backgroundColor: 'red',
        borderTopLeftRadius: scaleHeight(10),
        borderBottomLeftRadius: scaleHeight(10)
    },
    dataContainer: {
        padding: scaleHeight(5)
        , flexDirection: 'row',
    },
    dataSubContainer: {
        flexDirection: 'row',
        marginHorizontal: scaleWidth(5),
        justifyContent: 'space-evenly'
    },
    locationConatiner: {
        flexDirection: 'row'
    },
    userImageStyle: {
        marginHorizontal: scaleWidth(12)
    },
    statusConatiner: {
        backgroundColor: 'red',
        padding: scaleHeight(10),
        borderRadius: scaleHeight(10)
    },
    customerName: {
        fontSize: normalize(14),
        fontFamily: FONTS.MontserratSemiBold
    },
    customerMobile: {
        fontFamily: FONTS.MontserratRegular,
        fontSize: normalize(13),
        color: '#818181'
    }

})
const CustomerList = ({ navigation }) => {
    const [bookingData, setBookingData] = React.useState([
        {
            customerName: 'abc',
            barberName: 'Abc',
            customerMobile: '+91+910000000',
            action: 'Shaving',
            status: 'complete',
            duration: '26 Min.'
        },
        {
            customerName: 'def',
            barberName: 'Abc',
            customerMobile: '+91+910000000',
            action: 'Shaving',
            status: 'complete',
            duration: '26 Min.'
        },
        {
            customerName: 'xyz',
            barberName: 'Abc',
            customerMobile: '+91+910000000',
            action: 'Shaving',
            status: 'complete',
            duration: '26 Min.'
        },
        {
            customerName: 'def',
            barberName: 'Abc',
            customerMobile: '+91+910000000',
            action: 'Shaving',
            status: 'complete',
            duration: '26 Min.'
        },
        {
            customerName: 'ggf',
            barberName: 'Abc',
            customerMobile: '+91+910000000',
            action: 'Shaving',
            status: 'complete',
            duration: '26 Min.'
        },

    ])
    const renderItem = ({ item }) => {
        console.log("item", item)
        return (
            <TouchableOpacity style={style.itemConatiner}>
                <View style={style.borderColor}><Text style={{ color: 'red' }}>.</Text></View>
                <View style={style.dataContainer}>
                    <View style={style.userImageStyle}>
                        <Image source={Images.BookingUserIcon} />
                    </View>
                    <View style={style.dataSubContainer}>
                        <View>
                            <Text style={style.customerName}>{item?.customerName}</Text>
                            <Text style={style.customerMobile}>{item?.customerMobile}</Text>
                            <Text style={style.customerMobile}>{item?.action}</Text>
                        </View>
                        <View>
                            <Image source={Images.UniIcon} />
                        </View>
                        <View>
                            <Text style={style.customerName}>{item?.barberName}</Text>
                            <View style={style.locationConatiner}>
                                <Image source={Images.LOCATION} />
                                <Text style={style.customerMobile}>{item.duration}</Text>

                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View style={style.statusConatiner}>
                                    <Text style={{ color: 'white' }}>{item?.status}</Text>
                                </View>
                                {item?.status === 'incomplete' &&
                                    <TouchableOpacity>
                                        <Image source={Images.CROSS_ICONS} style={{ marginLeft: scaleWidth(5) }} />
                                    </TouchableOpacity>
                                }
                            </View>
                        </View>
                    </View>
                </View>
                {/* <Text>{item?.customerName}</Text> */}
            </TouchableOpacity>
        )
    }
    return (
        <SafeAreaView style={style.mainConatiner}>
            <UserSubComponent titel={TextConstant.MY_BOOKING} navigation={navigation} />
            <View style={{ marginTop: scaleHeight(20) }}>
                <FlatList
                    data={bookingData}
                    renderItem={renderItem}
                />
            </View>
        </SafeAreaView>
    )
}
export default CustomerList;