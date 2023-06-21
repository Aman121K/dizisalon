import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Images } from '../../Constant/Images';
import { scaleWidth } from '../../Constant/DynamicSize';
const style = StyleSheet.create({
    mainConatier: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: scaleWidth(16)
    },
    NotoficationConatiner: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    notficatiomImage: {
        marginRight: scaleWidth(20)
    }

})
const UserHeader = () => {
    return (
        <View style={style.mainConatier}>
            <View>
                <Image source={Images.LOGO_Image} />
            </View>
            <View style={style.NotoficationConatiner}>
                <Image style={style.notficatiomImage} source={Images.Notification} />
                <Image source={Images.NotificationUser} />
            </View>
        </View>
    )
}
export default UserHeader;