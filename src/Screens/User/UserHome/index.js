import React from "react";
import { Dimensions, FlatList, Image, Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import UserHeader from "../../../Components/UserHeader";
import LocationConatiner from "../../../Components/LocationConatiner";
import { normalize, scaleHeight, scaleWidth } from "../../../Constant/DynamicSize";
import { TextConstant } from "../../../Constant/TextConstant";
import { FONTS } from "../../../Constant/fonts";
import { Images } from "../../../Constant/Images";
import SearchNearSaloon from "../../../Components/SearchNearSaloon";
import UserAdsContainer from "../../../Components/UserAdsContainer";
import LocationBottomSheet from "../../../Components/LocationBottomSheet";
import RBSheet from "react-native-raw-bottom-sheet";
const { width } = Dimensions.get('window');
const itemWidth = 50;
const style = StyleSheet.create({
    mainConatiner: {

    },
    locationConainer: {
        marginTop: scaleHeight(9.5)
    },
    categoriesConatiner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: scaleWidth(16),
        alignItems: 'center'
    },
    categoryText: {
        fontSize: normalize(16),
        fontFamily: FONTS.MontserratSemiBold
    },
    knowmoreText: {
        fontFamily: FONTS.MontserratRegular,
        fontSize: normalize(12)
    },
    itemConatiner: {
        width: 100,
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    title: {
        fontSize: normalize(12),
        fontWeight: '500',
        lineHeight: scaleHeight(15)
    },
    searchConatiner: {
        marginTop: scaleHeight(20)
    },
    userContainer: {
        marginTop: scaleHeight(20)
    }
})
const UserHome = ({ navigation }) => {
    const refRBSheet = React.useRef();
    const openCategory = () => {
    }
    const [categoryList, setCategoryList] = React.useState([
        {
            title: 'Hairs cuting',
            Images: Images.HAIRCUTTINGS
        },
        {
            title: 'Hairs cuting',
            Images: Images.HAIRCUTTINGS
        },
        {
            title: 'Hairs cuting',
            Images: Images.HAIRCUTTINGS
        },
        {
            title: 'Hairs cuting',
            Images: Images.HAIRCUTTINGS
        },


    ])
    const renderItem = (item, index) => {
        console.log("item", item?.item)
        return (
            <View key={index} style={style.itemConatiner}>
                <Image source={Images.HAIRCUTTINGS} />
                <Text style={style.title}>{item?.item?.title}</Text>
            </View>
        )
    }
    React.useLayoutEffect(() => {
        refRBSheet.current.open()
    }, [])
    const calculateColumns = () => Math.floor(width / itemWidth);
    const cancelButtonClick = () => {
        refRBSheet.current.close()
    }
    const clikOnLocation = () => {
        refRBSheet.current.open()
    }
    return (
        <SafeAreaView>
            <UserHeader />
            <View style={style.locationConainer}>
                <LocationConatiner locationClick={clikOnLocation} />
            </View>
            <View style={style.categoriesConatiner}>
                <Text style={style.categoryText}>{TextConstant.CATEGORIES}</Text>
                <Text style={style.knowmoreText} onPress={() => openCategory()}>{TextConstant.SHOW_MORE}</Text>
            </View>
            <View style={{ flexWrap: 'wrap', marginHorizontal: scaleWidth(16) }}>
                <View>
                    <FlatList
                        data={categoryList}
                        renderItem={renderItem}
                        numColumns={calculateColumns()}
                    />
                </View>
            </View>
            <View style={style.searchConatiner}>
                <SearchNearSaloon text={TextConstant.SEARCH_NEAR_SALON} />
            </View>
            <View style={style.userContainer}>
                <UserAdsContainer />
            </View>
            <RBSheet
                // shouldMeasureContentHeight={true}
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={false}
                customStyles={{
                    wrapper: {
                        // backgroundColor: ""
                    },
                    container: {
                        height: Platform.OS === 'ios' ? scaleHeight(450) : scaleHeight(450),
                        borderTopRightRadius: scaleHeight(10),
                        borderTopLeftRadius: scaleHeight(10)
                        // borderTopEndRadius:scaleHeight(10)
                    },
                    draggableIcon: {
                        backgroundColor: ""
                    },

                }}
            >
                <LocationBottomSheet navigation={navigation} cancelButtonClick={cancelButtonClick} />
            </RBSheet>


        </SafeAreaView>
    )
}
export default UserHome;