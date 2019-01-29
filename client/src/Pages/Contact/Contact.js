import React, { Component } from 'react';
import './Contact.css'
import axios from "axios";


class Contact extends Component {

  state = {
    name: '',
    email: '',
    inquiry: '',
    message: ''
   }
 
   sendEmail = event => {
    //  event.preventDefault();
     if(this.state.name === ''){
       alert("ALL FIELDS ARE REQUIRED!")
     }else if(this.state.email === ''){
      alert("ALL FIELDS ARE REQUIRED!")
     }else if(this.state.inquiry === ''){
      alert("ALL FIELDS ARE REQUIRED!")
     }else if(this.state.message === ''){
      alert("ALL FIELDS ARE REQUIRED!")
     }else {
      axios.post(`/sendEmail`, {
        email: this.state.email,
         name: this.state.name,
         inquiry: this.state.inquiry,
         message: this.state.message
       })
         .then((response) => {
          
         })
         .catch((err) => {
           console.log(err)
         })
     }
    
   
   };
 
   handleInputChange = event => {
     const { name, value } = event.target;
     this.setState({
       [name]: value
     });
   };
 
   emptyFields = () => {
     this.setState({
       name: '',
       email: '',
       inquiry: '',
       message: ''
     })
   }
 
   render() {
     return (
      <div className="uk-container">
       <div className="uk-section">
         <h1 className="uk-heading-line">{`ELEVATE CHAIR MASSAGE`}</h1>
 
         <h2 className='contactHeader uk-margin-remove'>PROVIDING ON-SITE CHAIR MASSAGE SERVICES FOR EVENTS, PARTIES, AND COMPANIES OF ALL SIZES.</h2>

         <h4 id='formheader'>MESSAGE US FOR MORE INFORMATION:</h4>
 
         <div className="formDiv ">
           <form>
             <fieldset className="uk-fieldset ">
               <div className="uk-margin">
                 <div id="emailInput" className="uk-inline uk-width-1-1">
                   <a className="uk-form-icon" href="#" uk-icon="icon: user"></a>
                   <input
                   value={this.state.name}
                   onChange={this.handleInputChange}
                   name='name'
                    className="uk-input ContactInputBody" 
                    type="text" 
                    placeholder="Name" />
                 </div>
               </div>
               <div className="uk-margin">
                 <div id="emailInput" className="uk-inline uk-width-1-1">
                   <a className="uk-form-icon" href="#" uk-icon="icon:  pencil"></a>
                   <input
                   value={this.state.email}
                   onChange={this.handleInputChange}
                   name='email'
                    className="uk-input ContactInputBody" 
                    type="text" 
                    placeholder="Email" />
                 </div>
               </div>
               <div id="inquireInput" className="uk-margin uk-width-1-1">
                 <select 
                  value={this.state.inquiry}
                  onChange={this.handleInputChange}
                  name='inquiry'
                 className="uk-select ContactInputBody">
                   <option>{`What type of service are you interested in?`}</option>
                   <option>Chair Massage</option>
                   <option>On-Site Table Massage</option>
                   <option>Yoga</option>
                   <option>I just have a question</option>
                   <span uk-icon="icon: chevron-down"></span>
                 </select>
               </div>
 
               <div id="textInput" className="uk-margin uk-width-1-1">
              
                 <textarea
                  value={this.state.message}
                  onChange={this.handleInputChange}
                  name='message' 
                  className="uk-textarea ContactInputBody" 
                  rows="5" 
                  placeholder="Write your message here...">
                  </textarea>
               </div>
             </fieldset>
           </form>
           <button onClick={()=>{this.sendEmail(); this.emptyFields(); alert('Your Email has been sent.')}} id="send-button" type="submit" name="action" className="center uk-button uk-button-primary uk-button-large uk-width-large">Send</button>
         </div>
       </div>
       </div>
     )
   }
}


export default Contact;