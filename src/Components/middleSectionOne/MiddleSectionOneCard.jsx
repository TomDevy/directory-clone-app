import React from 'react'

import "./middleSectionOneCard.css"

const MiddleSectionOneCard = ({City, Description, Poster }) => {
  return (
    <div className="card-body" >
      <div>
        <img
          src={Poster}
          alt={""}
        />
      </div>
      <div className='card-text'>
        <h1 className="city">{City}</h1>
        <p className="description">{Description}</p>
      </div>
    </div>
  );
};


export default MiddleSectionOneCard;