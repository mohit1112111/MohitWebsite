import React from 'react'
import './Skills.css'
import { PiSealCheckFill } from 'react-icons/pi'
const Skills = () => {
    return (
        <section id='skills-conatainer'>
            <h5>What Skills I Have</h5>
            <h1 className='main-text'>Technical Skills</h1>
            <div className='skills-main'>
                <div className='skills-frontend'>
                    <h3>Frontend Development</h3>
                    <div className='skills-content'>
                        <article className='skills-details'>
                            <PiSealCheckFill className='skills-datails-icon' />
                            <div>
                                <h4>HTML</h4>
                                <small>Beginner</small>
                            </div>
                        </article>
                        <article className='skills-details'>
                            <PiSealCheckFill className='skills-datails-icon' />
                            <div>
                                <h4>CSS</h4>
                                <small>Beginner</small>
                            </div>
                        </article>
                        <article className='skills-details'>
                            <PiSealCheckFill className='skills-datails-icon' />
                            <div>
                                <h4>Bootstrap</h4>
                                <small>Beginner</small>
                            </div>

                        </article>
                        <article className='skills-details'>
                            <PiSealCheckFill className='skills-datails-icon' />
                            <div>
                                <h4>Java Script</h4>
                                <small>Beginner</small>
                            </div>
                        </article>
                        <article className='skills-details'>
                            <PiSealCheckFill className='skills-datails-icon' />
                            <div>
                                <h4>React Js</h4>
                                <small>Beginner</small>
                            </div>
                        </article>
                        <article className='skills-details'>
                            <PiSealCheckFill className='skills-datails-icon' />
                            <div>
                                <h4>Angular</h4>
                                <small>Beginner</small>
                            </div>
                        </article>
                    </div>
                </div>



                <div className='skills-backend'>
                    <h3>Backendend Development</h3>
                    <div className='skills-content'>
                        <article className='skills-details'>
                            <PiSealCheckFill className='skills-datails-icon' />
                            <div>
                                <h4>Node Js</h4>
                                <small>Beginner</small>
                            </div>
                        </article>
                        <article className='skills-details'>
                            <PiSealCheckFill className='skills-datails-icon' />
                            <div>
                                <h4>MongoDB</h4>
                                <small>Beginner</small>
                            </div>
                        </article>
                        <article className='skills-details'>
                            <PiSealCheckFill className='skills-datails-icon' />
                            <div>
                                <h4>SQL</h4>
                                <small>Beginner</small>
                            </div>
                        </article>
                        <article className='skills-details'>
                            <PiSealCheckFill className='skills-datails-icon' />
                            <div>
                                <h4>MySQL</h4>
                                <small>Beginner</small>
                            </div>
                        </article>
                    </div>
                </div>


                <div className='skills-programming'>
                    <h3>Programming Languages</h3>
                    <div className='skills-content'>
                        <article className='skills-details'>
                            <PiSealCheckFill className='skills-datails-icon' />
                            <div>
                                <h4>C Language</h4>
                                <small>Beginner</small>
                            </div>
                        </article>
                        <article className='skills-details'>
                            <PiSealCheckFill className='skills-datails-icon' />
                            <div>
                                <h4>C++ Language</h4>
                                <small>Intermediate</small>
                            </div>
                        </article>
                        <article className='skills-details'>
                            <PiSealCheckFill className='skills-datails-icon' />
                            <div>
                                <h4>Data Structure and Algorithms</h4>
                                <small>Beginner</small>
                            </div>
                        </article>
                        <article className='skills-details'>
                            <PiSealCheckFill className='skills-datails-icon' />
                            <div>
                                <h4>Oops Programming</h4>
                                <small>Beginner</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className='skills-serviceNow'>
                    <h3>ServiceNow Development</h3>
                    <div className='skills-content'>
                        <article className='skills-details'>
                            <PiSealCheckFill className='skills-datails-icon' />
                            <div>
                                <h4>Node Js</h4>
                                <small>Beginner</small>
                            </div>
                        </article>
                        <article className='skills-details'>
                            <PiSealCheckFill className='skills-datails-icon' />
                            <div>
                                <h4>MongoDB</h4>
                                <small>Beginner</small>
                            </div>
                        </article>
                        <article className='skills-details'>
                            <PiSealCheckFill className='skills-datails-icon' />
                            <div>
                                <h4>SQL</h4>
                                <small>Beginner</small>
                            </div>
                        </article>
                        <article className='skills-details'>
                            <PiSealCheckFill className='skills-datails-icon' />
                            <div>
                                <h4>MySQL</h4>
                                <small>Beginner</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default Skills
