import React, {useEffect, useState} from 'react';
import Button from "@mui/material/Button";
import axios from "axios";
import {List, ListItem, ListItemButton, ListItemText, TextField} from "@mui/material";
import DeckCards from "./DeckCards";
import {useLocalState} from "../util/useLocalStorage";

const url = `https://hkk-petproject.herokuapp.com/deck`;
const localUrl = `/api/deck`
const fetchDecks = () => {
    return axios.get(localUrl);
}
const AllDeck = () => {
    const urlPost = `https://hkk-petproject.herokuapp.com/deck/create`;
    const [inputValue, setInputValue] = useState('');
    const [decks, setDecks] = useState([]);
    const [jwt, setJwt] =  useLocalState("", "jwt");
    const showCards = () => {
        fetchDecks()
            .then((response) => {
                const data = response.data;
                setDecks(data);
            });
    }

    function createDeck( ) {
        fetch("/api/deck/create",
            {
                headers: {
                    "content-type": "application/json",
                    Authorization: `Bearer ${jwt}`
                },
                method: "POST",
                body: JSON.stringify({ name: inputValue })

            }).then(response => {
                if(response.status === 200) return response.json();
        }).then(data => {
            console.log("Git gud");
        })
     }

    useEffect(() => {
        showCards();
    }, []);

    const deleteDeck =  id => {
        try {
             axios.delete(`${localUrl}/${id}`).then(() => showCards());
             showCards();
        } catch (error) {
            alert(error)
        }
    }


    return (
        <div>

            <div>
                {decks && decks.map(element => {
                    return (
                        <div key={element.id}>
                        <nav aria-label="secondary mailbox folders">
                            <List>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemText primary={element.deckName} />
                                        <DeckCards data = {element}/>
                                        <Button variant="contained" onClick={() => deleteDeck(element.id)}> Delete deck </Button>
                                    </ListItemButton>
                                </ListItem>

                            </List>
                        </nav>
                        </div>
                    )
                })}

            </div>
            <div>
                <div>
                    <Button variant="contained" onClick={createDeck}>Add new deck ! </Button>
                    <TextField  id="inputValue" label="Filled" variant="filled" type="text" name="name"
                                value={inputValue}
                                onChange={(event) => setInputValue(event.target.value)}
                                autoComplete="off"
                    />
                </div>
            </div>
        </div>
    );
};

export default AllDeck;
