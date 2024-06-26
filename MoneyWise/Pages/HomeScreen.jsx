import { useContext } from "react";
import React from "react";
import { ThemeContext, ThemeProvider } from "../ThemeContext";
import { View, StyleSheet,Text,TouchableOpacity, Image, ScrollView } from "react-native";
import Card from "../Components/Card";


export default function HomeScreen(){
    const {colors} = useContext(ThemeContext);

    return(
        <ScrollView>
        <View style={[styles.ovd, {backgroundColor: colors.background}]}>
            <View style={styles.container}>
                <View>
                    <Image source={require('../assets/profile.png')} />
                </View>
                <View style={styles.secondary}>
                <View style={styles.texters}>
                    <Text style={styles.wlk}>Welcome back,</Text>
                    <Text style={[styles.wlk1, {color: colors.text}]}>Muiz Bello</Text>
                </View>
                <View style={[styles.search,{backgroundColor: colors.tabbar}]}>
                    <Image style={[styles.glass,{filter: colors.filter}]} source={require('../assets/search.png')}/>
                </View>
                </View>
            </View>
            <View>
                <Image style={styles.card} source={require('../assets/Card.png')} />
            </View>
            <View style={styles.flex}>
                <View>
                <View style={[styles.bck,{backgroundColor: colors.tabbar}]}>
                        <Image source={require('../assets/send.png')} />
                    </View>
                    <Text style={{color: colors.tabbar1}}> Send</Text>
                </View>
                <View>
                    <View style={[styles.bck,{backgroundColor: colors.tabbar}]}>
                        <Image source={require('../assets/recieve.png')} />
                    </View>
                    <Text style={{color: colors.tabbar1}}>Receive</Text>
                </View>
                <View>
                <View style={[styles.bck,{backgroundColor: colors.tabbar}]}>
                        <Image source={require('../assets/loan.png')} />
                    </View>
                    <Text style={{color: colors.tabbar1}}>  Loan</Text>
                </View>
                <View>
                <View style={[styles.bck,{backgroundColor: colors.tabbar}]}>
                        <Image source={require('../assets/topUp.png')} />
                    </View>
                    <Text style={{color: colors.tabbar1}}>Top Up</Text>
                </View>
                
            </View>
            <View style={styles.huj}>
                <Text style={[styles.huj1,{color: colors.text}]}>Transactions</Text>
                <Text style={styles.huj2}>See all</Text>
            </View>
            <View>
                <Card 
                company='Apple Store'
                industry='Entertainment'
                amount= '-$5.99'
                image={require('../assets/apple.png')}
                />
                <Card 
                company='Spotify'
                industry='Music'
                amount= '-$12.99'
                image={require('../assets/spotify.png')}
                />
                <Card 
                company='Money Transfer'
                industry='Transaction'
                amount1= '$300.00'
                image={require('../assets/moneyTransfer.png')}
                />
                <Card 
                company='Grocery'
                industry='Entertainment'
                amount= '-$88.00'
                image={require('../assets/grocery.png')}
                />
                <Card 
                company='Spotify'
                industry='Music'
                amount= '-$12.99'
                image={require('../assets/spotify.png')}
                />
                <Card 
                company='Money Transfer'
                industry='Transaction'
                amount1= '$999.00'
                image={require('../assets/moneyTransfer.png')}
                />
                <Card 
                company='Apple TV'
                industry='Entertainment'
                amount= '-$66.99'
                image={require('../assets/apple.png')}
                />
            </View>
        </View>
        </ScrollView>
       
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 35,
        flexDirection: 'row',
        marginLeft: 8,
        marginBottom: 10,
    },
    flex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 22,
    },
    ovd:{
        marginTop: 28,
    },
    card:{
            alignSelf:'center',
    },
    secondary:{
        marginLeft: 15,
        flexDirection: 'row',
    },
    texters:{
        justifyContent: 'space-between',
        marginRight: 105,
    },
    search:{
        alignSelf: 'center',
        backgroundColor: '#ADD6E4',
        borderRadius: 32,
        height: 50,
        width: 50,
        
    },
    wlk:{
        color: '#00BBBF',
        fontSize: 15,
    },
    wlk1:{
        fontSize: 18,
    },
    glass:{
        width: 30,
        height: 30,
        marginTop: 9,
        alignSelf: 'center',
    },
    bck:{
        backgroundColor: '#ADD6E4',
        width: 45,
        height: 45,
        alignItems: 'center',
        borderRadius: 25,
        padding: 10,
    },
    huj:{
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    huj1:{
        fontSize: 18,
        marginLeft: 8,
    },
    huj2:{
        color: '#4169E1',
        marginTop: 8,
        marginRight: 11,
    },
  });
  