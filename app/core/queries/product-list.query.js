import { graphql, gql } from 'react-apollo';

import { ProductListView } from '../../views/product-list.view';

/**
 * Search products given poc id, search and categoryId
 */
const ProductListGQL = gql`
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
}`;

export const ProductListQuery = graphql(ProductListGQL, {
    options: (props) => ({
        variables: {
            id: props.id,
            search: props.search,
            categoryId: props.categoryId
        },
    }),
})(ProductListView);
