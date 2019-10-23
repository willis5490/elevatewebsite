import React, { Component } from 'react';
import './WorkWithUs.css'
import ContactForm from '../../Components/ContactForm/ContactForm'

class WorkWithUs extends Component {

  // <div id='homebottom' className="uk-text-center" uk-grid='true'>
  //         <div className="uk-width-1-2">
  //             <div className="uk-card uk-card-default uk-card-body">
  //               <img className='home-card-pics' src="..\Images\elevate-employee3.jpg" alt='Chair massage being given in Denver, CO'></img>
  //               <h3 className='homecardHeader'>ON-SITE OFFICE MASSAGE ADDRESSES YOUR EMPLOYEES CONCERNS</h3>
  //               <ul className='homelists'>
  //                 <li>Carpal Tunnel Syndrome</li>
  //                 <li>Forward Head Posture</li>
  //                 <li>Computer Over-use</li>
  //                 <li>Lower Back Issues</li>
  //               </ul>
  //             </div>
  //         </div>
  //         <div className="uk-width-1-2">
  //             <div className="uk-card uk-card-default uk-card-body">
  //               <img className='home-card-pics' src="..\Images\jill-homepage.jpg"  alt='Chair massage being given in Denver, CO'></img>
  //               <h3 className='homecardHeader'>HOW YOUR EMPLOYEES WILL BENEFIT FROM CHAIR MASSAGE</h3>
  //               <ul className='homelists'>
  //                 <li>Stress Alleviation</li>
  //                 <li>Employee Retention</li>
  //                 <li>Increase in Productivity</li>
  //                 <li>Improvement in Mood</li>
  //               </ul>
  //             </div>
  //         </div>
  //         </div>


  

  // render nav
  render() {
    return (
      <div>
        <div id='WorkWithUsFirstSection'>
          <div className='uk-container '>
            <div className=''>
                <h1 className='uk-margin-remove-bottom uk-margin-large-top uk-text-left' >WORK WITH US</h1>
                <h3 className='uk-margin-remove-top uk-margin-medium-bottom uk-text-left'>We bring wellness to your workplace.</h3>
            </div>
            <div>
              <h3 className='uk-text-left workWithUsUpperText'>
              With a focus on mind and body, we partner with you to create customized wellness
              programs that cultivate a culture of connectivity, productivity and wellbeing. Enhance
              morale and alleviate muscle tension with workplace mobile chair massage. The team at
              Elevate Massage Co provides professional, individualized on-site massage to enhance
              overall wellbeing. On-site massage is a cost effective way to ensure participation,
              appreciation, and stress reduction.
              </h3>
            </div>
            
          </div>
        </div>


        <div>
          <div className='uk-container uk-margin-xlarge-top uk-margin-large-bottom'>
            <div>
              <img src='..\Images\Group shot 1 .jpg'></img>
            </div>
          </div>
        </div>

        <div className='uk-margin-large-bottom'>
          <div className='uk-container'>
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
              <h3 className='uk-text-left uk-visible@m'>YOGA &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</h3>
              <h3 className='uk-text-left uk-hidden@m'>YOGA </h3>
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
        </div>

        <div>
          <div className='uk-container'>      
            <div uk-grid='true'>
              <div className='uk-width-1-2@m uk-width-1-1 '>
              <h2 className='bulletsMainFont'>Elevate Massage Co specializes in Corporate On Site Massage and Wellness</h2>
                <ul className='bulletsFont'>
                  <li>Corporate Offices, Employee Appreciation</li>
                  <li>Convention Center, Trade Show, and Sport Events</li>
                  <li>Health Care, Hospitals, and Office Wellness Events</li>
                  <li>Non Profits and Schools</li>
                  <li>On Site All Level Yoga Classes</li>
                  <li>Amenities for Luxury Apartments</li>
                </ul>
              </div>
              <div className='uk-width-1-2@m uk-width-1-1 '>
                <img className='BulletsImage2' src="..\Images\elevate-employee3.jpg" alt=''></img>
            </div>

            </div>
          </div>
        </div>

        <div>
          <div className='uk-container uk-margin-large-top'>            
            <div uk-grid='true'>
            <div className=' uk-width-2-3@m uk-width-1-1 '>
            <h2 className='bulletsMainFont' >Our Team brings the portable massage chair, and supplies ready to offer your
              staff appreciation and stress management</h2>
              <div className='specialBulletSection'>
                <ul className='bulletsFont'>
                  <li>Convenient online scheduling</li>
                  <li>Vetted, Licensed, Insured, and Trained Massage Therapists</li>
                  <li>Certificate Of Insurance for large corporate offices</li>
                  <li>We manage all aspects of event</li>           
                </ul>
              </div>
            </div>
            <div className='uk-width-1-3@m uk-width-1-1 uk-flex-first@m'>
              <img className='BulletsImage' src='../Images/IMG_1026.jpg' alt=''></img>
            </div>

            </div>
          </div>
        </div>

        <div className="uk-container uk-margin-large-top ">
        <hr style={{width:'100%', backgroundColor:'black', height:'3px'}}></hr>
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
          <hr className='hrBottomWorkWithPage' style={{width:'100%', backgroundColor:'black', height:'3px'}}></hr>
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


export default WorkWithUs;