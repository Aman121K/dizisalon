import React, { useLayoutEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from "./src/Navigation/StcakNavigation";
import { TabProvide } from "./src/Context/TabProvider";
import { useNetInfo } from "@react-native-community/netinfo";
import NoInternet from "./src/Components/NoInternet";
const App = () => {
  const netInfo = useNetInfo();

  return (
    // netInfo ?
      <NavigationContainer>
        <TabProvide>
          <NoInternet />
          <StackNavigation />
        </TabProvide>
      </NavigationContainer> 
      // :
      // <NoInternet />
  )
}
export default App;
