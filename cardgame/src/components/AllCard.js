import React from 'react';

const AllCard = (props) => {
    return (
        <div>
            {props.data.map(card => (
                <div  key={card.id}>
                    <h1>{card.name}</h1>
                </div>))}
        </div>
    );
};

export default AllCard;
