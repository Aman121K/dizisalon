import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Images } from "../../Constant/Images";
import { scaleHeight, scaleWidth } from "../../Constant/DynamicSize";
const styles = StyleSheet.create({
    mainConatiner: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 15,
        marginTop: scaleHeight(10)
    },
    ImageStyle: {
    },
    backButtonStyle: {
    },
    profileSection: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: scaleHeight(10)
    },
    noticationImage: {
        marginLeft: scaleWidth(20)
    }
})
const BarberHeader = ({ backbutton, navigation }) => {
    return (
        <View style={styles.mainConatiner}>
            <View style={styles.profileSection}>
                <Image source={Images.NotificationUser} />
                <Image source={Images.Notification} style={styles.noticationImage} />
            </View>
            <View>
                <Image style={styles.ImageStyle} source={Images.LOGO_Image} />
            </View>
        </View>
    )
}
export default BarberHeader;