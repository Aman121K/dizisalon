import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
const BookingCompletion = ({ image, data, buttonTitle, buttonClick }) => {
    return (
        <View>
            <Image source={image} />
            <Text>{data?.name}</Text>
            <Text>{data?.title}</Text>
            <Text>{data?.status}</Text>
            <View>
                <View>
                    <Text>Salon Name</Text>
                    <Text>{data?.saloonName}</Text>
                </View>
                <View>
                    <Text>Barber Name</Text>
                    <Text>{data?.barberName}</Text>
                </View>
                <View>
                    <Text>Order Number</Text>
                    <Text>{data?.barberName}</Text>
                </View>
                <View>
                    <Text>Service Number</Text>
                    <Text>{data?.barberName}</Text>
                </View>
                <View>
                    <Text>Service Price</Text>
                    <Text>{data?.barberName}</Text>
                </View>
                <View>
                    <Text>Date & Time</Text>
                    <Text>{data?.barberName}</Text>
                </View>
            </View>
            <TouchableOpacity onPress={buttonClick}>
                <Text>{buttonTitle}</Text>
            </TouchableOpacity>
        </View>

    )
}
export default BookingCompletion;