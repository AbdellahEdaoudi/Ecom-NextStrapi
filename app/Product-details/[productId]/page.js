'use client'
// import ProductApi from '@/app/Api/ProductApi';
import ProductApi from '../../Api/ProductApi';
// import BreadCrupm from '@/app/Pages/BreadCrupm';
import BreadCrupm from '../../Pages/BreadCrupm';
import React, { useEffect, useState } from 'react'
import Productbnr from './component/productbnr';
import ProductInfo from './component/ProductInfo';
// import ProductList from '@/app/Pages/ProductList';
import ProductList from '../../Pages/ProductList';
import { usePathname } from 'next/navigation';

function ProductDatails({ params }) {
  const path = usePathname();
  const [productDtls, setProductDtls] = useState({})
  const [ProductListe, setProductListe] = useState([])

  useEffect(() => {
    getProbyid();
  }, [params?.productId])

  const getProbyid = () => {
    ProductApi.getProductebyId(params?.productId).then((res) => {
      console.log("product  item", res.data.data);
      setProductDtls(res.data.data)
      getbyfiltCateg(res.data.data)
    })

  }
  const getbyfiltCateg = (product) => {
    ProductApi.getbyfiltCateg(product?.attributes.categorie).then((res) => {
      console.log(res?.data?.data);
      setProductListe(res?.data?.data);
    });
  };

  return (
    <div className='px-10 md:px-28 py-8'>
      <BreadCrupm path={path} />
      <div className='mt-10  justify-around  grid grid-cols-1 md:grid-cols-2 gap-4'>
        <Productbnr product={productDtls} />
        <ProductInfo product={productDtls} />
      </div>
      <div>
        <div className='-mx-5'>
          <h1 className='mt-10 text-xl pb-4'>Similar Products</h1>
          <ProductList productList={ProductListe} />

        </div>
      </div>
    </div>

  )
}

export default ProductDatails