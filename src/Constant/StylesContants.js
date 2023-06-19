import { normalize, scaleHeight, scaleWidth } from "./DynamicSize";
import { FONTS } from "./fonts";

export const StylesContants = {
    auth_screen_heading: {
        fontSize: normalize(35),
        color: "#000000",
        lineHeight: scaleHeight(49),
        marginBottom: scaleHeight(8),
        fontFamily: FONTS.MontserratSemiBold,

    },
    auth_screen_subHeading: {
        fontSize: normalize(16),
        color: "#676767",
        lineHeight: scaleHeight(18),
        marginBottom: scaleHeight(40),
        fontFamily: FONTS.MontserratRegular,

    },
    auth_screen_label: {
        fontSize: normalize(15),
        lineHeight: scaleHeight(20),
        marginBottom: scaleHeight(8),
        color: "#3A3A3A",
        fontFamily: FONTS.MontserratRegular,
    },

}