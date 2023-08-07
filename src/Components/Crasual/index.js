import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { normalize, scaleHeight, scaleWidth } from "../../Constant/DynamicSize";
import { Images } from "../../Constant/Images";
import { FONTS } from "../../Constant/fonts";
const styles = StyleSheet.create({
    slide: {
        backgroundColor: '#3BCF74',
        // flexDirection:'row',
        // justifyContent: 'space-between',
        padding: 10,
        borderRadius: scaleWidth(10)
    },
    title: {
        fontSize: normalize(17),
        width: scaleWidth(180),
        fontFamily: FONTS.MontserratSemiBold
    },
    innerText: {
        fontSize: normalize(12),
        fontFamily: FONTS.MontserratRegular
    },
    butonKyc: {
        backgroundColor: '#33AC5E',
        padding: scaleHeight(5),
        alignSelf: 'center',
        borderRadius: scaleHeight(10),
        margin: scaleHeight(10),

    }
})
const Crasual = ({ entries }) => {
    const _renderItem = ({ item, index }) => {
        return (
            <View style={styles.slide} key={index}>
                <View style={{ flexDirection: "row", alignItems: 'center' }}>
                    <View>
                        <Text style={styles.title}>You are not getting customers on time </Text>
                        <Text style={styles.innerText}>Let’s list your salon in DiZi Salon</Text>
                        <TouchableOpacity style={styles.butonKyc}>
                            <Text style={{ color: 'white', fontFamily: FONTS.MontserratMedium }}>Let’s do KYC</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Image source={Images.HOME_BANNER} />
                    </View>
                </View>
            </View>
        );
    }
    return (
        <View>
            <Carousel
                ref={(c) => { this._carousel = c; }}
                autoplay={true}
                loop={true}
                data={entries}
                renderItem={_renderItem}
                sliderWidth={330}
                itemWidth={330}
            />
        </View>
    )
}
export default Crasual;