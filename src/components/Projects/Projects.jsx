import React from 'react'
import './Projects.css'
import Card from '../Card/Card'
// import Va from '../../assets/va.png'
import snake from '../../assets/snake.png'
import ec from '../../assets/ecommerce.png'
import fr1 from '../../assets/fr1.png'
import cdr from '../../assets/cdr.png'

const Projects = () => {
  return (
    <div id='projects'>
      <h1 id='para'>Currently Working as a Freelancer</h1>
      <div className='slider'>
        
        {/* <Card title="VIRTUAL ASSISTANT" image={Va}/> */}
        <Card title="SNAKE GAME" image={snake}/>
        <Card title="E-COMMERCE WEBSITE" image={ec}/>

        <Card title="FREELANCING PROJECT" image={fr1}/> 
        <Card title="CODE REVIEW" image={cdr}/>
        {/* <Card title="VIRTUAL ASSISTANT" image={Va}/> */}
      </div>
    </div>
  )
}

export default Projects