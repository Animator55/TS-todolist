// import React from 'react';
import selectText from '../logic/selectText';
import { Item } from '../vite-env';
// import Placeholder from './Placeholder';

let listElement = document.getElementsByClassName('dnd-zone') as HTMLCollectionOf<HTMLElement>
let itemElement = document.getElementsByClassName('sections-item-list') as HTMLCollectionOf<HTMLElement>

// function SubDraggableItem ({item, changeList, setPopUp}) {
//     let parentIndex = item.index[0]
//     let childrenIndex = item.index[1]
//     const DragNDrop = (e) => {
//         e = e || window.event;
//         let parentEl = itemElement[parentIndex]
//         let el = itemElement[parentIndex].children[1].children[2*childrenIndex+1]
//         let cOffY = e.clientY;

//         function dragEnd(dragEventEnd){
//             document.removeEventListener('mousemove', dragMove);
//             document.removeEventListener('mouseup', dragEnd);

//             parentEl.classList.remove('child-dragging')
//             el.classList.remove('dragging')
//             listElement[0].setAttribute('dragging', "false")
//         }

//         function dragMove(dragMov){
//             listElement[0].setAttribute('dragging', parentIndex + "-" + childrenIndex)
//             parentEl.classList.add('child-dragging')
//             el.classList.add('dragging')

//             el.style.top = el.style.bottom !== "0px" ? (dragMov.clientY) > 45 ? dragMov.clientY + 5+ 'px' : "45px" : el.style.top
//             el.style.bottom = (dragMov.clientY) > document.body.clientHeight - el.clientHeight ? "0px" : "auto"
//         }
//         el.style.top = cOffY + 5 + "px"
//         el.style.bottom = "auto"

//         document.addEventListener('mousemove', dragMove);
//         document.addEventListener('mouseup', dragEnd);
//     }

//     return (
//         <section className='sub top-bar' onMouseDown={DragNDrop}>
//             <div>
//                 <div className='d-flex' onClick={()=>{if(item.data.name !== "") changeList({...item.data, desktop: !item.data.desktop}, childrenIndex)}}>
//                     <i className="display-icon" style={{color: item.data.desktop ? "var(--cwhite)" : "var(--cblack)"}} title="Mostrar en desktop"></i>
//                 </div>
//                 <div className='d-flex' onClick={()=>{if(item.data.name !== "") changeList({...item.data, mobile: !item.data.mobile}, childrenIndex)}}>
//                     <i className="mobile-icon" style={{color: item.data.mobile ? "var(--cwhite)" : "var(--cblack)"}} title="Mostrar en mobile"></i>
//                 </div>
//             </div>
//             <hr/> 
//             <h3 
//                 data-text="Texto" 
//                 contentEditable 
//                 suppressContentEditableWarning
//                 onBlur={(e)=>{if(item.data.name !== e.target.innerText) changeList({...item.data, name: e.target.innerText}, childrenIndex)}}
//                 onKeyDown={(e)=>{if(e.key === "Enter" && item.data.name !== e.target.innerText) {
//                     e.preventDefault();
//                     changeList({...item.data, name: e.target.innerText}, childrenIndex)
//                 }}}
//             >{item.data.name}</h3>
//             <hr/> 
//             <div className="autocomplete-container">
//                 <h3 
//                     data-text="Link" 
//                     className='m-0'
//                     contentEditable 
//                     suppressContentEditableWarning
//                     onClick={(e)=>{
//                         listElement[0].firstChild.accessKey = parentIndex + "-" + childrenIndex
//                         listElement[0].firstChild.classList.add("expanded")
//                         listElement[0].firstChild.style.top = e.target.parentElement.parentElement.offsetTop + 35 + "px"
//                         listElement[0].firstChild.style.left = e.target.parentElement.parentElement.clientWidth - e.target.clientWidth + 10 + "px"
//                         listElement[0].firstChild.style.width = e.target.clientWidth + "px"}}
//                     onKeyDown={(e)=>{
//                         if(e.key === "Enter") {
//                             e.preventDefault();
//                             listElement[0].firstChild.classList.remove("expanded")
//                             if(item.data.url !== e.target.innerText) 
//                             changeList({...item.data, url: e.target.innerText}, childrenIndex)
//                         }
//                     }}
//                     onBlur={(e)=>{
//                         if(item.data.url !== e.target.innerText) changeList({...item.data, url: e.target.innerText}, childrenIndex)
//                         listElement[0].firstChild.classList.remove("expanded")
//                     }}
//                 >{item.data.url}</h3>
//             </div>
//             <i className='close-icon animated' onClick={()=>setPopUp(()=>{changeList(false, childrenIndex)})}></i>
//         </section>
//     )
// }

interface Props {
    item: {data: Item, index: number}
    query: string
}

