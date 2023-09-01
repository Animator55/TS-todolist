import { faCaretDown, faCaretUp, faSort } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface Props {
    sortObj: { sort: Array<string>, sortList: string[], setSort: React.Dispatch<React.SetStateAction<string[]>> }
}

type rotationStates = {
    [key: string]: string
}


export default function SortSpan ({sortObj}: Props) {
    const span = React.useRef<HTMLSpanElement | null>(null)

    const {sort, sortList, setSort} = sortObj
    
    const toggleSpan = () =>{
        if(span.current) span.current.classList.toggle('expanded')
    }
    return (
        <div className="sort-span">
            <span ref={span}>{sortList.map(el=>{
                let selected = sort[1] === el

                return <button 
                    className={selected ? "active" : ""} 
                    onClick={()=>{
                        const states: rotationStates = {"0": "1", "1": "-1", "-1": "0"}
                        let state = selected ? sort[0] : "0"
                        state = states[state]
                        let value = state === "0" ? "" : el
                        setSort([state, value])
                    }} 
                    key={Math.random()}>
                        <p>{el}</p>
                        {selected && <FontAwesomeIcon icon={sort[0] === "-1" ? faCaretUp : faCaretDown}/>}
                    </button>
            })}
            </span>
            <button onClick={toggleSpan}><FontAwesomeIcon icon={faSort}/>Order by</button> 
        </div>
    )
}