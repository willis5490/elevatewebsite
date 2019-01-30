import React, { Component } from 'react';
import './BookApt.css'

class BookApt extends Component {

  // render nav
  render() {
    return (
      <div id='acuityScheduler' className="uk-container">
      <iframe src="https://app.acuityscheduling.com/schedule.php?owner=15434488" width="100%" height="800" frameBorder="0"></iframe>
      <script src="https://d3gxy7nm8y4yjr.cloudfront.net/js/embed.js" type="text/javascript"></script>
      </div>
    );
  }
}


export default BookApt;