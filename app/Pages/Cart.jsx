import React, { useContext } from 'react';
import { CartContext } from '../context/CartContx';
import Link from 'next/link'

function Cart({opencart,setopencart}) {
    const {cart,setCart}=useContext(CartContext);
    
  return (
    <div className='h-[310px] w-[250px] bg-gray-100 z-10 rounded-md border shadow-sm absolute mx-10 right-10 top-12 p-5 overflow-auto'>
      <div className="space-y-4 text-center">
      <Link
        onClick={()=>{setopencart(!opencart)}}
        href="/Cart"
        className="block rounded border border-gray-600 px-5 py-3 text-sm text-gray-600 transition hover:ring-1 hover:ring-gray-400"
      >
        View my cart ({cart.length})
      </Link>
    </div>
      <div>
      <div className="mt-2 space-y-6">
        <ul className="space-y-4 ">
            {cart?.map((ct,i)=>{
                return(
                    <li key={i} className="flex items-center gap-4">
            <img
              src={ct?.product?.attributes?.banner?.data?.attributes?.url}
              alt="" 
              className=" h-16 w-16 rounded object-cover cursor-pointer"
            />

            <div>
              <h3 className="text-sm text-gray-900 font-medium">{ct?.product?.attributes?.title}</h3>

              <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                <div>
                  <dt className="inline font-medium">{ct?.product?.attributes?.categorie}</dt>
                </div>

                <div>
                  <dt className="inline text-green-500 font-medium">{ct?.product?.attributes?.price} $</dt>
                </div>
              </dl>
            </div>
          </li>
                )
            })}
          
        </ul>
      </div>  
      </div><br/>
      <div className="space-y-4 text-center">
      <Link
      onClick={()=>{setopencart(!opencart)}}
        href="/"
        className="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
      >
        Continue shopping
      </Link>
    </div>
    </div>
  );
}

export default Cart;
