import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomBottomTabBar from './CustomBottom';
import UserHome from '../Screens/User/UserHome';
import UserBooking from '../Screens/User/UserBooking';
import UserCart from '../Screens/User/UserCart';
import UserProfile from '../Screens/User/UserProfile';
import UserSearch from '../Screens/User/UserSearch';
import { Routes } from '../Constant/Routes';
const Tab = createBottomTabNavigator();
const UserBottoNavigation = () => {
    return (
        <Tab.Navigator
            tabBar={(props) => <CustomBottomTabBar {...props} />}
        >
            <Tab.Screen name={Routes.UserHome} component={UserHome} options={{ headerShown: false }} />
            <Tab.Screen name={Routes.UserSearch} component={UserSearch} options={{ headerShown: false }} />
            <Tab.Screen name={Routes.UserBookings} component={UserBooking} options={{ headerShown: false }} />
            <Tab.Screen name={Routes.UserCart} component={UserCart} options={{ headerShown: false }} />
            <Tab.Screen name={Routes.UserProfile} component={UserProfile} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
}

export default UserBottoNavigation;
