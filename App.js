import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Tab from './app/componentes/Tab'
import Login from './app/componentes/Login';
import ConexionFetch from './app/componentes/ConexionFetch';
import Detalles from './app/componentes/Detalles';

const Stack = createStackNavigator();
//const Tab = createBottomTabNavigator();
//const Stack = createMaterialBottomTabNavigator();
//const Tab = createMaterialTopTabNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cerrar Sesion" component={Tab} />
        <Stack.Screen name="Detalles" component={Detalles} />
      </Stack.Navigator>
    </NavigationContainer>
    /*<NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Movies" component={ConexionFetch} />
        <Stack.Screen name="Detalles" component={Detalles} />
      </Stack.Navigator>
      <Tab.Navigator 
        initialRouteName="ConexionFetch"
        tabBarOptions={{
          activeTintColor: '#e91e63',
          }}>
        <Tab.Screen 
          name="Movies" 
          component={ConexionFetch}
          options={{
            tabBarLabel: 'Movies',
            tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size}/>
          ),
        }}
        />
        <Tab.Screen 
          name="Detalles"
          component={Detalles} 
          options={{
            tabBarLabel: 'Detalles',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="bell" color={color} size={size}/>
            )
          }}/>
      </Tab.Navigator>
    </NavigationContainer>*/
  );
}

export default App;