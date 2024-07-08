import Button from "./Button.jsx";

import './form.css';
import {useState} from "react";
import List from "./List.jsx";
function Form () {





return (
    <form  className='form'>
            <h1>To-Do List</h1>
        <div className='header'>

            <Button>+</Button>
        </div>
        <List />
    </form>
)
}



export default Form