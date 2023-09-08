import React from 'react'
import { Item } from '../vite-env'
import DraggableItem from './DraggableItem'
import Placeholder from './Placeholder'
import SearchAndFilter from './Search&Filter'
import moveItemFunc from '../logic/moveItem.ts'
import sortArray from '../logic/sortList.ts'
import AlertPop from './AlertPop.tsx'

interface Props {
    array: Item[]
}

export default function List({ array }: Props) {
    const [query, setQuery] = React.useState("")
    const [sort, setSort] = React.useState(["0", ""])
    // const [viewGroups, setViewGroups] = React.useState(false)
    const [refresh, activateRefresh] = React.useState(false)
    const [List, setList] = React.useState<Item[]>([])
    const [openList, setOpenList] = React.useState<number[]>([])
    const [popUp, setPopUp] = React.useState<Array<boolean | undefined | VoidFunction>>([false, undefined])
    const [lastMove, setLastMove] = React.useState<number>(-1)

    const moveItem = (source: string, target: string) => {
        let move = moveItemFunc({ source, target, List })
        if(move !== -1) setLastMove(move)
        else activateRefresh(!refresh)
    }
    
    const getSortKeys = ()=>{
        if(List.length === 0) return []
        let keys = Object.keys(List[0])
        let SortKeys = keys.filter(key=>{
            if(key !== "id" && key !== 'subItems') return key
        })

        return SortKeys
    }

    React.useEffect(()=>{
        setList(array)
    }, [array])

    React.useEffect(()=>{
        if(lastMove === -1) return
        else setTimeout(()=>{
            setLastMove(-1)
        }, 200)
    }, [lastMove])

    React.useEffect(()=>{
        if(sort[0] === "0") return
        let newList = sortArray({sort, List})
        setList(newList)
    }, [sort])

    const toggleOpen = (id: number)=>{
        if(openList.includes(id)) setOpenList(openList.filter(item=>{if(item !== id) return item}))
        else setOpenList([...openList, id])
    }

    const changeList = {
        delete: (id: number, subId: number | undefined)=>{
            const deleteItem = ()=>{
                let result: Item[] = []
                if(subId === undefined) result = List.filter(el=>{
                    if(el.id !== id) return el
                })
                else {
                    result = [...List]
                    for(let i=0; i<result.length; i++){
                        if(result[i].id === id) {
                            let newSubItems = result[i].subItems.filter(el=>{
                                if(el.id !== subId) return el
                            })
                            result[i].subItems = newSubItems
                            break
                        }
                    }
                }

                setList(result)
            }
            setPopUp([true, deleteItem])
        }
    }

    const RenderList = ()=>{
        return List.length > 0 && List.map((section, i) => {
            return (<React.Fragment key={Math.random()}>
                <DraggableItem
                    item={{ data: section, index: i}}
                    query={query}
                    lastMove = { lastMove === section.id }
                    isOpen= {openList.includes(section.id)}
                    open= {()=>{toggleOpen(section.id)}}
                    deleteItem = {changeList.delete}
                />
                <Placeholder index={`${i + 1}`} moveItem={moveItem} />
            </React.Fragment>)
        })
    }

    return <>
        <SearchAndFilter 
            query={{ query: query, setQuery: setQuery }} 
            sort={{ sort: sort, sortList: getSortKeys(), setSort: setSort}} 
            // groups={{viewGroups, setViewGroups}}
        />
        {popUp[0] && <AlertPop confirm={popUp[1]} close={()=>{setPopUp([false, undefined])}}/>}
        <section className='dnd-zone' data-dragging="false">
            {/* <AutoComplete autoList={autoList} queryList={queryList}/> */}
            {/* <AddBtn click={()=>{changeList(true)}}/> */}
            <>
                <Placeholder index={"0"} moveItem={moveItem} />
                <RenderList/>
            </>
        </section>
    </>
}