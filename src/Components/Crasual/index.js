import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { normalize } from "../../Constant/DynamicSize";
const styles = StyleSheet.create({
    slide: {
        backgroundColor: 'red'
    },
    title: {
        fontSize: normalize(20)
    }
})
const Crasual = ({ entries }) => {
    const _renderItem = ({ item, index }) => {
        return (
            <View style={styles.slide} key={index}>
                <Text style={styles.title}>{item.title}</Text>
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