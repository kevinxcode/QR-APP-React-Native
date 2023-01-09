import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./components/LoginScreen";
import HomeScreen from "./components/Home";
import ScanScreen from "./components/Scanner";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#025ef2' },
        headerLeft: null,
        headerBackButtonMenuEnabled: {
          onChangeText: (event) => setSearch(event.nativeEvent.text),
        },
      }}>
        <Stack.Screen name="LOGIN" component={LoginScreen} 
         options={{
          title: 'LOGIN',
        }} />

        <Stack.Screen name="SCANNER APP" component={HomeScreen} 
         options={{
          title: 'QR DASHBOARD',
        }} />

        <Stack.Screen name="Scanner" component={ScanScreen}
        options={{
          title: 'SCANNER',
        }} />

    
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
