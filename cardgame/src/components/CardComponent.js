import React from 'react';

const CardComponent = (props) => {
    return (
        <div>
            <div className="cardContainer">
                <div className="cardUpperRight">{props.data.name}</div>
                <div className="cardUpperLeft">Manacost :  {props.data.manaCost}</div>
                <div className="cardBottomLeft">Attack : {props.data.baseAttack}</div>
                <div className="cardBottomRight">Health : {props.data.baseHealth}</div>
                <div className="imageContainer">
                    < img src={props.data.imageUrl} alt="new"  />
                    <div><p>{props.data.description}</p></div>
                </div>
            </div>
        </div>
    );
};

export default CardComponent;