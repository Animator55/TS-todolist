import React from 'react'
import './assets/App.css'
import { Item } from './vite-env'
import List from './components/List'
// import Form from './components/Form'

let INITIAL_STATE: Item[] = [
  {
    "id": 101321,
    "title": "Priority, progress, info", 
    "priority": "Normal",
    "description": "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de ",
    subItems: []
  },
  {
    "id": 6464564,
    "title": "Subtasks, expand and dnd", 
    "priority": "Important",
    "description": "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de Lorem Ipsum es simplemente y archivos de texto. Lorem Ipsum ha sido el texto de ",
    subItems: []
  },
  {
    "id": 5346363,
    "title": "sort, divisions and config", 
    "priority": "Important",
    "description": "texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de ",
    subItems: []
  },
  {
    "id": 678678,
    "title": "add, delete and edit items", 
    "priority": "Urgent",
    "description": "archivos de texto. Lorem Ipsum ha sido el texto de ",
    subItems: []
  },
  {
    "id": 678567543,
    "title": "CSS styling", 
    "priority": "Normal",
    "description": "eno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto ",
    subItems: []
  },
]

export default function App() {
  const [list, setList] = React.useState<Array<Item>>([])

  React.useEffect(()=>{
    setList(INITIAL_STATE)
  }, [])

  // const addItem = (data: Item)=>{
  //   setList([...list, data])
  // }

  return <main>
    <List array={list}/>
    {/* <Form submit={addItem}/> */}
  </main>
}

