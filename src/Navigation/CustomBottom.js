import React from 'react';
import { TouchableOpacity, View, StyleSheet, Text, Image } from 'react-native';
import { normalize, scaleHeight } from '../Constant/DynamicSize';
import { FONTS } from '../Constant/fonts';
import { Images } from '../Constant/Images';

const CustomBottom = ({ state, descriptors, navigation }) => {
    const showIcon = (index) => {
        console.log("index,,", index)
        switch (index) {
            case 0:
                return (<Image source={Images.BottomHome} />)
            case 1:
                return (<Image source={Images.BottomScissor} />)
            case 2:
                return (<Image source={Images.BottomUsers} />)
            case 3:
                return (<Image source={Images.BottomUserIcon} />)
            default:
                break;
        }
    }
    return (
        <View style={styles.container}>
            {state.routes.map((route, index) => {
                console.log("route...", route)
                const { options } = descriptors[route.key];
                const label = options.title || route.name;
                const isFocused = state.index === index;
                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });
                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };
                return (
                    <TouchableOpacity
                        key={route.key}
                        style={[styles.tab, isFocused ? styles.activeTab : null]}
                        onPress={onPress}
                    >
                        {showIcon(index)}
                        <Text style={[isFocused ? styles.activelabelText : styles.labelText]}>{label}</Text>
                        {/* Render your tab icon or label here */}
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        // height: scaleHeight(60),
        backgroundColor: '#f2f2f2',
    },
    tab: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: scaleHeight(10),
    },
    activeTab: {
        // backgroundColor: '#e0e0e0',
    },
    labelText: {
        fontSize: normalize(12),
        fontFamily: FONTS.MontserratRegular,
        lineHeight: scaleHeight(18),
        color: '#9DB2CE',
        textAlign: 'center',
    },
    activelabelText: {
        fontSize: normalize(12),
        fontFamily: FONTS.MontserratRegular,
        lineHeight: scaleHeight(18),
        color: '#022A6D',
        textAlign: 'center',
        // 
    }

});

export default CustomBottom;