export default function DraggableItem ({item, query}: Props) {
    
    const DragNDrop = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        // if(e.target.accessKey === "no-drag") return
        e = e || window.event;
        let el = itemElement[item.index]
        let cOffY = e.clientY;

        function dragEnd(){
            document.removeEventListener('mousemove', dragMove);
            document.removeEventListener('mouseup', dragEnd);

            el.classList.remove('dragging')
            listElement[0].dataset.dragging = "false"
        }

        function dragMove(dragMov: MouseEvent){
            listElement[0].dataset.dragging = `${item.index}`
            el.classList.add('dragging')

            el.style.top = dragMov.clientY > 45 ? dragMov.clientY + 5+ 'px' : "45px"
        }
        el.style.top = cOffY + 5 + "px"

        document.addEventListener('mousemove', dragMove);
        document.addEventListener('mouseup', dragEnd);
    }
    return (
        <div className="sections-item-list">
            <section className='top-bar' onMouseDown={DragNDrop}>
                <div>
                    {/* <span className='span-icon' onClick={(e)=>{
                        let el = itemElement[item.index]
                        el.children[1].classList.toggle('expanded', !el.children[1].classList.contains("expanded"));
                        handlerOpen(item.data._id)
                    }}></span>
                    {item.data.subItems !== undefined ? <h2 className='mr-5px'>{item.data.subItems.length === 0 ? "" : item.data.subItems.length}</h2> : null}
                    <div className='d-flex ml-auto' onClick={()=>{if(item.data.name !== "") changeList({...item.data, desktop: !item.data.desktop}, item.index, undefined, "desktop")}}>
                        <i className="display-icon" style={{color: item.data.desktop ? "var(--cwhite)" : "var(--cblack)"}} title="Mostrar en desktop"></i>
                    </div>
                    <div className='d-flex' onClick={()=>{if(item.data.name !== "") changeList({...item.data, mobile: !item.data.mobile}, item.index, undefined, "mobile")}}>
                        <i className="mobile-icon" style={{color: item.data.mobile ? "var(--cwhite)" : "var(--cblack)"}} title="Mostrar en mobile"></i>
                    </div> */}
                </div>
                <hr/> 
                <h3 
                    data-text="Texto" dangerouslySetInnerHTML={{__html: selectText(item.data.title, query)}} contentEditable suppressContentEditableWarning
                    // onBlur={(e)=>{if(item.data.name !== e.target.innerText) changeList({...item.data, name: e.target.innerText}, item.index, undefined, "name")}}
                    // onKeyDown={(e)=>{if(e.key === "Enter" && item.data.name !== e.target.innerText) {
                    //     e.preventDefault();
                    //     changeList({...item.data, name: e.target.innerText}, item.index, undefined, "name")
                    // }}}
                ></h3>
                <hr/> 
                <div className="autocomplete-container">
                    {/* <h3 
                        data-text="Link" className='m-0' dangerouslySetInnerHTML={{__html: item.data.type}} 
                        contentEditable suppressContentEditableWarning
                        onClick={(e)=>{
                            listElement[0].firstChild.accessKey = item.index
                            listElement[0].firstChild.classList.add("expanded")
                            listElement[0].firstChild.style.top = e.target.parentElement.parentElement.offsetTop + 35 + "px"
                            listElement[0].firstChild.style.left = e.target.parentElement.parentElement.clientWidth - e.target.clientWidth - 20 + "px"
                            listElement[0].firstChild.style.width = e.target.clientWidth + "px"
                        }}
                        onKeyDown={(e)=>{
                            if(e.key === "Enter") {
                                listElement[0].firstChild.classList.remove("expanded")
                                if(item.data.url !== e.target.innerText) 
                                changeList({...item.data, url: e.target.innerText}, item.index, undefined, "url")
                            }
                        }}
                        onBlur={(e)=>{
                            if(item.data.url !== e.target.innerText) 
                            changeList({...item.data, url: e.target.innerText}, item.index, undefined, "url")
                            listElement[0].firstChild.classList.remove("expanded")
                        }}
                    ></h3> */}
                </div>
                <i 
                    className='close-icon animated' 
                    // onClick={()=>setPopUp(()=>{changeList(false, item.index)})}
                ></i>
            </section>
            {/* <section className={isOpen ? 'sub-items expanded':'sub-items'}>
                <Placeholder index={item.index + "-" + "0"} moveItem={moveItem} DNDZone={listElement[0]}/>
                {item.data.subItems?.map((item, i)=>{
                    return (<React.Fragment key={Math.random()}>
                        <SubDraggableItem
                            item={{data: item, index: [item.index, i]}}
                            changeList={(change, index)=>{changeList(change, item.index, index)}}
                            setPopUp={setPopUp}
                        />
                        <Placeholder index={item.index + "-" + (i+1)} moveItem={moveItem} DNDZone={listElement[0]}/>
                    </React.Fragment>)
                })}
            </section> */}
        </div>
    )
}