import React, {Component, Fragment} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Video from 'react-native-video';



export default class Videos extends Component {
    render() {
        const earthVideo = require('./chief.mp4');
        return (
            <Fragment>
            <Video source={earthVideo}
                ref={(ref) => {
                    this.player = ref
                }}
                controls={true}
                Buffer={this.onBuffer}                
                onError={this.videoError}               
                style={styles.backgroundVideo}
            />
            </Fragment>
        );
    }



}
       
const styles = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: 200,
        left: 0,
        bottom: 0,
        right: 0,
      },
});
