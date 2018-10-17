import React, { Component } from 'react';
import { Text, View, Dimensions } from 'react-native';
import AwesomeButton from 'react-native-really-awesome-button';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default class HomeScreen extends React.Component {
  onPressNextStep(event) {
    console.log('ho;la');
  }

  renderContent() {
    return (
      <View style={{ 
        flex: 1, 
          flexDirection: 'row',
          justifyContent: 'center',
          padding: 60,
          margin: 13
      }}>
      <View style={{ 
        flex: 1, 
          flexDirection: 'row',
          justifyContent: 'center',
          padding: 60
      }}>
      <AwesomeButton
      backgroundColor='#ffe9f2'
      backgroundDarker='#ff3586'
      backgroundPlaceholder='#ff3586'
      activityColor='#ff3586'
      backgroundActive='#35ffae'
      textColor='#ff3586'
      borderRadius={8}
      height={135}
      width={SCREEN_WIDTH * .3}
      >To Do</AwesomeButton>
      </View>
      <View style={{ 
        flex: 1, 
          flexDirection: 'row',
          justifyContent: 'center',
          padding: 60
      }}>
      <AwesomeButton
      backgroundColor='#ffe9f2'
      backgroundDarker='#ff3586'
      backgroundPlaceholder='#ff3586'
      activityColor='#ff3586'
      backgroundActive='#35ffae'
      textColor='#ff3586'
      borderRadius={8}
      height={135}
      width={SCREEN_WIDTH * .3}
      >To Do</AwesomeButton>
      </View>
      <View style={{ 
        flex: 1, 
          flexDirection: 'row',
          justifyContent: 'center',
          padding: 60
      }}>
      <AwesomeButton
      backgroundColor='#ffe9f2'
      backgroundDarker='#ff3586'
      backgroundPlaceholder='#ff3586'
      activityColor='#ff3586'
      backgroundActive='#35ffae'
      textColor='#ff3586'
      borderRadius={8}
      height={135}
      width={SCREEN_WIDTH * .3}
      >To Do</AwesomeButton>
      </View>
      </View>
    );
  }

  render() {
    return (
      <View style={{ 
      }}>
      {this.renderContent()}
      {this.renderContent()}
      {this.renderContent()}
      {this.renderContent()}
      </View>
    );
  }
}
