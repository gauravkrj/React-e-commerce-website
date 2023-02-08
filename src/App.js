import React, { useEffect } from 'react'
import "./App.css";
import Header from "./Header.js";
import Home from "./Home.js";
import Checkout from "./Checkout.js";
import Login from "./Login";
import Payment from "./Payment.js"
import Orders from "./Orders.js"
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";
import {auth} from "./firebase";
import { useStateValue } from './StateProvider';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";


const promise = loadStripe("pk_test_51MOiYgSBN4Qi1GIgavrqAz6ycUdn5knaxzbBYq9pfOqkYON1B3ftU1h1RMGpqLLcpzvQBwAlloeiOH0MWRNThj9a00nbepihTE")



export const App = () => {

  const[{},dispatch] = useStateValue();

   useEffect(() => {

      auth.onAuthStateChanged(authUser => {

        if(authUser) {
          dispatch({
            type:"SET_USER",
            user:authUser

          })
        }

        else{
          dispatch({
            type:"SET_USER",
            user:null

          })
        }

       })


   }, [])



  return (
    <Router>
    <div className="App">
    
       <Routes>
       <Route path="/" element={<><Header/><Home/></>}/>
       <Route path="/checkout" element={<><Header/><Checkout/></>}/>
       <Route path="/login" element={<><Login/></>}/>
       <Route path="/payment" element={<><Header/><Elements stripe={promise}><Payment/></Elements></>}/>
       <Route path="/orders" element={<><Header/><Orders/></>}/>
       </Routes>

    </div>
    </Router>
  )
}

export default App;