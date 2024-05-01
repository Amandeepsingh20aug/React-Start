import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  const { title, itemCards } = data;
  const [showItems,setShowItems] = useState(false);
  const handleclick = () =>{
    setShowItems(!showItems);
  }
  return (
    <div>
      <div className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-4">
        <div className="flex justify-between cursor-pointer" onClick={()=>handleclick()}>
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