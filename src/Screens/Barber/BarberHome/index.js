import React from "react";
import { View, SafeAreaView, Text, StyleSheet, Image, FlatList, ScrollView, BackHandler, Alert } from 'react-native';
import BarberHeader from "../../../Components/BarberHeader";
import { normalize, scaleHeight, scaleWidth } from "../../../Constant/DynamicSize";
import { Images } from "../../../Constant/Images";
import Crasual from "../../../Components/Crasual";
import { TextConstant } from "../../../Constant/TextConstant";
import { FONTS } from "../../../Constant/fonts";
import KycDetailsHome from "../../../Components/KycDetailsHome";
import { Routes } from "../../../Constant/Routes";
import SaloonDetailsHome from "../../../Components/SaloonDetailsHome";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from "@react-navigation/native";
import { TabContext } from "../../../Context/TabProvider";
import { Apis, BASE_URL } from "../../../Constant/APisUrl";
const styles = StyleSheet.create({
    homeConatiner: {
        // flex: 1
    },
    homDesign: {
        marginTop: scaleHeight(30),
        marginHorizontal: scaleWidth(16)
    },
    kycMainstyle: {
        fontSize: normalize(15),
        fontFamily: FONTS.MontserratMedium,
        lineHeight: scaleHeight(18),
        color: '#000000',
    },
    tredingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: scaleHeight(24)
    },
    crausalConatiner: {
        marginTop: scaleHeight(16)
    },
    trendingText: {
        fontSize: normalize(15),
        fontFamily: FONTS.MontserratBold,
        color: '#000'
        // marginTop:scaleHeight
    },
    ImageConatiner: {
        marginHorizontal: scaleWidth(18),
        marginTop: scaleHeight(8)
    },
    imageStyle: {
        height: 100,
        width: 100
    },
    adsText: {
        fontSize: normalize(16),
        fontFamily: FONTS.MontserratBold,
        color: '#000',
        marginBottom: scaleHeight(10)
    },
    showMoreText: {
        fontFamily: FONTS.MontserratMedium,
        color: '#022A6D'
    },
    itemText: {
        color: '#000',
        alignSelf: 'center',
    }

})
const BarberHome = ({ navigation }) => {
    const TabBottomValues = React.useContext(TabContext);
    const [stylesData, setStylesData] = React.useState([]);
    const [ArticalsData, setArticalsData] = React.useState([])
    const isFocused = useIsFocused();
    const [loginData, setLoginData] = React.useState();
    const [stylesLits, setStylesList] = React.useState([]);
    const [articalsList, setArticals] = React.useState([])
    const [saloonData, setSaloonData] = React.useState();

    const [crausalData, setCrasualData] = React.useState([
        {
            title: 'First'
        },
        {
            title: 'second'
        },
        {
            title: 'third'
        },
        {
            title: 'third'
        },
        {
            title: 'third'
        }
    ])
    const [showDashboard, setShowDashboard] = React.useState(false);
    React.useEffect(() => {
        const backAction = () => {
            if (isFocused) {
                Alert.alert(
                    "Confirm Exit",
                    "Are you sure you want to exit the app?",
                    [
                        {
                            text: "Cancel",
                            onPress: () => null,
                            style: "cancel"
                        },
                        { text: "OK", onPress: () => BackHandler.exitApp() }
                    ]
                );
                return true;
            }
            return false;
        };

        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            backAction
        );

        return () => backHandler.remove();
    }, [isFocused]);
    React.useLayoutEffect(() => {
        // getLoginData()
    }, [])

    React.useLayoutEffect(() => {
        getToken()
    }, [])
    const getToken = async () => {
        let token = await AsyncStorage.getItem('token');
        console.log("Token is>>", token)
        if (token) {
            fetch(BASE_URL + Apis.HOME_PAGE_SALOON_DETAILS, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: token
                },
            }).then((res) => res.json()).then((data) => {
                // console.log("Saloon data is>>",data)
                setSaloonData(data?.data)
                console.log("data is>>",data?.data?.isKyc)
                // console.log("iskyc>", saloonData?.isKyc)
            })
        }
    }

    React.useEffect(() => {
        // getSaloonDetailsOnHome()
        getLoginData();
        getStylesList();
        getArticlesList();
    }, [])
    // const getSaloonDetailsOnHome=()=>{

    // }
    const getStylesList = async () => {
        const response = await fetch(BASE_URL + Apis.GET_STYLES, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        setStylesData(data?.data)
    }
    const getArticlesList = async () => {
        const response = await fetch(BASE_URL + Apis.GET_ARTICALS, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        setArticalsData(data?.data)
    }
    const getLoginData = async () => {
        let data = await AsyncStorage.getItem('loginData');
        if (data) {
            setLoginData(JSON.parse(data))
        }
    }
    const gotoListPage = () => {
        navigation.navigate(Routes.TrendingList)
    }
    const renderItem = ({ item }) => {
        return (
            <View style={styles.ImageConatiner}>
                <Image style={styles.imageStyle} source={{ uri: item?.coverImage }} />
                <Text style={styles.itemText}>{item?.title}</Text>
            </View>
        )
    }
    return (
        <SafeAreaView style={styles.homeConatiner}>
            <ScrollView>
                <BarberHeader />
                <View style={styles.homDesign}>
                    <Text style={{ fontSize: normalize(20), fontFamily: FONTS.MontserratBold }}>Hi,
                        <Text>{saloonData?.salonName}</Text>
                    </Text>
                    <View style={styles.crausalConatiner}>
                        <Crasual entries={crausalData} />
                    </View>
                    {saloonData?.isKyc ?
                        <>
                            <SaloonDetailsHome navigation={navigation} />
                           
                        </>
                        :
                        <View>
                            <View style={{ marginTop: scaleHeight(16) }}>
                                <Text style={styles.kycMainstyle}>{TextConstant.KYC_MAIN_TEXT}</Text>
                                <View style={{ marginTop: 10 }}>
                                    <KycDetailsHome navigation={navigation} />
                                </View>
                            </View>

                        </View>}
                    <View style={styles.tredingContainer}>
                        <Text style={styles.trendingText}>{TextConstant.TRENDING_STYLE}</Text>
                        <Text style={styles.showMoreText} onPress={() => gotoListPage()}>{TextConstant.SHOW_MORE} </Text>
                    </View>
                    <FlatList
                        data={stylesData}
                        renderItem={renderItem}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
                <View style={{ marginLeft: scaleWidth(20) }}>
                    <View style={styles.tredingContainer}>
                        <Text style={styles.trendingText}>Latest article's</Text>
                        <Text style={styles.showMoreText} onPress={() => gotoListPage()}>{TextConstant.SHOW_MORE} </Text>
                    </View>
                    <FlatList
                        data={ArticalsData}
                        renderItem={renderItem}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
                <View style={{ marginLeft: scaleWidth(20), marginTop: scaleHeight(10) }}>
                    <Text style={styles.adsText}>Ads</Text>
                    <Image style={{ alignSelf: 'center' }} source={Images.Booking_Ads} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default BarberHome;