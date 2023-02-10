import React from 'react'
import './article.css'


const ArticleImg = ({ img, audio, title, des }) => {
  return (
    <div className='containerImg'>
      <div className='containerImg__painting'>
        <img src={img} alt="painting" />
      </div>

      <div className='containerImg__description'>
        <h1>{title}</h1>
        <p>" {des} "</p>
      </div>
      <audio controls src={audio}></audio>
    </div>
  )
}


export default ArticleImg