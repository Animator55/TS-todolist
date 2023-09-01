import React from 'react'
import { Item } from '../vite-env'
import DraggableItem from './DraggableItem'
import Placeholder from './Placeholder'
import SearchAndFilter from './Search&Filter'
import moveItemFunc from '../logic/moveItem.ts'
import sortArray from '../logic/sortList.ts'

interface Props {
    array: Item[]
}

// type priorityLevel = {
//     [key: string]: string
// }

export default function List({ array }: Props) {
    const [query, setQuery] = React.useState("")
    const [sort, setSort] = React.useState(["0", ""])
    // const [viewGroups, setViewGroups] = React.useState(false)
    const [refresh, activateRefresh] = React.useState(false)
    const [List, setList] = React.useState<Item[]>([])
    // const [popUp, setPopUp] = React.useState([false, undefined])
    const [lastMove, setLastMove] = React.useState(["source", "target"])
    // const [autoList, setAutoList] = React.useState([])

    const moveItem = (source: string, target: string) => {
        let move = moveItemFunc({ source, target, List })
        // if(move.length !== 0) setLastMove(move)
        // else 
        activateRefresh(!refresh)
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
        if(sort[0] === "0") return
        let newList = sortArray({sort, List})
        setList(newList)
    }, [sort])

    React.useEffect(()=>{
        setList(array)
    }, [array])

    // React.useEffect(()=>{
    //     setRejectedMoves(["source", "target"])
    // }, [refresh, query])

    const RenderList = ()=>{
        // let array = [...List]
        // if(viewGroups) {
        //     array = sortArray({sort: ["1", "priority"], "List": array})
        // }

        // const priorityLevels: priorityLevel = {0: "Low Priority", 1: "Medium Priority", 2: "High Priority"}

        // let previousPriority: number = -1

        return List.length > 0 && array.map((section, i) => {
            // let changeBool = previousPriority !== section.priority
            // previousPriority = section.priority
            // let rejected = rejectedMove[0] === `${i}` ? true : rejectedMove[1][0] === `${i}` ? false : undefined 
            return (<React.Fragment key={Math.random()}>
                {/* {changeBool && <h3>{priorityLevels[section.priority]}</h3>} */}
                <DraggableItem
                    item={{ data: section, index: i }}
                    query={query}
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