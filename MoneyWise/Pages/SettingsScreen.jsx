import React from "react";
import { View, StyleSheet,Text,TouchableOpacity, Image } from "react-native";

export default function SettingsScreen(){
    return(
    <View>
        <View style={styles.holdex}>
        <Text>Settings</Text>

        </View>
    </View>
        
    );
}


const styles =StyleSheet.create({
    holdex:{
        alignSelf: 'center',
    },
    
}
)