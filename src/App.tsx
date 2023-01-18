import React from 'react';
import { createContext, useState } from 'react';
import * as Tone from 'tone'
import Oscillator from './Components/Synth/Oscillator/Oscillator';
import './App.css';
import {ReactP5Wrapper} from 'react-p5-wrapper'
import sketch from './Components/Sketch/Sketch';
import Sequencer from './Components/Synth/Sequencer/sequencer';
import Step from './Components/Synth/Sequencer/Step/step'

const synth: Tone.PolySynth = new Tone.PolySynth();
export const SynthContext = createContext(synth);
function App() {
  return (
    
    <div className="App">
      <ReactP5Wrapper sketch={sketch} />
      <Oscillator></Oscillator>
      <Sequencer></Sequencer>
      <Step></Step>
    
    </div>
  );
}

export default App;
