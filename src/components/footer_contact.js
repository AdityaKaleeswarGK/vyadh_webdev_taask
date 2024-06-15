import React, { Component } from 'react'
import './footer_contact.css'
import vyadh from './images/vyadh_logo.png'
import seds from './images/seds.png'
import vit from './images/VIT.png'
export default class footer_contact extends Component {
  render() {
    return (
      <div className='container_reg'>
      <img src={vyadh} alt='vyadh logo' className='vyadh' />
      <img src={seds} alt='Seds logo' className='seds'/>
      <img src={vit} alt='VIT logo'className='vit'/>
      </div>
    )
  }
}
