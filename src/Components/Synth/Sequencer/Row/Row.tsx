import React, {useRef, useState, useEffect} from 'react';
import Step from '../step/step'
import * as Tone from 'tone'
import "./row.css"

interface RowProps {
    note: string
    rowLength: number
}

interface StepsObject {
    step: boolean,
    index: number
}

export default function Row(props: RowProps) {
    const [activeSteps , setActiveSteps] = useState<any[]>([])

    useEffect(()=>{
        const steps=Array.from(
            {length: props.rowLength}, 
            (index)=> ({active: false, index: index})
        )
        setActiveSteps(steps)
       
    }, [])
 
    const repeat = () => {
     
    }
    Tone.Transport.scheduleRepeat(repeat, '16n')
   

    return(
        <div className="grid-row" id={props.note}>
            {activeSteps.map((object, index) => <Step
                width="50px"
                height="50px" 
                active={object.active} 
                index={index}
                key={index} 
                onClick={(active: boolean, index: number) => {
                    console.log(`${props.note} ${index} ${active}`)
                    const tempSteps: any[] = [...activeSteps]
                    tempSteps[index].active = active;
                    setActiveSteps(tempSteps)
                }} 
            />)}
       </div>
    )
}