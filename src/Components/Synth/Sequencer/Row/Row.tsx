import Step from '../Step/step'
import "./row.css"

interface RowProps {
    note: string
    rowLength: number
    updateSequence: Function
}



export default function Row(props: RowProps) {

   const steps = []
   for(let i = 0; i < props.rowLength; i++) {
    steps.push(<Step width="50px" height="50px"></Step>)
   }
//want to render 16 steps 
    return(
        <div className="grid-row" id={props.note}>
            {steps}
        </div>
    )
}