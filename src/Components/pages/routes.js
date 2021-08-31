import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Home from '../home'
import Skills from './skills'
import About from './about'
import Contact from './contact'

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