import React, {useContext, useState, useEffect, ReactEventHandler, MouseEventHandler} from 'react';
import Step from '../step/step'
import * as Tone from 'tone'

import "./row.css"

interface RowProps {
    note: string
    rowLength: number
    synth: any
    updateSequence: any
    index: number
    rowState: any
}

//Row of divs that either set to active 
export default function Row(props: RowProps) {

    const click: React.MouseEventHandler<HTMLDivElement> = (event: any, ) => {
        console.log(event.target)
        const tempSteps: any[] = [...props.rowState]
        tempSteps[event.target.getAttribute('data-index')].active = event.target.getAttribute('data-active');
        props.updateSequence(tempSteps, props.note)
    }
    
    return(
        <div className="grid-row" id={props.note}>
            {props.rowState.map((object: any, index: any) => <div
                style= {{
                    width:"50px",
                    height:"50px",
                    
                    backgroundColor: object.active? 'purple' : 'white'
                }} 
                key={index} 
                onClick={click}
                data-index = {index} 
                data-active = {object.active}
            ></div>)}
       </div>
    )
}

