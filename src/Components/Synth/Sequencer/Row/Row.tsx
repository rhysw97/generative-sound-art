import React, {useRef, useState} from 'react';
import Step from '../step/step'
import "./row.css"

interface RowProps {
    note: string
    rowLength: number
    updateSequence: Function
}

interface StepsObject {
    step: boolean,
    index: number
}



export default function Row(props: RowProps) {
    const [activeSteps , setActiveSteps] = useState<any[]>([])
    const steps: any[] = []
   
    for(let i = 0; i < props.rowLength; i++) {
        const tempSteps: any[] = activeSteps
        tempSteps.push({step: false, index:i})
        setActiveSteps(tempSteps)
    }

    function updateActiveStep(index: number) {
        const tempSteps = activeSteps;
        tempSteps[index].step = !tempSteps[index].step
    }


   
//want to render 16 steps 
    return(
        <div className="grid-row" id={props.note}>
            {activeSteps.map((step, index) => <Step active={step} index={index} updateActiveStep={updateActiveStep} />)}
        </div>
    )
}