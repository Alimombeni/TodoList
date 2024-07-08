
import Form from "./component/Form.jsx";

import './App.css';
import {useState} from "react";



const mydata=[
    {id:1, name:'go to the gym',},
    {id:2, name:'walking with my friend',},
    {id:3, name:'set time for interview',}
]

function App() {

  return (
      <>
        <div className='app'>
        {/*   all functional pass with props to form */}
        <Form/>
        </div>
      </>
  )
}

export default App
