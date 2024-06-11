import { BottomNavigation } from "react-native-paper";
import Home from "../screens/home";
import Newsubjet from "../screens/newsubjet";
import { useState } from "react";

export default TabsScreens = () => {
  const [index, setIndex] = useState(0);

  const [routes] = useState([
    {
      key: "Home",
      title: "Home",
      focusedIcon: "home",
      unfocusedIcon: "home-circle",
    },
    {
      key: "newSubjet",
      title: "nueva tarea",
      focusedIcon: "air-filter",
      unfocusedIcon: "air-filter",
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    Home: Home,
    newsubjet: Newsubjet,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};
