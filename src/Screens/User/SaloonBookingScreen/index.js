import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, ScrollView, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import UserCartHeader from '../../../Components/UserCartHeader';
import { TextConstant } from '../../../Constant/TextConstant';
import { normalize, scaleHeight, scaleWidth } from '../../../Constant/DynamicSize';
import { FONTS } from '../../../Constant/fonts';
import BarberRateList from '../../../Components/BarberRateList';
import { Images } from '../../../Constant/Images';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import ButtonBlue from '../../../Components/Button_Blue';
import ModalConatiner from '../../../Components/ModalComponent';
import DateTimePicker from "@react-native-community/datetimepicker";
import { Routes } from '../../../Constant/Routes';
const style = StyleSheet.create({
    mainContainer: {
        marginLeft: scaleWidth(16)
    },
    titleStyle: {
        color: '#000000',
        fontSize: normalize(18),
        fontFamily: FONTS.MontserratSemiBold,
        marginLeft: scaleWidth(16)
    },
    buttonConatiner: {
        flexDirection: 'row'
    },
    bookConatiner: {
        alignSelf: 'center',
        // borderWidth:1
    },
    buttonstyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: scaleWidth(25)
    },
    selectedButtonStyle: {
        padding: scaleHeight(5),
        backgroundColor: '#022A6D',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#022A6D'
    },
    selectedButtonStyle1: {
        padding: scaleHeight(5),
        // backgroundColor: '#022A6D',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#022A6D'
    },
    timeStyles: {
        marginHorizontal: scaleWidth(20),
        marginBottom: scaleHeight(10),
        color: '#000000',
        fontSize: normalize(20),
        fontFamily: FONTS.MontserratSemiBold
    },
    timedesign: {
        fontFamily: FONTS.MontserratRegular,
        fontSize: normalize(12),
        color: 'white'
    },
    timedesign1: {
        fontFamily: FONTS.MontserratRegular,
        fontSize: normalize(12),
    },
    timeContainer: {
        borderWidth: 1,
        padding: scaleHeight(10),
        borderRadius: 10,
        margin: scaleHeight(10),
        alignItems: 'center',
        marginHorizontal: scaleWidth(20),
        width: scaleWidth(200)
        // justifyContent:'flex-start'
    }
})
const SaloonBookingScreen = ({ navigation }) => {
    const [selectedBarber, setSelectedBarber] = React.useState([{
        barberName: 'Manish Rawat',
        barberContactNo: '+91+910000000',
        barberImage: Images.SALLON_BG_IMAGE,
        barberRate: '500',
        duration: '30 min',
        title: 'Hair cutting',
        barberStatus: 'open'
    }])
    const [selected, setSelected] = React.useState('');
    const [selectedDuration, setSelectedDuration] = React.useState('before');
    const [modalVisible, setModalVisible] = React.useState(false);
    const [show, setSHow] = React.useState(false);
    const [timeValue, setTimeValue] = React.useState();

    const onclick = () => {
        setModalVisible(true);
    }
    const closeModal = () => {
        setModalVisible(false)
    }
    const onTimeChange = (date) => {
        setSHow(false)
        console.log("date>>>", date)
        // setTimeValue(date)
    }
    const onSubmitClick = () => {
        navigation.navigate(Routes.UserBookingComplete);
        setModalVisible(false);
    }
    return (
        <SafeAreaView >
            <UserCartHeader navigation={navigation} title="Hair Cutting Booking" />
            <ScrollView >
                <KeyboardAvoidingView>
                    <Text style={style.titleStyle}>Selected Barber & Service</Text>
                    <BarberRateList barberList={selectedBarber} />
                    <Calendar
                        style={{
                            width: '90%',
                            alignSelf: 'center',
                            marginVertical: scaleHeight(10),
                            borderRadius: scaleHeight(10),
                            height: scaleHeight(330)
                        }}
                        onDayPress={day => {
                            setSelected(day.dateString);
                        }}
                        markedDates={{
                            [selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' }
                        }}
                    />
                    <View style={{ marginTop: scaleHeight(20) }}>
                        <Text style={style.timeStyles}>Select Time Interval</Text>
                    </View>
                    <View style={style.buttonstyle}>
                        <TouchableOpacity style={selectedDuration === 'before' ? style.selectedButtonStyle : style.selectedButtonStyle1} onPress={() => setSelectedDuration('before')}>
                            <Text style={selectedDuration === 'before' ? style.timedesign : style.timedesign1}>{TextConstant.BeforeLunch}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={selectedDuration === 'after' ? style.selectedButtonStyle : style.selectedButtonStyle1} onPress={() => setSelectedDuration('after')}>
                            <Text style={selectedDuration === 'after' ? style.timedesign : style.timedesign1}>{TextConstant.BeforeLunch}</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={[style.timeContainer]} onPress={() => setSHow(true)}>
                        <Text>{timeValue ? timeValue : 'Select Time'}</Text>
                        {/* <InputBoxComponent /> */}
                    </TouchableOpacity>
                    <View style={style.bookConatiner}>
                        <ButtonBlue buttonText="Book Appointment" onClick={onclick} />
                    </View>
                    <ModalConatiner
                        title={TextConstant.Confirm_Book}
                        subTitle={TextConstant.Confirm_subBook}
                        modalVisible={modalVisible}
                        closeModal={closeModal}
                        onCancelClick={closeModal}
                        onSubmitClick={onSubmitClick}
                        buttonText={TextConstant.Confirm}
                    />
                    {show &&
                        <DateTimePicker
                            testID="date-picker"
                            value={new Date()}
                            mode="time"
                            is24Hour={true}
                            onChange={(date) => onTimeChange(date)}
                        //    maximumDate={new Date()}
                        />
                    }
                </KeyboardAvoidingView>
            </ScrollView>
        </SafeAreaView>
    )
}
export default SaloonBookingScreen
