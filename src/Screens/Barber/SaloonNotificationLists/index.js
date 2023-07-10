import React from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView, Image } from 'react-native';
import UserCartHeader from '../../../Components/UserCartHeader';
import { Images } from '../../../Constant/Images';
import moment from 'moment';
import { normalize, scaleHeight, scaleWidth } from '../../../Constant/DynamicSize';

const notifications = [
    {
        id: 1,
        title: 'Notification 1',
        content: 'This is notification 1.',
        timestamp: new Date().toISOString(),
    },
    {
        id: 2,
        title: 'Notification 2',
        content: 'This is notification 2.',
        timestamp: new Date(Date.now() - 86400000).toISOString(),
    },
    {
        id: 3,
        title: 'Notification 3',
        content: 'This is notification 3.',
        timestamp: new Date(Date.now() - 86400000).toISOString(),
    },
    {
        id: 3,
        title: 'Notification 3',
        content: 'This is notification 3.',
        timestamp: new Date(Date.now() - 86400000).toISOString(),
    },
    {
        id: 3,
        title: 'Notification 3',
        content: 'This is notification 3.',
        timestamp: new Date(Date.now() - 86400000).toISOString(),
    },
];

const SaloonNotificationLists = ({ navigation }) => {
    const groupNotificationsByDate = () => {
        const groupedNotifications = {};

        notifications.forEach((notification) => {
            const date = notification.timestamp.slice(0, 10);

            if (!groupedNotifications[date]) {
                groupedNotifications[date] = [];
            }

            groupedNotifications[date].push(notification);
        });

        return groupedNotifications;
    };

    const renderNotificationItem = ({ item }) => (
        <View style={styles.notificationItem}>
            <Text style={styles.notificationTitle}>{item.title}</Text>
            <Text style={styles.notificationContent}>{item.content}</Text>
            <Text style={styles.notificationTimestamp}>{item.timestamp}</Text>
        </View>
    );

    const groupedNotifications = groupNotificationsByDate();
    const notificationDates = Object.keys(groupedNotifications).sort((a, b) => new Date(b) - new Date(a));

    return (
        <SafeAreaView style={styles.container}>
            <UserCartHeader navigation={navigation} addSetting={true} title="Notification" />
            <FlatList
                data={notificationDates}
                renderItem={({ item }) => (
                    <View style={{ marginTop: scaleHeight(10) }}>
                        <Text style={styles.heading}>{item}</Text>
                        {groupedNotifications[item].map((notification) => (
                            <View key={notification.id} style={styles.notificationWrapper}>
                                <View style={styles.notificationLine} />
                                <View style={styles.notificationContentContainer}>
                                    <View style={styles.barberConatiner}>
                                        <Image source={Images.BarberIcon} />
                                    </View>
                                    <View style={{ width: scaleWidth(220), marginLeft: scaleWidth(10) }}>
                                        <Text style={styles.notificationTitle}>{notification.title}</Text>
                                        <Text style={styles.notificationContent}>{notification.content}</Text>
                                    </View>
                                    <View>
                                        <Text>{moment(notification?.timestamp).format('hh:mm a')}</Text>
                                    </View>
                                </View>
                            </View>
                        ))}
                    </View>
                )}
                keyExtractor={(item) => item}
                ListEmptyComponent={<Text>No notifications found.</Text>}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#ffffff',
    },
    heading: {
        fontSize: normalize(16),
        fontWeight: 'bold',
        marginBottom: scaleHeight(8),
        marginLeft: scaleWidth(20)
    },
    notificationWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: scaleHeight(16),
    },
    notificationLine: {
        width: scaleWidth(4),
        height: '100%',
        backgroundColor: '#EFEFEF',
        marginRight: scaleWidth(16),
    },
    notificationContentContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#C0BFD74D',
        backgroundColor: 'white',
        paddingBottom: scaleHeight(10)

        // textDecorationLine: "underline"
    },
    notificationTitle: {
        fontSize: normalize(14),
        fontWeight: 'bold',
    },
    notificationContent: {
        fontSize: normalize(12),
        color: '#666666',
    },
    notificationTimestamp: {
        fontSize: normalize(12),
        color: '#999999',
        marginTop: 4,
    },
    barberConatiner: {
        flexDirection: 'row',
        alignItems: 'center',
    }
});

export default SaloonNotificationLists