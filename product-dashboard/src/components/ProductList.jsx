// Task 3: Create the ProductList Component
// Task 5: Implement Keys in the ProductList Component

import ProductItem from './ProductItem';

function ProductList({ products }) {
  return (
    <div>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;