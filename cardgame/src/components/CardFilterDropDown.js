import React, {useState} from 'react';

const CardFilterDropDown = () => {

    const [detail, setDetail] = useState('');
    const changeDetail = (event) =>{
        event.target(setDetail);
    }
    return (
        <div >
            <select value={detail} onChange={changeDetail}>
                <option value="name">Name</option>
                <option value="manaCost">ManaCost</option>
                <option value="baseAttack">ManaCost</option>
                <option value="baseHealth">ManaCost</option>
            </select>

        </div>
    );
};

export default CardFilterDropDown;
