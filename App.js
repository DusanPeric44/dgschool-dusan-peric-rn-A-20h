import { NavigationContainer } from "@react-navigation/native";
import MainStackNavigator from "./src/navigation/StackNavigator";
import BottomTabNavigator from "./src/navigation/TabNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}
