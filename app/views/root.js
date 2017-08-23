import React from 'react'
import { gql, ApolloProvider, createNetworkInterface, ApolloClient, graphql } from 'react-apollo'
import {
    AppRegistry,
    StyleSheet,
    Text,
    Button,
    View
} from 'react-native';

export const HomeScreenQuery = gql`
query pocCategorySearch($id: ID!, $search: String!, $categoryId: Int!) {
  poc(id: $id) {
    products(categoryId: $categoryId, search: $search) {
      productVariants{
        title
        description
        imageUrl
        price
      }
    }
  }
}

`;
export function HomePage({data, mutate}) {
    // mutate({
    //     variables: { id: '812' },
    //     refetchQueries: [{ query: HomeScreenQuery }],
    // })
    //     .then(res => {
    //         console.log('Mutate then', res);
    //     });
    console.log('M ', mutate);
    console.log('HomePage', data);
    if (!data) {
        return <Text> No data fetch </Text>
    }
    if (data.loading) {
        return <Text> Loading... </Text>;
    }
    if (data.errors) {
        return <Text> Errors... {data.errors} </Text>;
    }
    if (data.error) {
        return <Text> Error... {data.message} </Text>;
    }
    return (
        <View>
            <Text> {data.poc.products[0].productVariants[0].title} </Text>
        </View>
    );
}