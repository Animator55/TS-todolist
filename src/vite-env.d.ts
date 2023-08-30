/// <reference types="vite/client" />

export interface SubItem {
  id: number
  check: boolean
  title?: string
  description?: string
  priority?: string
}

export interface Item {
    id: number
    check: boolean
    title?: string
    description?: string
    priority?: string
    subItems: SubItem[]
  }