
import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import AuthHeader from '../../../Components/AuthHeader';
import { useRoute } from '@react-navigation/native';
import { Images } from '../../../Constant/Images';
import { normalize, scaleHeight, scaleWidth } from '../../../Constant/DynamicSize';
import { FONTS } from '../../../Constant/fonts';
import moment from 'moment';
const style = StyleSheet.create({
    container: {
        marginTop: scaleHeight(30),
        backgroundColor: 'white',
        height: '100%',
    },
    title: {
        fontSize: normalize(25),
        fontFamily: FONTS.MontserratMedium,
        margin: scaleHeight(5),
        color: '#000'
    },
    desc: {
        fontSize: normalize(14),
        fontFamily: FONTS.MontserratMedium,
        margin: scaleHeight(5),
        color: '#818181'
    },
    date: {
        fontSize: normalize(14),
        fontFamily: FONTS.MontserratMedium,
        margin: scaleHeight(5),
        color: '#818181'
    }
})
const TrendingDetails = ({ navigation }) => {
    const route = useRoute();
    const receivedData = route.params?.data;
    console.log("Details SCren ", receivedData)
    const defaultImageUrl = Images.CHOTI_DESIGN;
    const imageUrl = `http://43.204.144.93:5001/uploads/${receivedData?.item?.coverImage}`;

    const [imageSource, setImageSource] = React.useState({ uri: imageUrl });
    return (
        <SafeAreaView>
            <AuthHeader backbutton={true} navigation={navigation} />
            <ScrollView style={style.container}>
                <View style={{ marginBottom: scaleHeight(50) }}>
                    <Text style={style.title}> {receivedData?.title}</Text>
                    <Image style={{
                        height: scaleHeight(200), width: scaleWidth(250),
                        borderRadius: scaleHeight(20), marginLeft: scaleWidth(10)
                    }} source={{ uri: receivedData?.coverImage }} />
                    <Text style={style.desc}>{receivedData?.description}</Text>
                    <Text style={style.date}>Artical Added Date:- {moment(receivedData?.createdAt).format('YYYY/MM/DD')}</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default TrendingDetails;