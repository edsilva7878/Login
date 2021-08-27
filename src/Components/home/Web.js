import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Home from './Home'
import About from './About'
import Skills from "./Skills"
import Contact from "./Contact"
import Partners from "./Partners"

export default function Web(){
    return(
        <BrowserRouter>
            <Route component = { Home }  path="/" exact />
            <Route component = { About }  path="/about" />
            <Route component = { Skills }  path="/skills" />
            <Route component = { Contact }  path="/contact" />
            <Route component = { Partners }  path="/partners" />
        </BrowserRouter>
    )
}
   