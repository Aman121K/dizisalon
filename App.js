import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from "./src/Navigation/StcakNavigation";
import { SafeAreaView } from "react-native";
const App = () => {
  return (
    // <SafeAreaView>
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
    // </SafeAreaView>
  )
}
export default App;
