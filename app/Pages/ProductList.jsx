import React from 'react';
import ProductItem from './ProductItem';

function ProductList({ productList }) {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-2'>
      {productList.map((lst, i) => (
        <div key={i}><ProductItem product={lst} /></div>
      ))}
    </div>
  );
}

export default ProductList;
