import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import AuthHeader from '../../../Components/AuthHeader';
import SearchConatiner from '../../../Components/SearchConatiner';
import { TextConstant } from '../../../Constant/TextConstant';
import { normalize, scaleHeight, scaleWidth } from '../../../Constant/DynamicSize';
import { FONTS } from '../../../Constant/fonts';
import TrendingLists from '../../../Components/TredningList';
import { Routes } from '../../../Constant/Routes';
const styles = StyleSheet.create({
    mainConatiner: {
    },
    trendingConatiner: {
        marginHorizontal: scaleWidth(15),
        marginTop: scaleHeight(16)
    },
    trendingText: {
        fontSize: normalize(25),
        fontFamily: FONTS.MontserratMedium,
        lineHeight: scaleHeight(31)
    },
    serachConatiner: {
        marginVertical: scaleHeight(30)
    }
})
const TrendingList = ({ navigation }) => {
    const onClick = () => {
        navigation.navigate(Routes.TrendingDetails, {})
    }
    return (
        <SafeAreaView>
            <AuthHeader navigation={navigation} backbutton={true} />
            <View style={styles.trendingConatiner}>
                <View style={styles.serachConatiner}>
                    <SearchConatiner />
                </View>
                <Text style={styles.trendingText}>{TextConstant.TRENDING_STYLE}</Text>
                <TrendingLists onClick={onClick} />
                <TrendingLists onClick={onClick} />
                <TrendingLists onClick={onClick} />
            </View>
        </SafeAreaView>
    )
}
export default TrendingList;