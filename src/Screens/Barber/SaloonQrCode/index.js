import React from 'react';
import { View, Text } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import QRHeader from '../../../Components/QRHeader';
import ButtonBlue from '../../../Components/Button_Blue';
const SaloonQrCode = () => {
    const printQrCode = () => {

    }
    return (
        <View>
            <QRHeader />
            <QRCode
                value='some string value'
                color={'#2C8DDB'}
                backgroundColor={'white'}
                size={100}
                // logo={require('../../../embed_logo_file_path')} // or logo={{ uri: base64logo }}
                logoMargin={2}
                logoSize={20}
                logoBorderRadius={10}
                logoBackgroundColor={'transparent'}
            />
            <Text>Please Show to your Customer
                to Complete the Orders</Text>

            <ButtonBlue onClick={printQrCode} buttonText="Print" />
        </View>
    )
}
export default SaloonQrCode;