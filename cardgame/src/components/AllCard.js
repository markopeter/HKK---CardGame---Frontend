import React from 'react';

const AllCard = (props) => {
    return (
        <div>
            {props.content && props.content.map(element => {
                return (
                    <div> {element.name}</div>
                )
            })}
        </div>
    );
};

export default AllCard;
