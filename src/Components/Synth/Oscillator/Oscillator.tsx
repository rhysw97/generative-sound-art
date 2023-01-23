import React, {useContext, useState} from 'react' 
import ReactSlider from 'react-slider';
import * as Tone from 'tone';
import './oscillator.css'
import { SynthContext, SequencerSynthsContext } from '../../../App';
import Filter from '../Filter/Filter'


export default function Oscillator(props: any) {
    const synth = useContext(SynthContext)
    const [userWaveform, setUserWaveform] = useState('sine')
    const sequencerSynths = useContext(SequencerSynthsContext)
    
    const isWaveformSelected = (value: string): boolean => userWaveform === value;

    const handleRadioClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserWaveform(event?.currentTarget.value)
        setWave(userWaveform)
    }
    const playSound = () => {
        synth.triggerAttack(["C4", "E4", "A4"])
    }

    const stopSound = () => {
        synth.triggerRelease(["C4", "E4", "A4"])
    }

    const setWave = (value : string) => {

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
            
            <div className='options'>
                <div className="waveform-container">
                    <h2>Select Waveform</h2>
                    <form className='waveform-options'>
                        <div>
                            <h3>Sine</h3>
                            <div className="wave">
                                <input type="radio" id="sine" name="waveform" value="sine" checked={isWaveformSelected("sine")} onChange={handleRadioClick}/>
                                <label><div className="sine-shape"></div></label>
                            </div>
                        </div>
                        <div>
                            <h3>Triangle</h3>
                            <div className="wave">
                                <input type="radio" id="triangle" name="waveform" value="triangle" checked={isWaveformSelected("triangle")} onChange={handleRadioClick}/>
                                <label><span className='triangle-shape'></span></label>
                            </div>
                        </div>
                        <div>
                            <h3>Square</h3>
                            <div className="wave">
                                <input type="radio" id="square" name="waveform" value="square" checked={isWaveformSelected("square")} onChange={handleRadioClick}/>
                                <label><div className="square-shape"></div></label>
                            </div>
                        </div>
                        <div>
                            <h3>Sawtooth</h3>
                            <div className="wave">
                                <input type="radio" id="sawtooth" name="waveform" value="sawtooth" checked={isWaveformSelected('sawtooth')} onChange={handleRadioClick}/>
                                <label><div className='sawtooth-shape'></div></label>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="envelope-container">
                    <h2>ADSR Envelope</h2>
                    <form className="envelope">
                        <div>
                            <input onChange={setAttack} type="range" ></input>
                            <label>Attack</label>
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
                </div>
            </div>
            <Filter></Filter>
        </div>
    )
}