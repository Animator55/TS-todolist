import { Item } from '../vite-env'

interface Props {
    array: Item[]
}

export default function List({array}: Props) {
  return <ul className='list'>
    {array.map((item)=>{
        return <li className='item' key={item.id}>{item.title}</li>
    })}
  </ul>
}