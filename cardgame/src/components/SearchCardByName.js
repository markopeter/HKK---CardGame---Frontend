import React, {useEffect, useState} from 'react';
import axios from 'axios';
import CardComponent from "./CardComponent";
import Button from '@mui/material/Button';
import SearchResult from "./SearchResult";
import {TextField} from "@mui/material";

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
            <br/>
            <TextField label="Filled" variant="filled"  type="text" id="message" name="name"
                   value={inputName}
                   onChange={(event) => setInputName(event.target.value)}
                   autoComplete="off"
            />
            <Button variant="contained" onClick={searchByName}>Search ! </Button>
            <div>
                <p>Base attack: {cardData.baseAttack}</p>
                <p>Base health: {cardData.baseHealth}</p>
                <p>Manacost: {cardData.manaCost}</p>
            </div>
        </div>
    );
};

export default SearchCardByName;
