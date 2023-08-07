import React from "react";
import { Image, TouchableOpacity } from 'react-native';
import { Images } from "../../Constant/Images";
const QRHeader = () => {
    return (
        <TouchableOpacity>
            <Image source={Images.CROSS_ICONS} />
        </TouchableOpacity>
    )
}
export default QRHeader;