/// <reference types="vite/client" />

export interface SubItem {
  id: number
  title?: string
  description?: string
  priority?: string
}

export interface Item {
    id: number
    title?: string
    description?: string
    priority?: string
    subItems?: SubItem[]
  }