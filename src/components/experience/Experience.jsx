import React from 'react'
import './experience.css'
import {BsCheckCircleFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h2>What I studied</h2>
      
      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsCheckCircleFill className='experience__details-icon'/>
              <h4>HTML</h4>
            </article>
            <article className='experience__details'>
              <BsCheckCircleFill className='experience__details-icon'/>
              <h4>CSS</h4>
            </article>
            <article className='experience__details'>
              <BsCheckCircleFill className='experience__details-icon'/>
              <h4>JavaScript</h4>
            </article>
            <article className='experience__details'>
              <BsCheckCircleFill className='experience__details-icon'/>
              <h4>Boostrap</h4>
              </article>
            <article className='experience__details'>
              <BsCheckCircleFill className='experience__details-icon'/>
              <h4>React</h4>
            </article>
            <article className='experience__details'>
              <BsCheckCircleFill className='experience__details-icon'/>
              <h4>React-Native</h4>
            </article>
          </div>
        </div>
        <div className='experience__backend'>
          <h3>Backend Development</h3>
          <div className="experience__content">
          <article className='experience__details'>
              <BsCheckCircleFill className='experience__details-icon'/>
              <h4>Node.js</h4>
            </article>
            <article className='experience__details'>
              <BsCheckCircleFill className='experience__details-icon'/>
              <h4>MongoDB</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience