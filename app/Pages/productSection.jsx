'use client'
import React, { useEffect, useState } from 'react'
import ProductList from './ProductList'
import ProductApi from '../Api/ProductApi'


function Product() {
  const [productList,setproductList]=useState([])
  useEffect(()=>{
    getProducts();
  },[])
  const getProducts=()=>{
    ProductApi.getProducte().then(res=>{
      console.log(res.data.data);
      setproductList(res.data.data)
    })
  }
  return (
    <div className='px-7'>
      <h1 className='text-[20px] py-3 font-medium'>Oue Latest products</h1>
      <ProductList  productList={productList}/>
    </div>
  )
}

export default Product