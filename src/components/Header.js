import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {AntDesign,Ionicons,MaterialIcons} from '@expo/vector-icons';
import Constant from 'expo-constants';

export default function Header() {
    const myColor = "#212121"
  return (
    <View style={{
        marginTop: Constant.statusBarHeight,
        height:40,
        backgroundColor:"white",
        flexDirection:"row",
        justifyContent:"space-between",
        elevation:4,
        shadowOffset:{width:10,height:10,},
        shadowColor:'black',
        shadowOpacity:1.0
    }}>
      <View style={{
          flexDirection:"row",
          margin:5
      }}>
        <AntDesign style={{
            marginLeft:15
        }} name="youtube" size={32} color="red"/>
        <Text style={{
            fontSize:22,
            marginLeft:5,
            fontWeight:"bold",
            color:myColor
        }}>KimiTube</Text>
      </View>
      <View style={{
          flexDirection:"row",
          justifyContent:"space-around",
          width:150,
          margin:5
      }}>
        <Ionicons name="md-videocam" size={32} color={myColor}/>
        <Ionicons name="md-search" size={32} color={myColor}/>
        <MaterialIcons name="account-circle" size={32} color={myColor}/>
      </View>
    </View>
  );
}
