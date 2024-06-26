import React from 'react';
import { View, ScrollView, Text, StyleSheet, Image } from 'react-native';


export default function Card({ company, industry, amount, image}){
    return(
        <View style={styles.card}>
            <View style={styles.fam}>
                {image && <Image source={image} style={styles.image}  />}
              </View>
          <View style={styles.holdx}>
            <View style={styles.mdx}>
                {company && <Text style={styles.title}>{company}</Text>}
                {industry  && <Text style={styles.subtitle}>{industry}</Text>}
            </View>
            <View style={styles.botx}>
            {amount && <Text style={styles.description}>{amount}</Text>}
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
      fontSize: 18,
    },
    fam:{
        marginLeft: -8,
        marginRight: 22,
        backgroundColor: '#ADD6E4',
        borderRadius: 22,
        width: 40,
        height: 40,
        alignItems: 'center',
        alignContent: 'center',
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