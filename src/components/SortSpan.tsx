import React from "react";

interface Props {
    sortObj: { sort: string, sortList: string[], setSort: React.Dispatch<React.SetStateAction<string>> }
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
                let bool = sort === el
                return <button 
                    className={bool ? "btn-cwhite": "btn-cblack"} 
                    onClick={()=>{
                        toggleSpan();
                        setSort(bool ? "" : el)
                    }} 
                    key={Math.random()}>
                        {el}
                    </button>
            })}
            </span>
            <div    
                className="btn-cblack" 
                onClick={toggleSpan}
            >
            </div> 
        </div>
    )
}