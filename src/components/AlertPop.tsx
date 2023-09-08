import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Props {
    confirm: VoidFunction  
    close: VoidFunction
}

export default function AlertPop({confirm, close}: Props) {
  return (
    <section className='blur' onClick={(e)=>{if(e.currentTarget?.className === "blur") close()}}>
        <div className='pop-up'>
            <h1>Confirm action</h1>
            <button onClick={confirm}><FontAwesomeIcon icon={faCheck} /></button>
            <button onClick={close}><FontAwesomeIcon icon={faXmark} /></button>
        </div>
    </section>
  )
}