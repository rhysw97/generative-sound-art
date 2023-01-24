import * as Tone from "tone"
import { SynthContext, SequencerSynthsContext } from '../../../App';
import {useContext} from 'react'
import './filter.css'

export default function Filter(props: any) {
    
    const oscFilter = new Tone.Filter().toDestination();
    oscFilter.debug = true;
    const synth = useContext(SynthContext).connect(oscFilter)
    const sequencerSynths = useContext(SequencerSynthsContext)
    sequencerSynths.forEach(sequencerSynth => sequencerSynth.connect(oscFilter))
    const setFilterType = (event : React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = event.target;
        switch(value) {
            case "lowpass":  
            case "highpass":
            case "bandpass":
            case "lowshelf":
            case "highshelf":
            case "notch":
            case "allpass":
            case "peaking":
                oscFilter.type = value;
                break;
        }

    }

    const setCutOff = (event: React.ChangeEvent<HTMLInputElement>) => {
       console.log(oscFilter.frequency.value)

        oscFilter.frequency.value = event.target.value 
    }
    
    return(
        <div className="filter">
            <select onChange={setFilterType}>
                <option value="lowpass">Lowpass</option>
                <option value="highpass">Highpass</option>
                <option value="lowshelf">Lowshelf</option>
                <option value="highshelf">Highshelf</option>
                
            </select>

            <div className="filter-sliders">
                <div className="">
                    <input onChange={setCutOff} type="range" min="0" max="25000" step="1" ></input>
                    <label>Frequency CutOff</label>
                </div>
            </div>
        </div>
    )
}