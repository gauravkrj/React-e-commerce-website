import React, {useEffect, useState} from 'react'
import "./Payment.css"
import Checkoutproduct from "./Checkoutproduct.js"
import { useStateValue } from './StateProvider'
import { Link, useNavigate } from "react-router-dom";
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from "react-currency-format";
import {getBasketTotal} from "./Reducer";
import axios from "./axios";
import { db } from "./firebase";

function Payment() {

  const navigate = useNavigate();
  const [{ basket, user }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
      // generate the special stripe secret which allows us to charge a customer
      const getClientSecret = async () => {
          const response = await axios({
              method: 'post',
              // Stripe expects the total in a currencies subunits
              url: `/payments/create?total=${getBasketTotal(basket) * 100}`
          });
          setClientSecret(response.data.clientSecret)
      }

      getClientSecret();
  }, [basket])

  //console.log('THE SECRET IS >>>', clientSecret)
 

  const handleSubmit = async (event) => {
      // do all the fancy stripe stuff...
      event.preventDefault();
      setProcessing(true);

      const payload = await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
              card: elements.getElement(CardElement)
          }
      }).then(({ paymentIntent }) => {
          // paymentIntent = payment confirmation
          db
            .collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc(paymentIntent.id)
            .set({
                basket: basket,
                amount: paymentIntent.amount,
                created: paymentIntent.created
            })

          setSucceeded(true);
          setError(null)
          setProcessing(false)


          navigate("/orders",{replace: true})
      })

  }

  const handleChange = event => {
      // Listen for changes in the CardElement
      // and display any errors as the customer types their card details
      setDisabled(event.empty);
      setError(event.error ? event.error.message : "");
  }
   



  return (
    <div className='payment'>
       <div className='payment_container'>

        <h1>Checkout (<Link to='/checkout'>{basket?.length} items</Link>)</h1>

        <div className='payment_section'>
           <div className='payment_title'><h3>Delivery Address</h3></div>

           <div className='payment_address'>
              <p>{!user ? 'Guest' : user.email}</p>
              <p>Asian paint shop,Kshudiram Nagar</p>
              <p>Haldia, West Bengal</p>
           </div>

        </div>




        <div className='payment_section'>
           <div className='payment_title'><h3>Review your Items and Delivery</h3></div>
           <div className='payment_items'>
              {basket.map(item => (
                 <Checkoutproduct 
                   id={item.id}
                   title={item.title}
                   image={item.image}
                   price={item.price}
                   rating={item.rating}
                   />
              )
                )}

           </div>



        </div>

        <div className='payment_section'>
            <div className='payment_title'><h3>Payment Method</h3></div>
            <div className='payment_details'>


                <form onSubmit={handleSubmit}>
                    <CardElement onChange={handleChange} />


                    <div className='payment_pricecontainer'>
                    <CurrencyFormat
                        renderText={(value) => (
                          <>
                            <h3>Order total : {value}</h3>
                          </>
                            )}
                             decimalScale={2}
                             value={getBasketTotal(basket)}
                             displayType={"text"}
                             thousandSeparator={true}
                             prefix={"$"}
                           />

                            <button disabled={processing || disabled || succeeded}>
                                        <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                          </button>
                    </div>

                    {error && <div>{error}</div>}
                </form>
                

            </div>
        </div>




       </div>

    </div>
  )
}

export default Payment
