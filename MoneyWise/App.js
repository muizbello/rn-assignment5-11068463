import React, { useContext } from 'react';
import { ThemeProvider, ThemeContext } from './ThemeContext';
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Pages/HomeScreen';
import SettingsScreen from './Pages/SettingsScreen';
import { NavigationContainer } from '@react-navigation/native';
import Statistics from './Pages/Statistics';
import MyCards from './Pages/MyCards';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <MainTabs />
      </NavigationContainer>
    </ThemeProvider>
  );
}

function MainTabs() {
  const { colors } = useContext(ThemeContext);

  return (
    <Tab.Navigator
      initialRouteName="Settings"
      screenOptions={{
        tabBarActiveTintColor: '#4169E1',
        tabBarInactiveTintColor: '#808080',
        tabBarStyle: { backgroundColor: colors.tabbar },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Image
              source={require('./assets/home.png')}
              style={{ tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="My Cards"
        component={MyCards}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Image
              source={require('./assets/myCards.png')}
              style={{ tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Statistics"
        component={Statistics}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Image
              source={require('./assets/statictics.png')}
              style={{ tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Image
              source={require('./assets/settings.png')}
              style={{ tintColor: color }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  barIcon: {
    tintColor: '#fff',
  },
});

export default App;
