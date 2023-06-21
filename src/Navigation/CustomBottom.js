import React from 'react';
import { TouchableOpacity, View, StyleSheet, Text, Image } from 'react-native';
import { normalize, scaleHeight } from '../Constant/DynamicSize';
import { FONTS } from '../Constant/fonts';
import { Images } from '../Constant/Images';
import { TabContext } from '../Context/TabProvider';
const CustomBottom = ({ state, descriptors, navigation }) => {

    const showIcon = (index, isFocus, label) => {
        const TabBottomValues = React.useContext(TabContext);
        console.log("index,,", index, label, TabBottomValues?.getBottomType)
        if (TabBottomValues?.getBottomType === 'For Salon') {
            switch (index) {
                case 0:
                    return (<Image source={Images.BottomHome} style={isFocus && { tintColor: '#022A6D' }} />)
                case 1:
                    return (<Image source={Images.BottomScissor} style={isFocus && { tintColor: '#022A6D' }} />)
                case 2:
                    return (<Image source={Images.BottomUsers} style={isFocus && { tintColor: '#022A6D' }} />)
                case 3:
                    return (<Image source={Images.BottomUserIcon} style={isFocus && { tintColor: '#022A6D' }} />)
                default:
                    break;
            }
        } else {
            switch (index) {
                case 0:
                    return (<Image source={Images.BottomHome} style={isFocus && { tintColor: '#022A6D' }} />)
                case 1:
                    return (<Image source={Images.SEARCH_ICON} style={isFocus && { tintColor: '#022A6D' }} />)
                case 2:
                    return (<Image source={Images.BOTTOM_BOOKING} style={isFocus && { tintColor: '#022A6D' }} />)
                case 3:
                    return (<Image source={Images.BOTTOM_CART} style={isFocus && { tintColor: '#022A6D' }} />)
                 case 4:
                    return (<Image source={Images.BottomUserIcon} style={isFocus && { tintColor: '#022A6D' }} />)
                    default:
                    break;
            }
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
                        {showIcon(index, isFocused, label)}
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
        fontSize: normalize(10),
        fontFamily: FONTS.MontserratRegular,
        lineHeight: scaleHeight(18),
        color: '#9DB2CE',
        textAlign: 'center',
    },
    activelabelText: {
        fontSize: normalize(10),
        fontFamily: FONTS.MontserratRegular,
        lineHeight: scaleHeight(18),
        color: '#022A6D',
        textAlign: 'center',
        // 
    }

});

export default CustomBottom;