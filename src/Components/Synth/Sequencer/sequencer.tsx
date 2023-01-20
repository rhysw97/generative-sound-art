import React, {useRef} from 'react';
import './sequencer.css'
import Row from './row/row';
import * as Tone from 'tone'

export default function Sequencer() {
    const notes: string[] = ["C4", "D4", "F4", "G4", "A4", "C5"]
    const grid: any[] = [];

  
    notes.forEach(note => {
        grid.push(<Row note={note} rowLength={16}></Row>)
    })

   
    return (
        <div>
            <p id="playButton" onClick={() => Tone.Transport.start()}>play</p>
            <div className="grid-container" >
                {grid}
            </div>
            
        </div>
    )
}
