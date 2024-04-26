import Shimmer from './Shimmer'; 
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';

const RestaurantMenu = () => {
  const {resId}  = useParams();

  const restaurantInfo = useRestaurantMenu(resId);

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
