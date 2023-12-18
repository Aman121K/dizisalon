// CustomActivityIndicator.js

import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

const CustomLoader = ({ size, color }) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'center'
  },
});

export default CustomLoader;
