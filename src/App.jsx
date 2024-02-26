import ToDoList from "./components/ToDoList/ToDoList"
import './App.css'
import {model} from "./model"
import { useState } from "react"
import { useRef } from "react"

export default function App() {
  const [value, setValue] = useState()
  const ref = useRef()
  return (
    <>
    <div className="wrapper">
      <main className="main">
        <div className="container">
          <div className="Form__menu">
            <h1 className="Form__menu-title">ToDoList</h1>

            <input className="Form__mneu-input" type="text" placeholder="Введите список дел!" ref={ref}/>

            <button className="Form__menu-button"
            onClick={() =>
            {
                setValue(() => ref.current.value)
                model.push({key: model.length ,name: ref.current.value})
            }}>
            добавить список дел
            </button>
          </div>
          <ToDoList/>
        </div> 
      </main>
    </div>
      
    </>
  )
}
