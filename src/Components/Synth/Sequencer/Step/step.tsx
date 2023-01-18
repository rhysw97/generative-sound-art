import React, {useState} from "react";

export default function Step() {
    const [playing, setPlaying] = useState(false)
    
    const colour = "purple";
    let opacity = 0;
    const toggleStep = () => {
        if(playing) {
            opacity = 1
        } else {
            opacity = 0.8
        }

        setPlaying(!playing)
    }

    return (
        <div onClick={toggleStep} style={{
            backgroundColor: colour, 
            opacity: opacity,
            width: "500px",
            height: "500px"
        }}></div>
    )
}