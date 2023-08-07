import React from "react";
import { View, SafeAreaView, Text, StyleSheet, Image, FlatList, ScrollView } from 'react-native';
import BarberHeader from "../../../Components/BarberHeader";
import { normalize, scaleHeight, scaleWidth } from "../../../Constant/DynamicSize";
import { Images } from "../../../Constant/Images";
import Crasual from "../../../Components/Crasual";
import { TextConstant } from "../../../Constant/TextConstant";
import { FONTS } from "../../../Constant/fonts";
import KycDetailsHome from "../../../Components/KycDetailsHome";
import { Routes } from "../../../Constant/Routes";
import SaloonDetailsHome from "../../../Components/SaloonDetailsHome";
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
        fontFamily: FONTS.MontserratBold
    },
    showMoreText: {
        fontFamily: FONTS.MontserratMedium,
        color: '#022A6D'
    }

})
const BarberHome = ({ navigation }) => {
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

    const gotoListPage = () => {
        navigation.navigate(Routes.TrendingList)
    }
    const renderItem = () => {
        return (
            <View style={styles.ImageConatiner}>
                <Image style={styles.imageStyle} source={Images.CHOTI_DESIGN} />
            </View>
        )
    }
    return (
        <SafeAreaView style={styles.homeConatiner}>
            <ScrollView>
                <BarberHeader />
                <View style={styles.homDesign}>
                    <Text style={{ fontSize: normalize(20), fontFamily: FONTS.MontserratBold }}>Hi,
                        <Text> Abc</Text>
                    </Text>
                    <View style={styles.crausalConatiner}>
                        <Crasual entries={crausalData} />
                    </View>
                    {showDashboard ?
                        <SaloonDetailsHome navigation={navigation} /> :
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
                        data={crausalData}
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
                        data={crausalData}
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