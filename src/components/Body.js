import React, { useState } from 'react';
import ResturantCard from "./ResturantCard";
import reslist from '../utils/mockData';

const Body = () => {
  const [filteredReslist, setFilteredReslist] = useState(reslist);

  const handlefilter = () => {
    const filteredData = reslist.filter((item) => item.info.avgRating > 4);
    setFilteredReslist(filteredData);
  }

  return (
    <>
      <div className="body">
        <div className="filter">
          <button className="filter-btn" onClick={() => handlefilter()}>Top Rated Restaurant</button>
        </div>
        <div className="res-container">
          {
            filteredReslist.map((item) => (
              <ResturantCard resdata={item} key={item.info.id} />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Body;
