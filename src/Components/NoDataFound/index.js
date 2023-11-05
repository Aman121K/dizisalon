import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NoDataFound = ({text}) => {
  return (
    <View style={styles.container}>
        
      <Text style={styles.message}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default NoDataFound;
