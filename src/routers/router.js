import { NavigationContainer } from "@react-navigation/native";
import Login from "../screens/login";
import StackScreens from "./stack";
import { StatusBar } from "react-native";

export default Router = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle={"ligth-content"} />
      <StackScreens></StackScreens>
    </NavigationContainer>
  );
};
