import React, { Component } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

import HomeScreen from './home';
import DetailsScreen from './profile';
import CalendarScreen from './calendar';

const RootStack = createBottomTabNavigator(
  {
  Add: HomeScreen,
  Calendar: CalendarScreen,
  Profile: DetailsScreen,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Add') {
          iconName = `ios-add${focused ? '' : '-outline'}`;
        } else if (routeName === 'Profile') {
          iconName = `ios-happy${focused ? '' : '-outline'}`;
        } else if (routeName === 'Calendar') {
          iconName = `ios-calendar${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#ff3586',
      inactiveTintColor: 'gray',
    },
  }
);

export default RootStack;
