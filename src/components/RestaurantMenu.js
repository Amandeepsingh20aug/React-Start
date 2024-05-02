import Shimmer from './Shimmer'; 
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';
import { useState } from 'react';

const RestaurantMenu = () => {
  const dummyData = "Dummy Data";
  const {resId}  = useParams();

  const restaurantInfo = useRestaurantMenu(resId);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); 
    } else {
      setOpenIndex(index); 
    }
  };

  if (!restaurantInfo || !restaurantInfo?.cards?.[2]?.card?.card?.info) {
    return <Shimmer />;
  }

  const { name, cuisines = [], costForTwoMessage = "" } =
    restaurantInfo?.cards[2]?.card?.card?.info;

  const {itemCards} = restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card    
  
  const cards = restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards

  const catogarie = cards.filter((item)=>(
    item?.card?.card["@type"]?.includes('ItemCategory')
  ))
  return (
    <div className="text-center">
      <h1 className='font-bold my-6 text-2xl'>{name}</h1>
      <p className='font-semibold text-lg'>{cuisines.join(", ")} - {costForTwoMessage}</p>
      {catogarie.map((cat,index)=>(
        //Controlled Componenet
        <RestaurantCategory key={cat?.card?.card.title} data={cat?.card?.card} showItems={index === openIndex}
          setShowIndex={()=>toggleAccordion(index)}
          dummy={dummyData}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
