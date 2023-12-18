import React from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { Images } from '../../../Constant/Images';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { normalize, scaleHeight } from '../../../Constant/DynamicSize';
import BookingCompletion from '../../../Components/BookingCompletion';
import { TextConstant } from '../../../Constant/TextConstant';
const styles = StyleSheet.create({
    centerText: {
        // flex: 1,
        fontSize: normalize(18),
        // padding: scaleHeight(32),
        // color: '#777'
    },
    textBold: {
        fontWeight: '500',
        // color: '#000'
    },
    buttonText: {
        fontSize: normalize(21),
        // color: 'rgb(0,122,255)'
    },
    buttonTouchable: {
        // padding: scaleHeight(16)
    }
});
const UserQrScanner = ({ navigation }) => {
    const [showQrresult, setQrresult] = React.useState(false);
    const onSuccess = () => {
        setQrresult(!showQrresult)
        Linking.openURL(e.data).catch(err =>
            console.error('An error occured', err)
        );
    }
    return (
        <SafeAreaView>
            <TouchableOpacity>
                <Image source={Images.CROSS_ICONS} />
            </TouchableOpacity>
            <View style={{ marginTop: 10 }}>
                <QRCodeScanner
                    onRead={onSuccess}
                // flashMode={RNCamera.Constants.FlashMode.torch}
                // topContent={
                //     <Text style={styles.centerText}>
                //         Go to{' '}
                //         <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
                //         your computer and scan the QR code.
                //     </Text>
                // }
                // bottomContent={
                //     <TouchableOpacity style={styles.buttonTouchable}>
                //         <Text style={styles.buttonText}>OK. Got it!</Text>
                //     </TouchableOpacity>
                // }
                />
            </View>
            {showQrresult &&
                <BookingCompletion image={Images.QRCODE_CORRECT} buttonTitle={TextConstant.COMp} />
            }
        </SafeAreaView>
    )
}
export default UserQrScanner;