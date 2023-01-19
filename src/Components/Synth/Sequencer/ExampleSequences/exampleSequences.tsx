import React, {ReactComponentElement, useContext, useState} from 'react' 
import ReactSlider from 'react-slider';
import * as Tone from 'tone';
import './exampleSequences.css'
import { SynthContext } from '../../../../App'; 


export default function exampleSequences() {
    const synth = useContext(SynthContext)
    const sequence = ["C4", ["E4", "D4"], "G4", ["A4", "G4"]]
    const grid: {rowName: string, steps:any[]}[]= [];
   
    const playSequence = () => {
        const seq = new Tone.Sequence((time, note) => {
            synth.triggerAttackRelease(note, 0.1, time);
            // subdivisions are given as subarrays
        }, sequence).start(0);
        Tone.Transport.start();
    }

    const stopSequence = () => {
        Tone.Transport.stop()
    }



    return (
        <div>
            <div onClick={playSequence}>Play Sequence</div>
            <div onClick={stopSequence}>Stop Sequence</div>
        </div>
    )
}
