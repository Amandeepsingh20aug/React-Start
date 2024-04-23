import React, { useEffect, useState } from 'react';
import Shimmer from './Shimmer'; 
import { useParams } from 'react-router-dom';

const RestaurantMenu = () => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);

  const {resId}  = useParams();

  useEffect(() => {
    fetchMenu(); 
  }, []); 

  const fetchMenu = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId="+ resId +"&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER"
      );
      const json = await response.json();

      setRestaurantInfo(json.data);
    } catch (error) {
      console.error("Error fetching menu:", error); 
    }
  };

  if (!restaurantInfo || !restaurantInfo?.cards?.[2]?.card?.card?.info) {
    return <Shimmer />;
  }

  const { name, cuisines = [], costForTwoMessage = "" } =
    restaurantInfo?.cards[2]?.card?.card?.info;

  const {itemCards} = restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card    

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
      <ul>
        {itemCards.map((item)=>(
          <li key={item.card.info.id}>{item.card.info.name} -{" Rs "} - {item.card.info.price/100 || item.card.info.defaultPrice/100}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
