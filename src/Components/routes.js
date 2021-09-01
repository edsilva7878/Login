import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Home from './pageHome/index'
import Skills from './pageskills/index'
import About from './pageAbout/index'
import Contact from './pageContact/index'

export default function Routes(){
    return(
        <BrowserRouter>
            <Route component = { Home }  path="/" exact />
            <Route component = { Skills }  path="/skills" />
            <Route component = { About }  path="/about" />
            <Route component = { Contact }  path="/contact" />
        </BrowserRouter>
    )
}