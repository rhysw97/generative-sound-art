import React, {useState} from "react";
import "./step.css"

export default function Step() {
    const [playing, setPlaying] = useState(false)
    const colour = "red";
    const [opacity, setOpacity] = useState(0);
    const toggleStep = () => {
        if(playing) {
            setOpacity(1) 
        } else {
            setOpacity(0)
        }
        console.log(playing)
        setPlaying(!playing)
    }

    return (
        <div>
            <div className="step" onClick={toggleStep} style={{opacity: opacity}}></div>
        </div>
    )
}