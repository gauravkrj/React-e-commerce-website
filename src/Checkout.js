import React from 'react'
import "./Checkout.css"
import checkoutbanner from './allimages/checkoutbanner.jpg';
import Subtotal from './Subtotal.js';
import Checkoutproduct from "./Checkoutproduct";
import {useStateValue} from "./StateProvider";



function Checkout() {

  const [{basket, user}, dispatch] = useStateValue();



  return (
    <div className='checkout'>

       <div className='checkout_left'>
       {/* { <img className = "checkout__banner" src={checkoutbanner}/> } */}
        
           <div> 
            <h3>Hello, {!user ? 'Guest' : user.email}</h3>
            <h2 className='checkouttitle'> Your Shopping Basket </h2>
              
              {basket.map(item => (
                <Checkoutproduct 
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                  />
              ))}
             


           </div>
       </div>



       <div className='checkout_right'>
           <Subtotal />
       </div>



    </div>
  )
}

export default Checkout