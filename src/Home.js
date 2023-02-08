import React from 'react'
import "./Home.css";
import homebanner from './allimages/homebanner.jpg';
import Product from "./Product.js";

import prodimg1 from './allimages/prodimg1.webp'
import prodimg2 from './allimages/prodimg2.jpg'
import prodimg3 from './allimages/prodimg3.webp'
import prodimg4 from './allimages/prodimg4.jpg'
import prodimg5 from './allimages/prodimg5.jpg'
import prodimg6 from './allimages/prodimg6.jpg'



function Home() {
  return (
    <div className='Home'>
    <div className='home_container'>
      <img className = "home__banner" src={homebanner}/>
      

       <div className='home_row'>
          
          <Product title="Olive Green Round Neck Slim Fit T-Shirt With Arm Zip for Men" 
          id="6516244"
          price={359.49}
          image={prodimg1}
          rating={4}/>
          
          
          <Product 
          id="6516245"
          title="Lyst - Carhartt Kangaroo Pocket Hoodie in Yellow for Men" 
          price={359.99}
          image={prodimg2}
          rating={4}/>

       </div>




       <div className='home_row'>
       <Product 
           id="6516246"
          title=" women kurta set for winters, Kurta fabric wool, bottomwear fabric woollen" 
          price={599.99}
          image={prodimg3}
          rating={4}/>
        
        <Product 
          id="6516247"
          title="Cotton Casual swearshirt rounded neck pale-pink for women exclusive for winters" 
          price={600.49}
          image={prodimg4}
          rating={4}/>

        <Product 
          id="6516248"
          title="Cotton Casual swearshirt rounded neck pwhite for women exclusive for winters" 
          price={699.99}
          image={prodimg5}
          rating={4}/>

       </div>





       <div className='home_row'>
       <Product 
          id="6516249"
          title="Cotton Casual swearshirt rounded neck pale-grey for men exclusive in winters" 
          price={359.99}
          image={prodimg6}
          rating={4}/>
         

       </div>



    </div>





    </div>
  )
}

export default Home