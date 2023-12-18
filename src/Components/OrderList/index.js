import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Images } from '../../Constant/Images';
import { normalize, scaleHeight } from '../../Constant/DynamicSize';
import { FONTS } from '../../Constant/fonts';
const style = StyleSheet.create({
    mainConatiner: {
        backgroundColor: 'white',
        padding: scaleHeight(10),
        width: '95%',
        borderRadius: scaleHeight(10),
        alignSelf: 'center',
        marginTop: scaleHeight(20)
    },
    subConatiner: {
        flexDirection: 'row',
        alignItems: 'center',
        width: scaleHeight(200)
    },
    listContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: scaleHeight(10)
    },
    textConatiner: {
        marginLeft: scaleHeight(10)
    },
    orderText: {
        fontFamily: FONTS.MontserratRegular,
        fontSize: normalize(14),
        textDecorationLine: 'underline'
    }
})
const OrderList = () => {
    return (
        <View style={style.mainConatiner}>
            <View style={style.listContainer}>
                <View style={style.subConatiner}>
                    <Image source={Images.CustomerList} />
                    <View style={style.textConatiner}>
                        <Text>50</Text>
                        <Text style={[style.orderText, { color: '#022A6D' }]}>Today Orders</Text>
                    </View>
                </View>
                <View style={style.subConatiner}>
                    <Image source={Images.pending} />
                    <View style={style.textConatiner}>
                        <Text>50</Text>
                        <Text style={[style.orderText, { color: '#ED9126' }]}>Pending</Text>
                    </View>
                </View>
            </View>
            <View style={style.listContainer}>
                <View style={style.subConatiner}>
                    <Image source={Images.CompleteList} />
                    <View style={style.textConatiner}>
                        <Text>50</Text>
                        <Text style={[style.orderText, { color: '#32BA7C' }]}>Complete</Text>
                    </View>
                </View>
                <View style={style.subConatiner}>
                    <Image source={Images.CancelList} />
                    <View style={style.textConatiner}>
                        <Text>50</Text>
                        <Text style={[style.orderText, { color: '#ED2626' }]}>Cancel</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
export default OrderList