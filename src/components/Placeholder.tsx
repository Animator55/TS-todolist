interface Props {
    index: string
    moveItem: Function 
    DNDZone?: boolean
}

export default function Placeholder ({index, moveItem, DNDZone}: Props) {
    return (<p>
        <button 
            onMouseOver={(e)=>{
                const target = e.target
                if(target.parentElement.parentElement.dataset.dragging !== "false") {
                    target.parentElement.className = 'expanded'
                }
            }}
            onMouseLeave={(e)=>{
                e.target.parentElement.classList.remove('expanded')
            }}
            onMouseUp={(e)=>{
                if(e.target.parentElement.parentElement.dataset.dragging !== "false") 
                console.log(e)
                    if(index.split("-")[1] !== undefined) {
                        let source = e.target.parentElement.parentElement.dataset.dragging === undefined ? DNDZone : e.target.parentElement.parentElement

                        moveItem(source.dataset.dragging, index)}
                    else {
                        moveItem(e.target.parentElement.parentElement.dataset.dragging, index)}
                e.target.parentElement.classList.remove('expanded')
            }} 
        >
        </button>
    </p>)
}