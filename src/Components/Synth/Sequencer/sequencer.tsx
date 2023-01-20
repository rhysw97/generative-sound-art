import React, {useContext, useEffect, useState} from 'react';
import './sequencer.css'
import Row from './row/row';
import * as Tone from 'tone'
import { SequencerSynthsContext } from '../../../App';

export default function Sequencer() {
    const notes: string[] = ["C4", "D4", "F4", "G4", "A4", "C5"]
    const grid: any[] = [];
    const sequencerSynths = useContext(SequencerSynthsContext) 
    const [sequence, setSequence] = useState<any[]>([])

    useEffect(() => {
        const rowState=Array.from(
            {length: notes.length}, 
            (index)=> ([])
        )
        setSequence(rowState)
       // Tone.Transport.scheduleRepeat(repeat, '1n')
    }, [])

    notes.forEach((note, index) => {
        grid.push(<Row synth={sequencerSynths[index]} note={note} rowLength={16}></Row>)
    })

   /* const repeat = (time: any) => {
        for(let i = 0; i < activeSteps.length; i++) {
            console.log(activeSteps[i].active)
            if(activeSteps[i].active === true) {
                props.synth.triggerAttackRelease(props.note, '1n', time)
            }
        }
    }*/
    
   
    return (
        <div>
            <p id="playButton" onClick={() => Tone.Transport.start()}>play</p>
            <div className="grid-container" >
                {sequence.map((object, index) => <Row
                    note={notes[index]}
                    rowLength={16}
                    synth={sequencerSynths[index]}
                    index = {index}
                    updateSequence = {() => {

                    }}
                />)}
                {grid}
            </div>
            
        </div>
    )
}
