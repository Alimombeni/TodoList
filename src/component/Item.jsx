
import './item.css';
import {useState} from "react";

function Item () {


    return (
        <div className='item_align'>
            <li className='list_item'>
                {/* eslint-disable-next-line react/prop-types */}
                <span className='delete_item' >🗑️</span>
            </li>
            <input type="checkbox" />
        </div>

    )

}


export default Item