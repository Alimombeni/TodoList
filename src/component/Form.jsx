import Button from "./Button.jsx";

import './form.css';
import {useState} from "react";
import List from "./List.jsx";
function Form ({work , setwork,addWork , onDelete , works}) {


function handleSubmit(e){
    e.preventDefault()

    const newworkObj={
    id:Date.now(),
        name:work,

    }
    addWork(newworkObj)
    setwork('')
}


return (
    <form onSubmit={handleSubmit}  className='form'>
            <h1>To-Do List</h1>
        <div className='header'>

            <Button>+</Button>
        </div>
        <List works={works} onDelete={onDelete} />
    </form>
)
}



export default Form