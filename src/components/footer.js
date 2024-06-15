import React, { Component } from 'react'
import './footer.css'
import inst from './images/instagram.png'
import link from './images/linkdein.png'
import mail from './images/mail.png'
import phone from './images/mobile.png'
import vyadh from './images/vyadh_logo.png'
export default class footer extends Component {
  render() {
    return (
      <div className="reach-out">
      <h1 className="reach-out-title">Reach Out</h1>
      <div className="reach-out-content">
      <div className='nah'>
          <div className="follow-us">
              <h2>Follow Us</h2>
              <div className="social-icons">
              <a href="https://www.instagram.com/teamvyadh?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
              <img src={inst} alt="Instagram" className="social-icon" />
            </a>
            <a href="https://in.linkedin.com/in/teamvyadh?trk=public_post_main-feed-card-text" target="_blank" rel="noopener noreferrer">
              <img src={link} alt="LinkedIn" className="social-icon" />
            </a>
              </div>
          </div>
          <div className="divider"></div>
          <div className="contact-us">
              <h2>Contact Us</h2>
              <div className="contact-details">
                  <div className="contact-item">
                      <img src={mail} alt="Email" className="contact-icon" />
                      <p>teamvyadh33@gmail.com</p>
                  </div>
                  <div className="contact-item">
                      <img src={phone} alt="Phone" className="contact-icon" />
                      <p>+91 9827036208</p>
                  </div>
              </div>
          </div> 
        </div>
          <img src={vyadh} alt="Vyadh Logo" className="vyadh-logo" />
      </div>
      <footer className="footer-text">
      DESIGNED AND DEVELOPED BY TEAM VYADH
  </footer>
  </div>
    )
  }
}
   