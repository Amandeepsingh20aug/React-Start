import { CDN_URL } from "../utils/constant";
const ResturantCard = ({resdata}) =>{
  const { info: { cloudinaryImageId, name, cuisines, costForTwo, avgRating, sla: { deliveryTime } = {} } = {} } = resdata;
  return (
    <>
      <div className="res-card">
      <img className="res-logo" src={ CDN_URL + cloudinaryImageId }/>
      <h3>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating}</h4>
      <h4>{deliveryTime}</h4> 
      </div>
    </>
  )
}


export default ResturantCard;