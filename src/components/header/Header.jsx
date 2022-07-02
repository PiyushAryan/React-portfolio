import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/IMG_20220625_175221.jpg'
import HeaderSocials from './HeaderSocials'
const header = () => {
  return (
  <header>
    <div className="container header__container">
      <h5>Hare Krishna I'm</h5>
      <h1>Piyush Aryan</h1>
      <h5 className="text-light">React Developer</h5>
      <CTA/>
      <HeaderSocial/>

      <div className="me">
        <img src={ME} alt="me"/>
      </div>
      <a href="#contact" className='scroll_down'>Scroll Down</a>
    </div>
  </header>
  )
}

export default header