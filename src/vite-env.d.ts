/// <reference types="vite/client" />

export interface SubItem {
  id: number
  title?: string
  description?: string
  type?: string
}

export interface Item {
    id: number
    title?: string
    description?: string
    type?: string
    subItems?: SubItem[]
  }