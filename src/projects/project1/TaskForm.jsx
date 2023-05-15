import {useContext} from 'react'
import { TaskContext } from './TaskContext'

function TaskForm() {
    // function buttonEventHandler(e) {

    // }

    const { tasks, createTask } = useContext(TaskContext);

    function formEventHandler(e) {
        e.preventDefault()
        const taskName = document.getElementById("input").value;

        const newTask = {
            id: tasks.length,
            name: taskName,
            esTime: "10ns",
            priority: 0
        }

        createTask(newTask);
    }


    return (
        <div>
            <form action="" onSubmit={formEventHandler}>
                <input type="text" placeholder="Escribe alguito" id="input"/>
                <button>Guardar</button>
            </form>
        </div>
    );
}

export default TaskForm;
