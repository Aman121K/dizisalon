import React, { useLayoutEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from "./src/Navigation/StcakNavigation";
import { TabProvide } from "./src/Context/TabProvider";
import { useNetInfo } from "@react-native-community/netinfo";
const App = () => {
  const netInfo = useNetInfo();
  return (
    <NavigationContainer>
      <TabProvide>
        <StackNavigation />
      </TabProvide>
    </NavigationContainer>
  )
}
export default App;
