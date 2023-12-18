import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import AuthHeader from '../../../Components/AuthHeader';
import SearchConatiner from '../../../Components/SearchConatiner';
import { TextConstant } from '../../../Constant/TextConstant';
import { normalize, scaleHeight, scaleWidth } from '../../../Constant/DynamicSize';
import { FONTS } from '../../../Constant/fonts';
import TrendingLists from '../../../Components/TredningList';
import { Routes } from '../../../Constant/Routes';
import { Apis, BASE_URL } from '../../../Constant/APisUrl';
import NoDataFound from '../../../Components/NoDataFound';
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
        lineHeight: scaleHeight(31),
        color: 'black'
    },
    serachConatiner: {
        marginVertical: scaleHeight(30)
    }
})
const ArticalList = ({ navigation }) => {
    const [articalData, setArticalData] = React.useState([])
    React.useEffect(() => {
        getArticalsList()
    }, [])
    const getArticalsList = async () => {
        const response = await fetch(BASE_URL + Apis.GET_ARTICALS, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        console.log("Articals data>", data)
        setArticalData(data?.data)
    }
    const onClick = (data) => {
        console.log("click style", data)
        navigation.navigate(Routes.TrendingDetails, { data: data?.item })
    }
    const renderItems = (item) => {
        return (
            <TrendingLists data={item} onClick={onClick} />
        )
    }
    const renderEmptyComponent = () => (
        <NoDataFound text="No Artical's Found" />
    );
    const [searchQuery, setSearchQuery] = React.useState('');

    const filteredData = articalData.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const onChangeText = (e) => {
        console.log(e);
        setSearchQuery(e)

    }
    return (
        <SafeAreaView>
            <AuthHeader navigation={navigation} backbutton={true} />
            <View style={styles.trendingConatiner}>
                <View style={styles.serachConatiner}>
                    <SearchConatiner 
                    placeholdertext="Search for Artical's" 
                    value={searchQuery} 
                    onChangeText={onChangeText}
                     />
                </View>
                <Text style={styles.trendingText}>Trending Artical's</Text>
                <FlatList
                    data={searchQuery ? filteredData : articalData}
                    // data={articalData}
                    renderItem={renderItems}
                    ListEmptyComponent={renderEmptyComponent}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        </SafeAreaView>
    )
}
export default ArticalList;