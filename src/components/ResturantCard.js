import { CDN_URL } from "../utils/constant";
const ResturantCard = ({resdata}) =>{
  const { info: { cloudinaryImageId, name, cuisines, costForTwo, avgRating, sla: { deliveryTime } = {} } = {} } = resdata;
  return (
    <>
      <div className="res-card m-4 p-4 w-[250px] bg-gray-100 rounded-lg hover:bg-gray-300">
      <img className="rounded-lg" src={ CDN_URL + cloudinaryImageId }/>
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating}</h4>
      <h4>{deliveryTime}</h4> 
      </div>
    </>
  )
}


export default ResturantCard;