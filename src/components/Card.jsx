import React from 'react';
import "./Card.css";

const Card = ({data}) => {
    console.log(data);
  return (
    <div className='card-wrapper'>
    <div className="card-details">
       <div className="card-image">
        <img className='card-flag' src={data.flag} alt="flag" />
       </div>
       <div className="card-text">
        <div className="card-country">
            <h3>{data.name}</h3>
        </div>
        <div className="card-region">
            <p>{data.region}</p>
        </div>
       </div>
    </div>


    </div>
  )
}

export default Card