import React from 'react';
import "./cardComponent.css";
import "../../index.css";

const Card = ({ name, email, id, lname }) => {
    return (
        <div className='tc grow bg-green ba ma3 dib bw1'>
            <img className="circle" src={`https://reqres.in/img/faces/${id}-image.jpg`} alt="user-img" />
            <div>
                <h2>{name} {lname}</h2>
                <h4>{email}</h4>
            </div>
        </div>
    );
}

export default Card;
