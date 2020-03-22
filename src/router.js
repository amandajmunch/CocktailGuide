import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './Components/App';
import Search from './Components/Search';
import Random from './Components/Random';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';


export default (
  <BrowserRouter>
    <div className="app">
      <Navbar/>
      <Route exact path='/' component={App}/>
      <Route exact path='/search' component={Search} />
      <Route exact path='/random' component={Random} />
      <Footer/>
    </div>
  </BrowserRouter>
);
