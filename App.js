import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/screens/HomeScreen";
import ListScreen from "./src/screens/ListScreen";
import ColorSquareScreen from "./src/screens/ColorSquareScreen";
import BoxScreen from "./src/screens/BoxScreen";

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen name="ColorSquare" component={ColorSquareScreen} />
        <Stack.Screen name="Box" component={BoxScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
