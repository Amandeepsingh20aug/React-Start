import React, { useState,useEffect } from "react";
import { LOGO_URL } from "../utils/constant";
const Header = () =>{
  const[logged,setLogged] = useState(true);

  console.log('Header render');

  const handlelogin = () =>{
    setLogged(!logged)
  }

 useEffect(()=>{
   console.log('useEffect called');
 },[logged])


  return (
   <>
     <div className="header">
         <div className="logo-container">
           <img className="logo" src={LOGO_URL}/>
         </div>
         <div className="navitems">
             <ul>
               <li>Home</li>
               <li>About Us</li>
               <li>Contact Us</li>
               <li>Cart</li>
               <button className="login" onClick={()=>handlelogin()}>{logged == true ? 'Login': 'Logout'}</button>
             </ul>
         </div>
     </div>
   </>
  )
 }

 export default Header;