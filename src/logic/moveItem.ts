import { Item, SubItem } from "../vite-env"

interface Props {
    source: string
    target: string
    List: Item[]
}

export default function moveItemFunc ({source, target, List}: Props): Array<string | undefined> {
    if(source === target || List.length === 0) return []
    let itemP: Item = {id: 2, checked: false, created: 0, title: "", description:"", priority: 0, subItems: []}
    let subItemP: SubItem = {id: 2, checked: false, created: 0, title: "", description:"", priority: 0}

    let item
    let subItem

    console.log(source, target)
    let SourceSplit: string[] = source.split("-") 
    let TargetSplit: string[] = target.split("-") 
    console.log("SOURCE ", source, "TARGET ", target)

    let ItemSource = Number(SourceSplit[0])
    let SubItemSource = Number(SourceSplit[1])
    let ItemTarget = Number(TargetSplit[0])
    let SubItemTarget = Number(TargetSplit[1])

    //checking and trowing error
    // if(List[ItemSource].subItems!.length !== 0 && SourceSplit.length === 1 && TargetSplit.length > 1) 
    // return [SourceSplit.join("-"), TargetSplit.join("-")]

    //getting item
    if(SourceSplit.length > 1) {
        subItem = List[ItemSource].subItems!.splice(SubItemSource, 1, subItemP)[0]
    }
    else item = List.splice(ItemSource, 1, itemP)[0]

    //setting item
    if(TargetSplit.length > 1 && subItem !== undefined) {
        List[ItemTarget].subItems!.splice(SubItemTarget, 0, subItem)
    }
    else if(item !== undefined) List.splice(ItemTarget, 0, item)

    //deleting placeholder
    if(SourceSplit.length === 1) {
        for (const item of List) {
            if(item.id === 2) {
                List.splice(List.indexOf(item), 1)
                break
            }
        }
    }
    else {
        //deleting level 2 placeholder

        for (const item of List) {
            if(item.subItems === undefined) continue
            for (const subItem of item.subItems) {
                if(subItem.id === 2) {
                    item.subItems.splice(item.subItems.indexOf(subItem), 1)
                    break
                }
            }   
        }
    }
    return []

}
