import React from 'react'
import './header.css'
import CTA from './CTA'
import SELFIE from '../../assets/Selfie.JPG'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hi, I'm</h5>
        <h1>Leah Okuyama</h1>
        <h5 className="text-light">Junior Fullstack Developer</h5>
        <CTA />
        <HeaderSocial />

        <div className="selfie">
          <img src={SELFIE} alt="selfie" />
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header