import {TaskContext} from './TaskContext'
import {useContext} from 'react'

export default function TaskCard({ task }) {
    const {deleteTask} = useContext(TaskContext);

    return (
        <div>
            <h1>{task.name}</h1>
            <p> {task.esTime}</p>
            <button onClick={() => deleteTask(task.id)}>Eliminar</button>
        </div>
    );
}
