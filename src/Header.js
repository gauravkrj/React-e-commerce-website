import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import logo from './allimages/logo.png';
import { Link } from "react-router-dom";
import {useStateValue} from "./StateProvider";
import { auth } from './firebase';


export const Header = () => {

  const [{basket, user}, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if(user) {
      auth.signOut(); 
    }
  }

  return (
    <div className='header'>
      
      <Link to="/">
         <img className = "header__logo" src={logo}/>
      </Link>
      
      <div className='header__search'>
        <input className='header___searchInput' type="text" />
        <SearchIcon className="Inputsearch_icon"/>
      </div>
      <div className='header__nav'>
        

        <Link to={!user && '/login'}>
        <div className='header__option' onClick={handleAuthentication}>
           <span className='header__optionlineone'>Hello,{!user ? 'Guest' : user.email}</span>
           <span className='header__optionlinetwo'>{user ? 'Sign Out' : 'Sign In'}</span>
        </div>
        </Link>


        <Link to='./orders'>
        <div className='header__option'>
           <span className='header__optionlineone'>returns</span>
           <span className='header__optionlinetwo'>& Orders</span>
        </div>
        </Link>

        <div className='header__option'>
           <span className='header__optionlineone'>your</span>
           <span className='header__optionlinetwo'>prime</span>
        </div>



      <Link to="/checkout">
        <div className='header__option__basket'>
          <ShoppingBasketIcon/> 
          <span className='header__optionlinetwo header__basketcount'>{basket?.length}</span>
        </div>
      </Link>  
      
      </div>
    
    </div>
  )
}
export default Header;