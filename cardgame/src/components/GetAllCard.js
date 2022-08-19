import React, {useEffect, useState} from 'react';
import axios from "axios";
import {flushSync} from "react-dom";
import Button from "@mui/material/Button";
import {List, ListItem, ListItemButton, ListItemText} from "@mui/material";
import AddCardToDeck from "./AddCardToDeck";
import CardComponent from "./CardComponent";

const url = `https://hkk-petproject.herokuapp.com/card/page`;
const localUrl = `/api/card/page`;
const deckUrl = `https://hkk-petproject.herokuapp.com/deck/add-card`
const localDeckUrl =`/api/deck/add-card`
const fetchCards = (page, size) => {
    return axios.get(localUrl, {params: {page: page, size: size}})
}

const GetAllCard = () => {
    const cardOnPage = 10;
    const [page, setPage] = useState(0);
    const [card, setCard] = useState([])
    const [isShown, setIsShown] = useState(false);
    const [nameData, setNameData] = useState('');
    const deckToCard = (childdata) => {
        setNameData(childdata);
    }


    const nextPage = () => {
        flushSync(() => {
            setPage(c => c + 1);
        });
    }
    const prevPage = () => {
        flushSync(() => {
            setPage(c => c - 1);
        });
    }
    const wrapperFunctionNext = () => {
        nextPage();
        fetchCards(page, cardOnPage).then((response) => {
            const data = response.data;
            setCard(data);
            console.log(data);
        });
    }
    const wrapperFunctionPrev = () => {
        prevPage();
        fetchCards(page, cardOnPage).then((response) => {
            const data = response.data;
            setCard(data);
        });
    }

    const handleClick = event => {
        fetchCards(page, cardOnPage).then((response) => {
            const data = response.data;
            setCard(data);
        });
        setIsShown(current => !current);
    };

    const postData = (e) => {
        e.preventDefault();
        console.log(e.target.id);
        console.log(nameData);
        axios.post(localDeckUrl, {
             id : e.target.id,name: nameData, withCredentials: false
        }).then(() => {
            console.log("Succes");
        })
    }

    return (
        <div>
            <Button variant="contained" onClick = {wrapperFunctionPrev} disabled={page === 0}> Previous ! </Button>
            <Button variant="contained" onClick = {wrapperFunctionNext} disabled={page === cardOnPage}> Next ! </Button>
            <Button variant="contained" className="searchButton" onClick={handleClick}>Show all card</Button>
            {isShown && <div>
                {card.content && card.content.map(element => {
                    return (
                        <div key={element.id}>

                            <List>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                            <CardComponent data={element}/>
                                        <Button onClick={(e) => postData(e)} id={element.id} variant="contained"  >Add to deck</Button>
                                    </ListItemButton>
                                </ListItem>

                            </List>
                        </div>
                    )
                })}
            </div>}
            <div>
                <AddCardToDeck childToParent={deckToCard}/>
            </div>
        </div>
    );
};

export default GetAllCard;