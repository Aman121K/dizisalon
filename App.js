import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from "./src/Navigation/StcakNavigation";
import { SafeAreaView } from "react-native";
import { TabProvide } from "./src/Context/TabProvider";
const App = () => {
  return (
    <NavigationContainer>
      <TabProvide>
        <StackNavigation />
      </TabProvide>
    </NavigationContainer>
  )
}
export default App;
