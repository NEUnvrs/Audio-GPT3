import React from 'react'
import { Feature } from '../../components'
import './whatAudioGPT3.css'


const WhatAudioGPT3 = () => {
  return (
    <div className='container'>
      <div className='container__all'>
        <div className='container__all--whatis'>
          <Feature title="What is AudioGPT-3" description="Abstract We introduce AudioGPT-3, a model generating high-fidelity music from text descriptions such as a calming violin melody backed by a distorted guitar riff. AudioGPT-3 casts the process of conditional music generation as a hierarchical sequence-to-sequence modeling task, and it generates music at 24 kHz that remains consistent over several minutes."/>
        </div>
        <div className='container__all--possibility'>
          <h1 className='container__all--possibility--title'>The possibilities are beyond your imagination</h1>
          <p>Explore The Library</p>
        </div>
        <div className='container__all--subcontainer'>
          <Feature title={"Acoustic generation"} description={"For acoustic generation, we sample the acoustic tokens given the semantic tokens extracted from the original samples from LibriSpeech test-clean. The model generates samples with different speakers and recording conditions, while the semantic content is identical."}/>
          <Feature title={"Generation without semantic tokens"} description={"To illustrate that the semantic tokens are crucial for generating coherent linguistic content, we train the language model on the acoustic tokens only. While the generated continuations of the 4-second prompts maintain speaker identity, the linguistic content is inconsistent, and often akin to babbling."}/>
          <Feature title={"Piano continuation"} description={"AudioGPT-3 is not limited to modeling speech. It can also learn to generate coherent piano music continuations, despite being trained on piano music without any symbolic representation. "}/>
        </div>
      </div>
    </div>
  )
}

export default WhatAudioGPT3