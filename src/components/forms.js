import React, { Component } from 'react';
import './forms.css';

export default class Forms extends Component {
  render() {
    return (
      <div className='contact_form'>
        <h2>CONTACT US</h2>
        <div className="contact-form">
          <form>
            <div className="form-group inline">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName" />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" />
              </div>
            </div>
            <div className="form-group inline">
              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input type="tel" id="phoneNumber" name="phoneNumber" />
              </div>
              <div className="form-group">
                <label htmlFor="companyName">Company Name <span className="optional">(optional)</span></label>
                <input type="text" id="companyName" name="companyName" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message"></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

