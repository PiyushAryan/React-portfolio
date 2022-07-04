import React from 'react'
import './about.css'
import ME from '../../assets/img6.jpg'
import {RiAwardFill} from 'react-icons/ri'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Let's Get To Now</h5>
      <h2>About Me</h2>


      <div className="container about__container">
        <div className="about__me">
        <div className="about__me-image">
            <img src={ME} alt="About Image" />
        </div>
      </div>
      
      <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
            <RiAwardFill className='about__icon'/>
            <h5>Experience</h5>
            <small>1+ Year Working</small>
            {/* replicate as your need */}
          </article>

            <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>
            <h5>Projects & Research Papers</h5>
            <small>- Email Classifier using Machine Learning</small><br></br>
            <small>- Smart Agriculture System</small><br></br>
            <small>- Smart Agriculture System using IOT (Research Paper)</small>
            {/* replicate as your need */}
          </article>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptatibus mollitia iusto tenetur, accusantium velit quas animi, autem voluptate minus itaque. Explicabo iste quam esse aliquid rem voluptates similique veniam.</p>
        <a href="#contact" className='btn btn-primary'>Bolo Mitra</a>
        </div>
      </div>
    </section>
  )
}

export default About