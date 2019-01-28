import React, { Component } from 'react';
import './Chair.css'

class ChairMassage extends Component {

  // render nav
  render() {
    return (
      <div className="uk-container">
      <div id='chairbody'>
        <div className="uk-text-center">
          <h1 className='chairH1'>ENHANCE YOUR WELLNESS <br></br>WITH ON-SITE MASSAGE</h1>
          <h2 className='chair-header'>OUR MASSAGE THERAPISTS PROVIDE ON-SITE THERAPEUTIC CHAIR MASSAGE WITH AFFORDABLE OPTIONS FOR <br></br>  COMPANIES, EVENTS AND PARTIES</h2>
          <div id='chaircards' className="uk-text-center" uk-grid='true'>
            <div className="uk-width-1-2">
              <div className="uk-card uk-card-default uk-card-body chaircardbody">
                <img className='ChairIcons' src='../Images/pricing_icon.png'></img>
                <h3 className='chairCardHeaders'>PRICING</h3>
                <p>We offer competitive pricing and program options, and ensure affordable rates. We offer employer or employee paid massage options as well.
                  Online payments are a convenient option as well.</p>
                <p>We offer discounts for non profits and recurring massage.</p>
              </div>
            </div>
            <div className="uk-width-1-2">
              <div className="uk-card uk-card-default uk-card-body chaircardbody">
              <img className='ChairIcons' src='../Images/gears_icon.png'></img>
                <h3 className='chairCardHeaders'>PROGRAMS + VOLUME</h3>
                <p>We can manage small or large events with 1-20 LMTS for a minimum of 2 hours. Whether it's a one-time event, party, or a monthly-recurring program,
                   we handle the logistics.</p>
                <p>Let us know how we can accommodate your wellness and event needs.</p>
              </div>
            </div>
            <div className="uk-width-1-2">
              <div className="uk-card uk-card-default uk-card-body chaircardbody">
              <img className='ChairIcons' src='../Images/calender.png'></img>
                <h3 className='chairCardHeaders'>CONVENIENT SCHEDULING</h3>
                <p>We can create a personalized link that will allow you to pay and receive text and email reminders, a convenience that Elevate Chair Massage provides its corporate clients.</p>
              </div>
            </div>
            <div className="uk-width-1-2">
              <div className="uk-card uk-card-default uk-card-body chaircardbody">
              <img className='ChairIcons' src='../Images/handshake)icon.png'></img>
                <h3 className='chairCardHeaders'>PROFESSIONAL SERVICES</h3>
                <p>Our licensed massage therapists are highly trained in giving quality service. Elevate Chair Massage has the highestest standards of practice and
                   professionalism for each event. We love our job! </p>
              </div>
            </div>
          </div>
          
            <div class="uk-child-width-1-4 uk-text-center uk-visible@m" uk-grid='true'>
              <div>
                <img className='chairpics' src="../Images/chair1.png"></img>
              </div>
              <div>
                <img className='chairpics' src="../Images/chair2.png"></img>
              </div>
              <div>
                <img className='chairpics' src="../Images/chair3.png"></img>
              </div>
              <div>
                <img className='chairpics' src="../Images/chair4.jpg"></img>
              </div>
            </div>
            <div className="paymentcontainer">
            <h2 id='payoptionHeader' className='chairCardHeaders'>PROGRAMS + PAYMENT OPTIONS</h2>
            <p><b>The Classic Program</b> is excellent for one-time events and provides numerous benefits to you and your employees. 
              Please call us or email and we will set up a quote based on distance, and one time or ongoing events.</p>
              <p><b>Employer Paid</b> is our most popular program for companies rates start at $70 per therapist per hour. </p>
              <p><b>Employee Paid</b> is a way for employees to access our services. A discount is applied, however if using a credit/debit card a fee of $2 is added to the total.</p>
              </div>
              <a  href="/contact"><button id='chairButton' class="uk-button uk-button-primary">Contact</button></a>
            
        </div>
      </div>
      </div>
    );
  }
}


export default ChairMassage;