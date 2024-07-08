
import Form from "./component/Form.jsx";

import './App.css';
import {useState} from "react";



const mydata=[
    {id:1, name:'go to the gym',},
    {id:2, name:'walking with my friend',},
    {id:3, name:'set time for interview',}
]

function App() {
    const [work ,setWork] =useState('')
    const [works , setWorks] = useState(mydata)

    //function for add newobject data from Form to Data state (work)=> (works)
    function addHnadle (newwork) {
        setWorks((prevWork) =>[...prevWork , newwork])
    }
function handleDelete (id) {
        setWorks((prevwork)=>prevwork.filter((work)=>(work.id !== id)))
}
  return (
      <>
        <div className='app'>
        {/*   all functional pass with props to form */}
        <Form addWork={addHnadle}
        work={work}
        setwork={setWork}
              works={works}
              onDelete={handleDelete}

        />
        </div>
      </>
  )
}

export default App
