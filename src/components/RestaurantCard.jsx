import React from 'react'

// Restaurant Card Component
const RestaurantCard = (props) => {
    const { resdata } = props;
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo} = resdata?.info;
    const imgurl = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
    return (
      <div className="res-card">
        <img
          className="res-logo"
          alt="Restaurant Thumbnail"
          src={imgurl+cloudinaryImageId}/>
        <h3>{name}</h3>
        <h4>{cuisines.join(" , ")}</h4>
        <h4>{avgRating} ⭐</h4>
        <h4>{costForTwo}</h4>
      </div>
    );
  };

export default RestaurantCard