import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Images } from "../../Constant/Images";
import { scaleHeight } from "../../Constant/DynamicSize";
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
    }
})
const AuthHeader = ({ backbutton,navigation }) => {
    return (
        <View style={styles.mainConatiner}>
            <View>
                {backbutton && <TouchableOpacity onPress={() => navigation.goBack()}><Image style={styles.backButtonStyle} source={Images.BackBuuton} /></TouchableOpacity>}
            </View>
            <View>
                <Image style={styles.ImageStyle} source={Images.LOGO_Image} />
            </View>
        </View>
    )
}
export default AuthHeader;