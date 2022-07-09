import React from "react";

import Home from '../Views/Home';
import About from '../Views/About';
import Contact from "../Views/Contact";

import { Routes, Route, Link } from "react-router-dom";


const Routing = () => {


    return (
        <>
            <Routes>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
            </Routes>


        </>
    )


}


export default Routing; 