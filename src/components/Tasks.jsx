import React from 'react'

const Tasks = ({tasks, onDelete}) => {
    return (
        <div className="tasks">
            {tasks.map((task) => <h6 key={ task.id } className="task"><i className="bi bi-journal-text" />{task.task} <i onClick={()=>onDelete(task.id)} className="bi bi-journal-x"></i></h6>)}
        </div>
    )
}

export default Tasks
