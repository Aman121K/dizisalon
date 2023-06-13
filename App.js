import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from "./src/Navigation/StcakNavigation";
const App = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  )
}
export default App;
