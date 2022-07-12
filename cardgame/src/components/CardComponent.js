import React from 'react';

const CardComponent = (props) => {
    return (
        <div>
            <div key={props.id} className="imageContainer">
                < img src={props.imageUrl} alt="new"  />
                <div className="nameContainer"><p>{props.name}</p></div>
            </div>
        </div>
    );
};

export default CardComponent;

