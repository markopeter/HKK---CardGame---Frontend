import React, {useState} from 'react';
import Button from "@mui/material/Button";
import axios from "axios";


const DeckCards = (props) => {
    const url = `https://hkk-petproject.herokuapp.com/deck/${props.data.deckName}`;
    const localUrl = `/api/deck/${props.data.deckName}`
    const [deckCards, setDeckCards] = useState([]);
    const [isShown, setIsShown] = useState(false);
    const fetchDeckCard = () => {
        console.log(props);
        axios.get(localUrl, {params:
                {
                    name : props.data.deckName}})
            .then(r => setDeckCards(r.data));
        setIsShown(current => !current);
    }

    return (
        <div>

            <Button variant="contained" onClick={fetchDeckCard} >Show this deck cards ! </Button>
            {isShown &&
            <div>
                {deckCards && deckCards.map(element => {
                    return (
                        <div key={element.id}> {element.name}</div>
                    )
                })}
            </div>}
        </div>
    );
};

export default DeckCards;
