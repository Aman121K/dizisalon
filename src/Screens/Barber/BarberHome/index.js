import React from "react";
import { View, SafeAreaView, Text, StyleSheet, Image } from 'react-native';
import BarberHeader from "../../../Components/BarberHeader";
import { normalize, scaleHeight, scaleWidth } from "../../../Constant/DynamicSize";
import { Images } from "../../../Constant/Images";
import Crasual from "../../../Components/Crasual";
import { TextConstant } from "../../../Constant/TextConstant";
import { FONTS } from "../../../Constant/fonts";
import KycDetailsHome from "../../../Components/KycDetailsHome";
import { Routes } from "../../../Constant/Routes";
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
        color: '#000000'
    },
    tredingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
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
        }
    ])

    const gotoListPage = () => {
        navigation.navigate(Routes.TrendingList)
    }
    return (
        <SafeAreaView style={styles.homeConatiner}>
            <BarberHeader />
            <View style={styles.homDesign}>
                <Text>Hi
                    <Text> Vikas</Text>
                </Text>
                <Crasual entries={crausalData} />
                <View>
                    <Text style={styles.kycMainstyle}>{TextConstant.KYC_MAIN_TEXT}</Text>
                    <KycDetailsHome />
                </View>
                <View style={styles.tredingContainer}>
                    <Text>{TextConstant.TRENDING_STYLE}</Text>
                    <Text onPress={() => gotoListPage()}>{TextConstant.SHOW_MORE} </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}
export default BarberHome;