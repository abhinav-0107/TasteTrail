import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "./src/screens/SearchScreen";
import ResultsShowScreen from "./src/screens/ResultsShowScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ 
        headerTitle: "Home Page",
        cardStyle: { backgroundColor: '#20b2aa' }
        }}>
        <Stack.Screen 
        name="Search" 
        component={SearchScreen}
        options={{
          headerStyle: {
            backgroundColor: '#ffa07a',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          }
        }} />
        <Stack.Screen 
        name="ResultsShow" 
        component={ResultsShowScreen} 
        options={{
          headerStyle: {
            backgroundColor: '#ffa07a',
            height : 100
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            alignSelf : "center"
          }
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

