import React from 'react'

import travel from "../../assets/travel1.webp"
import travel1 from "../../assets/travel2.webp";
import travel2 from "../../assets/travel3.webp";
import "./travel.css"
import TravelCard from './TravelCard';

const Travel = () => {
  return (
    <div className="travel">
      <div className="travel-style">
        <p className="travel-text">STORIES FROM AROUND THE GLOBE</p>
        <div className="travel-head">
          <h1>From our travel blog</h1>
          <a href="">see all articles</a>
        </div>
      </div>
      <div className="travel-flex">
        <TravelCard
          poster={travel}
          title="TRAVEL"
          sub="Escape the City today"
          date="January 16, 2016"
          description="Is am hastily invited settled at limited civilly fortune me. Really spring in extent an by. Judge but built party world.."
        />
        <TravelCard
          poster={travel1}
          title="TRAVEL"
          sub="Autumn fashion tips and tricks"
          date="January 16, 2016"
          description="Pellentesque habitant morbi tristique senectus. Vestibulum tortor quam, feugiat vitae, ultricies ege..."
        />
        <TravelCard
          poster={travel2}
          title="LIVING"
          sub="Escape the City today"
          date="January 16, 2016"
          description="ellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibu..."
        />
      </div>
    </div>
  );
}

export default Travel