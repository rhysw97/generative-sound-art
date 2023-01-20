import React, {useContext, useEffect, useState} from 'react';
import './sequencer.css'
import Row from './row/row';
import * as Tone from 'tone'
import { SequencerSynthsContext } from '../../../App';

export default function Sequencer() {
    const notes: string[] = ["C4", "D4", "F4", "G4", "A4", "C5"]
    const sequencerSynths = useContext(SequencerSynthsContext) 
    const [sequence, setSequence] = useState<any[]>([])
  
    useEffect(() => {
        const rowState=Array.from(
            {length: notes.length}, 
            (index)=> ([])
        )
        setSequence(rowState)
       
    }, [])

   const repeat = (time: any) => {
    
        for(let i = 0; i < sequence.length; i++) {
            let synth = sequencerSynths[i];
            let note = notes [i];
            let row = sequence[i]
            row.forEach((step: any) => {
                if(step.active) {
                    synth.triggerAttackRelease(note, '16n', time)
                }
            })
            
/*  
            
                let synth = synths[i]
                let note = notes[i]
                let row = rows[i];
                let input = row.querySelector(`input:nth-child(${step + 1})`)
                console.log(input)
                if (input.checked) synth.triggerAttackRelease(note, '8n', time)
            }
            /*if(activeSteps[i].active === true) {
                props.synth.triggerAttackRelease(props.note, '1n', time)
            }*/
        }
    }
    
    Tone.Transport.scheduleRepeat(repeat, '1n')
   
    return (
        <div>
            <p id="playButton" onClick={() => Tone.Transport.start()}>play</p>
            <div className="grid-container" >
                {sequence.map((object, index) => <Row
                    key={index}
                    note={notes[index]}
                    rowLength={16}
                    synth={sequencerSynths[index]}
                    index = {index}
                    updateSequence ={(activeSteps: any[]) => {
                        const tempSequence: any[] = [...sequence]
                        tempSequence.push(activeSteps)
                        setSequence(tempSequence)
                    }}
                />)}
              
            </div>
            
        </div>
    )
}
