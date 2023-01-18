import React, {useState} from "react";

export default function Step() {
    let on = false
    const colour = "purple";
    let opacity = 0;
    const toggleStep = () => {
        if(on) {
            opacity = 1
        } else {
            opacity = 0.8
        }

        on = !on
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