import React, {useEffect, useState} from 'react';
import axios from "axios";
import AllCard from "./AllCard";
import {flushSync} from "react-dom";
import Button from "@mui/material/Button";
import {List, ListItem, ListItemButton, ListItemText} from "@mui/material";

const url = `https://hkk-petproject.herokuapp.com/card/page`;
const fetchCards = (page, size) => {
    return axios.get(url, {params: {page: page, size: size}})
}

const GetAllCard = () => {
    const cardOnPage = 10;
    const [page, setPage] = useState(0);
    const [card, setCard] = useState([])
    const [isShown, setIsShown] = useState(false);

    // useEffect( () => {
    //     fetchCards(page, cardOnPage)
    //         .then((response) => {
    //             const data = response.data;
    //             setCard(data);
    //         });
    // }, [page])
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
        setIsShown(current => !current);
    };
    return (
        <div>
            <Button variant="contained" onClick = {wrapperFunctionPrev} disabled={page === 0}> Previous ! </Button>
            <Button variant="contained" onClick = {wrapperFunctionNext} disabled={page === cardOnPage}> Next ! </Button>
            <Button variant="contained" className="searchButton" onClick={handleClick}>Show all card</Button>
            {isShown && <div>
                {card.content && card.content.map(element => {
                    return (
                        <div key={element.id}>
                        <nav aria-label="secondary mailbox folders">
                            <List>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemText primary={element.name} />
                                    </ListItemButton>
                                </ListItem>

                            </List>
                        </nav>
                        </div>
                    )
                })}
            </div>}
        </div>
    );
};

export default GetAllCard;