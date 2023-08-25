import React from 'react'
import { Item } from '../vite-env'
import DraggableItem from './DraggableItem'
import Placeholder from './Placeholder'
import SearchAndFilter from './Search&Filter'
import moveItemFunc from '../logic/moveItem.ts'

interface Props {
    array: Item[]
}

export default function List({ array }: Props) {
    const [query, setQuery] = React.useState("")
    const [refresh, activateRefresh] = React.useState(false)
    const List = array
    // const [popUp, setPopUp] = React.useState([false, undefined])
    // const [rejectedMove, setRejectedMoves] = React.useState(["source", "target"])
    // const [autoList, setAutoList] = React.useState([])

    const moveItem = (source: string, target: string) => {
        // let cancel =
        moveItemFunc({ source, target, List })
        // if(cancel !== undefined) setRejectedMoves(cancel)
        // else 
        activateRefresh(!refresh)
    }

    // React.useEffect(()=>{
    //     setRejectedMoves(["source", "target"])
    // }, [refresh, query])

    return <div>
        <SearchAndFilter query={{ query: query, setQuery: setQuery }} />
        <section className='drag-n-drop-zone' data-dragging="false">
            {/* <AutoComplete autoList={autoList} queryList={queryList}/> */}
            {/* <AddBtn click={()=>{changeList(true)}}/> */}
            <>
                <Placeholder index={"0"} moveItem={moveItem} />
                {List.map((section, i) => {
                    // let rejected = rejectedMove[0] === `${i}` ? true : rejectedMove[1][0] === `${i}` ? false : undefined 
                    return (<React.Fragment key={Math.random()}>
                        <DraggableItem
                            item={{ data: section, index: i }}
                            query={query}
                        />
                        <Placeholder index={`${i + 1}`} moveItem={moveItem} />
                    </React.Fragment>)
                })}
            </>
        </section>
    </div>
}