
import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import UserCartHeader from '../../../Components/UserCartHeader';
import { normalize, scaleHeight, scaleWidth } from '../../../Constant/DynamicSize';
import { Images } from '../../../Constant/Images';
import { FONTS } from '../../../Constant/fonts';
import { Routes } from '../../../Constant/Routes';

const SaloonEditProfile = ({ navigation }) => {
    const [smsEnabled, setSmsEnabled] = useState(false);
    const [emailEnabled, setEmailEnabled] = useState(false);
    const [appNotificationEnabled, setAppNotificationEnabled] = useState(false);

    const toggleSmsSwitch = () => {
        setSmsEnabled(!smsEnabled);
    };

    const toggleEmailSwitch = () => {
        setEmailEnabled(!emailEnabled);
    };

    const toggleAppNotificationSwitch = () => {
        setAppNotificationEnabled(!appNotificationEnabled);
    };

    return (
        <SafeAreaView style={styles.container}>
            <UserCartHeader navigation={navigation} title="Edit Salon Profile" />
            <View style={styles.notificationConatiner}>
                <View style={styles.notificationOption}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.notificationOptionText}>Salon Details</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate(Routes.EditSaloonDetails)}>
                        <Text style={styles.editText}>Edit</Text>
                    </TouchableOpacity>
                </View>
{/* 
                <View style={styles.notificationOption}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.notificationOptionText}>Services</Text>
                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate(Routes.EditSaloonDetails)} >
                        <Text style={styles.editText}>Edit</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.notificationOption}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.notificationOptionText}>Barber Details</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate(Routes.EditSaloonDetails)}>
                        <Text style={styles.editText}>Edit</Text>
                    </TouchableOpacity>
                </View> */}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        // backgroundColor: '#ffffff',
    },
    notificationOption: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: scaleHeight(16),
        marginHorizontal: scaleWidth(16),
        borderBottomWidth: 1,
        paddingBottom: scaleHeight(10),
        borderColor: '#E3E3E3'
    },
    notificationOptionText: {
        fontSize: 16,
    },
    notificationConatiner: {
        backgroundColor: 'white',
        borderRadius: scaleHeight(10),
        marginHorizontal: scaleWidth(10),
        marginTop: scaleHeight(20),
        paddingVertical: scaleHeight(5)
    },
    editText: {
        fontFamily: FONTS.PoppinsRegular,
        fontSize: normalize(14),
        color: '#022A6D'
    }
});
export default SaloonEditProfile