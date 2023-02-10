import React, { useState, useEffect } from 'react'

import './css/app.css'
import { Header, Examples, MoreFeatures, WhatAudioGPT3, Possibility, Footer } from './container'
import { CTA, Brand, Navbar } from './components';
import PuffLoader from "react-spinners/PuffLoader";


const App = () => {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, [])

  return (
    <div className='MainApp'>
      {
        loading ?
          (
          <div className='load'>
            <PuffLoader
            color={"#AE67FA"}
            loading={loading}
            size={250}
          />
          <h1>Loading....</h1>
          </div>)
          : (<div>
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

    </div>

  )
}

export default App
