import React, { Component } from 'react';
import './Chair.css'

class ChairMassage extends Component {

  // render nav
  render() {
    return (
      <div className="uk-container">
      <div id='chairbody'>
        <div className="uk-text-center">
          <h1 className='chairH1'>INCREASE OFFICE PRODUCTIVITY WITH<br></br> ON-SITE CHAIR MASSAGE</h1>
          <h2 className='chair-header'>OUR MASSAGE THERAPISTS PROVIDE ON-SITE CHAIR MASSAGE WITH CONVENIENT OPTIONS FOR <br></br>  COMPANIES, EVENTS AND PARTIES</h2>
          <div id='chaircards' className="uk-text-center" uk-grid='true'>
            <div className="uk-width-1-2">
              <div className="uk-card uk-card-default uk-card-body chaircardbody">
                <img className='ChairIcons' src='../Images/pricing_icon.png'></img>
                <h3 className='chairCardHeaders'>PRICING</h3>
                <p>Employer Paid is a standard option for companies, rates start at $75 per therapist per hour.</p>
                <p><b>Employee Paid</b> is a way for employees to access our services. A discount is applied, however if using a credit/debit card a fee of $2 is added to the total.</p>
              </div>
            </div>
            <div className="uk-width-1-2">
              <div className="uk-card uk-card-default uk-card-body chaircardbody">
              <img className='ChairIcons' src='../Images/gears_icon.png'></img>
                <h3 className='chairCardHeaders'>PROGRAMS</h3>
                <p><b>The Classic Program</b> is excellent for all events and provides numerous benefits to you and your employees. 
              Please call us or email and we will set up a quote.</p>
                <p>Elevate will coordinate all your event needs.</p>
                <p>*We can manage small or large events, must be a minimum of 2 hours</p>
              </div>
            </div>
            <div className="uk-width-1-2">
              <div className="uk-card uk-card-default uk-card-body chaircardbody">
              <img className='ChairIcons' src='../Images/calender.png'></img>
                <h3 className='chairCardHeaders'>CONVENIENT SCHEDULING</h3>
                <p>A customized link will allow you to pay in advance, receive text and email reminders, and have the convenience of scheduling anytime anywhere.</p>
              </div>
            </div>
            <div className="uk-width-1-2">
              <div className="uk-card uk-card-default uk-card-body chaircardbody">
              <img className='ChairIcons' src='../Images/handshake)icon.png'></img>
                <h3 className='chairCardHeaders'>PROFESSIONAL SERVICES</h3>
                <p>Elevate Chair Massage has the highestest standards of practice and
                   professionalism for each event. Our licensed therapists are specialized in giving the highest quality of services.  We love our job! </p>
              </div>
            </div>
            <div className="uk-width-1-1 uk-text-center">
            <a  href="/contact"><button id='chairButton' class="uk-button uk-button-primary">Contact Us Today!</button></a>
            </div>
          </div>

          
            <div class="uk-child-width-1-4 uk-text-center uk-visible@m" uk-grid='true'>
              <div>
                <img className='chairpics' src="../Images/chair1.png"  alt='Chair massage being given in Denver, CO'></img>
              </div>
              <div>
                <img className='chairpics' src="../Images/chair2.png"  alt='Chair massage being given in Denver, CO'></img>
              </div>
              <div>
                <img className='chairpics' src="../Images/chair3.png"  alt='Chair massage being given in Denver, CO'></img>
              </div>
              <div>
                <img className='chairpics' src="../Images/chair4.jpg"  alt='Chair massage being given in Denver, CO'></img>
              </div>
            </div>

             
            
        </div>
      </div>
      </div>
    );
  }
}


export default ChairMassage;