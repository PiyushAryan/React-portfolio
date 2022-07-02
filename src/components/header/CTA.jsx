import React from 'react'
import CV from '../../assets/Resume.pdf'

const CTA = () => {
  return (
    <div className='CTA'>
        <a href={CV} download className='btn'>Look into CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
            </div>
  )
}

export default CTA