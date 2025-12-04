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

        <a className='card-link' href='https://snake-game-kohl-eight-15.vercel.app/   '>
          <Card title="SNAKE GAME" image={snake}/>
        </a>
        <a className='card-link' href='https://e-commerce-phi-beryl-88.vercel.app/  '>
          <Card title="E-COMMERCE WEBSITE" image={ec}/>
        </a>
        
        <a className='card-link' href='https://grand-sameer-project-e4z5.vercel.app/'>
          <Card title="FREELANCING PROJECT" image={fr1}/> 
        </a>
        <a className='card-link'>
          <Card title="CODE REVIEW" image={cdr}/>
        </a>
        
        {/* <Card title="VIRTUAL ASSISTANT" image={Va}/> */}
      </div>
    </div>
  )
}

export default Projects