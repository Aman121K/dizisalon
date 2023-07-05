import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import UserSubComponent from '../../../Components/UserSubComponent';
import { TextConstant } from '../../../Constant/TextConstant';
import { Images } from '../../../Constant/Images';
import InputBoxComponent from '../../../Components/InputBoxComponent';
import ButtonBlue from '../../../Components/Button_Blue';
import { scaleHeight } from '../../../Constant/DynamicSize';
import ModalConatiner from '../../../Components/ModalComponent';
const style = StyleSheet.create({
    mainConatiner: {

    },
    contactFormConatiner: {
        alignSelf: 'center',
        marginTop: scaleHeight(27)
    },
    contactImage: {
        alignSelf: 'center'
    }
})
const SaloonContactus = ({ navigation }) => {
    const [modalVisible, setModalVisible] = React.useState(false);
    const onclick = () => {
        setModalVisible(true);
    }
    const closeModal = () => {
        setModalVisible(false)
    }
    return (
        <SafeAreaView>
            <ScrollView>
                <UserSubComponent titel={TextConstant.CONTACTUS} navigation={navigation} />
                <View style={style.contactFormConatiner}>
                    <Image source={Images.CONTACTUSIMAGE} style={style.contactImage} />
                    <InputBoxComponent label={TextConstant.NAME} placeholder={TextConstant.NamePlace} />
                    <InputBoxComponent label={TextConstant.Phone_number} placeholder={TextConstant.Phone_number} />
                    <InputBoxComponent label={TextConstant.signUp_label_five} placeholder={TextConstant.signUp_label_five} />
                    <InputBoxComponent label={TextConstant.signUp_label_five} placeholder={TextConstant.signUp_label_five} />
                    <ButtonBlue buttonText={TextConstant.Submit} onClick={onclick} />
                </View>
            </ScrollView>
            <ModalConatiner title={TextConstant.MESSAGESUCCESSFULLY} modalVisible={modalVisible} closeModal={closeModal} />
        </SafeAreaView>
    )
}
export default SaloonContactus;