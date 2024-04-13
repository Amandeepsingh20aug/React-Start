import React from "react";
import ReactDOM from "react-dom/client";


const Header = () =>{
 return (
  <>
    <div className="header">
        <div className="logo-container">
          <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" />
        </div>
        <div className="navitems">
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Cart</li>
            </ul>
        </div>
    </div>
  </>
 )
}

const ResturantCard = () =>{
  return (
    <>
      <div className="res-card">
      <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0vvulfbahjxjz6k4uwi"/>
        <h3>Biryani Bay</h3>
        <h4>Biryani, North Indian, Asian</h4>
        <h4>4.4 stars</h4>
        <h4>38 minutes</h4>  
      </div>
    </>
  )
}

const Body = () =>{
  return (
    <>
      <div className="body">
        <div className="search">
           search
        </div>
        <div className="res-container">
        <ResturantCard/>
        <ResturantCard/>
        <ResturantCard/>
        <ResturantCard/>
        <ResturantCard/>
        <ResturantCard/>
        <ResturantCard/>
        <ResturantCard/>
        <ResturantCard/>
        <ResturantCard/>
        <ResturantCard/>
        <ResturantCard/>
        <ResturantCard/>
        <ResturantCard/>
        </div>
      </div>
    </>
  )
}

const AppLayout = () =>{
  return(
    <>
      <div className="app">
          <Header/>
          <Body/>
      </div>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout/>);