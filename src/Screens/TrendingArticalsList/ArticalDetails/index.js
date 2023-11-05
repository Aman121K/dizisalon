import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import AuthHeader from '../../../Components/AuthHeader';
import { useRoute } from '@react-navigation/native';
import { Images } from '../../../Constant/Images';
import { normalize, scaleHeight } from '../../../Constant/DynamicSize';
import { FONTS } from '../../../Constant/fonts';
import moment from 'moment';
const style = StyleSheet.create({
    container: {
        marginTop: scaleHeight(30),
        backgroundColor: 'white',
        height: '100%'
    },
    title: {
        fontSize: normalize(20),
        fontFamily: FONTS.MontserratBold,
        alignSelf: 'center',
        margin: 5
    },
    desc: {
        fontSize: normalize(18),
        fontFamily: FONTS.MontserratMedium,
        margin: 5
    },
    date: {
        fontSize: normalize(14),
        margin:5
    }
})
const AtricalDetails = ({ navigation }) => {
    const route = useRoute();
    const receivedData = route.params?.data;
    console.log("Details data>>", receivedData)
    const defaultImageUrl = Images.CHOTI_DESIGN;
    const imageUrl = `http://43.204.144.93:5001/uploads/${receivedData?.item?.coverImage}`;

    const [imageSource, setImageSource] = React.useState({ uri: imageUrl });

    const handleImageError = () => {
        setImageSource({ uri: defaultImageUrl });
    };
    return (
        <SafeAreaView>
            <AuthHeader backbutton={true} navigation={navigation} />
            <ScrollView style={style.container}>
                <View >
                    <Text style={style.title}> {receivedData?.title}</Text>
                    <Image style={{ alignSelf: 'center' }} source={Images.CHOTI_DESIGN} />
                    <Text style={style.desc}>{receivedData?.description}</Text>
                    <Text style={style.date}>Artical Added Date:- {moment(receivedData?.createdAt).format('YYYY/MM/DD')}</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default AtricalDetails;