import React, { Component } from 'react';
import { Route, Router, Switch } from "react-router-dom";
//create browser history
import History from './Pages/History/History.js'
//components
import Nav from './Components/Nav/Nav.js';
import Footer from './Components/Footer/Footer.js';
//pages
import Home from './Pages/Home/Home.js';
import ChairMassage from './Pages/Chair/Chair-massage.js';
import Contact from './Pages/Contact/Contact.js';
import Partners from './Pages/Partners/Partners.js';
import Reviews from './Pages/Reviews/Reviews.js';
import Team from './Pages/Team-members/Team-members.js';
import Yoga from './Pages/Yoga/Yoga.js';
import BookApt from './Pages/BookApt/BookApt.js';
import NotFound from './Pages/NotFound/NotFound.js';


class App extends Component {
  render() {
    return ( 
      <Router  history={History}>
         <div className="App">
        <Nav></Nav>
          
            <Switch>
              <Route exact path="/" render={props =><Home/>} />
              <Route exact path="/book-appointment" render={props =><BookApt/>} />
              <Route exact path="/chair-massage" render={props =><ChairMassage/>} />
              <Route exact path="/contact" render={props =><Contact/>} />
              <Route exact path="/partners" render={props =><Partners/>} />
              <Route exact path="/reviews" render={props =><Reviews/>} />
              <Route exact path="/team-members" render={props =><Team/>} />
              <Route exact path="/yoga" render={props =><Yoga/>} />
              <Route render={props =><NotFound/>}/>
            </Switch>
          
        <Footer></Footer>
        </div>
      </Router>
     
    );
  }
}

export default App;
