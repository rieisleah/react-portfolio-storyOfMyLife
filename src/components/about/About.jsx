import React from 'react'
import './about.css'
import {BiWorld} from 'react-icons/bi'
import ME from '../../assets/Withmom.jpeg'
import {GiMusicalNotes} from 'react-icons/gi'
import {FaLanguage} from 'react-icons/fa'


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>My Fun Facts</h2>

      <div className="container about__container">
        <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt='About Image' />
            </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <BiWorld className='about__icon'/>
              <h5>I am half Japanese and half Filippina</h5>
              <small>I was born in the Philippines and grew up in Japan</small>
            </article>

            <article className='about__card'>
              <GiMusicalNotes className='about__icon' />
              <h5>I wanted to be a professional dancer</h5>
              <small>Professionally trained dancing in LA for 2 years</small>
            </article>

            <article className='about__card'>
              <FaLanguage className='about__icon' />
              <h5>My first language is Japanese</h5>
              <small>But I barely watch anime</small>
            </article>
          </div>

          <p>
            I have been working as a food server for about 6 years now. 
            I grew my interest in coding when I found it fun to learn what POS system that the restaurants use can do.
            I started to wonder how it works under the hood.
            With COVID pandamic, seeing people in the tech industries thrive, I decided I wanted to learn coding.
            That's when my coding journey began...
          </p>

          <a href='#contact' className='btn btn-primary'>
            Let's Connect!
          </a>
        </div>
      </div>
    </section>
  )
}

export default About