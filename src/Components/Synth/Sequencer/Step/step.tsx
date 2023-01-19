import React, {useState, forwardRef, useImperativeHandle} from "react";
import "./step.css"

interface StepProps {
    height: string,
    width: string,
    index: number,
    ref: any
}

export default function Step(props: StepProps) {
    const [active, setActive] = useState(true)

    const [colour, setColour] = useState('white');
    const toggleStep = () => {
        
        if(active) {
            setColour('purple')
        } else {
            setColour('white')
        }
        setActive(!active)
        console.log(active)
    }

    return (
        <div>
            <div className="step" onClick={toggleStep} style={{
                height: props.height,
                width: props.width,
                backgroundColor: colour,
            }}></div>
        </div>
    )
}