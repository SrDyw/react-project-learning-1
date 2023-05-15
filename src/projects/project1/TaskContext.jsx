import { createContext, useState, useEffect } from "react";
import { tasks as data } from "./task";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        setTasks(data);
    }, []);
  
    function createTask(task) {
      setTasks([...tasks, task]);
    }

    function deleteTask(id) {
        setTasks(tasks.filter(task => task.id != id)) 
    }

    return (
        <TaskContext.Provider value={{tasks, createTask, deleteTask}}>
            { props.children }
        </TaskContext.Provider>
    );
}


