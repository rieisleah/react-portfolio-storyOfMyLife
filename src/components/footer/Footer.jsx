import React from 'react'
import './footer.css'
import {BsInstagram} from 'react-icons/bs'
import {FaTiktok} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Top</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#school'>School</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://instagram.com'><BsInstagram /></a>
        <a href='https://tiktok.com'><FaTiktok /></a>
      </div>

    </footer>
  )
}

export default Footer