import React from 'react'
import './assets/App.css'
import { Item } from './vite-env'
import List from './components/List'
// import Form from './components/Form'

const INITIAL_STATE: Item[] = [
  {
    "id": 101321,
    checked: false,
    created: 56325743674,
    "title": "Priority, progress, date, viewId, info", 
    "priority": 0,
    "description": "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de ",
    subItems: []
  },
  {
    "id": 6464564,
    "checked": false,
    created: 6876783547,
    "title": "Subtasks, expand and dnd", 
    "priority": 1,
    "description": "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de Lorem Ipsum es simplemente y archivos de texto. Lorem Ipsum ha sido el texto de ",
    subItems: [
      {
        id: 5146514,
        checked: false,
        created: 6876786,
        title: "Subtasks visuals",
        description: "",
        priority: 1,
      },
      {
        id: 453252,
        checked: true,
        created: 606687678678,
        title: "Subtasks calc",
        description: "",
        priority: 0,
      },
      {
        id: 453252,
        checked: false,
        title: "Subtasks dnd",
        description: "",
        priority: 0,
        created: 68767867867,
      },
    ]
  },
  {
    "id": 5346363,
    "checked": false,
    created: 58635464756,
    "title": "sort, divisions and config", 
    "priority": 1,
    "description": "texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de ",
    subItems: [
      {
        id: 453252,
        checked: false,
        created: 123460,
        title: "Subtasks dnd",
        description: "",
        priority: 0,
      },
    ]
  },
  {
    "id": 678678,
    "checked": false,
    created: 658746760,
    "title": "add, delete and edit items", 
    "priority": 2,
    "description": "archivos de texto. Lorem Ipsum ha sido el texto de ",
    subItems: [
      {
        id: 453252,
        checked: false,
        created: 87967563450,
        title: "Subtasks dnd",
        description: "",
        priority: 0,
      },
      {
        id: 453252,
        checked: false,
        created: 8795460,
        title: "Subtasks dnd",
        description: "",
        priority: 0,
      },
    ]
  },
  {
    "id": 678567543,
    "checked": true,
    created: 8979790,
    "title": "CSS styling", 
    "priority": 0,
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

