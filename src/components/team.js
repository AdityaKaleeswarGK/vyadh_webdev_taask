import React, { Component } from 'react'
import './team.css'
import elec from './images/elec.png'
import mech from './images/mech.png'
import sci from './images/science.png'
import soft from './images/soft.png'
import mage from './images/mage.png'
export default class team extends Component {
  render() {
    return (
      <div className="team">
      <div className="team_head">THE TEAM</div>
      <div className="team_description">
          <div className="domain">
          <div>
              <div className="domain_subheading">Electrical Domain</div>
              <div className="domain_description">
                  <p>Comprising a dynamic team of 12 experts, our Electrical Domain is the driving force behind the rover's capabilities. Specializing in diverse tasks such as Traversal, Robotic Arm, PCB Design, Power Distribution, and cutting-edge Sensor Integration, our electrical engineers bring innovation to every circuit. From enabling smooth traversal to crafting intricate robotic movements, and from designing advanced PCBs to ensuring efficient power distribution, our Electrical Domain is the lifeline that powers the rover's functionality with precision and reliability.</p>
              </div>
              </div>
              <img className='lo' src={elec}
              alt="Electrical Domain"/>
          </div>
          <div className="domain">
           <img className='lo' src={mech}
              alt="Mechanical Domain"/>
              <div>
              <div className="domain_subheading">Mechanical Domain</div>
              <div className="domain_description">
                  <p>Our team of 9 experts in the Mechanical Domain is the driving force behind the physical prowess of the rover. From crafting the sturdy Chassis to ensure smooth Suspension, designing the Differential, and mounting the Motor and Wheels with precision, we cover it all. The team's expertise extends to the versatile Robotic Arm and the specialized Science Kit. We don't just stop at hands-on work; we run simulations to ensure everything works seamlessly. In a nutshell, we're the ones responsible for putting the rover together, making sure every part fits perfectly for optimal performance.</p>
              </div>
              </div>
          </div>
          <div className="domain">
          <div>
              <div className="domain_subheading">Science Domain:</div>
              <div className="domain_description">
                  <p>Comprising 7 committed members, our Science Domain is on a mission to determine the existence of life beyond our planet. Specializing in performing tests dedicated to detecting signs of life, our scientists operate at the frontier
                  of exploration. Through meticulous analyses and cutting-edge experiments, 
                  this team is dedicated to answering the questions: Is there life out there? 
                  Did life ever exist before? With expertise and precision, our Science Domain pioneers the quest for extraterrestrial existence, setting the standard in competitions and pushing the boundaries of scientific exploration</p>
              </div>
              </div>
              <img className='lo' src={sci}
              alt="science Domain"/>
          </div>
          <div className="domain">
           <img className='lo' src={soft}
              alt="software"/>
              <div>
              <div className="domain_subheading">Software & Autonomous Domain</div>
              <div className="domain_description">
                  <p>With a team of 11 skilled members, our Software Domain is a powerhouse of innovation. Within this domain, we specialize in two key sub-domains—ground Control Station (GCS) and Autonomous Systems. GCS is the communication hub, establishing a  seamless link  with the  rover and  taking charge of control. The Autonomous team pioneers the realm of self-sufficiency, ensuring the rover 
                  executes tasks autonomously, making intelligent decisions without human intervention. Our software experts drive the technological backbone,
                  orchestrating a symphony of precision and autonomy.</p>
              </div>
              </div>
          </div>
          <div className="domain">
          <div>
              <div className="domain_subheading">Management Domain</div>
              <div className="domain_description">
                  <p>Our Management Team, consisting of 6 dedicated members, is the backbone of seamless operations. With a focus on team coordination, they expertly handle the intricate art of team management. From curating compelling content to showcasing our endeavors on social media platforms, their role extends to securing vital sponsorship's. These adept individuals not only
                  keep the team organized but also ensure our mission gets the visibility
                   it deserves, creating a bridge between our endeavors and the world.
                   The Management Team: where strategy meets execution for a 
                  successful journey.</p>
              </div>
              </div>
              <img className='lo' src={mage}
              alt="management"/>
          </div>
      </div>
  </div>
    )
  }
}
