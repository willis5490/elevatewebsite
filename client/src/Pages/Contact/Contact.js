import React, { Component } from 'react';
import './Contact.css'
import ContactForm from '../../Components/ContactForm/ContactForm'



class Contact extends Component {

  
 
   render() {
     return (
      <div className="uk-container">
       <div className="uk-section">
         <h1 className="uk-heading-line">{`ELEVATE CHAIR MASSAGE`}</h1>
 
         <h2 className='contactHeader uk-margin-remove'>PROVIDING ON-SITE CHAIR MASSAGE SERVICES FOR EVENTS, PARTIES, AND COMPANIES OF ALL SIZES.</h2>

         <h4 id='formheader'>MESSAGE US FOR MORE INFORMATION:</h4>
          <ContactForm></ContactForm>
         
       </div>
       </div>
     )
   }
}


export default Contact;