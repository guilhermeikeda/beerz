import React, { Component } from 'react'

import { ListView } from 'react-native';

import { ProductNameComponent } from './product-name.component';

/**
 * View responsible for displaying the product list.
 */
export class ProductListComponent extends Component {
    render() {
        const dataSource = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });        
        this.state = {
            products: dataSource.cloneWithRows(this.props.products),
        };
        return (
            <ListView
                dataSource={this.state.products}
                renderRow={(product) => <ProductNameComponent title={product.productVariants[0].title} />}
                />
        );
    }
}