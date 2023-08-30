import React from 'react'
import './assets/App.css'
import { Item } from './vite-env'
import List from './components/List'
// import Form from './components/Form'

let INITIAL_STATE: Item[] = [
  {
    "id": 101321,
    "check": false,
    "title": "Priority, progress, date, viewId, info", 
    "priority": "Normal",
    "description": "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de ",
    subItems: []
  },
  {
    "id": 6464564,
    "check": false,
    "title": "Subtasks, expand and dnd", 
    "priority": "Important",
    "description": "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de Lorem Ipsum es simplemente y archivos de texto. Lorem Ipsum ha sido el texto de ",
    subItems: [
      {
        id: 5146514,
        check: false,
        title: "Subtasks visuals",
        description: "",
        priority: "Important",
      },
      {
        id: 453252,
        check: true,
        title: "Subtasks calc",
        description: "",
        priority: "Normal",
      },
      {
        id: 453252,
        check: false,
        title: "Subtasks dnd",
        description: "",
        priority: "Normal",
      },
    ]
  },
  {
    "id": 5346363,
    "check": false,
    "title": "sort, divisions and config", 
    "priority": "Important",
    "description": "texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de ",
    subItems: [
      {
        id: 453252,
        check: false,
        title: "Subtasks dnd",
        description: "",
        priority: "Normal",
      },
    ]
  },
  {
    "id": 678678,
    "check": false,
    "title": "add, delete and edit items", 
    "priority": "Urgent",
    "description": "archivos de texto. Lorem Ipsum ha sido el texto de ",
    subItems: [
      {
        id: 453252,
        check: false,
        title: "Subtasks dnd",
        description: "",
        priority: "Normal",
      },
      {
        id: 453252,
        check: false,
        title: "Subtasks dnd",
        description: "",
        priority: "Normal",
      },
    ]
  },
  {
    "id": 678567543,
    "check": true,
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

