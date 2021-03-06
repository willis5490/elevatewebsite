import React, {Component} from 'react';
import Instagram from 'node-instagram';




class Insta extends Component {

    instagram = new Instagram({
      clientId: process.env.REACT_APP_CLIENT_ID,
      clientSecret: process.env.REACT_APP_CLIENT_SECRET,
      accessToken: process.env.REACT_APP_CLIENT_TOKEN,
      });


      componentDidMount(){
        this.instaLoad()
      }
    

      state={
        images:[],
        videos:[]
      }

      instaLoad = () => {
        this.instagram.get('users/self/media/recent', (err, data) => { 
          if (err) {
            // an error occured
            console.log(err);
          } else {    
            var video=[]
            var image=[]
            var bigData = data.data
                for (var i = 0; i<bigData.length;i++){
                  // console.log(bigData[0].videos.standard_resolution.url);
                  var types=bigData[i].type
                  if(types==='video'){
                         video.push(bigData[i].videos.standard_resolution.url)
                  }
                  else{
                         image.push(bigData[i].images.standard_resolution.url)
                  }                        
                }
    
                this.setState({
                  images:image,
                  videos:video
                })
          }
        })
    
      }




  render() {
    return (
        <div className='uk-margin-large-bottom' id='flourWrapper6'>
        <div id='instagramcontainer' className='uk-container'>         
          <div className='uk-grid-match' uk-grid='true'>
            <div className='uk-width-1-5@m uk-width-1-3@s uk-width-1-2 '>
              <img className='instagramPics' src={this.state.images[0]}></img>
            </div>
            <div className='uk-width-1-5@m uk-width-1-3@s uk-width-1-2 '>
              <img className='instagramPics' src={this.state.images[1]}></img>
            </div>
            <div className='uk-width-1-5@m uk-width-1-3@s uk-width-1-2 '>
              <img className='instagramPics' src={this.state.images[2]}></img>
            </div>
            <div className='uk-width-1-5@m uk-width-1-2@s uk-width-1-2'>
              <img className='instagramPics' src={this.state.images[3]}></img>
            </div>
            <div className='uk-width-1-5@m uk-width-1-2@s  uk-width-1-1 uk-visible@s'>
              <img className='instagramPics' src={this.state.images[4]}></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Insta;