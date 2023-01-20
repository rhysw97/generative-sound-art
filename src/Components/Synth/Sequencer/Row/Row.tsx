import React, {useRef, useState} from 'react';
import Step from '../step/step'
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
    const steps: any[] = []
   
    for(let i = 0; i < props.rowLength; i++) {
        const tempSteps: any[] = activeSteps
        tempSteps.push({step: false, index:i})
        setActiveSteps(tempSteps)
    }
    console.log(activeSteps)
/*

*/
   
//want to render 16 steps 
    return(
        <div className="grid-row" id={props.note}>
            {activeSteps.map((step, index) => <Step
                width="50px"
                height="50px" 
                active={step} 
                index={index} 
                onClick={(value: boolean, index: number) => {
                    const tempSteps: any[] = activeSteps
                    tempSteps[index] = value;
                    setActiveSteps(tempSteps)
                }} 
            />)}
        </div>
    )
}