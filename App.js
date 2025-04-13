import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from './screens/splash_screen';
import MainHomeScreen from './screens/mainHome_screen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainHome">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }} // 상단 헤더 없애기
        />
         <Stack.Screen
      name="MainHome"
      component={MainHomeScreen}
      options={{ headerShown: false }}
    />
        {/* 이후에 Home, Diary, Write 등 화면을 여기에 추가 */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

