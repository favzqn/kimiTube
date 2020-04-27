import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

const MiniCard = () => {
    return(
        <View style={{
            flexDirection:"row",
            margin:10,
            marginBottom:0
        }}>
            <Image 
            source={{uri:"https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"}}
            style={{
                width:"45%",
                height:100
            }}
            />
            <View style={{
                paddingLeft:7
            }}>
                <Text style={{
                    fontSize:17,
                    width:Dimensions.get("screen").width/2
                }}
                ellipsizeMode="tail"
                numberOfLines={3}
                >The moon is beautiful isn't?</Text>
                <Text style={{
                    fontSize:12
                }}>Natsume Soseki</Text>
            </View>
        </View>
    )
}

export default MiniCard