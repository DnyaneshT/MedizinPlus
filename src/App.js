import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import HomePage from './Pages/HomePage';
import Cart from './Pages/Cart';
import AboutPage from './Pages/AboutPage';
import NotFoundPage from './Pages/NotFoundPage';
import Footer from './Components/Footer';
import LoginPage from './Pages/LoginPage';
import ProductPage from './Pages/ProductPage';

function App() {
  return (
    <Router>
    <div className="App">
      
      <div id="page-body">
        <Switch>
          
          <Route path="/" component={HomePage} exact />
          <Route path="/login" component={LoginPage}/>
          <Route path="/productpage/:category" component={ProductPage}/>
          <Route path="/about" component={AboutPage} />
          <Route path="/cart" component={Cart} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
      <Footer/>
      
    </div>
  </Router>
  );
}

export default App;


//<Route path="/medicines/:name" component={Product} />
