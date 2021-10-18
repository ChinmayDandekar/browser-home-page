import React from 'react'
import '../assets/taskContainer.css'
import Button from './Button'
import InputComponent from './InputComponent'
import Tasks from './Tasks'

const TaskContainer = () => {

    const task = [
        {
            id: 1,
            task: "Classwork",
            time: "2.00pm 5 October 2021"
        },
        {
            id: 2,
            task: "Homework",
            time: "2.00pm 5 October 2021"
        },
        {
            id: 3,
            task: "Assignments",
            time: "2.00pm 5 October 2021"
        },
        {
            id: 4,
            task: "Experiments",
            time: "2.00pm 5 October 2021"
        }
    ]

    const [tasks, setTask] = React.useState(task)

    const formToggle = () => {
        var bookmarkForm = document.getElementById('task-form');
        let addButton = document.getElementById("close2")
        if (bookmarkForm.style.display === "none") {
          addButton.innerHTML = "Close";
          bookmarkForm.style.display = "block";
        } else {
          addButton.innerHTML = "Add";
          bookmarkForm.style.display = "none";
        }
    }

    const addTask = () => {
        let id = tasks.length + 1;
        let task = document.forms['task-form']['task-info'].value;
        let time = document.forms['task-form']['task-time'].value;
        let newTask = {
            id: id,
            task: task,
            time: time,
        }
        
        setTask([...tasks, newTask]);
        document.forms['task-form']['task-info'].value = "";
        document.forms['task-form']['task-time'].value = "";

    }

    const deleteTask = (id) => {
        setTask(tasks.filter((task) => task.id !== id));
    }
    return (
        <div className="task-container">
            <h1><span>Tasks:</span><Button name="close2" title='Add' onClick={ formToggle} /></h1>
            <ul>
                <InputComponent Function={addTask} className="site" Name1="task-info" Name2="task-time" Placeholder1="Task" Placeholder2="Date & Time" ButtonTitle="+" ButtonLength={120} ButtonSize={16} formName="task-form" InputWidth={ 275 } />
                <Tasks tasks={tasks} onDelete = {deleteTask} />
            </ul>
        </div>
    )
}

export default TaskContainer
