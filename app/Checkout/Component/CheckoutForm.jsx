import {useStripe, useElements, PaymentElement} from '@stripe/react-stripe-js';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContx';
import { useUser } from '@clerk/nextjs';
import OrderAPi from '../../Api/OrderApi'
import CartApi from '../../Api/CartApi';

 
export default function CheckoutForm({amount}){
  const {cart,setCart}=useContext(CartContext);
  const {user}=useUser();
    const stripe = useStripe();
    const elements = useElements();
    const [loading,setLoading]=useState(false);
    const [ErrorMessage,setErrorMessage]=useState();
  
    const handleSubmit = async (event) => {
      // We don't want to let default form submission happen here,
      // which would refresh the page.
      event.preventDefault();
  
      if (!stripe || !elements) {
        // Stripe.js hasn't yet loaded.
        // Make sure to disable form submission until Stripe.js has loaded.
        return;
      }

      const handleError = (error) => {
        setLoading(false)
        setErrorMessage(error.message)
      }
      createOrder();
      
      sendEmail();

        // Trigger form validation and wallet collection
      const {error: submitError} = await elements.submit();
      if (submitError) {
        handleError(submitError);
        return;
      }

      const  res = await fetch('/CheckApi/Create-intent',{
        method: 'POST',
        body: JSON.stringify({
            amount:amount
        })
      })
      const clientSecret = await res.json()
      const result = await stripe.confirmPayment({
        //`Elements` instance that was used to create the Payment Element
        clientSecret,
        elements,
        confirmParams: {
          return_url: "http://localhost:3000/payment-confirm",
        },
      });
  
      if (result.error) {
        // Show error to your customer (for example, payment details incomplete)
        console.log(result.error.message);
      } else {
        // Your customer will be redirected to your `return_url`. For some payment
        // methods like iDEAL, your customer will be redirected to an intermediate
        // site first to authorize the payment, then redirected to the `return_url`.
      }
    };
    const createOrder =()=>{
      const productIds= [];
      cart.forEach((el)=>{
        productIds.push(el?.product?.id)
      })
      const data ={
        data: {
          email: user.primaryEmailAddress.emailAddress,
          username: user.fullName,
          amount,
          products: productIds
        }
      }
      OrderAPi.CreatOrder(data).then((res)=>{
        if(res){
          cart.forEach(el=>{
            CartApi.deletCartitem(el?.id).then(result=>{

            })
          })
        }
      })
    }
    const sendEmail = async ()=>{
      const  res = await fetch('/CheckApi/send-email',{
        method: 'POST',
      })
    }
    return (
    <form onSubmit={handleSubmit} >
      <div className='mx-5 mt-10 md:mx-[320px] pb-10 h-screen  items-center'>
      <PaymentElement />
      <button className='bg-bluee p-2 rounded-md mt-4 text-white w-full'>Submit</button>
      </div>
      
    </form>
  );
};
