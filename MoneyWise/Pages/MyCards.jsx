import React from "react";
import { useContext } from "react";
import { ThemeContext,ThemeProvider } from "../ThemeContext";
import { View, StyleSheet,Text,TouchableOpacity, Image, ScrollView } from "react-native";

export default function MyCards(){
    const {colors} = useContext(ThemeContext);

    return(
        <ScrollView>
            <View style={[styles.ion, {backgroundColor: colors.background}]}>
            <View style={styles.lk}>
                <Text style={[styles.flp, {color: colors.text}]}>My Cards</Text>
                <Image source={require('../assets/Card.png')} />
            </View>
            </View>
        </ScrollView>
        
   
        );
}

const styles = StyleSheet.create({
   lk:{
    marginTop: 55,
    margin: 10,
    flex: 1,
   },
   flp:{
    fontSize: 17,
    alignSelf: 'center',
    marginBottom: 20,
   },
   ion:{
        flex: 1,
        marginTop: 35,
        height: 900,
   },
  });
  