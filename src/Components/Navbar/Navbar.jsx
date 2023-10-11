import React from 'react'
import './Navbar.css'

import SocialLinks from '../SocialLinks/SocialLinks';
import { SiMonzo } from "react-icons/si";
const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='logo'>
           <a href='/'><SiMonzo size={23}/></a> 
        </div>
        <div className='menu-links'>
            <li className='menu-items'>Home</li>
            <li className='menu-items'>About Me</li>
            <li className='menu-items'>Experience</li>
            <li className='menu-items'>Skills</li>
            <li className='menu-items'>Projects</li>
            {/* <li className='menu-items'>Blogs</li> */}
        </div>
        <div className='social-lnks-btn'>
        <SocialLinks/>
        <button className='btn'>Contact Me</button>
        </div>
        
    </nav>
  )
}

export default Navbar
