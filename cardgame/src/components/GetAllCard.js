import React, {useEffect, useState} from 'react';
import axios from "axios";
import AllCard from "./AllCard";
import {flushSync} from "react-dom";

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
            <button onClick = {wrapperFunctionPrev} disabled={page === 0}> Previous ! </button>
            <button onClick = {wrapperFunctionNext} disabled={page === cardOnPage}> Next ! </button>
            <button className="searchButton" onClick={handleClick}>Show all card</button>
            {isShown && <div>
                {card.content && card.content.map(element => {
                    return (
                        <div> {element.name}</div>
                    )
                })}
            </div>}
        </div>
    );
};

export default GetAllCard;