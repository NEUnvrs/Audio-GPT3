import React from 'react'
import './feature.css'


const Feature = ({title, description}) => {
  return (
    <div className='feature'>
      <div className='feature__title'>
        <div/>
        <h1>{title}</h1>
      </div>
      <div className='feature__description'>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Feature