import { useEffect } from "react"
import {model} from "../../model"

export default function ToDoElement(){

    return(
        <div className="ToDoElement">
            <ol className="ToDoElement__menu">
                {model.map(el => <li className="ToDoElement__menu-list" key={el.key}>{el.name}</li>)}
            </ol>
        </div>
    )
}