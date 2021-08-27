import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Ailson from './Ailson'
import AilsonServices from './AilsonServices'

export default function Direito(){
    return(
        <BrowserRouter>
            <Route component = { Ailson }  path="/" exact />
            <Route component = { AilsonServices }  path="/ailsonservices"/>
        </BrowserRouter>
    )
}
  