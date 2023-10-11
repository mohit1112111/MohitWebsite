import React from 'react'
import './Project.css'
import img from '../Assest/weatherProjectImg.PNG'
import TextUtil from '../Assest/TextUtils.PNG'
const Project = () => {
    return (
        <section id='project-container'>
            <h3 className='project-container-h3'>Projects That I have Created</h3>
            <h1>Projects</h1>
            <div className='project-content'>
                <article className='project-item'>
                    <div className='project-image'>
                        <img src={img} alt='...' />

                    </div>
                    <h3>Weather Application</h3>
                    <div className='project-link'>
                        <a href='https://github.com' className='btn' target='_blank' rel="noreferrer" >Github</a>
                        <a href='https://github.com' className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                    </div>
                </article>
                <article className='project-item'>
                    <div className='project-image'>
                        <img src={img} alt='...' />

                    </div>
                        <h3>Weather Application</h3>
                    <div className='project-link'>
                        <a href='https://github.com' className='btn' target='_blank' rel="noreferrer" >Github</a>
                        <a href='https://github.com' className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                    </div>
                </article>
                <article className='project-item'>
                    <div className='project-image'> 
                        <img src={img} alt='...' />

                    </div>
                        <h3>Weather Application</h3>
                    <div className='project-link'>
                        <a href='https://github.com' className='btn' target='_blank' rel="noreferrer" >Github</a>
                        <a href='https://github.com' className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                    </div>
                </article>
                <article className='project-item'>
                    <div className='project-image'>
                        <img src={TextUtil} alt='...' />

                    </div>
                        <h3>Weather Application</h3>
                    <div className='project-link'>
                        <a href='https://github.com' className='btn' target='_blank' rel="noreferrer" >Github</a>
                        <a href='https://github.com' className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                    </div>
                </article>
                <article className='project-item'>
                    <div className='project-image'>
                        <img src={TextUtil} alt='...' />

                    </div>
                        <h3>Weather Application</h3>
                    <div className='project-link'>
                        <a href='https://github.com' className='btn' target='_blank' rel="noreferrer" >Github</a>
                        <a href='https://github.com' className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                    </div>
                </article>
                <article className='project-item'>
                    <div className='project-image'>
                        <img src={TextUtil} alt='...' />

                    </div>
                        <h3>Weather Application</h3>
                    <div className='project-link'>
                        <a href='https://github.com' className='btn' target='_blank' rel="noreferrer" >Github</a>
                        <a href='https://github.com' className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                    </div>
                </article>




            </div>
        </section>
    )
}

export default Project
