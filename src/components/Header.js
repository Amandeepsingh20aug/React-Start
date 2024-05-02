import React, { useState,useEffect , UserContext, useContext} from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
const Header = () =>{
  const[logged,setLogged] = useState(true);

  const handlelogin = () =>{
    setLogged(!logged)
  }

 useEffect(()=>{
  //  console.log('useEffect called');
 },[logged])

 const data = useContext(UserContext);


  return (
   <>
     <div className="flex items-center justify-between bg-pink-50 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
         <div className="logo-container">
           <img className="w-56" src={LOGO_URL}/>
         </div> 
         <div className="flex items-center">
             <ul className="flex p-4 m-4">
               <li className="px-4"><Link to="/">Home</Link></li>
               <li className="px-4"><Link to="/about">About Us</Link></li>
               <li className="px-4"><Link to="/contact">Contact Us</Link></li>
               <li className="px-4"><Link to="/grocery">Grocery</Link></li>
               <li className="px-4 font-semibold">{data.loggedInUser}</li>
               <button className="login" onClick={()=>handlelogin()}>{logged == true ? 'Login': 'Logout'}</button>
             </ul>
         </div>
     </div>
   </>
  )
 }

 export default Header;