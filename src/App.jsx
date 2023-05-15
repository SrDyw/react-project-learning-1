import TaskList from './projects/project1/TaskList'
import TaskForm from './projects/project1/TaskForm'

import {useState, useEffect} from 'react'

export default function App() {
  return (
    <main className='bg-zinc-950 h-screen'>
      <div className='container mx-auto p-4'>
        <TaskForm/>
        <TaskList/>
      </div>
    </main>
  )
}
