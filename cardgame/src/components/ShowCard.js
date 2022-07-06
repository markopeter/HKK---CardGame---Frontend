import React, {useState} from 'react';
import axios from "axios";
import AllCard from "./AllCard";

const ShowCard = () => {
    const [card, setCard] = useState([])
    const url = "https://hkk-petproject.herokuapp.com/creatures";
    const fetchCards = async () => {
        await axios.get(url).then((response) => {
            console.log(response);
            const data = response.data;
            setCard(data);
        });
    }

    return (
        <div>
            <button onClick={fetchCards}>Show cards ! </button>
            <AllCard data={card}/>
        </div>
    );
};

export default ShowCard;