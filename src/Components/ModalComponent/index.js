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
    },
    CancelConatiner: {
        margin: scaleHeight(10)
        // borderWidth:.5,
        // borderColor:''
    },
    CancelStyle: {
        fontSize: normalize(12),
        fontFamily: FONTS.MontserratMedium
    },
    SubTitleStyle: {
        fontSize: normalize(12),
        fontFamily: FONTS.MontserratRegular,
        color: '#868686;',
        textAlign: 'center',
        marginTop: scaleHeight(10)
    }
});
const ModalConatiner = ({ modalVisible, closeModal, title, subTitle, buttonText, onSubmitClick, onCancelClick }) => {
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
                        <Text style={styles.mainTextStyle}>{title}</Text>
                        <Text style={styles.SubTitleStyle}>{subTitle}</Text>
                        <TouchableOpacity style={styles.buttonConatiner} onPress={onSubmitClick}>
                            <Text style={styles.continueStyle}>{buttonText}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.CancelConatiner} onPress={onCancelClick}>
                            <Text style={styles.CancelStyle}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </Pressable>
    )
}
export default ModalConatiner