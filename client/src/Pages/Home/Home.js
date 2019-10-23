import React, { Component } from 'react';
import './Home.css'
import ContactForm from '../../Components/ContactForm/ContactForm'


class Home extends Component {

  // render nav
  render() {
    return (
        <div>
       

        <div>
        <div id='mainlogo' class="uk-height-large uk-background-cover  uk-flex uk-flex-top homeHeadPiece" style={{backgroundImage: "url(./Images/test1.jpg)", backgroundSize: "cover",   }}>
            <div id="quicky" class="uk-width-1-1@xs uk-text-center uk-margin-auto uk-margin-auto-vertical ">
              <h1 id='homeStatement'>READY TO MAKE EMPLOYEE WELLNESS A PRIORITY?</h1>
              <h3 id='homeStatement'><b>Elevate Massage Co Specializes in On Site Chair Massage,
                Yoga, and Mindful Meditation</b> <br></br> 303-928-9739 <span className='uk-visible@m'>||</span> info@elevatemassageco.com
 </h3>
              <a href='/WorkWithUs'><button id="home-button" class="uk-button uk-button-primary" >Learn More</button></a>
            </div>
          </div>
        </div>

      
        
        <div className="uk-container">
        <div id="homeBody" className="uk-panel">
          <h1 id='homeHeader'>CORPORATE ON-SITE AND MOBILE CHAIR MASSAGE<br></br> <b>BY ELEVATE CHAIR MASSAGE</b></h1>
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

        <div uk-grid='true' className='uk-margin-large-top  uk-margin-large-bottom uk-grid-match'>
          <div className='uk-width-1-3@s uk-width-1-1'>           
            <img src='../Images\IMG_3295 (1).jpg' alt=''></img> 
          </div>
          <div className='uk-width-1-3@s uk-width-1-1'>
            <img src='../Images/trade show picture .jpg' alt=''></img>
          </div>
          <div className='uk-width-1-3@s uk-width-1-1'>
            <img src='../Images\67060364_866176483768879_3729543424236322816_n.jpg' alt=''></img> 
          </div>
        </div>

          <br></br>
          <hr style={{width:'100%', backgroundColor:'black', height:'3px'}}></hr>

              <div className='homeServicesSection' uk-grid='true'>
                <div className='uk-width-1-1'>
                  <h1 className='servicesHeader'>SERVICES</h1>
                </div>
                <div className='uk-width-1-3@s uk-width-1-1'>
                  <h3 className='uk-text-left'>CORPORATE CHAIR MASSAGE</h3>
                  <p className='uk-text-left'>Give the gift of pause by providing on-site
                  corporate chair massage therapy that boosts your employees’ happiness and
                  productivity. Our carefully curated licensed massage therapists bring our mobile chair
                  massage stations right to your office to help alleviate employees’ stress. While
                  enhancing employee appreciation. Onsite chair massage is also popular or driving
                  traffic at sporting events, hotels, conferences and parties.
                  </p>
                    <a href='/contact'><button id="home-button" class="uk-button uk-button-primary" >Learn More</button></a>
                </div>
                <div className='uk-width-1-3@s uk-width-1-1'>
                  <h3 className='uk-text-left'>YOGA &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</h3>
                  <p className='uk-text-left'>Offer your employees the opportunity to destress, refocus and recharge within
                  your office. Our team of certified yoga instructors facilitate workplace yoga classes that
                  are suitable for all levels and are proven to have a wide range of holistic benefits
                  including increased energy and productivity, enhanced employee attitudes, and the
                  reversal of effects caused by repetitive motion.
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  </p>
                  <a href='/contact'><button id="home-button" class="uk-button uk-button-primary" >Learn More</button></a>
                </div>
                <div className='uk-width-1-3@s uk-width-1-1'>
                  <h3 className='uk-text-left'>MINDFULNESS + MEDITATION </h3>
                  <p className='uk-text-left'> Some people call workplace meditation and
                  mindfulness program the secret to optimizing workplace productivity as its known to
                  increase mental, physical, emotional and spiritual energy. Our trained instructors guide
                  your employees through breathing exercises, grounding stretches, and mindfulness
                  techniques that can be done at the desk so that they can incorporate a daily practice
                  that benefits the entire organization.
                 
                  </p>
                  <a href='/contact'><button id="home-button" class="uk-button uk-button-primary" >Learn More</button></a>
                </div>
              </div>
            <hr style={{width:'100%', backgroundColor:'black', height:'3px'}}></hr>
      </div>

      <div>
        <div className="uk-container uk-margin-medium-top">
        <div className="uk-section">
          <h1 className="uk-heading-line">{`CONTACT US TODAY!`}</h1>
            <ContactForm></ContactForm>
          
        </div>
        </div>      
      </div>


      </div>
    );
  }
}


export default Home;