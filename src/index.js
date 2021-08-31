import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter } from "react-router-dom";
import Home from './Components/pageHome'
import Skills from './Components/pageskills'
import About from './Components/pageAbout'
import Contact from './Components/pageContact'
import Partners from './Components/pagePartners'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route component = { Home }  path="/" exact />
      <Route component = { Skills }  path="/skills" />
      <Route component = { About }  path="/about" />
      <Route component = { Contact }  path="/contact" />
      <Route component = { Partners }  path="/partners" />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

