import React, {useState} from 'react';
import {TextField} from "@mui/material";
import axios from "axios";
import {useEffect} from "react";
import Button from "@mui/material/Button";

const AddCardToDeck = ({childToParent}) => {

    const [deckName, setDeckName] = useState('');
    const [deckData, setDeckData] = useState({});
    const url = `https://hkk-petproject.herokuapp.com/deck/add-card/${deckName}`;
    const searchByName = () => {

        axios.get(url, {params:
                {
                    name : deckName}})
            .then(r => setDeckData(r.data));
    }
    useEffect(() => { searchByName()},[]);

    const wrapperFunction = () => {
        childToParent(deckName);
        searchByName();
    }

    return (
        <div>
                <TextField  id="inputValue" label="Filled" variant="filled" type="text" name="name"
                            value={deckName}
                            onChange={(event) => setDeckName(event.target.value)}
                            autoComplete="off"
                />
                <Button variant="contained" onClick={wrapperFunction}>Search ! </Button>
            <div>
                        <div key={deckData.id}> {deckData.deckName}</div>
            </div>
        </div>
    );
};

export default AddCardToDeck;
