import React from 'react'
import Image from 'next/image'
import {List} from 'lucide-react'
import Link from 'next/link'

function ProductItem({product}) {
  return (
    <div className='pb-10' >
      <Link href={`/Product-details/${product?.id}`}>
    <div className='hover:border-2 px-2 py-3 border-sky-400 shadow-lg bg-gray-50 rounded-lg '>
    <div><Image  src={product?.attributes?.banner?.data?.attributes?.url} alt='banner'
    width={200}
    height={50}
    className='rounded-md h-48 lg:w-56 cursor-pointer'/> </div>
    <div className='pr-5 pt-3 text-[19px]  font-medium text-center'>{product?.attributes?.title}</div>
    <div className='flex justify-between '>
      <h1 className='text-gray-400 text-[12px] flex items-center gap-1'><List className='w-4' />{product?.attributes?.categorie}</h1>
      <div className='pr-5 pt-3 text-[19px] font-medium text-center text-green-500'>{`${product?.attributes?.price} $`}</div>
    </div>
    </div>
    </Link>
    </div>
    
    
    
  )
}

export default ProductItem
