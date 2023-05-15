import { TaskContext } from './TaskContext'
import {useContext} from 'react'
import TaskCard from './TaskCard'


export default function TaskList() {

    const { tasks } = useContext(TaskContext);


    if (tasks.length === 0) {
        return <h1>No hay tareas</h1>;
    }
    return (
        <div className='grid grid-cols-4 gap-2'>
            {
                tasks.map((task, i) => (
                    <TaskCard task = {task} key={task.id}/>
                ))
            }
        </div>
    );
}
