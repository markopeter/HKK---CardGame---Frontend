import React from 'react';
import {Route, Routes, Link} from "react-router-dom";
import Home from "./Home";
import CardFilterDropDown from "./CardFilterDropDown";
const Navbar = () => {
    let menu = null;
    menu=<ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/cardfilter">Filter</Link>
        </li>
    </ul>
    return (
        <div>
            {menu}
            <div>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/cardfilter" element={<CardFilterDropDown/>} />
                </Routes>
            </div>
        </div>
    );
};

export default Navbar;
