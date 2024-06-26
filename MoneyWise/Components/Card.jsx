import { useContext } from 'react';
import { ThemeContext, ThemeProvider } from '../ThemeContext';
import React from 'react';
import { View, ScrollView, Text, StyleSheet, Image } from 'react-native';


export default function Card({ company, industry, amount,amount1, image, image1}){
  const {colors,isDarkTheme} = useContext(ThemeContext);
    return(
        <View style={[styles.card, {backgroundColor: colors.background}]}>
            <View style={[styles.fam,{backgroundColor:colors.tabbar}]}>
                {image && <Image source={image} style={[styles.image,{filter: colors.filter}]}  />}
                {image1 && <Image source={image1} style={[styles.image, isDarkTheme && {tintColor: 'white'},{filter: colors.filter}]}  />}
              </View>
          <View style={styles.holdx}>
            <View style={styles.mdx}>
                {company && <Text style={[styles.title, {color: colors.text}]}>{company}</Text>}
                {industry  && <Text style={styles.subtitle}>{industry}</Text>}
            </View>
            <View style={styles.botx}>
            {amount && <Text style={[styles.description, {color:colors.text}]}>{amount}</Text>}
            {amount1 && <Text style={styles.description1}>{amount1}</Text>}
            </View>
        </View>
    </View>
  );
};



const styles = StyleSheet.create({
    card:{
      flexDirection: 'row',
      margin: 12,
      backgroundColor: '#fff',
    },
    holdx:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      
      flex: 1,
    },
    description:{
      fontSize: 17,
    },
    description1:{
      fontSize: 17,
      color: '#4169E1',
    },
    fam:{
        marginLeft: -8,
        marginRight: 22,
        borderRadius: 22,
        width: 40,
        height: 40,
        alignItems: 'center',
        alignContent: 'center',
        paddingTop: 3,
    },
    botx:{
      alignSelf: 'center',
    },
    title:{
        fontSize: 16,
        fontWeight: 'bold',
    },
    subtitle:{
        color: '#AFB0B6',
    },
    image:{
        marginTop: 8,
    },
  });