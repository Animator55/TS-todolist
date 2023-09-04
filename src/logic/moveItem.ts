import { Item } from "../vite-env"

interface Props {
    source: string
    target: string
    List: Item[]
}

export default function moveItemFunc ({source, target, List}: Props): number {
    if(source === target || List.length === 0) return -1
    let itemP: Item = {id: 2, checked: false, created: 0, title: "", description:"", priority: 0, subItems: []}

    //getting item
    let item = List.splice(Number(source), 1, itemP)[0]

    //setting item
    if(item !== undefined) List.splice(Number(target), 0, item)

    //deleting placeholder
    for (const item of List) {
        if(item.id === 2) {
            List.splice(List.indexOf(item), 1)
            break
        }
    }
    
    return item !== undefined ? item.id : -1

}
