import { Item } from "../vite-env"

interface Props {
    sort: string[]
    List: Item[]
}

const sortArray = ({sort, List}: Props) => {
    if(sort[0] === "0") return List
    let newList = [...List]
    
    const convertUpperCase = (val: any)=>{
        if(typeof val === "string") return val.toUpperCase()
        else return val
    }

    newList.sort((a, b) => {
        let [nameA, nameB] = [convertUpperCase(a[sort[1] as keyof Item]), convertUpperCase(b[sort[1] as keyof Item])]
        if (nameA < nameB) return -1
        if (nameA > nameB) return 1
        return 0
    })
    if(sort[0] === "-1") newList.reverse()
    return newList
    
}

export default sortArray