import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Constant from 'expo-constants';
import Home from './src/screens/Home';
import Search from './src/screens/Search';
import VideoPlayer from './src/screens/VideoPlayer';
import Explore from './src/screens/Explore';
import Subscribe from './src/screens/Subscribe';

const stack = createStackNavigator()
const tabs = createBottomTabNavigator()

const RootHome = () => {
  return(
    <tabs.Navigator>
      <tabs.Screen name="home" component={Home}/>
      <tabs.Screen name="explore" component={Explore}/>
      <tabs.Screen name="subscribe" component={Subscribe}/>
    </tabs.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigatore headerMode="none">
        <stack.Screen name="rootHome" component={RootHome}/>
        <stack.Screen name="search" component={Search}/>
        <stack.Screen name="videoPlayer" component={VideoPlayer}/>
      </stack.Navigatore>
    </NavigationContainer>
  );
}