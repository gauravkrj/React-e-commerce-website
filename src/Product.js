import { CollectionsOutlined } from '@material-ui/icons';
import React from 'react'
import './Product.css'
import {useStateValue} from "./StateProvider";


function Product({id,title, image, price, rating}) {

  const [{basket}, dispatch] = useStateValue();
  
  const addToBasket = () => {
       dispatch({
          type: "ADD_TO_BASKET",
          item: {
            title:title,
            image:image,
            price:price,
            rating:rating,
          }
       })
  }



  return (
    <div className='product'>
      
      <div className='product_info'>
        
        <p className='product_title'>{title}</p>
        
        <p className='product_price'>
            <small>$</small>
            <strong>{price}</strong>
        </p>

        <div className='product_rating'>
          {Array(rating)
           .fill()
           .map((_,i) =>(<p>⭐</p>))}
        </div>
    
      </div>

    <img className = "product_image" src={image} alt="product pic"/>
    <button onClick={addToBasket}>Add To Basket</button>
    
    </div>
  )
}

export default Product