import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {ImWhatsapp} from 'react-icons/im'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_aj1aeq8', 'template_jxx8jfx', form.current, 'Llrx47o1vYIsJETbb')

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">

        {/* <div className="contact__options">
          <article className='contact__option'>
            <AiOutlineMail />
            <h4>Email</h4>
            <a href='mailto:mahalrie820@gmail.com' target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <ImWhatsapp />
            <h4>Whats APP</h4>
            <a href='http://api.whatsapp.com/send?phone=+17029451947' target='_blank'>Send a message</a>
          </article>
        </div> */}
        {/* End of contact options */}


        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Full Name' required />
          <input type='email' name='email' placeholder='Email Adress' required />
          <textarea name="message" rows="7" placeholder='Message' required></textarea>
          <button ttype='submit' className='btn btn-primary'>Send!</button>
        </form>
      </div>
    </section>
  )
}

export default Contact