import React, {useState} from 'react';
import axios from "axios";
import SearchResult from "./SearchResult";
import {FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import Button from "@mui/material/Button";

const CardFilterDropDown = () => {
    const options = [
        { value: "name", label: 'Name' },
        { value: "manaCost", label: 'Mana Cost' },
        { value: 'baseAttack', label: 'Base Attack' },
        { value: 'baseHealth', label: 'Base Health' }
    ]
    const [cardData, setCardData] = useState([]);
    const [detail, setDetail] = useState(options[0].value);
    const [inputValue, setInputValue] = useState('');
    const localUrl = `/api/creature/detail/${detail}/value/${inputValue}`;
    const url = `https://hkk-petproject.herokuapp.com/creature/detail/${detail}/value/${inputValue}`;
    const fetchCards = () => {
        axios.get(localUrl, {params: {detail: detail, value: inputValue}})
            .then(r => setCardData(r.data));
    }
    const changeDetail = (event) =>{
        console.log(event.target.value);
        setDetail(event.target.value);
    }
    return (
        <div >
            <br />
            <FormControl >
                <InputLabel id="demo-simple-select-label">Property</InputLabel>
            <Select labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={detail}
                    label="Property"
                    onChange={changeDetail}>
                <MenuItem value={"name"}>Name</MenuItem>
                <MenuItem value={"manaCost"}>ManaCost</MenuItem>
                <MenuItem value={"baseAttack"}>BaseAttack</MenuItem>
                <MenuItem value={"baseHealth"}>BaseHealth</MenuItem>

            </Select>
                <br />
            </FormControl>
            <div>
                <TextField  id="inputValue" label="Filled" variant="filled" type="text" name="name"
                        value={inputValue}
                        onChange={(event) => setInputValue(event.target.value)}
                        autoComplete="off"
                />
                <br />
                <Button variant="contained" onClick = {fetchCards} > Filter cards ! </Button>
            </div>
            <div>
                <SearchResult data={cardData}/>
            </div>
        </div>
    );
};

export default CardFilterDropDown;
