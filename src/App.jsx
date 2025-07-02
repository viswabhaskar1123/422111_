import { useState } from 'react'
import { FaPlus, FaTrash, FaCheck } from 'react-icons/fa'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')

  const addTask = (e) => {
    e.preventDefault()
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }])
      setNewTask('')
    }
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  return (
    <div className="app">
      <h1>Task Manager</h1>
      <p>ADD/REMOVE/COMPLETE TASKS</p>
      <form onSubmit={addTask} className="task-form">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task..."
          className="task-input"
        />
        <button type="submit" className="add-button">
          <FaPlus />
        </button>
      </form>
      <ul className="task-list">
        {tasks.map(task => (
          <li key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
            <span className="task-text">{task.text}</span>
            <div className="task-actions">
              <button
                onClick={() => toggleTask(task.id)}
                className={`toggle-button ${task.completed ? 'completed' : ''}`}
              >
                <FaCheck />
              </button>
              <button
                onClick={() => deleteTask(task.id)}
                className="delete-button"
              >
                <FaTrash />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App 
