import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Dashboard from './Dashboard';
import CurrencyDetailsContainer from './Currency/Details';
import Converter from './Converter';


function App(){
  return (
    <div className="container">
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/currency/:id" component={CurrencyDetailsContainer} />
          <Route exact path="/converter" component={Converter} />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
