import React from 'react'
import './SocialLinks.css'
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {SiLeetcode} from 'react-icons/si'
import {SiGeeksforgeeks} from 'react-icons/si'
const SocialLinks = () => {
  return (
    <div className='social-icons'>
        <a href='https://github.com/mohit1112111' target='_blank'  rel="noreferrer"><BsGithub size={23}/></a>
        <a href='https://www.linkedin.com/in/mohit-kumar-a00571228/' target='_blank'  rel="noreferrer"><BsLinkedin size={23}/></a>
        <a href='https://www.linkedin.com/in/mohit-kumar-a00571228/' target='_blank'  rel="noreferrer"><SiLeetcode size={23}/></a>
        <a href='https://www.linkedin.com/in/mohit-kumar-a00571228/' target='_blank'  rel="noreferrer"><SiGeeksforgeeks size={23}/></a>
        <a href='https://www.instagram.com/mohit.parjapati.777/' target='_blank'  rel="noreferrer"><BsInstagram size={23}/></a>
    </div>
  )
}

export default SocialLinks
