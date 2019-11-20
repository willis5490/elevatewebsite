import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {

  // render nav
  render() {
    return (
      <div>
      
        <nav id="secondfooter" className="uk-navbar-container uk-text-center uk-visible@m" uk-navbar='true' uk-navbar="mode: click">
        
          <div id="leftfooter" className="uk-width-1-3 uk-text-center  uk-visible@m">
                <img id="footer-logo" src='../Images/elevate_logo_textonly.png'></img>
                <h4 id='copyfooter' className='footheaders uk-margin-remove-top'>© 2019 Elevate Bodywork LLC. All rights reserved.</h4>
          </div>
          <div id='centerfooter' className="uk-width-1-3 uk-text-center uk-visible@m footletters ">
                <h3 className='footheaders'>Contact Info</h3>
                <a href='/contact'><p className='contactNavLetters '>Email: INFO@ELEVATEMASSAGECO.COM</p></a>
                <a className='contactNavLetters' href="tel:303-928-9739"><p>Phone: (303) 928-9739</p></a>
                
          </div>
          <div id='rightfooter' className="uk-width-1-3 uk-text-center uk-visible@m footletters">
                <h3 className='footheaders'>Follow Us</h3>
                <a target='_blank' href = "https://www.facebook.com/elevatechairmassage/"><i class="fab fa-facebook fa-2x footheaders"></i></a>
                    <a target='_blank' href = ""><i class="fab fa-2x fa-instagram footheaders"></i></a>
          </div>
         
        </nav>

        <nav id="secondfooter" className="uk-navbar-container uk-text-center uk-align-center uk-hidden@m" uk-navbar='true' uk-navbar="mode: click">
        {/* mobile view */}
        <div className="uk-hidden@m">
              <div id="leftmobilefooter" className="uk-width-1-1 uk-text-center uk-align-center">
                <img id="footer-logo" src='../Images/elevate_logo_textonly.png'></img>
                <h4 id='copywritemobile' className='footheaders'>© 2019 Elevate Bodywork LLC. All rights reserved.</h4>
          </div>
          <div className="uk-width-1-1 uk-text-center centermobilefoot">
                <h3 className='footheaders uk-margin-remove'>Contact Info</h3>
                <a href='/contact'><p className='contactNavLetters uk-margin-remove'>Email: INFO@ELEVATEMASSAGECO.COM</p></a>
                <a href="tel:303-928-9739"><p className='contactNavLetters ' >Phone: (303) 928-9739</p></a>
               
          </div>
          <div id='rightmobilefooter' className="uk-width-1-1 uk-text-center">
                <h3 className='footheaders'>Follow Us</h3>
                    <a target='_blank' href = "https://www.facebook.com/elevatechairmassage/"><i class="fab fa-facebook fa-2x footheaders"></i></a>
                    <a target='_blank' href = ""><i class="fab fa-instagram fa-2x footheaders"></i></a>
                   
          </div>
            </div>
        
        </nav>
        
      </div>
    );
  }
}


export default Footer;
