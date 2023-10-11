import React from 'react'
import Resume from '../Assest/MohitKumarResume(1).pdf'
import './IntroSection.css'
const IntroSection = () => {
  return (
    <section className='Intro'>
      <div className='Intro-text'>
        <h4>Hello,I am </h4>
        <h1><span>Mohit Kumar</span></h1>
        <h3>Software Developer,ServiceNow Developer,Electrical Engineer</h3>
        <div className='Intro-btn'>
          <a href={Resume} target="_blank" className='btn1' rel="noreferrer">Download CV</a>
          <a href='#contact' className='btn1 btn2-primary'>Let's Talk</a>
        </div>
        <a  href="#contact" className='scroll_down'>Scroll Down</a> 
      </div>

    </section>
  )
}

export default IntroSection
