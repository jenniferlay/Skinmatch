import { useState } from "react"


export default function MathLabel(props){
    const [text, setText] = useState(props.perc.toString() + "%")

    let color
    if(props.perc >= 80){
        color = "green"
    }
    else if (props.perc >= 60){
        color = "orange"
    }
    else{
        color = "red"
    }

    return(
        <h4 className="matchLabel" style={{color: color, borderColor: color}}>{text}</h4>
    )
}