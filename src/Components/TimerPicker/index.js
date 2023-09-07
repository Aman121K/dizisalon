import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const TimePicker = ({selectedTimes}) => {
    const [showPicker, setShowPicker] = useState(false);
    const [selectedTime, setSelectedTime] = useState(new Date());

    const handleTimeChange = (event, selected) => {
        console.log("even>>",event,selected)
        // const currentTime = selected || selectedTime;
        // setShowPicker(false);
        // setSelectedTime(currentTime);
        // const formattedTime = `${String(currentTime.getUTCHours()).padStart(2, '0')}:${String(currentTime.getUTCMinutes()).padStart(2, '0')}`;
        // selectedTimes(formattedTime)
    };
    const hideTimePicker = () => {
        setShowPicker(false);
      };
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => setShowPicker(true)}>
                <Text style={styles.timeText}>
                    {selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </Text>
            </TouchableOpacity>
            {showPicker && (
                <DateTimePickerModal
                isVisible={showPicker}
                mode="time"
                onConfirm={handleTimeChange}
                onCancel={hideTimePicker}
              />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // alignItems: 'center',
        // marginTop: 50,
    },
    timeText: {
        fontSize: 12,
        fontWeight: 'bold',
    },
});

export default TimePicker;
