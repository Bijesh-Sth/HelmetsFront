import React from 'react';
import ProductCard from '../../Components/ProductCard/ProductCard';
import { useProductContext } from '../../Context/ProductContext';

const Shop = () => {
  const { isLoading, products } = useProductContext();

  const dummyProduct = {
    id: 'dummy_id',
    product_name: 'Dummy Product',
    price: 10.99,
    brand: 'Dummy Brand', // Add a brand property
    // Add other properties as needed
  };
  

  // Combine dummy product with existing products
  const allProducts = isLoading ? [] : [...products, dummyProduct];
  console.log(products);
  
  return (
    <>
      <div className="shop">
        <div className="shop-container">
          <div className="shop-container--header">
            <h1>Shop</h1>
          </div>
          <div className="shop-container--products">
            {isLoading ? <p>Loading...</p> : allProducts.map((product) => <ProductCard key={product.id} {...product} />)}
          </div>
        </div>
      </div>
    </>
  )
}

export default Shop;
