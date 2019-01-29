import React, { Component } from 'react';
import './Nav.css'

class Nav extends Component {

  // render nav
  render() {
    return (
      <div  uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
       <nav id = 'header' className="uk-navbar-container uk-margin" uk-navbar='true' uk-navbar="mode: click">
            <div className="uk-navbar-left uk-visible@m ">
                <ul className="uk-navbar-nav">
                    <li className=""><a href = "/"><img id='logo-nav' src = "../Images/download.png" alt='Elevate chair massage logo Denver, CO'></img></a></li>
                    
                </ul>
            </div>
            <div className="uk-navbar-center uk-visible@m">
                <ul className="uk-navbar-nav">
                    <li className=""><a href="/">Home</a></li>
                    <li className=""><a href="/chair-massage">Corporate Chair Massage</a></li>
                    <li className=""><a href="/yoga">Yoga</a></li>
                    <li className=""><a href="/team-members">Elevate Team</a></li>
                    <li className=""><a href="/partners">Partnerships</a></li>
                    <li className=""><a href="/reviews">Reviews</a></li>
                    <li className=""><a href="/contact">Contact Us</a></li>
                     
                </ul>
            </div>

            {/* mobile view */}
            <div className="uk-hidden@m">
                <a id="mobileMenu" uk-icon="icon: menu; ratio: 2" uk-toggle="target: #offcanvas-nav-primary"></a>
                    <div className="uk-offcanvas-content">
                        <div id="offcanvas-nav-primary" uk-offcanvas="overlay: true">
                            <div className="uk-offcanvas-bar">
                                <ul className="uk-nav uk-nav-default">
                                    <li className="uk-nav-header">
                                        <a className="uk-offcanvas-close" uk-close>X</a>
                                        <img id='logoMobile' className="uk-margin-small-right" src="../Images/download.png" width="50" height="50" alt='Elevate chair massage logo Denver, CO' uk-img></img>
                                    </li>
                                    <li className="uk-nav-divider"></li>

                                    <li className=""><a href="/">Home</a></li>
                                    <li className=""><a href="/chair-massage">Mobile + Corporate Massage</a></li>
                                    <li className=""><a href="/yoga">Yoga</a></li>
                                    <li className=""><a href="/team-members">Elevate Team</a></li>
                                    <li className=""><a href="/partners">Partnerships</a></li>
                                    <li className=""><a href="/reviews">Reviews</a></li>
                                    <li className=""><a href="/contact">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="uk-navbar-right">
                <ul className="uk-navbar-nav">
                    <li className="navbar-button"><a href="/book-appointment"><button class="uk-button uk-button-primary">Schedule Appointment</button></a></li>
                  
                </ul>
            </div>
        </nav>
      </div>
    );
  }
}


export default Nav;