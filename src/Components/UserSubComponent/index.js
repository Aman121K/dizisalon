import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Images } from '../../Constant/Images';
import { normalize, scaleHeight, scaleWidth } from '../../Constant/DynamicSize';
import { FONTS } from '../../Constant/fonts';
const style = StyleSheet.create({
    mainConatiner: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: scaleWidth(16)
    },
    mainSubConatiner: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    titleSTyle: {
        fontSize: normalize(22),
        marginLeft: scaleWidth(8),
        fontFamily: FONTS.MontserratSemiBold
    }

})
const UserSubComponent = ({ titel, navigation }) => {
    return (
        <View style={style.mainConatiner}>
            <View style={style.mainSubConatiner}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={Images.BackBuuton} />
                </TouchableOpacity>
                <View>
                    <Text style={style.titleSTyle}>{titel}</Text>
                </View>
            </View>
            <View>
                {/* <TouchableOpacity> */}
                <Image source={Images.LOGO_Image} />
                {/* </TouchableOpacity> */}
            </View>
        </View>
    )
}
export default UserSubComponent;