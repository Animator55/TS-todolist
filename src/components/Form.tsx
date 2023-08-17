import React from "react";
import { Item } from "../vite-env";

interface Props {
    submit: CallableFunction
}

export default function Form({submit}: Props) {

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault();
        let inputs: NodeListOf<ChildNode> = e.currentTarget.previousElementSibling!.childNodes!
        let values: Item = {id: Math.floor(Math.random()*1000)}
        for (let i=0; i<inputs.length; i++) {
            const input = inputs[i] as HTMLInputElement
            values = {...values, [input!.name!]: input.value}
        }
        
        submit(values)
    }
  return (
    <div>Form
        <section>
            <input name="title" placeholder="Item title"/>
            <input name="type" placeholder="Item type"/>
            <input name="description" placeholder="Item description"/>
        </section>
        <button onClick={handleSubmit}>Add</button>
    </div>
  )
}