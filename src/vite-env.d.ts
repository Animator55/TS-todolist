/// <reference types="vite/client" />

export interface SubItem {
  id: number
  checked: boolean
  created: number
  title: string
  description: string
  priority: number
}

export interface Item {
    id: number
    checked: boolean
    created: number,
    title: string
    description: string
    priority: number
    subItems: SubItem[]
    tags?: string[]
  }