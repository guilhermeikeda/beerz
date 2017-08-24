import React, { Component } from 'react'

import { Text } from 'react-native';

import { TextStyle } from '../styles/text.style';

/**
 * Component to show product title.
 */
export class ProductNameComponent extends Component {
    render() {
        this.title = this.props.title;
        return (
            <Text style={TextStyle.productTitle}> {this.title} </Text>
        );
    }
}