
import './About.css'
import Card from '../Card/Card'
import mern from '../../assets/mern.png'
import dsa from '../../assets/dsa.png'
import fr from '../../assets/freelancing.jpg'


const About = () => {
  return (
    <div id='about'>
      <div className='leftabout'>
        <div className='circle-line'>
          <div className='circle'></div>
          <div className='line'></div>
          <div className='circle'></div>
          <div className='line'></div>
          <div className='circle'></div>
        </div>
        <div className='aboutdetails'>
          <div className='personalinfo'>
            <h1>Personal Info</h1>
            <ul>
              <li>
                <span>NAME</span> : Mukesh Yadav
              </li>
              <li>
                <span>AGE</span> : 24
              </li>
              <li>
                <span>GENDER</span> : Male
              </li>
              <li>
                <span>LANGUAGE KNOWN</span> : HINDI, ENGLISH
              </li>
            </ul>
          </div>

          <div className='education'>
            <h1>Education</h1>
            <ul>
              <li>
                <span>DEGREE</span> : B.TECH
              </li>
              <li>
                <span>COLLEGE NAME</span> : Rajkiya Engineering College Banda
              </li>
              <li>
                <span>BRANCH</span> : Information Technology
              </li>
            </ul>
          </div>

          <div className='skills'>
            <h1>Skills</h1>
            <ul>
              <li>
                MERN FULL STACK DEVELOPER
              </li>
              <li>
                FREELANCER
              </li>
              <li>
                DSA
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='rightabout'>
        <a className='card-link'>
          <Card title={"MERN FULL STACK DEVELOPER"} image={mern}/>
        </a>
        <a className='card-link'>
          <Card title={"FREELANCER"} image={fr}/>
        </a>
        <a className='card-link'>
          <Card title={"DSA"} image={dsa}/>
        </a>
        
      </div>
    </div>
  )
}

export default About 