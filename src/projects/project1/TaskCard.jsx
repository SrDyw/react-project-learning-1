import {TaskContext} from './TaskContext'
import {useContext} from 'react'

export default function TaskCard({ task }) {
    const {deleteTask} = useContext(TaskContext);

    return (
        <div className='box-border p-4 bg-slate-900 mb-4 rounded-md text-white bg-cyan-950 text-center'>
            <h1 className='text-2xl mb-4'>{task.name}</h1>
            <p className='mb-2'> Tiempo: {task.esTime}</p>
            <button className='px-2 py-1 bg-red-500 rounded-md' onClick={() => deleteTask(task.id)}>Eliminar</button>
        </div>
    );
}
