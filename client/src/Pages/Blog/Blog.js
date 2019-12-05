import React, { Component } from 'react';
import Modal from 'react-modal';


class Blog extends Component {
    constructor(props) {
        super(props);

        this.state = {
          modalIsOpen: null, 
          key:'' 
        };
    
      }

   // modal Functions
  openModal = () => {
    this.setState({ modalIsOpen: true });
  }

  closeModal = () => {
    this.setState({ modalIsOpen: null });
  }

  // render nav
  render() {
    return (
      <div>

          <div id='blogHeaderContainer'>
              <div className='uk-container'>
                <div uk-grid='true'>
                    <div className='uk-width-1-1 uk-text-center'>
                        <h1 className='uk-margin-large-top uk-margin-large-bottom'>Elevate Massage Co News</h1>
                    </div>
                </div>
              </div>
          </div>

           <div id='blogsContainer'>
              <div className='uk-container'>
                <div uk-grid='true'>
                    <div className='uk-width-1-2@m uk-width-1-1 uk-text-center'>
                    <div class="blogCards uk-card  uk-card-default uk-card-hover uk-grid-collapse uk-child-width-1-2@s uk-child-width-1-1  uk-margin" uk-grid='true'>
                        <div class="uk-card-media-left uk-cover-container">
                            <img className='blogCardPictures' src="..\Images\elevate alli.JPG" alt="Elevate Employee giving chair massage in Denver, CO." uk-cover='true'/>                          
                        </div>
                        <div>
                            <div class="uk-card-body">
                            <img className='blogCardPicturesMobile uk-hidden@s' src="..\Images\elevate alli.JPG" alt="Elevate Employee giving chair massage in Denver, CO." /> 
                                <h3 class="uk-card-title">The Best Self Care Practices: 3 Ways to Optimize Your Self Care</h3>
                                <button  onClick={() => this.openModal()} className='uk-button'>READ POST</button>
                            </div>
                        </div>
                    </div>    
                    </div>
                </div>
              </div>
          </div>

          <Modal
          isOpen={this.state.modalIsOpen }
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
          className=""
        >
            <div className='beep'>
                <div className='uk-container'>
                <div className='uk-text-right'>
                <button className='ModalXButton' onClick={this.closeModal} ><a onClick={this.closeModal}><h4 style={{color:'#59c5aa'}} className='uk-margin-auto-vertical '>X</h4></a></button>  
                </div>
                </div>
            </div>

            <div className='articleContainer'>
                <div className='uk-container'>
                    <div>
                        <h1 className='uk-margin-remove-bottom'>The Self-Care Trifecta</h1>
                        <h3 className='uk-margin-remove-bottom uk-margin-remove-top'>The Best Self Care Practices</h3>
                        <h3 className='uk-margin-remove-top'>3 Ways to Optimize Your Self Care</h3>
                    </div>
                    <hr className='uk-align-center' style={{width:'70%'}}></hr>
                    <div className='specialModalForBlogs'>
                        <p>We live in a world where self care is so necessary to prevent burn out, 
                            combat stress, and keep us well. When long hours, high stress and exhaustion 
                            is glorified as success it’s time to make taking care of yourself a priority.
                            Self care can look like many things to different individuals. Yoga, working out, spending time in nature, 
                            massage, art, etc. The list is endless. Our hope is that everyone participates in at least one thing on a 
                            regular basis to replenish themselves. But what do you do when that’s not enough? You’re working out but 
                            you still have aches and pains? You’re receiving massage but you’re still stressed? 
                            At Elevate Chair Massage, we believe in a self care trifecta. Massage, Strengthening and Stretching. 
                            All three are crucial to achieving greater wellness. One without the other won’t create the same benefits 
                            as a combination of all three.
                        </p>

                        <h1>Massage</h1>

                        <p>Releasing tension with massage is one piece of the puzzle. Many of us spend our days in repetitive positions 
                            on the computer, driving, sitting for long periods,etc. We need to receive massage to assist in the release 
                            of these chronically tight tissues. Massage teaches the body how to maintain outside of deep-seated tension 
                            patterns. Bringing corporate chair massage on site can lessen your team’s stress in as little as 15 minutes!</p>

                        <h1>Strengthening</h1>

                        <p>Oftentimes our day to day activities create imbalance in the body. Sitting at the computer, for example, makes 
                            a person really strong on the front side of their body, in their chest and front of the shoulders. Without 
                            building strength in the back of the body to compensate for the added strength in the chest, that person may 
                            experience tightness and tension in their back after a long day.  Chair massage helps relieve sitting in the 
                            chair and using repetitive movement</p>

                        <p>Another consideration around strengthening is stabilizing the smaller muscles that support the larger muscle groups. 
                            Surprisingly the smaller muscles should activate before your bigger prime movers. If you pick up a heavy box, your 
                            pelvic floor and abdominals activate before your legs, back, hips, and arms. Many times we see recurrent issues due 
                            to a lack of stabilization in the body. Regular hip and low back tension or pain can be supported by strengthening 
                            the pelvic floor and core muscles. Thereby creating an internal stabilization that supports the structure of the 
                            lower back and hips. </p>

                        <h1>Stretching</h1>

                        <p>Stretching improves range of motion and muscle soreness. It also prevents injury and builds flexibility. Stretching 
                            can look differently for everyone. Some people are more comfortable holding a long static-stretch while others need 
                            small movements in and out of the stretch to get the best results.  However you choose to stretch, it will offer relief.</p>

                        <p>A regime that incorporates massage, strengthening and stretching gives the body the most benefits. At Elevate we are big 
                            advocates for supporting the whole self. All of our Massage Therapists are well versed in chair massage that helps release 
                            tension from the body. Elevate also has begun to offer corporate yoga classes on top of our corporate chair massage services! 
                            Incorporating a wellness program into your office can help employees begin their self care trifecta. Support total body self 
                            care today and ask about how we can help you! Reach out today to create on site wellness for your hard working employees. 
                            Our passion is to serve the community! </p>
                    </div>
                </div>
            </div>

        </Modal>

      </div>
    );
  }
}


export default Blog;