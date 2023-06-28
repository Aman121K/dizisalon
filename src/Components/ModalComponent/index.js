import React from 'react';
import { View, Text, StyleSheet, Modal, Image, TouchableOpacity, Pressable } from 'react-native';
import { Images } from '../../Constant/Images';
import { TextConstant } from '../../Constant/TextConstant';
import ButtonBlue from '../Button_Blue';
import { normalize, scaleHeight } from '../../Constant/DynamicSize';
import { FONTS } from '../../Constant/fonts';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        // width:'95%'
    },
    modalContent: {
        backgroundColor: 'white',
        padding: scaleHeight(25),
        borderRadius: 8,
        width: '95%',
        alignSelf: 'center',
        alignItems: 'center'
    },
    buttonConatiner: {
        alignSelf: 'center',
        // width:'60%'
        padding: scaleHeight(10),
        backgroundColor: '#022A6D',
        borderRadius: scaleHeight(10),
        marginTop: scaleHeight(10)

    },
    continueStyle: {
        color: 'white',
        fontSize: normalize(16),
        fontFamily: FONTS.MontserratSemiBold,
    },
    mainTextStyle: {
        fontFamily: FONTS.MontserratSemiBold,
        fontSize: normalize(20),
        alignSelf: 'center'
    },
    crossIcon: {
        alignSelf: 'flex-end'
    }
});
const ModalConatiner = ({ modalVisible, closeModal }) => {
    return (
        <Pressable style={styles.container} onPress={closeModal}>
            <Modal
                visible={modalVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={closeModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <TouchableOpacity onPress={closeModal} style={styles.crossIcon}>
                            <Image source={Images.CROSS_ICONS} />
                        </TouchableOpacity>
                        <Image source={Images.Mobile_phone} />
                        <Text style={styles.mainTextStyle}>{TextConstant.MESSAGESUCCESSFULLY}</Text>
                        <TouchableOpacity style={styles.buttonConatiner} onPress={closeModal}>
                            <Text style={styles.continueStyle}>{TextConstant.Continue}</Text>
                            {/* <ButtonBlue buttonText={TextConstant.Continue} /> */}
                        </TouchableOpacity>

                    </View>
                </View>
            </Modal>
        </Pressable>
    )
}
export default ModalConatiner