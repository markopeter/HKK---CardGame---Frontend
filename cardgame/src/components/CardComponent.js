import React from 'react';

const CardComponent = (props) => {
    console.log(props);
    return (
        <div>
            <div key={props.id} className="imageContainer">
                < img src={props.data.imageUrl} alt="new"  />
                <div className="nameContainer"><p>{props.data.name}</p></div>
            </div>
        </div>
    );
};

export default CardComponent;

