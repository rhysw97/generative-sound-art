import React, {useContext, useState} from 'react' 
import ReactSlider from 'react-slider';
import * as Tone from 'tone';
import './oscillator.css'
import { SynthContext, SequencerSynthsContext } from '../../../App';
import Filter from '../Filter/Filter'


export default function Oscillator(props: any) {
    const synth = useContext(SynthContext)
    const sequencerSynths = useContext(SequencerSynthsContext)
    
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

                sequencerSynths.forEach(sequencerSynth => {
                    sequencerSynth.set({
                        oscillator: {
                            type: value
                        }
                    })
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

        sequencerSynths.forEach(sequencerSynth => {
            sequencerSynth.set({
                envelope: {
                    attack: event.target.value
                }
            })
        })
    }

    const setDecay = (event : React.ChangeEvent<HTMLInputElement>) => {
        synth.set( {
            envelope: {
                decay: event.target.value
            }
        } )

        sequencerSynths.forEach(sequencerSynth => {
            sequencerSynth.set({
                envelope: {
                    decay: event.target.value
                }
            })
        })
    }

    const setSustain = (event : React.ChangeEvent<HTMLInputElement>) => {
        synth.set( {
            envelope: {
                sustain: Number(event.target.value)
            }
        } )

        sequencerSynths.forEach(sequencerSynth => {
            sequencerSynth.set({
                envelope: {
                    sustain: Number(event.target.value)
                }
            })
        })
    }

    const setRelease = (event : React.ChangeEvent<HTMLInputElement>) => {
        synth.set( {
            envelope: {
                release: event.target.value
            }
        } )

        sequencerSynths.forEach(sequencerSynth => {
            sequencerSynth.set({
                envelope: {
                    release: event.target.value
                }
            })
        })
    }

    

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
            <form className="envelope">
                <div>
                    <input onChange={setAttack} type="range" ></input>
                    <label>Attack:</label>
                </div>
                <div>
                    <input onChange={setDecay} type="range"></input>
                    <label>Decay</label>
                </div>
                <div>
                    <input onChange={setSustain} type="range" min='0' max='1' step='0.001'></input>
                    <label>Sustain</label>
                </div>
                <div>
                    <input onChange={setRelease} type="range" min='0' max="30" step='0.01'></input>
                    <label>Release</label>
                </div>
            </form>
            <Filter></Filter>
        </div>
    )
}