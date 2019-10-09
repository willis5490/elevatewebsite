import React, { Component } from 'react';
import './team.css'

class Team extends Component {

  // render nav
  render() {
    return (
      <div className="uk-container">
      <div id='teamBody' className="uk-text-center"  uk-grid='true'>
        <div className="uk-width-1-2">
          <div>
            <img className='teamPics' src='../Images/jill-teampage.jpg' alt='Elevate employees doing chair massage in Denver, CO'></img>
          </div>
        </div>
        <div className="uk-width-1-2">
          <h1 id='teamHeader'>JILL CHRISTENSEN</h1>
          <h2 id='teamsubHeader'>OWNER, MASSAGE THERAPIST</h2>
          <p>Elevate Chair Massage is a locally owned business based out of Denver, Colorado. As the owner of Elevate Chair Massage since 2016,
             Jill integrates her degree in social work and training in massage therapy into a passion to serve the community. 
             Providing chair massage to the community workers serving in schools, hospitals, and non-profits provides a much needed 
             reprieve from the work they endure. Implementing corporate wellness is now an integral part of any company. Purpose, integrity, 
             and professionalism are a part of what makes Elevate Chair Massage Denver's premiere on-site chair massage vendor. We strive to serve 
             the community and corporate partners by making company wellness a part of everyone's company culture.</p>
        </div>
        <div className="uk-width-1-2">
          <div>
            <img className='teamPics' src='../Images/teampage1.jpg' alt='Elevate employees doing chair massage in Denver, CO'></img>
          </div>
        </div>
        <div className="uk-width-1-2">
          <div>
            <img className='teamPics' src='../Images/teampage3.jpg' alt='Elevate employees doing chair massage in Denver, CO'></img>
          </div>
        </div>
        <div className="uk-width-1-2">
          <div>
            <img className='teamPics' src='../Images/teampage2.jpg' alt='Elevate employees doing chair massage in Denver, CO'></img>
          </div>
        </div>
        <div className="uk-width-1-2">
          <div>
            <img className='teamPics' src='../Images/employees1.jpg' alt='Elevate employees doing chair massage in Denver, CO'></img>
          </div>
        </div>
        <div className="uk-width-1-3">
          <div>
            <img className='teamPicsNew' src='../Images/IMG_6566.jpg' alt='Elevate employees doing chair massage in Denver, CO'></img>
          </div>
        </div>
        <div className="uk-width-1-3">
          <div>
            <img className='teamPicsNew' src='../Images/IMG_6568.jpg' alt='Elevate employees doing chair massage in Denver, CO'></img>
          </div>
        </div>
        <div className="uk-width-1-3">
          <div>
            <img className='teamPicsNew' src='../Images/IMG_6570.jpg' alt='Elevate employees doing chair massage in Denver, CO'></img>
          </div>
        </div>
      </div>
      </div>
    );
  }
}


export default Team;