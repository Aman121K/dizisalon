import Raect from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text ,View} from 'react-native';
import UserCartHeader from '../../../Components/UserCartHeader';
import { scaleHeight, scaleWidth } from '../../../Constant/DynamicSize';
import InnerTexttInput from '../../../Components/InnerTextInput';
import ButtonBlue from '../../../Components/Button_Blue';
const style = StyleSheet.create({
    mainConatiner: {

    },
    container: {
        height: '100%',
        marginHorizontal: scaleWidth(16)
    },
    buttonContainer:{
        marginTop:scaleHeight(20)
    }
})
const EditSaloonDetails = ({ navigation }) => {
    return (
        <SafeAreaView>
            <UserCartHeader navigation={navigation} />
            <ScrollView style={style.container}>
                <Text>Edit Salon Details and Submit</Text>
                <InnerTexttInput placeholderText="Name*"/>
                <InnerTexttInput placeholderText="Salon Name*"/>
                <InnerTexttInput placeholderText="Salon Address*"/>
                <InnerTexttInput placeholderText="State*"/>
                <View style={{flexDirection:'row'}}>
                    <InnerTexttInput placeholderText="City*"/>
                    <InnerTexttInput placeholderText="Zip Code*"/>
                </View>
                <View style={style.buttonContainer}>
                <ButtonBlue buttonText="Edit & Update"/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default EditSaloonDetails