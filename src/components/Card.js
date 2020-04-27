import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import {AntDesign,Ionicons,MaterialIcons} from '@expo/vector-icons';

const Card = () => {
    return(
        <View style={{
            marginBottom:10
        }}>
            <Image 
            source={{uri:"https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"}}
            style={{
                width:"100%",
                height:200
            }}
            />
            <View style={{
                flexDirection:"row",
                margin:5
            }}>
                <MaterialIcons name="account-circle" size={40} color="#212121"/>
                <View style={{
                    marginLeft:10
                }}>
                    <Text style={{
                        fontSize:20,
                        width: Dimensions.get("screen").width - 50
                    }}
                    ellipsizeMode="tail"
                    numberOfLines={2}
                    >The moon is beautiful isn't?</Text>
                    <Text>Natsume Soseki</Text>
                </View>
            </View>
        </View>
    )
}

export default Card