import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data,showItems,setShowIndex }) => {
  const { title, itemCards } = data;
  const handleClick = () =>{
     setShowIndex();
  }
  return (
    <div>
      <div className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-4">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold text-lg">
            {title}
            <span className="ml-2">({itemCards.length})</span>
          </span>
          <span className="cursor-pointer">⬇️</span>
        </div>
       {showItems == true && <ItemList items={itemCards} /> }
      </div>
    </div>
  );
};

export default RestaurantCategory;
