import React, {useContext, useState, useEffect} from 'react';
import Step from '../step/step'
import * as Tone from 'tone'

import "./row.css"

interface RowProps {
    note: string
    rowLength: number
    synth: any
    updateSequence: any
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