import React, {useState} from "react";
import "./step.css"

export default function Step() {
    const [playing, setPlaying] = useState(false)
    const colour = "red";
    let opacity = 0;
    const toggleStep = () => {
        if(playing) {
            opacity = 1
        } else {
            opacity = 0.8
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