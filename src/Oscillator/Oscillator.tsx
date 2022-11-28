import React, {useState} from 'react' 
import * as Tone from 'tone';
const polyOscillator : Tone.PolySynth = new Tone.PolySynth();
const synth = polyOscillator.toDestination();

export default function Oscillator() {
  
  
    return (
        <div>
            <button onClick={playSound}>Play</button>
            <button onClick={stopSound}>Stop</button>
            <select onChange={setWave}>
                <option value="sine">Sine</option>
                <option value="triangle">Triangle</option>
                <option value="square">Square</option>
                <option value="sawtooth">Sawtooth</option>
            </select>
            <form>
                <label>Attack:
                <input onChange={setAttack} type="range"></input>
                </label>
                <label>Decay:
                    <input onChange={setDecay} type="range"></input>
                </label>
                <label>Sustain:
                    <input onChange={setSustain} type="range" min='0' max='1' step='0.001'></input>
                </label>
                <label>Release:
                    <input onChange={setRelease} type="range"></input>
                </label>
            </form>
        </div>
    )
}

const playSound = () => {
    synth.triggerAttack(["C4", "E4", "A4"])
    
}

const stopSound = () => {
    synth.triggerRelease(["C4", "E4", "A4"])
}

const setWave = (event : React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    switch(value) {
        case 'sine':
        case 'triangle':
        case 'square':
        case 'sawtooth':
            synth.set({
                oscillator: {
                    type: value
                }
            })
            break;
    }
}

const setAttack = (event : React.ChangeEvent<HTMLInputElement>) => {
    synth.set( {
        envelope: {
            attack: event.target.value
        }
    } )
}

const setDecay = (event : React.ChangeEvent<HTMLInputElement>) => {
    synth.set( {
        envelope: {
            decay: event.target.value
        }
    } )
}

const setSustain = (event : React.ChangeEvent<HTMLInputElement>) => {
    synth.set( {
        envelope: {
            sustain: Number(event.target.value)
        }
    } )
}

const setRelease = (event : React.ChangeEvent<HTMLInputElement>) => {
    synth.set( {
        envelope: {
            release: event.target.value
        }
    } )
}