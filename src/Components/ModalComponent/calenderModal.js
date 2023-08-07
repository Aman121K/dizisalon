import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, Pressable, Image } from 'react-native';
// import Modal from 'react-native-modal';
import { Calendar } from 'react-native-calendars';
import { normalize, scaleHeight, scaleWidth } from '../../Constant/DynamicSize';
import { FONTS } from '../../Constant/fonts';
import { Images } from '../../Constant/Images';
import InputBoxComponent from '../InputBoxComponent';
import InnerTexttInput from '../InnerTextInput';
const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: scaleHeight(25),
        borderRadius: 8,
        width: '95%',
        alignSelf: 'center'

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
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    dateContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignSelf:'center'
    }
});
const CalenderModal = ({ isVisible, closeModal, selectedDate, onDateSelect }) => {
    return (
        <Pressable style={styles.container} onPress={closeModal}>
            <Modal
                visible={isVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={closeModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <View style={styles.dateContainer}>
                            <Text style={{ alignSelf: 'center', marginLeft: scaleWidth(80),fontFamily:FONTS.MontserratBold,fontSize:normalize(16) }}>Please Select Range</Text>
                            <TouchableOpacity onPress={closeModal}>
                                <Image source={Images.CROSS_ICONS} />
                            </TouchableOpacity>
                        </View>
                        <View style={{alignSelf:'center',flexDirection:'row'}}>
                            <Text>From</Text>
                            <Text>To</Text>
                            {/* <InnerTexttInput placeholderText="From"/>
                            <InnerTexttInput placeholderText="To"/> */}
                        </View>
                        <Calendar />
                    </View>
                </View>
            </Modal>
        </Pressable>
    );
};
export default CalenderModal;



