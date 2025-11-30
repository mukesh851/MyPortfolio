import React from 'react'
import './Home.css'
import man from '../../assets/man.png'
// import TypingEffect from 'react-typing-effect'
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    <div id='home'>
      <div className='lefthome'>
        <div className='homedetails'>
          <div className='line1'>I'M</div>
          <div className='line2'>MUKESH YADAV</div>
          <div className='line3'>
            <TypeAnimation
              sequence={[
                "MERN FULL STACK DEVELOPER",
                2000,
                "FREELANCER",
                3000,
              ]}
              speed={50}
              repeat={Infinity}
              cursor={true}
            />
          </div>
            <button>Hire Me</button>
        </div>
      </div>
      <div className='righthome'>
        <img src={man} />
      </div>
    </div>
  )
}

export default Home