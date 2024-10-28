import React, { useState } from 'react'
import Todo from '../Model/todoModel'
interface Props{
    setTodos:(x:(todos:Todo[])=>Todo[])=>void
}


function Add({setTodos}:Props) {
    const [title ,setTitle] = useState("")
    const addToto = () => {
        const todo = new Todo(title)
        setTodos(todos =>[...todos ,todo])
        setTitle("")

    }
    return (
    <div className='add card'>
        <input type="text"
         placeholder='your input'
         onChange={e => setTitle(e.target.value)}
         value={title}
          />
          {/* <p>{title}</p> */}
        <button onClick={addToto}>add</button>
      
    </div>
  )
}

export default Add
