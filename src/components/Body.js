import React, { useEffect, useState,useContext } from "react";
import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantList from "../utils/useRestaurantList";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Body = () => {
  const onlineStatus = useOnlineStatus();
  const listofRestaurants = useRestaurantList();

  const {loggedInUser,setUserName} = useContext(UserContext);

  const [searchText, setSearchText] = useState("");

  const [searchfilterData, setSearchfilterData] = useState([]);

  useEffect(() => {
    setSearchfilterData(listofRestaurants);
  }, [listofRestaurants]);

  const handlefilter = () => {
    const filteredData = listofRestaurants.filter((item) => {
      return item.info.avgRating > 4.2;
    });
    setSearchfilterData(filteredData);
  };

  const handleSearch = () => {
    const searchfilter = listofRestaurants.filter((item) =>
      item.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setSearchfilterData(searchfilter);
  };

  const handleChange = (event) => {
    setSearchText(event.target.value);
  };

  if (onlineStatus == false) {
    return (
      <h1>
        Look's like you are offline!! Please Check your internet connection
      </h1>
    );
  }

  if (listofRestaurants.length == 0) {
    return (
      <>
        <Shimmer />
      </>
    );
  }

  

  return (
    <>
      <div className="body">
        <div className="filter flex items-center">
          <div className="search m-4 p-4">
            <input
              type="text"
              className="border border-solid border-black"
              value={searchText}
              onChange={handleChange}
            />
            <button
              className="px-4 py-2 bg-green-100 m-4 rounded-lg"
              onClick={() => handleSearch()}
            >
              Search
            </button>
          </div>
          <button className="px-4 py-2 bg-gray-100 m-4 rounded-lg" onClick={() => handlefilter()}>
            Top Rated Restaurant
          </button>
          <div>
          <label className="pl-6">UserName : </label>
          <input type="text" className="border border-black mr-3 p-2" onChange={(e)=>setUserName(e.target.value)} value={loggedInUser}/>
          </div>
        </div>
        <div className="res-container flex items-center flex-wrap">
          {searchfilterData.map((item) => (
            <Link to={"/restaurants/" + item.info.id} key={item.info.id}>
              <ResturantCard resdata={item} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
