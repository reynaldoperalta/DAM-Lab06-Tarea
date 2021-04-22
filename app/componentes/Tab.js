import React, {Component, Fragment} from 'react';
import ConexionFetch from './ConexionFetch';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Videos from './Videos';
import Settings from './Herramientas';
import Herramientas from './Herramientas';
export default class Tab extends Component {
    render() {
        const Tabs = createBottomTabNavigator();
        return(
            <Fragment>
                <Tabs.Navigator 
                    initialRouteName="ConexionFetch"
                    tabBarOptions={{
                    activeTintColor: 'white',
                    style:{
                        backgroundColor:'#e91e63'
                    }
                    }}>
                <Tabs.Screen 
                    name="Movies" 
                    component={ConexionFetch}
                    options={{
                        tabBarLabel: 'Movies',
                        tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="home" color={color} size={size}/>
                    ),
                    }}
                />
                <Tabs.Screen 
                    name="Videos"
                    component={Videos} 
                    options={{
                        tabBarLabel: 'Video',
                        tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="bell" color={color} size={size}/>
                        )
                    }}
                />
                <Tabs.Screen 
                    name="Herramientas"
                    component={Herramientas} 
                    options={{
                        tabBarLabel: 'Herramientas',
                        tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="bell" color={color} size={size}/>
                        )
                    }}
                />
            </Tabs.Navigator>
            </Fragment>)
    }
}