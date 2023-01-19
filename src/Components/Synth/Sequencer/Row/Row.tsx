import React, {useRef, useState} from 'react';
import Step from '../step/step'
import "./row.css"

interface RowProps {
    note: string
    rowLength: number
    updateSequence: Function
}



export default function Row(props: RowProps) {
    const stepActiveRef = useRef();
    const [activeSteps, setActiveSteps] = useState([])
   const steps = []
   
   for(let i = 0; i < props.rowLength; i++) {
    steps.push(<Step ref={setActiveSteps} index={i} width="50px" height="50px"></Step>)
    setActiveSteps(activeSteps=> [activeSteps, false])

   }

   
//want to render 16 steps 
    return(
        <div className="grid-row" id={props.note}>
            {steps}
        </div>
    )
}