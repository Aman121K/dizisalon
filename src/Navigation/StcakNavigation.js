
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
import TrendingDetails from "../Screens/TrendingStyle/TrendingDetails";
import TrendingList from "../Screens/TrendingStyle/TrendingList";
import UserBottoNavigation from "./UserBottomNavigation";
import AppVersion from "../Screens/User/AppVersion";
import ContactUs from "../Screens/User/ContactUs";
import FeedBack from "../Screens/User/Feedback";
import ReferEarn from "../Screens/User/ReferEarn";
import PrivacyPolicy from "../Screens/User/PrivacyPolicy";
import UserBookingSaloon from "../Screens/User/UserBookingSaloon";
import Reviews from "../Screens/User/Reviews";
import UserFavouriteSaloon from "../Screens/User/UserFavouriteSaloon";
import UserSaloonDetails from "../Screens/User/UserSaloonDetails";
import UserReviewList from "../Screens/User/UserReviewList";
import UserRecommendedBarber from "../Screens/User/UserRecommendedBarber";
import SaloonBookingScreen from "../Screens/User/SaloonBookingScreen";
import UserServices from "../Screens/User/UserServices";
import SaloonGallery from "../Screens/User/SaloonGallery";
import UserLocationMap from "../Screens/User/UserLocationMap";
import UserBookingComplete from "../Screens/User/UserBookingComplete";
import UserQrScanner from "../Screens/User/UserQrScanner";
import EditUserScreen from "../Screens/User/EditUserScreen";
import ProfileDetials from "../Screens/User/ProfileDetails";
import UserNotification from "../Screens/User/UserNotification";
import ForgotMpin from "../Screens/Auth/ForgotMpin";
import SaloonAddCustomer from "../Screens/Barber/SaloonAddCustomer";
import SaloonCustomerDetailPage from "../Screens/Barber/SaloonCustomerDetailPage";
import SaloonCustomerList from "../Screens/Barber/SaloonCustomerList";
import SaloonDetailsPage from "../Screens/Barber/SaloonDetailsPage";
import SaloonQrCode from "../Screens/Barber/SaloonQrCode";
import BarberPrivacyPolicy from "../Screens/Barber/BarberPrivacyPolicy";
import SaloonBarberReferAndEarn from "../Screens/Barber/BarberreferAndEarn";
import SaloonAddBarber from "../Screens/Barber/SaloonAddBarber";
import SaloonAddServices from "../Screens/Barber/SaloonAddServices";
import SaloonBarberDetialPage from "../Screens/Barber/SaloonBarberDetialPage";
import SaloonBarberList from "../Screens/Barber/SaloonBarberList";
import SaloonEditProfile from "../Screens/Barber/SaloonEditProfile";
import SaloonFeedback from "../Screens/Barber/SaloonFeedback";
import SaloonNotification from "../Screens/Barber/SaloonNotification";
import SaloonNotificationLists from "../Screens/Barber/SaloonNotificationLists";
import SaloonServices from "../Screens/Barber/SaloonServices";
import SaloonContactUs from "../Screens/Barber/SaloonContactUs";
import BarberProfileDetails from "../Screens/Barber/BarberProfileDetails";
import SaloonChangePassword from "../Screens/Barber/SaloonChangePassword";
import EditSaloonDetails from "../Screens/Barber/EditSaloonDetails";
import SaloonKycDetails from "../Screens/Barber/SaloonKycDetails";
import AddSaloonkycDetails from "../Screens/Barber/ListNow/AddSaloonkycDetails";
import AddBarberList from "../Screens/Barber/ListNow/AddBarberList";
import AddUnisexServices from "../Screens/Barber/ListNow/AddUnisexServices";
import BarberEditPage from "../Screens/Barber/BarberEditPage";
import SaloonMySaloonPage from "../Screens/Barber/SaloonMySaloonPage";
import SaloonSales from "../Screens/Barber/SaloonSales";
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
            <Stack.Screen name={Routes.ContactUs} component={ContactUs} options={{ headerShown: false }} />
            {/* <Stack.Screen name={Routes.Review} component={Review} options={{ headerShown: false }} /> */}
            <Stack.Screen name={Routes.PrivacyPolicy} component={PrivacyPolicy} options={{ headerShown: false }} />
            <Stack.Screen name={Routes.ReferEarn} component={ReferEarn} options={{ headerShown: false }} />
            <Stack.Screen name={Routes.UserBookingSaloon} component={UserBookingSaloon} options={{ headerShown: false }} />
            <Stack.Screen name={Routes.UserFavouriteSaloon} component={UserFavouriteSaloon} options={{ headerShown: false }} />
            <Stack.Screen name={Routes.FeedBack} component={FeedBack} options={{ headerShown: false }} />
            <Stack.Screen name={Routes.AppVersion} component={AppVersion} options={{ headerShown: false }} />
            <Stack.Screen name={Routes.UserSaloonDetails} component={UserSaloonDetails} options={{ headerShown: false }} />
            <Stack.Screen name={Routes.UserReviewList} component={UserReviewList} options={{ headerShown: false }} />
            <Stack.Screen name={Routes.UserRecommendedBarber} component={UserRecommendedBarber} options={{ headerShown: false }} />
            <Stack.Screen name={Routes.SaloonBookingScreen} component={SaloonBookingScreen} options={{ headerShown: false }} />
            <Stack.Screen name={Routes.UserServices} component={UserServices} options={{ headerShown: false }} />
            <Stack.Screen name={Routes.SaloonGallery} component={SaloonGallery} options={{ headerShown: false }} />
            <Stack.Screen name={Routes.UserLocationMap} component={UserLocationMap} options={{ headerShown: false }} />
            <Stack.Screen name={Routes.UserBookingComplete} component={UserBookingComplete} options={{ headerShown: false }} />
            <Stack.Screen name={Routes.UserQrScanner} component={UserQrScanner} options={{ headerShown: false }} />
            <Stack.Screen name={Routes.EditUserScreen} component={EditUserScreen} options={{ headerShown: false }} />
            <Stack.Screen name={Routes.ProfileDetials} component={ProfileDetials} options={{ headerShown: false }} />
            <Stack.Screen name={Routes.UserNotification} component={UserNotification} options={{ headerShown: false }} />
            <Stack.Screen name={Routes.ForgotMpin} component={ForgotMpin} options={{ headerShown: false }} />
            <Stack.Screen name={Routes.Reviews} component={Reviews} options={{ headerShown: false }} />
            <Stack.Screen name={Routes.SaloonAddCustomer} component={SaloonAddCustomer} options={{ headerShown: false }} />
            <Stack.Screen name={Routes.SaloonCustomerDetailPage} component={SaloonCustomerDetailPage} options={{ headerShown: false }} />
            <Stack.Screen name={Routes.SaloonCustomerList} component={SaloonCustomerList} options={{ headerShown: false }} />
            <Stack.Screen name={Routes.SaloonDetailsPage} component={SaloonDetailsPage} options={{ headerShown: false }} />
            <Stack.Screen name={Routes.SaloonQrCode} component={SaloonQrCode} options={{ headerShown: false }} />
            <Stack.Screen name={Routes.BarberPrivacyPolicy} component={BarberPrivacyPolicy} options={{ headerShown: false }} />
            <Stack.Screen name={Routes.SaloonBarberReferAndEarn} component={SaloonBarberReferAndEarn} options={{ headerShown: false }} />
            <Stack.Screen name={Routes.SaloonAddBarber} component={SaloonAddBarber} options={{ headerShown: false }} />
            <Stack.Screen name={Routes.SaloonAddServices} component={SaloonAddServices} options={{ headerShown: false }} />
            <Stack.Screen name={Routes.SaloonBarberDetialPage} component={SaloonBarberDetialPage} options={{ headerShown: false }} />
            <Stack.Screen name={Routes.SaloonBarberList} component={SaloonBarberList} options={{ headerShown: false }} />
            <Stack.Screen name={Routes.SaloonEditProfile} component={SaloonEditProfile} options={{ headerShown: false }} />
            <Stack.Screen name={Routes.SaloonFeedback} component={SaloonFeedback} options={{ headerShown: false }} />
            <Stack.Screen name={Routes.SaloonNotification} component={SaloonNotification} options={{ headerShown: false }} />
            <Stack.Screen name={Routes.SaloonNotificationLists} component={SaloonNotificationLists} options={{ headerShown: false }} />
            <Stack.Screen name={Routes.SaloonServices} component={SaloonServices} options={{ headerShown: false }} />
            <Stack.Screen name={Routes.SaloonContactUs} component={SaloonContactUs} options={{ headerShown: false }} />
            <Stack.Screen name={Routes.BarberProfileDetails} component={BarberProfileDetails} options={{ headerShown: false }} />
            <Stack.Screen name={Routes.SaloonChangePassword} component={SaloonChangePassword} options={{ headerShown: false }} />
            <Stack.Screen name={Routes.EditSaloonDetails} component={EditSaloonDetails} options={{ headerShown: false }} />
            <Stack.Screen name={Routes.SaloonKycDetails} component={SaloonKycDetails} options={{ headerShown: false }} />
            <Stack.Screen name={Routes.AddSaloonkycDetails} component={AddSaloonkycDetails} options={{ headerShown: false }} />
            <Stack.Screen name={Routes.AddUnisexServices} component={AddUnisexServices} options={{ headerShown: false }} />
            <Stack.Screen name={Routes.AddBarberList} component={AddBarberList} options={{ headerShown: false }} />
            <Stack.Screen name={Routes.BarberEditPage} component={BarberEditPage} options={{ headerShown: false }} />
            <Stack.Screen name={Routes.SaloonMySaloonPage} component={SaloonMySaloonPage} options={{ headerShown: false }} />
            <Stack.Screen name={Routes.SaloonSales} component={SaloonSales} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}
export default StackNavigation;