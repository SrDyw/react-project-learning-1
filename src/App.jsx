import TaskList from './projects/project1/TaskList'
import TaskForm from './projects/project1/TaskForm'

import {useState, useEffect} from 'react'

export default function App() {
  return (
    <>
      <TaskForm/>
      <TaskList/>
    </>
  )
}
