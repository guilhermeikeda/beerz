import React, { Component } from 'react';
import { ProductListScreen } from './app/views/product-list';
import { HomeScreen } from './app/views/home';

import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';

import { StackNavigator } from 'react-navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const App = StackNavigator({
  Home: { screen: HomeScreen },
  ProductList: { screen: ProductListScreen }
});

AppRegistry.registerComponent('BeerZ', () => App);