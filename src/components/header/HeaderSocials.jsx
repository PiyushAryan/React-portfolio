import React from 'react'
import {ImLinkedin} from 'react-icons/im'
import {ImTwitter} from 'react-icons/im'
import {FaGithub} from 'react-icons/fa'



const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/piyush-aryan/" target="_blank"><ImLinkedin/></a>
        <a href="https://github.com/PiyushAryan" target="_blank"><FaGithub/></a>
        <a href="https://twitter.com/PiyushAryanPA" target="_blank"><ImTwitter/></a>

    </div>
  )
}

export default HeaderSocials