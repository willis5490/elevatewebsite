import React, { Component } from 'react';
import './Review.css'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

class Reviews extends Component {

  // render nav
  render() {
    return (
      <div className="uk-container">
      <div className='uk-text-center'>
        <div id='reviewsbody' class="uk-child-width-1-1 uk-text-center uk-margin-large-bottom uk-margin-large-top" uk-grid='true'>
        <CarouselProvider 
        naturalSlideWidth={100}
        naturalSlideHeight={20}
        totalSlides={5}
        infinite={true}
        interval={15000}
        isPlaying={true}
        
      >
        <Slider>
          <Slide index={0}>
            <div>
              <span uk-icon="icon: quote-right; ratio: 1.5"></span>
                  <p>Hi Jill, I want to say Thank You, to you, Scott and Erica, for taking the time to come out and pamper the staff.  We ended this very busy Sterile Processing week in a calming and relaxing way, and I am grateful!
  
                  Everyone enjoyed the massages and wished they had more time.  So this is definitely something we will do again down the road.
                  
                  It was a pleasure working with Scott and Erica they both were very professional, friendly, organized and easy to talk to and get along with. 
                  
                  I appreciate your time. 
                  </p>
                <p><b>— Maria Lopez</b></p>
              </div>          
          </Slide>
          <Slide index={1}>
            <div>
              <span uk-icon="icon: quote-right; ratio: 1.5"></span>
                <p>Jill and the team at Elevate Massage have been coming to the architecture firm were 
                  I work for chair massages and it has been such a wonderful benefit. These bi-monthly,
                  30 min sessions have helped elevate shoulder and neck pain built up from hours sitting 
                  in front of a computer. I always look forward to Thursday’s now!! Thanks for the great massages!</p>
                <p><b>— Sarah Caesar</b></p>
              </div>
          </Slide>          
          <Slide index={2}>
            <div>
              <span uk-icon="icon: quote-right; ratio: 1.5"></span>
                <p>We had Elevate come out one afternoon for employee appreciation chair massages! 
                  Caitlin and Dan were on time and made sure everybody on the team was well taken care of. 
                  Great job!</p>
                <p><b>— Sarah Barrett</b></p>
              </div>
          </Slide>
          <Slide index={3}>
            <div>
              <span uk-icon="icon: quote-right; ratio: 1.5"></span>
                <p>We had Jill come do chair massages for our agency's client appreciation party 
                  and she was wonderful. Perfectly punctual and flexible with our time slots and 
                  blank slots. And the massage felt amazing. For a quick chair massage she made it count. 
                  I didn't think it was possible to get massage drunk in 15 minutes, but she made it happen. 
                  And made everyone feel perfectly comfortable!</p>
                <p><b>— McClain Stone</b></p>
              </div>
          </Slide>
          <Slide index={4}>
            <div>
              <span uk-icon="icon: quote-right; ratio: 1.5"></span>
                <p>We had the opportunity to work with Jill and her team at Elevate massage for a corporate 
                  tradeshow event. They were punctual, professional and great to work with! We had consistent 
                  traffic at our booth due to their amazing service and massages! I would defintely recommend 
                  them for corporate massage events in Denver :)</p>
                <p><b>— Kay R.</b></p>
              </div>
          </Slide>,
          
        </Slider>
        <ButtonBack className="uk-button uk-button-default carouselButtons " id='test'><span uk-icon="icon: chevron-left; ratio: 2"></span></ButtonBack>
        <ButtonNext className="uk-button uk-button-default carouselButtons2 "><span uk-icon="icon: chevron-right; ratio: 2"></span></ButtonNext>
      </CarouselProvider>
                                          
            </div>
            <div id='reviewsbody' class=" uk-text-center " uk-grid='true'>
              <div className='uk-width-1-3@s uk-width-1-1'>
               <img className='reviewpics' src='../Images/elevate-employee1.jpg' alt='Elevate employees doing chair massage in Denver, CO'></img>
              </div>
              <div className='uk-width-1-3@s uk-width-1-1'>
               <img className='reviewpics' src='../Images/IMG_1026.jpg' alt='Elevate employees doing chair massage in Denver, CO'></img>
              </div>
              <div className='uk-width-1-3@s uk-width-1-1'>
               <img className='reviewpics' src='../Images/elevate-employee2.jpg' alt='Elevate employees doing chair massage in Denver, CO'></img>
              </div>
              
            </div>

            
      </div>
      </div>
    );
  }
}


export default Reviews;