import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/login";
import Signup from "../screens/signup";
import TabsScreens from "./tabs";

const Stack = createNativeStackNavigator();

export default StackScreens = () => {
  const options = { headerShown: false };
  return (
    <Stack.Navigator>
      <Stack.Screen component={Login} name="Login" options={options} />
      <Stack.Screen component={Signup} name="Signup" options={options} />
      <Stack.Screen component={TabsScreens} name="tabs" options={options} />
    </Stack.Navigator>
  );
};
