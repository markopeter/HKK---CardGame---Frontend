import React from 'react';
import axios from "axios";
import {useState} from "react";
import Button from "@mui/material/Button";
import {List, ListItem, ListItemButton} from "@mui/material";


const localUrl = "/api/originalcards"
let pagesNumber = 0;
const fetchCards = (page, size) => {
    return axios.get(localUrl, {params: {page: page, size: size}})
}

const GetAllOriginalCards = () => {

    const cardOnPage = 10;
    const [page, setPage] = useState(0);
    const [card, setCard] = useState([])
    const [isShown, setIsShown] = useState(false);

    const nextPage = () => {
        setPage(c => c + 1);
    }
    const prevPage = () => {
        setPage(c => c - 1);
        console.log(pagesNumber);
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
            console.log(data.totalPages);
            pagesNumber = data.totalPages;
        });
        setIsShown(current => !current);
    };

    return (
        <div>
            <Button variant="contained" onClick = {wrapperFunctionPrev} disabled={page === 0}> Previous ! </Button>
            <Button variant="contained" onClick = {wrapperFunctionNext} disabled={page === pagesNumber}> Next ! </Button>
            <Button variant="contained" className="searchButton" onClick={handleClick}>Show all card</Button>
            {isShown && <div>
                {card.content && card.content.map(element => {
                    return (
                        <div key={element.id}>

                            <List>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <p>{element.name}</p>
                                    </ListItemButton>
                                </ListItem>

                            </List>
                        </div>
                    )
                })}
            </div>}
        </div>
    );
};

export default GetAllOriginalCards;
