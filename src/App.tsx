import React from 'react';
import { createContext, useState } from 'react';
import * as Tone from 'tone'
import Oscillator from './Components/Synth/Oscillator/Oscillator';
import './App.css';
import {ReactP5Wrapper} from 'react-p5-wrapper'
import sketch from './Components/Sketch/Sketch';
import Sequencer from './Components/Synth/Sequencer/sequencer';



const synth: Tone.PolySynth = new Tone.PolySynth();
const  sequencerSynths = []
for(let i = 0; i < 5; i++) {
  sequencerSynths.push(new Tone.PolySynth());
}
export const SequencerSynthsContext = createContext(sequencerSynths)
export const SynthContext = createContext(synth);
function App() {
  return (
    <div className="App">
      <>
        <ReactP5Wrapper sketch={sketch} />
      </>
      <Oscillator></Oscillator>
      <Sequencer sequenceLength={16} notes={["C4", "D4", "E4", "G4", "C5"]}/>
    </div>
  );
}

export default App;
