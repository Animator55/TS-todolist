interface Props {
    index: string
    moveItem: Function 
    DNDZone?: HTMLElement
}

export default function Placeholder ({index, moveItem, DNDZone}: Props) {
    return (<p>
        <span 
            onMouseOver={(e)=>{
                const target = e.currentTarget.parentElement
                if(target && target.parentElement?.dataset.dragging !== "false") {
                    let dragged = document.querySelector('.dragging')
                    target.classList.add('expanded')
                    if(dragged !== null) target.style.minHeight = dragged.clientHeight + "px"
                }
            }}
            onMouseLeave={(e)=>{
                const target = e.currentTarget.parentElement
                if(!target) return 
                target.classList.remove('expanded')
                target.style.minHeight = ""
            }}
            onMouseUp={(e)=>{
                const target = e.currentTarget.parentElement
                if(!target || target.parentElement?.dataset.dragging === "false") return 
                target.style.minHeight = ""
                if(index.split("-")[1] !== undefined) {
                    let source = target.parentElement?.dataset.dragging === undefined ? DNDZone : target.parentElement

                    moveItem(source?.dataset.dragging, index)
                }
                else {
                    moveItem(target.parentElement?.dataset.dragging, index)
                }
                target.classList.remove('expanded')
            }} 
        >
        </span>
    </p>)
}