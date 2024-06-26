import { useContext } from "react";
import React from "react";
import { View, StyleSheet,Text,TouchableOpacity, Image } from "react-native";
import Section from "../Components/Sections";
import { useState } from "react";
import { ThemeContext } from "../ThemeContext";
import CustomToggleSwitch from "../Components/CustomToggleSwitch";


export default function SettingsScreen(){
    
    const { isDarkTheme, colors, handletoggle, isOn } = useContext(ThemeContext);

    

    return(
    <View style={[styles.cont, {backgroundColor: colors.background}]}>
        <View style={styles.holdex}>
            <Text style={[styles.holdxx, {color:colors.text}]}>Settings</Text>
        </View>
        <View style={styles.sections}>
            <Section
            sectionname='Language'
            />
            <Section
            sectionname='My Profile'
            />
            <Section
            sectionname='Contact Us'
            />
            <Section
            sectionname='Change Password'
            />
            <Section
            sectionname='Privacy Policy'
            />
        </View>
        <View style={styles.theme}>
        <Text style={[styles.teme ,{color: colors.text}]}>Theme</Text>
        <View style={styles.pop}>
        <CustomToggleSwitch 
            isOn={isOn}
            onColor='green'
            offColor='gray'
            size='large'
            onToggle={handletoggle}
            />
        </View>
            
        </View>
    </View>
        
    );
}


const styles =StyleSheet.create({
    holdex:{
        alignSelf: 'center',
        marginTop: 32,
        
    },
    pop:{
        marginTop: -4,
    },
    cont:{
        flex: 1,
    },
    holdxx:{
        fontSize: 20,
    },
    theme:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        margin: 18,
        marginTop: 27,
    },
    teme:{
        fontSize: 18,
    },
    sections:{
        marginTop: 40,
    },

    
}
)