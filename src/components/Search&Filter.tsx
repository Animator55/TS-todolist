import React from 'react'
import SortSpan from './SortSpan'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

interface Props {
    query: { query: string, setQuery: React.Dispatch<React.SetStateAction<string>> }
    sort: { sort: string[], sortList: string[], setSort: React.Dispatch<React.SetStateAction<string[]>> }
}

// {selec, query, sort, dis, queryList}
export default function SearchAndFilter({ query, sort }: Props) {

    const Search = (e: React.KeyboardEvent<HTMLInputElement>) =>{
        let target: HTMLInputElement = e.currentTarget
        query.setQuery(target.value)
    }

    return <div className="search-filter">
        {/* {selec !== undefined ? selec.selected.length > 0 ? <>
                <button className="btn-cblack" onClick={()=>{setPopUp(true)}}>
                    <div className='trash-icon'></div>
                </button>
            </> : null : null} */}

        <section className='search-input'>
            <label><FontAwesomeIcon icon={faMagnifyingGlass}/></label>
            <input defaultValue={query.query} onKeyUp={Search} placeholder='Search here' />
        </section>

        {/* {dis !== undefined ? <button className="btn-cblack" onClick={()=>{dis.setDisplay([dis.display[0] === "grid" ? "list" : "grid", dis.display[1]])}}>
                <div 
                    className={`display-${dis.display[0]}-icon`}
                ></div>
            </button> : null} */}

        {sort !== undefined ? <SortSpan sortObj={sort}/> : null}
    </div>
}