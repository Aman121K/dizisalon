import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import StepIndicator from 'react-native-step-indicator';

const labels = ["Fill KYC", "List Salon", "Add Barbers", "Add Services", "Take Orders"]; // Array of step labels

const customStyles = {
    stepIndicatorSize: 30,
    currentStepIndicatorSize: 20,
    separatorStrokeWidth: 1,
    currentStepStrokeWidth: 1,
    stepStrokeCurrentColor: '#4aae4f',
    stepStrokeWidth: 1,
    stepStrokeFinishedColor: '#4aae4f',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#4aae4f',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#4aae4f',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 12,
    currentStepIndicatorLabelFontSize: 12,
    stepIndicatorLabelCurrentColor: '#4aae4f',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#666666',
    labelSize: 10,
    currentStepLabelColor: '#4aae4f',
};

const KycStepper = () => {
    const [currentStep, setCurrentStep] = useState(0);

    return (
        <View style={styles.container}>
            <StepIndicator
                customStyles={customStyles}
                labels={labels}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
});

export default KycStepper;
