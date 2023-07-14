import React from 'react'
import Header from "./Header";
import { useStateValue } from './StateProvider'
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import CurrencyFormat from "react-currency-format";


function Checkout() {
  const [{basket}] = useStateValue();
  return (
    <>
        <Header />
        <div className='checkout'>
          <div className='checkout_left'>
            <img className='checkout_ad' src='https://adexchanger.com/wp-content/uploads/2018/02/shutterstock_376692970.jpg'/>
            {(basket?.length === 0)?(
              <div>
                <h2>Your Shopping basket is empty</h2>
              </div>
            ):(
              <div>
                <h2 className='checkout_title'>Your Shopping Bakset</h2>
                {basket.map(item=>(
                  <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                  />
                ))}
              </div>
          )}
        </div>
        {basket.length>0 && (
          <div className='checkout_right'>
            {/* <h1>Subtotal</h1> */}
            <Subtotal />
          </div>
        )}
        </div>
    </>
  )
}

export default Checkout
