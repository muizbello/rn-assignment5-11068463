import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import { View, StyleSheet,Text,TouchableOpacity, Image,ScrollView } from "react-native";

export default function Statistics(){
    const {colors} = useContext(ThemeContext);

        return(
            <ScrollView>
                <View style={{backgroundColor: colors.background, height: 700}}>
                <View style={styles.lk}>
                    <Text style={[styles.ff,{color:colors.text}]}>Statistics</Text>
                    <Image style={styles.kk} source={require('../assets/statictics.png')} />
                    <Text style={[styles.ff,{color: colors.text}]}>Coming Soon....</Text>
                </View>
                </View>
                
            </ScrollView>
            
       
            );
    }
    
    const styles = StyleSheet.create({
       lk:{
        marginTop: 55,
        margin: 10,
       },
       ff:{
        fontSize: 18,
        marginBottom: 60,
        alignSelf: 'center',
       },
       kk:{
        height: 50,
        width: 50,
        alignSelf: 'center',
        marginBottom: 30,
       },
      });
    