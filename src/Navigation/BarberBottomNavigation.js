import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomBottomTabBar from './CustomBottom';
import BarberHome from '../Screens/Barber/BarberHome';
import BarberOrders from '../Screens/Barber/BarberOrders';
import BarberSaloon from '../Screens/Barber/BarberSaloon';
import BarberProfile from '../Screens/Barber/BarberProfile';
import { Routes } from '../Constant/Routes';
const Tab = createBottomTabNavigator();
const BarberBottoNavigation = () => {
    return (
        <Tab.Navigator
            tabBar={(props) => <CustomBottomTabBar {...props} />}
        >
            <Tab.Screen name={Routes.BarberHome}  component={BarberHome} options={{ headerShown: false }} />
            <Tab.Screen name={Routes.BarberSaloon} component={BarberSaloon} options={{ headerShown: false }} />
            <Tab.Screen name={Routes.BarberOrders} component={BarberOrders} options={{ headerShown: false }} />
            <Tab.Screen name={Routes.BarberProfile} component={BarberProfile} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
}

export default BarberBottoNavigation;
