import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import selectText from '../logic/selectText';
import { Item } from '../vite-env';
import { faCaretDown, faPencil, faCheckSquare, faXmark, faInfo, faCheckCircle, faCaretUp, faSquare, faCircle } from '@fortawesome/free-solid-svg-icons';

let listElement = document.getElementsByClassName('dnd-zone') as HTMLCollectionOf<HTMLElement>
let itemElement = document.getElementsByClassName('item') as HTMLCollectionOf<HTMLElement>

interface Props {
    item: {data: Item, index: number}
    query: string
    lastMove: boolean
    isOpen: boolean
    open: VoidFunction
}

export default function DraggableItem ({item, query, lastMove, isOpen, open}: Props) {
    
    const DragNDrop = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        const target = e.target as HTMLElement
        if(target?.classList.contains("no-drag")) return
        e = e || window.event;
        let el = itemElement[item.index]

        let cOffY = e.currentTarget.offsetTop

        function dragEnd(){
            document.removeEventListener('mousemove', dragMove);
            document.removeEventListener('mouseup', dragEnd);

            el.nextElementSibling?.classList.remove("expanded-absolute")
            el.classList.remove('dragging')
            listElement[0].dataset.dragging = "false"
        }

        function dragMove(dragMov: MouseEvent){
            listElement[0].dataset.dragging = `${item.index}`
            let prev = parseInt(el.style.top)

            el.style.top = prev + dragMov.movementY + 'px'
        }
        el.classList.add('dragging')
        el.nextElementSibling?.classList.add("expanded-absolute")
        el.style.top = cOffY + "px"

        document.addEventListener('mousemove', dragMove);
        document.addEventListener('mouseup', dragEnd);
    }

    const checkSubCount = (total:number)=>{
        let checkCount = 0
        for(let i=0; i<total;i++){
            if(item.data.subItems[i]?.checked) checkCount++
        }
        return checkCount
    }

    const calculateProgress = (): number => {
        let total = item.data.subItems?.length
        if(total === 0) return item.data.checked ? 100 : 0
        let checkCount = checkSubCount(total)
        return checkCount * 100 / total
    }

    //components

    const TopBar = ()=>{
        return <section className='top-bar' onMouseDown={DragNDrop} data-priority={item.data.priority}>
        <div className='progress-bar' style={{width: calculateProgress()+"%"}}></div>
        <div className='progress'>
            <div className='no-drag'>
                {item.data.subItems?.length !== 0 ? 
                    `${checkSubCount(item.data.subItems?.length)}/${item.data.subItems?.length}` 
                : <FontAwesomeIcon icon={
                    item.data.checked ? faCheckCircle : faCircle
                    }/>
                }
            </div>
            {item.data.subItems?.length !== 0 && <button className='no-drag' onClick={open}> <FontAwesomeIcon icon={isOpen ? faCaretUp : faCaretDown}/></button>}
        </div>
        <div className='main'>
            <h3 className='title' data-text="Title" dangerouslySetInnerHTML={{__html: selectText(item.data.title, query)}}/>
            <p className='description' data-text="Description">{item.data.description}</p>
        </div>
        <div className='actions'>
            <button className='no-drag'><FontAwesomeIcon icon={faPencil}/></button>
            <button className='no-drag'><FontAwesomeIcon icon={faXmark}/></button>
        </div>
        <div className='info-button no-drag'>
            <button className='no-drag'><FontAwesomeIcon icon={faInfo}/></button>
        </div>
    </section>
    }
    return (
        <div className={lastMove ? "item pop" : "item"}>
            <TopBar/>
            <section className={isOpen ? 'sub-items expanded':'sub-items'}>
                {item.data.subItems?.map((subItem)=>{
                    return <div className='sub-item' key={Math.random()}>
                        <button className='no-drag'><FontAwesomeIcon icon={subItem.checked ? faCheckSquare : faSquare}/></button>
                        {subItem.title}
                        <div className='actions'>
                            <button className='no-drag'><FontAwesomeIcon icon={faPencil}/></button>
                            <button className='no-drag'><FontAwesomeIcon icon={faXmark}/></button>
                        </div>
                    </div>
                })}
            </section>
        </div>
    )
}