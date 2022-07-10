import React, {useEffect, useState} from 'react';
import axios from 'axios';
import CardComponent from "./CardComponent";


const SearchCardByName = () => {

    const [inputName, setInputName] = useState("");
    const [cardData, setCardData] = useState({});
    const url = `https://hkk-petproject.herokuapp.com/creature/${inputName}`;
    const searchByName = () => {

        axios.get(url, {params:
                {
                    name : inputName}})
            .then(r => setCardData(r.data));

    }
    useEffect(() => { searchByName()},[]);
    return (
        <div>
            <input  type="text" id="message" name="name"
                   value={inputName}
                   onChange={(event) => setInputName(event.target.value)}
                   autoComplete="off"
            />
            <button onClick={searchByName}>Search ! </button>
            <div>
                {/*<CardComponent data={cardData} />*/}
            </div>
        </div>
    );
};

export default SearchCardByName;
