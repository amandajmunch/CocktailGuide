import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './Components/App';
import SearchResult from './Components/SearchResult';
import Random from './Components/Random';
import Beer from './Components/Beer';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Details from './Components/Details';
import Category from './Components/Category';

export default (
  <BrowserRouter>
    <div className="app">
      <Navbar/>
      <Route exact path='/' component={App}/>
      <Route exact path='/results' component={SearchResult}/>
      <Route exact path='/recipe/:id' component={Details}/>
      <Route exact path='/beer' component={Beer}/>
      <Route exact path='/random' component={Random}/>
      <Route exact path='/category' component={Category}/>
      <Footer/>
    </div>
  </BrowserRouter>
);
