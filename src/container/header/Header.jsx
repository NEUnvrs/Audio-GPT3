import React from 'react';
import './header.css';
import people from'../../assets/people.png';
import aiImg from '../../assets/ai.png';

const Header = () => {
  return (
    <div className='header ' id='header'>
      <div className='header__Content'>
        <h1 className='header__Content--text'>Let’s create
          amazing Audio with AudioGPT-3
          OpenAI
        </h1>

        <p className='header__Content--description'> Our experiments show that AudioGPT-3 outperforms previous systems both in audio quality and adherence to the text description. Moreover, we demonstrate that AudioGPT-3 can be conditioned on both text and a melody in that it can transform whistled and hummed melodies according to the style described in a text caption. To support future research, we publicly release MusicCaps, a dataset composed of 5.5k music-text pairs, with rich text descriptions provided by human experts.</p>

        <div className='header__Content--input'>
          <input type="email" placeholder='Your Email Address ' />
          <button type='submit'>Get Started</button>
        </div>
        
        <div className='header__Content--requested'>
          <img src={people} alt="people requested" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className='header__Content--ai'>
          <img src={aiImg} alt="ai" />
      </div>
      
    </div>
  )
}

export default Header