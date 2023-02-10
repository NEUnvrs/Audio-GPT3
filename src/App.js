import React from 'react'

import './css/app.css'
import { Header, Examples, MoreFeatures, WhatAudioGPT3, Possibility, Footer} from './container'
import { CTA, Brand, Navbar} from './components';


const app = () => {
  return (
    <div className='MainApp'>
      <div className='bg'>
      <Navbar />
      <Header />
      </div>
      <Brand />
      <WhatAudioGPT3 />
      <MoreFeatures />
      <Possibility />
      <CTA />
      <Examples />
      <Footer />
    </div>
    
  )
}

export default app
