import {useContext} from 'react'
import { TaskContext } from './TaskContext'

function TaskForm() {
    // function buttonEventHandler(e) {

    // }

    const { tasks, createTask } = useContext(TaskContext);

    function formEventHandler(e) {
        e.preventDefault()
        const taskName = document.getElementById("input").value;
        const taskTiempo = document.getElementById("inputTime").value;

        const newTask = {
            id: tasks.length,
            name: taskName,
            esTime: taskTiempo + "ns",
            priority: 0
        }

        createTask(newTask);
    }


    return (
        <div className='max-w-sm px-4 py-8 mx-auto bg-sky-950 mb-10 rounded-md'>
            <h1 className='text-center text-white text-4xl mb-4'>Crea una tarea</h1>
            <form action="" onSubmit={formEventHandler} className='flex flex-col gap-4'>
                <input type="text" placeholder="Nombre de la tarea" id="input" className='p-1'/>
                <input type="number" placeholder="Tiempo" id="inputTime" className='p-1'/>
                <button className='p-1 bg-sky-600 text-white'>Guardar</button>
            </form>
        </div>
    );
}

export default TaskForm;
