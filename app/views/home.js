import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';

import { StackNavigator } from 'react-navigation';

export class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome Home',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, Chat App!</Text>
        <Button
          onPress={() => navigate('ProductList')}
          title="Show Product List"
          />
      </View>
    );
  }
}