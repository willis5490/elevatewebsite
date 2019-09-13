import React, { Component } from 'react';
import './Partners.css'

class Partners extends Component {

  // render nav
  render() {
    return (
      <div className="uk-container">
      <div className="uk-text-center">
      <h1 id='partnersHeader'>IN PARTNERSHIP WITH</h1>
            <div class="uk-child-width-1-5@m uk-child-width-1-2@s uk-child-width-1-1 uk-text-center " uk-grid='true'>
              <div>
                <img className='partnerpics' src="../Images/coreyoga.png" alt='corepower yoga logo asscoiated with elevate chair massage'></img>
              </div>
              <div>
                <img className='partnerpics2' src="../Images/denverhealth.jpg" alt='Denver Health logo asscoiated with elevate chair massage'></img>
              </div>
              <div>
                <img className='partnerpics3' src="../Images/hampton.png" alt='Hampton hotels logo asscoiated with elevate chair massage'></img>
              </div>
              <div>
                <img className='partnerpics4' src="../Images/ais.jpg" alt='A.I.S logo asscoiated with elevate chair massage'></img>
              </div>
              <div>
                <img className='partnerpics' src="../Images/Walk_LockupR_OB (1).jpg" alt='A.I.S logo asscoiated with elevate chair massage'></img>
              </div>
          </div>

      </div>
      </div>
    );
  }
}


export default Partners;