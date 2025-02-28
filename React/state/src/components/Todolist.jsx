import {useState} from 'react'

function Todolist() {

    // const tasks = [
    //     { id: 1, task: "Milch kaufen", checked: true },
    //     { id: 2, task: "Müll Rausbringen", checked: false },
    //     { id: 3, task: "Geschirr spülen", checked: false },
    //   ];

    const [tasks, setTasks] = useState(["Todoliste Fertig Bauen"])  // Die Ganze Todo Liste
    const [newTask, setNewTask] = useState("")  // Für den User Input

    const list = tasks.map((element, index) => (
        <li key={index}>{element}</li>
    ))

    const addTask = () => {
        setTasks([...tasks, newTask])
        setNewTask("")
    }

    const saveNewTask = (event) => {
        setNewTask(event.target.value)
    }

  return (
    <div>
        <input type="text" value={newTask} onChange={saveNewTask} placeholder='Neue Aufgabe'/>
        <button onClick={addTask}>Add Task</button>
        <ul>{list}</ul>
    </div>
  )
}

export default Todolist