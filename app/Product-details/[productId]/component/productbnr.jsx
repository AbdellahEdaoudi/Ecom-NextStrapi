import React from 'react'
import Image from 'next/image'
function Productbnr({product}) {
  return (
    <div className='flex justify-center '>
        {product?.attributes?.banner?.data?.attributes?.url ? 
      <Image className='rounded-lg '
       src={product?.attributes?.banner?.data?.attributes?.url}
       alt='productDtls'width={300} height={300}/> :  
      <div className='w-[300px] h-[300px] bg-slate-300 rounded-lg animate-pulse'></div>
      }
    </div>
  )
}

export default Productbnr