import React from "react";
import ReactDOM from "react-dom/client";




const Header = () =>{
 return (
  <>
    <div className="header">
        <div className="logo-container">
          <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" />
        </div>
        <div className="navitems">
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Cart</li>
            </ul>
        </div>
    </div>
  </>
 )
}

const ResturantCard = ({resdata}) =>{
  const { info: { cloudinaryImageId, name, cuisines, costForTwo, avgRating, sla: { deliveryTime } = {} } = {} } = resdata;
  return (
    <>
      <div className="res-card">
      <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId }/>
      <h3>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating}</h4>
      <h4>{deliveryTime}</h4> 
      </div>
    </>
  )
}

const reslist = [
  {
  "info": {
  "id": "16073",
  "name": "California Burrito",
  "cloudinaryImageId": "27238ee4292d42c7b705f2ce8671ff80",
  "locality": "Malleshwaram",
  "areaName": "Malleshwaram",
  "costForTwo": "₹250 for two",
  "cuisines": [
  "Mexican",
  "American",
  "Salads",
  "Continental",
  "Keto",
  "Healthy Food"
  ],
  "avgRating": 4.6,
  "parentId": "1252",
  "avgRatingString": "4.6",
  "totalRatingsString": "10K+",
  "sla": {
  "deliveryTime": 40,
  "lastMileTravel": 5,
  "serviceability": "SERVICEABLE",
  "slaString": "40-45 mins",
  "lastMileTravelString": "5.0 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2024-04-13 23:00:00",
  "opened": true
  },
  "badges": {
  "imageBadges": [
  {
  "imageId": "Rxawards/_CATEGORY-Guiltfree.png",
  "description": "Delivery!"
  }
  ]
  },
  "isOpen": true,
  "aggregatedDiscountInfoV2": {},
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {
  "badgeObject": [
  {
  "attributes": {
  "description": "Delivery!",
  "imageId": "Rxawards/_CATEGORY-Guiltfree.png"
  }
  }
  ]
  },
  "textBased": {},
  "textExtendedBadges": {}
  }
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {}
  },
  "analytics": {},
  "cta": {
  "link": "https://www.swiggy.com/restaurants/california-burrito-malleshwaram-bangalore-16073",
  "type": "WEBLINK"
  }
  },
  {
  "info": {
  "id": "82504",
  "name": "UBQ by Barbeque Nation",
  "cloudinaryImageId": "mpxqoksbeig38xs1wkgm",
  "locality": "Dr Rajkumar Road",
  "areaName": "Rajajinagar",
  "costForTwo": "₹300 for two",
  "cuisines": [
  "North Indian",
  "Barbecue",
  "Biryani",
  "Kebabs",
  "Mughlai",
  "Desserts"
  ],
  "avgRating": 3.9,
  "parentId": "10804",
  "avgRatingString": "3.9",
  "totalRatingsString": "5K+",
  "sla": {
  "deliveryTime": 44,
  "lastMileTravel": 5,
  "serviceability": "SERVICEABLE",
  "slaString": "40-45 mins",
  "lastMileTravelString": "5.0 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2024-04-13 23:30:00",
  "opened": true
  },
  "badges": {},
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {},
  "textBased": {},
  "textExtendedBadges": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "₹125 OFF",
  "subHeader": "ABOVE ₹799",
  "discountTag": "FLAT DEAL"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {}
  },
  "analytics": {},
  "cta": {
  "link": "https://www.swiggy.com/restaurants/ubq-by-barbeque-nation-dr-rajkumar-road-rajajinagar-bangalore-82504",
  "type": "WEBLINK"
  }
  },
  {
  "info": {
  "id": "8766",
  "name": "Beijing Bites",
  "cloudinaryImageId": "ca0eb08d0635fd6da2e5a480fec897d0",
  "locality": "Richmond Town",
  "areaName": "Richmond Town",
  "costForTwo": "₹450 for two",
  "cuisines": [
  "Chinese"
  ],
  "avgRating": 4.3,
  "parentId": "103",
  "avgRatingString": "4.3",
  "totalRatingsString": "10K+",
  "sla": {
  "deliveryTime": 35,
  "lastMileTravel": 2.4,
  "serviceability": "SERVICEABLE",
  "slaString": "35-40 mins",
  "lastMileTravelString": "2.4 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2024-04-14 00:00:00",
  "opened": true
  },
  "badges": {
  "imageBadges": [
  {
  "imageId": "Rxawards/_CATEGORY-Chinese.png",
  "description": "Delivery!"
  }
  ]
  },
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {
  "badgeObject": [
  {
  "attributes": {
  "description": "Delivery!",
  "imageId": "Rxawards/_CATEGORY-Chinese.png"
  }
  }
  ]
  },
  "textBased": {},
  "textExtendedBadges": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "₹150 OFF",
  "subHeader": "ABOVE ₹399",
  "discountTag": "FLAT DEAL"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {}
  },
  "analytics": {},
  "cta": {
  "link": "https://www.swiggy.com/restaurants/beijing-bites-richmond-town-bangalore-8766",
  "type": "WEBLINK"
  }
  },
  {
  "info": {
  "id": "23847",
  "name": "Domino's Pizza",
  "cloudinaryImageId": "d0450ce1a6ba19ea60cd724471ed54a8",
  "locality": "Rest House Road",
  "areaName": "Brigade Road",
  "costForTwo": "₹400 for two",
  "cuisines": [
  "Pizzas",
  "Italian",
  "Pastas",
  "Desserts"
  ],
  "avgRating": 4.4,
  "parentId": "2456",
  "avgRatingString": "4.4",
  "totalRatingsString": "5K+",
  "sla": {
  "deliveryTime": 25,
  "lastMileTravel": 2.4,
  "serviceability": "SERVICEABLE",
  "slaString": "25 mins",
  "lastMileTravelString": "2.4 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2024-04-13 22:59:00",
  "opened": true
  },
  "badges": {
  "imageBadges": [
  {
  "imageId": "Rxawards/_CATEGORY-Pizza.png",
  "description": "Delivery!"
  }
  ]
  },
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {
  "badgeObject": [
  {
  "attributes": {
  "description": "Delivery!",
  "imageId": "Rxawards/_CATEGORY-Pizza.png"
  }
  }
  ]
  },
  "textBased": {},
  "textExtendedBadges": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "20% OFF",
  "subHeader": "UPTO ₹50"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {}
  },
  "analytics": {},
  "cta": {
  "link": "https://www.swiggy.com/restaurants/dominos-pizza-rest-house-road-brigade-road-bangalore-23847",
  "type": "WEBLINK"
  }
  },
]


const Body = () =>{
  return (
    <>
      <div className="body">
        <div className="search">
           search
        </div>
        <div className="res-container">
        {
          reslist.map((item) =>{
            return (
              <ResturantCard resdata={item} key={item.info.id}/>
            )
          })
        }
        </div>
      </div>
    </>
  )
}

const AppLayout = () =>{
  return(
    <>
      <div className="app">
          <Header/>
          <Body/>
      </div>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout/>);