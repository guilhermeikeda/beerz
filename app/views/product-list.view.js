import React from 'react'

import { Text, View } from 'react-native';

import { ProductListComponent } from '../components/product-list.component';

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
            <Text style={TextStyle.title}> Lista de Produtos </Text>
            <ProductListComponent products={data.poc.products} />
        </View>
    );
}