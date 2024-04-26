import React, { useEffect, useState } from 'react';
import ResturantCard from "./ResturantCard";
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useRestaurantList from '../utils/useRestaurantList';
import useOnlineStatus from '../utils/useOnlineStatus';

const Body = () => {
  
  const onlineStatus = useOnlineStatus();
  const listofRestaurants = useRestaurantList();

  const [searchText,setSearchText] = useState('');

  const [searchfilterData, setSearchfilterData] = useState([]);


  useEffect(() => {
    setSearchfilterData(listofRestaurants);
  }, [listofRestaurants]);

  const handlefilter = () => {
    const filteredData = listofRestaurants.filter((item) => {
      return item.info.avgRating > 4.2
    });
    setSearchfilterData(filteredData);
  }

  const handleSearch = () =>{
    const searchfilter = listofRestaurants.filter((item)=>(
      item.info.name.toLowerCase().includes(searchText.toLowerCase())
    ));
    setSearchfilterData(searchfilter);
  }

  const handleChange = (event) =>{
   setSearchText(event.target.value);
  }

  if(onlineStatus == false){
    return (
      <h1>Look's like you are offline!! Please Check your internet connection</h1>
    )
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
        <div className='search'>
            <input type='text' className='search-box' value={searchText} onChange={handleChange}/>
            <button onClick={()=>handleSearch()}>Search</button>
        </div>
          <button className="filter-btn" onClick={() => handlefilter()}>Top Rated Restaurant</button>
        </div>
        <div className="res-container">
          {
            searchfilterData.map((item) => (
              <Link to={"/restaurants/" + item.info.id} key={item.info.id}>
              <ResturantCard resdata={item} />
              </Link>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Body;
