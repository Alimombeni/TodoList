
import './item.css';
import {useState} from "react";

function Item ({onDelete,work}) {
const [check, setCheck]=useState(false)

    function toggle () {
    setCheck(!check)
    }

    return (
        <div className='item_align'>
            <li className='list_item'>
                {/* eslint-disable-next-line react/prop-types */}
                <span className='delete_item' onClick={()=>onDelete(work.id)}>🗑️</span>
            </li>
            <input type="checkbox" value={check} onChange={toggle} />
        </div>
    )
}


export default Item