import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constant from 'expo-constants';
import Home from './src/screens/Home';
import Search from './src/screens/Search';

export default function App() {
  return (
    <View style={{
      flex:1,
      marginTop: Constant.statusBarHeight,}}>
      {/* <Home /> */}
      <Search />
    </View>
  );
}