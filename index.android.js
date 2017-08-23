import React, { Component } from 'react';
import { ProductListScreen } from './app/views/product-list';
import { HomeScreen } from './app/views/home';
import { gql, ApolloProvider, createNetworkInterface, ApolloClient, graphql } from 'react-apollo';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import { HomePage } from './app/views/root';
import { HomeScreenQuery } from './app/views/root';

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

const HomeScreenQueryWithData = graphql(HomeScreenQuery, {
  options: (props) => ({
    variables: {
      id: props.id,
      search: props.search,
      categoryId: props.categoryId
    },
  }),
})(HomePage);

// const App = StackNavigator({
//   Home: { screen: HomeScreen },
//   ProductList: { screen: ProductListScreen }
// });\

class App extends Component {

  constructor(...args) {
    super(...args);

    const networkInterface = createNetworkInterface({ uri: 'https://803votn6w7.execute-api.us-west-2.amazonaws.com/dev/public/graphql' });
    this.client = new ApolloClient({
      networkInterface
    });
  }

  render() {
    return (
      <ApolloProvider client={this.client}>
        <View>
          <HomeScreenQueryWithData id={'813'} search={''} categoryId={0}/>
        </View>
      </ApolloProvider>
    );
  }
}

AppRegistry.registerComponent('BeerZ', () => App);