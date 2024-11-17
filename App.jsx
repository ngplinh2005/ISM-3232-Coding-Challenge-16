// Task 2: Create the App Component

import React, { useState } from "react";
import ProductList from "./ProductList";
import AddProductForm from "./AddProductForm";

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: 1200, description: "A powerful laptop." },
    { id: 2, name: "Headphones", price: 150, description: "Noise-cancelling headphones." },
  ]);

  function addProduct(product) {
    setProducts((prevProducts) => [...prevProducts, { ...product, id: prevProducts.length + 1 }]);
  }

  return (
    <div>
      <h1>Product Dashboard</h1>
      <ProductList products={products} />
      <AddProductForm addProduct={addProduct} />
    </div>
  );
}

export default App;