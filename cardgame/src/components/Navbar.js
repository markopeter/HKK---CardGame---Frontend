import React from 'react';
import {Route, Routes, Link} from "react-router-dom";
import Home from "./Home";
import CardFilterDropDown from "./CardFilterDropDown";
import SearchCardByName from "./SearchCardByName";
import {AppBar, Box, IconButton, Toolbar, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import GetAllCard from "./GetAllCard";
import AllDeck from "./AllDeck";

function MenuIcon() {
    return null;
}

const Navbar = () => {

    return (
        <div>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to="/">Home</Link>
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to="/cardfilter">Filter</Link>
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to="/searchcardbyname">Search card </Link>
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to="/getallcard">Show all card </Link>
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to="/getalldeck"> Decks </Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
            <div>
                <div>
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/cardfilter" element={<CardFilterDropDown/>} />
                        <Route path="/searchcardbyname" element={<SearchCardByName/>} />
                        <Route path="/getallcard" element={<GetAllCard/>} />
                        <Route path="/getalldeck" element={<AllDeck/>} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};
export default Navbar;
