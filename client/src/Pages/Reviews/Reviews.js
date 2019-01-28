import React, { Component } from 'react';
import './Review.css'

class Reviews extends Component {

  // render nav
  render() {
    return (
      <div className="uk-container">
      <div className='uk-text-center'>
        <div id='reviewsbody' class="uk-child-width-1-3 uk-text-center uk-visible@m" uk-grid='true'>
              <div>
              <span uk-icon="icon: quote-right; ratio: 1.5"></span>
                <p>Getting a massage from Elevate Chair Massage at the office was a great break from a stressful day! My neck feels fantastic!</p>
                <p><b>— Jane White, Bleeding Edge</b></p>
              </div>
              <div>
              <span uk-icon="icon: quote-right; ratio: 1.5"></span>
                <p>Elevate Chair Massage has been providing weekly on-site massage to all of our employees since 1998. Without exception, 
                  everyone is extremely enthusiastic about this employee benefit. The massage therapists are a delight to have at our office. 
                  I highly recommend Elevate’s professional staff to any company who wants a creative way to appreciate their employees and to 
                  ensure a positive change in the office atmosphere and morale.</p>
                <p><b>— Roland Johnson, The Pixel</b></p>
              </div>
              <div>
              <span uk-icon="icon: quote-right; ratio: 1.5"></span>
                <p>Elevate Chair Massage therapists were extremely professional and created a very warm and inviting environment for our 
                  employees at their employee appreciation day. Our staff absolutely loved the 15 minute massages and overwhelmingly gave 
                  positive feedback about the event—so much that we are already planning our next one! It was a pleasure to work with Elevate 
                  and I highly recommend offering this fun, creative, relaxing way to show your appreciation to your organization.</p>
                <p><b>— Amir Hussein, Inwidget</b></p>
              </div>
            </div>
            <div id='reviewsbody' class="uk-child-width-1-2 uk-text-center uk-visible@m" uk-grid='true'>
              <div>
               <img className='reviewpics' src='../Images/elevate-employee1.jpg' alt='Elevate employees doing chair massage in Denver, CO'></img>
              </div>
              <div>
               <img className='reviewpics' src='../Images/elevate-employee2.jpg' alt='Elevate employees doing chair massage in Denver, CO'></img>
              </div>
              
            </div>

            <div id='reviewsbody' class="uk-child-width-1-1 uk-text-center uk-hidden@m" uk-grid='true'>
            <div>
              <span uk-icon="icon: quote-right; ratio: 1.5"></span>
                <p>Getting a massage from Elevate Chair Massage at the office was a great break from a stressful day! My neck feels fantastic!</p>
                <p><b>— Jane White, Bleeding Edge</b></p>
              </div>
              <div>
              <span uk-icon="icon: quote-right; ratio: 1.5"></span>
                <p>Elevate Chair Massage has been providing weekly on-site massage to all of our employees since 1998. Without exception, 
                  everyone is extremely enthusiastic about this employee benefit. The massage therapists are a delight to have at our office. 
                  I highly recommend Elevate’s professional staff to any company who wants a creative way to appreciate their employees and to 
                  ensure a positive change in the office atmosphere and morale.</p>
                <p><b>— Roland Johnson, The Pixel</b></p>
              </div>
              <div>
              <span uk-icon="icon: quote-right; ratio: 1.5"></span>
                <p>Elevate Chair Massage therapists were extremely professional and created a very warm and inviting environment for our 
                  employees at their employee appreciation day. Our staff absolutely loved the 15 minute massages and overwhelmingly gave 
                  positive feedback about the event—so much that we are already planning our next one! It was a pleasure to work with Elevate 
                  and I highly recommend offering this fun, creative, relaxing way to show your appreciation to your organization.</p>
                <p><b>— Amir Hussein, Inwidget</b></p>
              </div>
            </div>
            <div id='reviewsbody' class="uk-child-width-1-1 uk-text-center uk-hidden@m" uk-grid='true'>
              <div>
               <img className='reviewpics' src='../Images/elevate-employee1.jpg' alt='Elevate employees doing chair massage in Denver, CO'></img>
              </div>
              <div>
               <img className='reviewpics' src='../Images/elevate-employee2.jpg' alt='Elevate employees doing chair massage in Denver, CO'></img>
              </div>
              
            </div>
      </div>
      </div>
    );
  }
}


export default Reviews;