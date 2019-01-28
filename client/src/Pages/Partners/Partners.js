import React, { Component } from 'react';
import './Partners.css'

class Partners extends Component {

  // render nav
  render() {
    return (
      <div className="uk-container">
      <div className="uk-text-center">
      <h1 id='partnersHeader'>IN PARTNERSHIP WITH</h1>
            <div class="uk-child-width-1-4 uk-text-center uk-visible@m" uk-grid='true'>
              <div>
                <img className='partnerpics' src="../Images/coreyoga.png"></img>
              </div>
              <div>
                <img className='partnerpics2' src="../Images/denverhealth.jpg"></img>
              </div>
              <div>
                <img className='partnerpics3' src="../Images/hampton.png"></img>
              </div>
              <div>
                <img className='partnerpics4' src="../Images/ais.jpg"></img>
              </div>
          </div>

            {/* mobile view */}
            <div className="uk-hidden@m">
              <div class="uk-child-width-1-1 uk-text-center" uk-grid='true'>
                <div>
                  <img className='partnerpics' src="../Images/coreyoga.png"></img>
                </div>
                <div>
                  <img className='partnerpics2' src="../Images/denverhealth.jpg"></img>
                </div>
                <div>
                  <img className='partnerpics3' src="../Images/hampton.png"></img>
                </div>
                <div>
                  <img className='partnerpics4' src="../Images/ais.jpg"></img>
                </div>
              </div>
            </div>
      </div>
      </div>
    );
  }
}


export default Partners;