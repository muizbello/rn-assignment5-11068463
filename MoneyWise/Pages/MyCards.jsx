import React from "react";
import { View, StyleSheet,Text,TouchableOpacity, Image, ScrollView } from "react-native";

export default function MyCards(){
    return(
        <ScrollView>
            <View>
                <Image source={require('../assets/Card.png')} />
            </View>
        </ScrollView>
        
      
    );
}