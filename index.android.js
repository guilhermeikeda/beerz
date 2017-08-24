import React, { Component } from 'react';

import { ApolloProvider, createNetworkInterface, ApolloClient } from 'react-apollo';

import { AppRegistry, View } from 'react-native';

import { ProductListQuery } from './app/core/queries/product-list.query';
import { ContainerStyle } from './app/styles/container.style';

/**
 * Application root component
 */
class App extends Component {

  createClient() {
    const networkInterface = createNetworkInterface({ uri: 'https://803votn6w7.execute-api.us-west-2.amazonaws.com/dev/public/graphql' });
    return new ApolloClient({
      networkInterface
    });
  }

  render() {
    return (
      <ApolloProvider client={this.createClient()}>
        <View style={ContainerStyle.root}>
          <ProductListQuery id={'836'} search={''} categoryId={0} />
        </View>
      </ApolloProvider>
    );
  }
}

AppRegistry.registerComponent('BeerZ', () => App);