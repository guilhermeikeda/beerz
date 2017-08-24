import React from 'react'

import { Text, View } from 'react-native';

import { TextStyle } from '../styles/text.style';

/**
 * View responsible for displaying the product list.
 */
export function ProductListView({data, mutate}) {
    if (!data) {
        return <Text> No data fetch </Text>
    }
    if (data.loading) {
        return <Text> Loading... </Text>;
    }
    if (data.error) {
        return <Text> Error... {data.message} </Text>;
    }
    return (
        <View>
            <Text style={TextStyle.productTitle}> {data.poc.products[0].productVariants[0].title} </Text>
        </View>
    );
}