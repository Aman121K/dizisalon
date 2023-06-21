
import React from "react";
import Splash from "../Screens/Auth/Splash";
import Signin from "../Screens/Auth/Signin";
import Signup from "../Screens/Auth/Signup";
import Welcome from "../Screens/Auth/Welcome";
import CreatePin from "../Screens/Auth/CreatePin";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChooseType from "../Screens/Auth/ChooseType";
import { Routes } from "../Constant/Routes";
import Barber from "../Screens/Barber";
import User from "../Screens/User";
import BarberBottoNavigation from "./BarberBottomNavigation";
import { StylesContants } from "../Constant/StylesContants";
import TrendingDetails from "../Screens/TrendingStyle/TrendingDetails";
import TrendingList from "../Screens/TrendingStyle/TrendingList";
import UserBottoNavigation from "./UserBottomNavigation";
const Stack = createNativeStackNavigator();
const StackNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={Routes.Splash} component={Splash} options={{ headerShown: false }} />
            <Stack.Screen name={Routes.Signin} component={Signin} options={{ headerShown: false }} />
            <Stack.Screen name={Routes.Signup} component={Signup} options={{ headerShown: false }} />
            <Stack.Screen name={Routes.Welcome} component={Welcome} options={{ headerShown: false }} />
            <Stack.Screen name={Routes.ChooseType} component={ChooseType} options={{ headerShown: false }} />
            <Stack.Screen name={Routes.CreatePin} component={CreatePin} options={{ headerShown: false }} />
            <Stack.Screen name={Routes.Barber} component={Barber} options={{ headerShown: false }} />
            <Stack.Screen name={Routes.User} component={User} options={{ headerShown: false }} />
            <Stack.Screen name="UserBottomNavigtion" component={UserBottoNavigation} options={{ headerShown: false }} />
            <Stack.Screen name="BarberBottoNavigation" component={BarberBottoNavigation} options={{ headerShown: false }} />
            <Stack.Screen name={Routes.TrendingDetails} component={TrendingDetails} options={{ headerShown: false }} />
            <Stack.Screen name={Routes.TrendingList} component={TrendingList} options={{ headerShown: false }} />
        </Stack.Navigator>

    )
}
export default StackNavigation;