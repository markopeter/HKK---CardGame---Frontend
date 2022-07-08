import React from 'react';

const CardComponent = (props) => {
    return (
        <div>
            <div className="cardContainer">
                <div className="cardUpperRight">{props.name}</div>
                <div className="cardUpperLeft">Manacost :  {props.manaCost}</div>
                <div className="cardBottomLeft">Attack : {props.baseAttack}</div>
                <div className="cardBottomRight">Health : {props.baseHealth}</div>
            <div className="imageContainer">
                < img src={props.imageUrl} alt="new"  />
                <div className="nameContainer"><p>{props.description}</p></div>
            </div>
                </div>
        </div>
    );
};

export default CardComponent;

