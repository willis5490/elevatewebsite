import React, { Component } from 'react';
import { Route, Router, Switch } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//create browser history
import History from './Pages/History/History.js'
//components
import Nav from './Components/Nav/Nav.js';
import Footer from './Components/Footer/Footer.js';
//pages
import Home from './Pages/Home/Home.js';
import WorkWithUs from './Pages/WorkWithUS/WorkWithUs';
import Contact from './Pages/Contact/Contact.js';
import Reviews from './Pages/Reviews/Reviews.js';
import Team from './Pages/Team-members/Team-members.js';
import BookApt from './Pages/BookApt/BookApt.js';
import NotFound from './Pages/NotFound/NotFound.js';
import Blog from './Pages/Blog/Blog'


class App extends Component {
  render() {
    return ( 
      <Router  history={History}>
         <div className="App">
        <Nav></Nav>
          
            <Switch>
              <Route exact path="/" render={props =><Home/>} />
              <Route exact path="/book-appointment" render={props =><BookApt/>} />
              <Route exact path="/WorkWithUs" render={props =><WorkWithUs/>} />
              <Route exact path="/contact" render={props =><Contact/>} />             
              <Route exact path="/reviews" render={props =><Reviews/>} />
              <Route exact path="/blogs" render={props =><Blog/>} />
              <Route exact path="/team-members" render={props =><Team/>} />             
              <Route render={props =><NotFound/>}/>
            </Switch>
          
        <Footer></Footer>
        <ToastContainer position="bottom-center" autoClose={1600} />
        </div>
      </Router>
     
    );
  }
}

export default App;
