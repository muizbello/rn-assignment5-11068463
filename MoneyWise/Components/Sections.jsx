import React from 'react';
import { View, ScrollView, Text, StyleSheet, Image } from 'react-native';
import { ThemeContext } from "../ThemeContext";
import { useContext } from 'react';
import { Invert } from 'react-native-color-matrix-image-filters';



export default function Section({sectionname}){
    const { isDarkTheme, colors, handletoggle, isOn } = useContext(ThemeContext);

    return(
            <View style={styles.carddd}>
                <View style={styles.holder}>
                    {sectionname && <Text style={[styles.head, {color: colors.text}]}>{sectionname}</Text>}
                    <Image style={[styles.point, isDarkTheme && {tintColor: 'white'},{filter: colors.filter}]} source={require('../assets/arr1.png')}/>
                </View>
                <View style={styles.und}>

                </View>
            </View>
    )
}

const styles = StyleSheet.create( {
        head:{
            fontSize: 16,
            
        },
        carddd:{
                marginBottom: 12,
                margin: 15,
        },
        holder:{
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginBottom: 15,
        },
        und:{
            backgroundColor: '#00BBBF',
            height: 1,
        },
        point:{
            height: 20,
            width: 20,
            alignSelf: 'center',
            marginRight: 8,
            
            
        },

    }
)