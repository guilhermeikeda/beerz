import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';

export class ProductListScreen extends React.Component {
  static navigationOptions = {
    title: 'Product List',
  };
  render() {
    return (
      <View>
        <Text>Bem vindo a lista de produtos</Text>
      </View>
    );
  }
}