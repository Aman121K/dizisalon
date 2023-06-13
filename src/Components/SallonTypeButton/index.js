import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import { TextConstant } from '../../Constant/TextConstant';
import { scaleHeight, scaleWidth } from '../../Constant/DynamicSize';
const styles = StyleSheet.create({
    mainContainer: {
        padding: scaleHeight(15),
        alignItems: 'center',
        borderWidth: .5,
        marginTop: scaleHeight(24)
    },
    imageStyle: {

    },
    textStyle: {
        marginTop: scaleHeight(14.5),
        marginHorizontal: scaleWidth(25),
        // marginVertical: scaleHeight(21)
    }
})
const SaloonType = ({ level, image, onClick }) => {
    return (
        <TouchableOpacity style={styles.mainContainer} onPress={() => onClick(level)}>
            <Image source={image} />
            <Text style={styles.textStyle}>{level}</Text>
        </TouchableOpacity>
    )
}
export default SaloonType;