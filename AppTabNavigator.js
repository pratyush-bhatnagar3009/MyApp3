import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from '../screens/HomeScreen';
import DonateScreen from '../screens/DonateScreen';

export const AppTabNavigator = createBottomTabNavigator({
  DonateBooks : {
    screen: HomeScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/Homelogo.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Home",
    }
  },
  DonateRequest: {
    screen: DonateScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/donate.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Donate",
    }
  }
});
