import React from 'react'

import { reslist } from '../../dummydata';
import RestaurantCard from './RestaurantCard';

// Body Component
const Body = () => {
    return (
      <div className="body">
        <div className="search">
          <input
            className="searchBar"
            type="text"
            placeholder="Please search restaurant"
          />
        </div>
        <div className="RestaurentContainer">
  
          {
            reslist.map((restroData)=>(
              <RestaurantCard key = {restroData.info.id} resdata={restroData} />
            ))
          }
  
         
          
  
          {/* Add more cards here as needed */}
        </div>
      </div>
    );
  };

export default Body