import React from "react";
import { CDN_URL } from "../utils/constant";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b-2 border-grey-200 text-left flex justify-between"
        >
          <div>
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                {item.card.info.price
                  ? " - ₹ " + item.card.info.price / 100
                  : " - ₹ " + item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="max-w-48 p-4 relative">
            <img src={CDN_URL + item.card.info.imageId} />
            <div className="absolute bottom-1 left-0 right-0 text-center">
              <button className="bg-black text-white p-3 mx-4 rounded-lg ">Add +</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
