import React from 'react'
import './assets/App.css'
import { Item } from './vite-env'
import List from './components/List'
import Form from './components/Form'

let INITIAL_STATE: Item[] = [
  {
    "id": 101321,
    "title": "Item 1", 
    "type": "normal",
    "description": "this is the item 1",
    subItems: []
  },
  {
    "id": 6464564,
    "title": "Item 2", 
    "type": "rare",
    "description": "this is the item 2",
    subItems: []
  },
]

export default function App() {
  const [list, setList] = React.useState<Array<Item>>([])

  React.useEffect(()=>{
    setList(INITIAL_STATE)
  }, [])

  const addItem = (data: Item)=>{
    setList([...list, data])
  }

  return <main>
    <List array={list}/>
    {/* <Form submit={addItem}/> */}
  </main>
}

