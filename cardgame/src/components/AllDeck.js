import React, {useEffect, useState} from 'react';
import Button from "@mui/material/Button";
import axios from "axios";
import {List, ListItem, ListItemButton, ListItemText, TextField} from "@mui/material";
import DeckCards from "./DeckCards";

const url = `https://hkk-petproject.herokuapp.com/deck`;
const fetchDecks = () => {
    return axios.get(url);
}
const AllDeck = () => {
    const urlPost = `https://hkk-petproject.herokuapp.com/deck/create`;
    const [inputValue, setInputValue] = useState('');
    const [decks, setDecks] = useState([]);
    const showCards = () => {
        fetchDecks()
            .then((response) => {
                const data = response.data;
                setDecks(data);
            });
    }
    const postData = (e) => {
        e.preventDefault();
        axios.post(urlPost, {
            name: inputValue
        }).then(() => {
            showCards();
        })
    }
    useEffect(() => {
        showCards();
    }, []);

    const deleteDeck =  id => {
        try {
             axios.delete(`${url}/${id}`).then(() => showCards());
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
                    <Button variant="contained" onClick={postData}>Add new deck ! </Button>
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
