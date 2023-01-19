
import './sequencer.css'
import Row from './Row/row';

export default function Sequencer() {
    const notes: string[] = ["C4", "D4", "F4", "G4", "A4", "C5"]
    const grid: any[] = [];

    const updateSequence = () => {
        console.log('updated')
    }

    notes.forEach(note => {
        grid.push(<Row note={note} rowLength={16} updateSequence={updateSequence}></Row>)
    })

    //what I need is an array for each row containing true or false based on 
    return (
        <div className="grid-container" >
            {grid}
        </div>
    )
}

/*
const synths = [
    new Tone.Synth(),
    new Tone.Synth(),
    new Tone.Synth()
]

synths[0].oscillator.type = 'triangle'
synths[1].oscillator.type = 'sine'
synths[2].oscillator.type = 'sawtooth'

synths.forEach(synth => synth.toMaster());

const rows = document.getElementsByClassName('row');
const notes = [ 'G5', 'E4', 'C3']
let index = 0;

Tone.Transport.scheduleRepeat(repeat, '8n');
Tone.Transport.start();

function repeat(time) {
    let step = index % 8
    for (let i = 0; i < rows.length; i++) {
        let synth = synths[i]
        let row = rows[i];
        let input = row.querySelector(`input:nth-child(${step + 1})`)
        console.log(input)
        if (input.checked) synth.triggerAttackRelease(note, '8n', time)
    }
    index++
}*/