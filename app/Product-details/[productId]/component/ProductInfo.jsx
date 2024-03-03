'use client'
import React, { useContext } from 'react'
import {ShoppingCart,BadgeCheck,List} from 'lucide-react'
import {useUser} from '@clerk/nextjs'
import { useRouter } from 'next/navigation';
import CartApi from '../../../Api/CartApi';
import { CartContext } from '../../../context/CartContx';
function ProductInfo({product}){
  const { user }=useUser();
  const router=useRouter();
  const {cart,setCart} = useContext(CartContext)
  return (
    <div>
      {product?.id ?
       <div className='space-y-3 '>
        <h1 className='font-medium text-3xl'>{product?.attributes?.title}</h1>
        <h1 className='text-gray-400 text-[12px] flex items-center gap-1'><List className='w-4'/>{product?.attributes?.categorie}</h1>
        <h2 className='font-medium text-[15px]' >{product?.attributes?.description[0]?.children[0]?.text}</h2>
        <div className='space-y-2'>
        <h5 className='text-[13px]  flex gap-1'><BadgeCheck className='text-green-500 h-5 w-5' /> Eligible for instant Delivery</h5>
        <h3 className='text-green-500 text-[22px]'>{product?.attributes?.price} $</h3>
        <h4><button onClick={()=>{
          if(!user){
            router.push('/sign-in')
          }else{
            const data ={
              data: {
                username:user.fullName,
                email:user.primaryEmailAddress.emailAddress,
                products:[product?.id]
              }
            }
            CartApi.AddToCart(data).then(res=>{
              console.log('cart good',res?.data?.data.id,);
              setCart(oldCart =>[
                ...oldCart,
                {
                  id:res?.data?.data.id,
                  product
                }
              ])
            }).catch(err=>{
              console.log('err',err);
            })
          }
        }} className='flex items-center  gap-2 text-[14px] bg-sky-300 hover:border-2 px-2 py-2 rounded-md hover:shadow-lg'>
          <ShoppingCart/> Add to Cart</button>
        </h4>
        </div>
    </div> :
    <div className='space-y-6 mt-4'>
    <div className='h-[20px] w-[400px] bg-slate-200 animate-pulse'>  
    </div>
    <div className='h-[20px] w-[100px] bg-slate-200 animate-pulse'>  
    </div>
    <div className='h-[20px] w-[500px] bg-slate-200 animate-pulse'>  
    </div>
    <div className='h-[20px] w-[200px] bg-slate-200 animate-pulse'>  
    </div>
    <div className='h-[20px] w-[80px] bg-slate-200 animate-pulse'>  
    </div>
    <div className='h-[20px] w-[140px] bg-slate-200 animate-pulse'>  
    </div>
    </div>
    }
    </div>
  )
}

export default ProductInfo