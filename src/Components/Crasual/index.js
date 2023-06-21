import React from "react";
import { Image, StyleSheet, Text, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { normalize, scaleHeight, scaleWidth } from "../../Constant/DynamicSize";
import { Images } from "../../Constant/Images";
import { FONTS } from "../../Constant/fonts";
const styles = StyleSheet.create({
    slide: {
        backgroundColor: '#3BCF74',
        // flexDirection:'row',
        justifyContent: 'space-between',
        padding: 5,
        borderRadius: scaleWidth(10)
    },
    title: {
        fontSize: normalize(20),
        width: scaleWidth(180),
        fontFamily: FONTS.MontserratMedium
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
                        <Text>Let’s list your salon in DiZi Salon</Text>
                        <View style={styles.butonKyc}>
                            <Text style={{ color: 'white', fontFamily: FONTS.MontserratMedium }}>Let’s do KYC</Text>
                        </View>
                    </View>
                    <View>
                        <Image source={Images.HOME_BANNER} />
                    </View>
                </View>
                {/* <View>
                  
                </View> */}
            </View>
        );
    }
    return (
        <Carousel

            ref={(c) => { this._carousel = c; }}
            autoplay={true}
            loop={true}
            data={entries}
            renderItem={_renderItem}
            sliderWidth={430}
            itemWidth={400}

        />
    )
}
export default Crasual;