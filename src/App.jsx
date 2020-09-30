// Platform specific imports
import TodoItem from './components/TodoItem'
import './App.css'

// Cross-Platform imports
import React from 'react'
import { useChatApp } from 'shared/hooks'

function App() {
  const chatAppData = useChatApp()
  const { input, setInput, items, addItem, removeItem } = chatAppData

  return (
    <div className="todolist">
      <div className="heading">
        <h1 className="title">To-Do List</h1>
      </div>
      <input
        type="text"
        value={input}
        onChange={(event) => {
          setInput(event.target.value)
        }}
      />
      <button onClick={addItem}>Add</button>

      <div className="items">
        <ul>
          {items.map((item, index) => (
            <TodoItem key={index} id={index} item={item} onCheck={removeItem} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
