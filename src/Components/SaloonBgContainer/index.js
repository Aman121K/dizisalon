import Reat from 'react';
import { Image, ImageBackground, StyleSheet, Text } from 'react-native';
import { normalize, scaleHeight, scaleWidth } from '../../Constant/DynamicSize';
const style = StyleSheet.create({
    mainConatiner: {

    },
    bgImage: {
        height: scaleHeight(185),
        width: scaleWidth(185),
        alignItems: 'center',
    },
    normalImageStyle: {
        marginTop: scaleHeight(50)
    },
    textStyle:{
        fontSize:normalize(13)
    },
    countStyle:{
        fontSize:normalize(17)
    }
})
const SaloonBgConatiner = ({ bgImage, normaImage, text, Count }) => {
    return (
        <ImageBackground style={style.bgImage} source={bgImage}>
            <Image style={style.normalImageStyle} source={normaImage} />
            <Text style={style.textStyle}>{text}</Text>
            <Text style={style.countStyle}>{Count}</Text>
        </ImageBackground>
    )
}
export default SaloonBgConatiner