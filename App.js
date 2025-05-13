import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from './screens/splash_screen';
import MainHomeScreen from './screens/mainHome_screen';
import WrittenDiaryDetailScreen from './screens/writtenDiaryNFeedback_screen';
import DiaryConfirmScreen from './screens/DiaryConfirm_screen';
import loginSample from './screens/loginSample';
import diaryPostSample from './screens/diaryPostSample';
import DiaryModifyScreen from './screens/DiaryModify_screen';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="loginSample">

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

        <Stack.Screen
          name="DiaryConfirm"
          component={DiaryConfirmScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
            name="loginSample"
            component={loginSample}
            options={{ headerShown: false }}

        />
        <Stack.Screen
            name="diaryPostSample"
            component={diaryPostSample}
            options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DiaryModify"
          component={DiaryModifyScreen}
          options={{ headerShown: false }} 
        />
    
      </Stack.Navigator>
    </NavigationContainer>
  );
}

