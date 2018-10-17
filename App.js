import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RootStack from './components/navigator';

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
