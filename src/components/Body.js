import React, { useEffect, useState } from 'react';
import ResturantCard from "./ResturantCard";
import Shimmer from './Shimmer';

const Body = () => {
  const [listofRestaurants, setListOfRestaurants] = useState([]);
  
  const handlefilter = () => {
    const filteredData = listofRestaurants.filter((item) => {
      return item.info.avgRating > 4.5
    });
    setListOfRestaurants(filteredData);
  }

  useEffect(()=>{
    fetchData();
  },[])

  const fetchData = async () =>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();

    setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.
      infoWithStyle?.restaurants); 
  }

  if(listofRestaurants.length == 0) {
    return (
      <>
        <Shimmer/>
      </>
    )
  }

  return (
    <>
      <div className="body">
        <div className="filter">
          <button className="filter-btn" onClick={() => handlefilter()}>Top Rated Restaurant</button>
        </div>
        <div className="res-container">
          {
            listofRestaurants.map((item) => (
              <ResturantCard resdata={item} key={item.info.id} />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Body;
