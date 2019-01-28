import React, { Component } from 'react';
import './Home.css'


class Home extends Component {

  // render nav
  render() {
    return (
        <div>
        <img id="home-picture" src = "../Images/test1.jpg" alt='sand swirls chair massage elevate'></img>
        
        
        <div id='mainlogo' className='uk-text-center uk-align-center'>
          <img id="home-logo" src = "../Images/download.png" alt='Elevate chair massage main logo'></img>
          <h1 id='home-statement'><b>DENVERS PREMIER ON-SITE<br></br> CHAIR MASSAGE</b></h1>
          <a href='/chair-massage'><button id="home-button" class="uk-button uk-button-primary" >Learn More</button></a>
        </div>

      
        
        <div className="uk-container">
        <div id="homeBody" className="uk-panel">
          <h1 id='homeHeader'>CORPORATE ON-SITE AND MOBILE CHAIR MASSAGE<br></br> <b>BY ELEVATE BODYWORK + CHAIR MASSAGE</b></h1>
          <br></br>
          <div className='homeBody2'>
          <h2 id='homesubhead' style={{color:'#59c5aa'}}>OUR MASSAGE THERAPISTS PROVIDE ON-SITE THERAPEUTIC CHAIR MASSAGE WITH AFFORDABLE OPTIONS FOR COMPANIES, EVENTS AND PARTIES.</h2>
          <h3  className='homeBody2'>The team at Elevate Chair Massage provides professional, individualized on-site massage to enhance overall wellbeing. On-site massage is a cost effective 
            way to ensure participation, appreciation, and stress reduction. We have affordable options for companies, events, and parties. </h3>
          <h3  className='homeBody2'><b>We are passionate about elevating our community’s wellness with on-site massage. </b></h3>
          <h3  className='homeBody2'>Convenient online scheduling for on-site chair massage for events, private parties, and companies of all sizes. </h3>
          <h3  className='homeBody2'><b>We are Ready to Make Change Happen!</b></h3>
          </div>
        </div>

          <br></br>

              <div id='homebottom' className="uk-text-center" uk-grid='true'>
          <div className="uk-width-1-2">
              <div className="uk-card uk-card-default uk-card-body">
                <img className='home-card-pics' src="..\Images\elevate-employee3.jpg" alt='Chair massage being given in Denver, CO'></img>
                <h3 className='homecardHeader'>ON-SITE MASSAGE ADDRESSES PHYSICAL, MENTAL + EMOTIONAL CONCERNS</h3>
                <ul className='homelists'>
                  <li>Carpal Tunnel Syndrome</li>
                  <li>Forward Head Posture</li>
                  <li>Computer Over-use</li>
                  <li>Lower Back Issues</li>
                </ul>
              </div>
          </div>
          <div className="uk-width-1-2">
              <div className="uk-card uk-card-default uk-card-body">
                <img className='home-card-pics' src="..\Images\jill-homepage.jpg"  alt='Chair massage being given in Denver, CO'></img>
                <h3 className='homecardHeader'>ADDITIONAL BENEFITS ENHANCES WELLNESS FOR EMPLOYEES</h3>
                <ul className='homelists'>
                  <li>Stress Alleviation</li>
                  <li>Employee Retention</li>
                  <li>Increase in Productivity</li>
                  <li>Improvement in Mood</li>
                </ul>
              </div>
          </div>
          </div>
      </div>
      </div>
    );
  }
}


export default Home;