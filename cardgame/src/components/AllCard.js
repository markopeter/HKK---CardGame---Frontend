import React from 'react';

const AllCard = (props) => {
    return (
        <div>
            {props.content && props.content.map(element => {
                return (
                    <div key={element.id}> {element.name}</div>
                )
            })}
        </div>
    );
};

export default AllCard;
