import React from 'react';
import { Image, View, Text } from 'react-native';
import { Images } from '../../Constant/Images';
import { TextConstant } from '../../Constant/TextConstant';
import ButtonBlue from '../Button_Blue';
const NoInternet = () => {
    return (
        <View>
            <Image source={Images.NoInternet} />
            <Text>{TextConstant.NO_Connection}</Text>
            <Text>{TextConstant}</Text>
            <ButtonBlue buttonText="Try Again" />
        </View>
    )
}
export default NoInternet;