import React, { Component } from 'react'
import "./aboutus.css"
import team from './images/team1.png'
export default class aboutus extends Component {
  render() {
    return (
      <div className='about'>
      <div> <p className='heading'>About Us</p>
      <p className='description'> Welcome to Team Vyadh, a dynamic group of 56 like-minded students hailing from SEDS-VIT Projects at Vellore Institute 
      of Technology (VIT), India. Specializing in the design and construction of Mars Rovers, our team is driven by a collective passion  for  innovation. With  a  focus  on  advancing  science  and  technology,  we  excel  in  robotic-arm engineering, autonomous traversal, and state-of-the-art communication and data acquisition systems for the exploration of the Red Planet. Our proven track record includes participation in prestigious competitions such as URC, IRDC, ERC, and IRC, where we consistently demonstrate our  expertise  and absorb valuable insights from  the forefront of the field. Join us on this exciting journey as we continue to push the boundaries of space exploration and leave an indelible mark on the world of robotics and technology.</p></div>
      <img src={team} alt='team photo' className='phototeam'/>
      </div>
    )
  }
}
