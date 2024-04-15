import ResturantCard from "./ResturantCard";
import reslist from '../utils/mockData';
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

export default Body;