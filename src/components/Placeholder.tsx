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
                    target.classList.add('expanded')
                }
            }}
            onMouseLeave={(e)=>{
                const target = e.currentTarget.parentElement
                if(target) target.classList.remove('expanded')
            }}
            onMouseUp={(e)=>{
                const target = e.currentTarget.parentElement
                if(!target || target.parentElement?.dataset.dragging === "false") return 
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