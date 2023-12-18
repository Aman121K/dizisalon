
import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, SafeAreaView, Image } from 'react-native';
import UserCartHeader from '../../../Components/UserCartHeader';
import { scaleHeight, scaleWidth } from '../../../Constant/DynamicSize';
import { Images } from '../../../Constant/Images';

const SaloonNotification = ({ navigation }) => {
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
            <UserCartHeader navigation={navigation} title="Notification" />
            <View style={styles.notificationConatiner}>
                <View style={styles.notificationOption}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={Images.BarberIcon} />
                        <Text style={styles.notificationOptionText}>SMS Notifications</Text>
                    </View>
                    <Switch
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={smsEnabled ? '#f5dd4b' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSmsSwitch}
                        value={smsEnabled}
                    />
                </View>

                <View style={styles.notificationOption}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={Images.BarberIcon} />
                        <Text style={styles.notificationOptionText}>Email Notifications</Text>
                    </View>

                    <Switch
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={emailEnabled ? '#f5dd4b' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleEmailSwitch}
                        value={emailEnabled}
                    />
                </View>

                <View style={styles.notificationOption}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={Images.BarberIcon} />
                        <Text style={styles.notificationOptionText}>App Notifications</Text>
                    </View>
                    <Switch
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={appNotificationEnabled ? '#f5dd4b' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleAppNotificationSwitch}
                        value={appNotificationEnabled}
                    />
                </View>
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
    }
});
export default SaloonNotification