import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from './screens/splash_screen';
import MainHomeScreen from './screens/mainHome_screen';
import WrittenDiaryDetailScreen from './screens/writtenDiaryNFeedback_screen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainHome">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="WrittenDiary"
          component={WrittenDiaryDetailScreen}
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="MainHome"
          component={MainHomeScreen}
          options={{ headerShown: false }}
        />
    
      </Stack.Navigator>
    </NavigationContainer>
  );
}

