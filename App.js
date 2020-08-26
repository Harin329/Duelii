import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {enableScreens} from 'react-native-screens';
import Home from './src/screens/Tab1/Home';
import Winnings from './src/screens/Tab2/Winnings';
import Creation from './src/screens/Tab3/Creation';
import Leaderboard from './src/screens/Tab4/Leaderboard';
import Me from './src/screens/Tab5/Me';

enableScreens();
const Tab = createBottomTabNavigator();

const Tab1 = createNativeStackNavigator();
function Tab1Screen() {
  return (
    <Tab1.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Tab1.Screen name="Home" component={Home} />
    </Tab1.Navigator>
  );
}

const Tab2 = createNativeStackNavigator();
function Tab2Screen() {
  return (
    <Tab2.Navigator
      initialRouteName="Winnings"
      screenOptions={{
        headerShown: false,
      }}>
      <Tab2.Screen name="Winnings" component={Winnings} />
    </Tab2.Navigator>
  );
}

const Tab3 = createNativeStackNavigator();
function Tab3Screen() {
  return (
    <Tab3.Navigator
      initialRouteName="Creation"
      screenOptions={{
        headerShown: false,
      }}>
      <Tab3.Screen name="Creation" component={Creation} />
    </Tab3.Navigator>
  );
}

const Tab4 = createNativeStackNavigator();
function Tab4Screen() {
  return (
    <Tab4.Navigator
      initialRouteName="Leaderboard"
      screenOptions={{
        headerShown: false,
      }}>
      <Tab4.Screen name="Leaderboard" component={Leaderboard} />
    </Tab4.Navigator>
  );
}

const Tab5 = createNativeStackNavigator();
function Tab5Screen() {
  return (
    <Tab5.Navigator
      initialRouteName="Me"
      screenOptions={{
        headerShown: false,
      }}>
      <Tab5.Screen name="Me" component={Me} />
    </Tab5.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Tab1Screen} />
        <Tab.Screen name="Winnings" component={Tab2Screen} />
        <Tab.Screen name="Creation" component={Tab3Screen} />
        <Tab.Screen name="Leaderboard" component={Tab4Screen} />
        <Tab.Screen name="Me" component={Tab5Screen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
