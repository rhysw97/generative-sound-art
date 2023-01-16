import React, {useContext, useState} from 'react' 
import ReactSlider from 'react-slider';
import * as Tone from 'tone';
import './sequencer.css'
import { SynthContext } from '../../../App';


export default function Sequencer(props: any) {
    const synth = useContext(SynthContext)
    const sequence = ["C4", ["E4", "D4"], "G4", ["A4", "G4"]]
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

    const createSequencer = (notes:string[]) => {
        notes = ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5"]
        
    }
    return (
        <div>
            <div onClick={playSequence}>Play Sequence</div>
            <div onClick={stopSequence}>Stop Sequence</div>
        </div>
    )
}




Tone.Transport.start();
Tone.Transport.stop();
//Tone.Transport.bpm.value; //= parseFloat(e.target.value);




