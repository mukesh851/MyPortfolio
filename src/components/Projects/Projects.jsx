import React from 'react'
import './Projects.css'
import Card from '../Card/Card'
import Va from '../../assets/va.png'

const Projects = () => {
  return (
    <div id='projects'>
      <h1 id='para'>Currently Working as a Freelancer</h1>
      <div className='slider'>
        
        <Card title="VIRTUAL ASSISTANT" image={Va}/>
        <Card title="VIRTUAL ASSISTANT" image={Va}/>
        <Card title="VIRTUAL ASSISTANT" image={Va}/>

        <Card title="VIRTUAL ASSISTANT" image={Va}/>
        <Card title="VIRTUAL ASSISTANT" image={Va}/>
        <Card title="VIRTUAL ASSISTANT" image={Va}/>
      </div>
    </div>
  )
}

export default Projects