import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Pages/HomeScreen';
import SettingsScreen from './Pages/SettingsScreen';
import { NavigationContainer } from '@react-navigation/native';
import Statistics from './Pages/Statistics';
import MyCards from './Pages/MyCards';



const Tab = createBottomTabNavigator();

export default function App() {
  return (
          <NavigationContainer>
              <View style={styles.container}>
                <Tab.Navigator initialRouteName="Home" screenOptions={{tabBarActiveTintColor: '#4169E1', tabBarInactiveTintColor: '#808080', headerShown: false  }}>
                  <Tab.Screen  name="Home" component={HomeScreen} options={{ tabBarIcon: ({focused,color }) => ( <Image source={focused ? require('./assets/home.png'): require('./assets/home.png')}  style={{tintColor: color }}/>)  }} />
                  <Tab.Screen  name="My Cards" component={MyCards}  options={{ tabBarIcon: ({focused,color}) => ( <Image source={focused ? require('./assets/myCards.png'): require('./assets/myCards.png')}  style={{tintColor: color }}/>)  }} />
                  <Tab.Screen name="Statistics" component={Statistics} options={{ tabBarIcon: ({ focused, color}) => ( <Image source={focused ? require('./assets/statictics.png'): require('./assets/statictics.png')}  style={{tintColor: color }}/>)  }} />
                  <Tab.Screen name="Settings" component={SettingsScreen} options={{ tabBarIcon: ({ focused,color}) => ( <Image  source={focused ? require('./assets/settings.png'): require('./assets/settings.png')}  style={{tintColor: color }}/>)  }} />
                </Tab.Navigator>
                </View>
          </NavigationContainer>
              
                

    
  
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    marginTop: 20,
  },
  barIcon:{
    tintColor: '#fff'
  },
});
