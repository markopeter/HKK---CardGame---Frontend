import React, {useState} from 'react';
import axios from "axios";
import SearchResult from "./SearchResult";

const CardFilterDropDown = () => {
    const options = [
        { value: 'name', label: 'Name' },
        { value: 'manaCost', label: 'Mana Cost' },
        { value: 'baseAttack', label: 'Base Attack' },
        { value: 'baseHealth', label: 'Base Health' }
    ]
    const [cardData, setCardData] = useState([]);
    const [detail, setDetail] = useState(options[0].value);
    const [inputValue, setInputValue] = useState('');
    const url = `https://hkk-petproject.herokuapp.com/creature/detail/${detail}/value/${inputValue}`;
    const fetchCards = () => {
        axios.get(url, {params: {detail: detail, value: inputValue}})
            .then(r => setCardData(r.data));
    }
    const changeDetail = (event) =>{
        console.log(event.target.value);
        setDetail(event.target.value);
    }
    return (
        <div >
            <select value={detail} onChange={changeDetail}>
                {options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            <div>
                <button onClick = {fetchCards} > Filter cards ! </button>
                <input  type="text" id="inputValue" name="name"
                        value={inputValue}
                        onChange={(event) => setInputValue(event.target.value)}
                        autoComplete="off"
                />
            </div>
            <div>
                <SearchResult data={cardData}/>
            </div>
        </div>
    );
};

export default CardFilterDropDown;
