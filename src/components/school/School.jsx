import React from 'react'
import './school.css'
import LOGO1 from '../../assets/nucampLogo.png'
import LOGO2 from '../../assets/frontendMasterLogo.png'
import LOGO3 from '../../assets/LeetCodeLogo.png'
import LOGO4 from '../../assets/edabitLogo.png'
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';



const data = [
  {
    logo: LOGO1,
    name: 'Nucamp',
    course: ' I took frontend course here'
  },
  {
    logo: LOGO2,
    name: 'Frontend  Master',
    course: ' I gained deeper understanding of JavaScript'
  },
  {
    logo: LOGO3,
    name: 'LeetCode',
    course: ' I prepaired myself for coding interview'
  },
  {
    logo: LOGO4,
    name: 'Edabit',
    course: ' Some more interview quiz...'
  },
]

const School = () => {
  return (
    <section id='school'>
      <h5>Where I studied</h5>

      <Swiper className="container school__container"
      //install Swiper modules
      modules={[Navigation]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      >

        {
          data.map(({logo,name,course}, index) => {
            return (
              <SwiperSlide key={index} className='school'>
                <div className='school__logo'>
                  <img src={logo} />
                  </div>
                  <h5 className='school__name'>{name}</h5>
                  <small className='course'>{course}</small>
                  </SwiperSlide>
            )
          })
        }
        </Swiper>
    </section>

  )
      }   
      

export default School