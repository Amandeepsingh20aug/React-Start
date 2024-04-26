import { useEffect, useState } from "react";
const useRestaurantMenu = (resId) =>{
    //fetch data
    const[resInfo,setResInfo] = useState(null);
  
    useEffect(()=>{
      fetchData();
    },[])

    const fetchData = async () =>{
      const response = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId="+ resId +"&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER"
      );
      const json = await response.json();
      setResInfo(json.data);
    }

  return resInfo;
}

export default useRestaurantMenu