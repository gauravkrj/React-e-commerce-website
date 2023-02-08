import React from 'react'
import "./Checkoutproduct.css"
import {useStateValue} from "./StateProvider";


function Checkoutproduct({id,image, title, price, rating}) {

  const [{basket}, dispatch] = useStateValue();

  const removeFromBasket = () => {
          dispatch({
            type:"REMOVE_FROM_BASKET",
            id: id,
          })
  }




  return (
    <div className='checkout_product'>
        <img className='checkoutproduct_image' src={image}/>

        <div className='checkoutproduct_info'>
            <p className='checkoutproduct_title'>{title}</p>

            <p className='checkoutproduct_price'>
                <small>₹</small>
                <strong>{price}</strong>
            </p>

            <div className='checkoutproduct_rating'>
            {Array(rating)
           .fill()
           .map((_,i) =>(<p>⭐</p>))}
            </div>

            <button onClick={removeFromBasket}>Remove from basket</button>



        </div>

     </div>
  )
}

export default Checkoutproduct