import React from 'react'
import Todo from '../Model/todoModel'
interface Props{
    todo:Todo
    setTodos:(x:(todos:Todo[])=>Todo[])=>void
}

function Item({todo ,setTodos}:Props) {
    const handeleComplited = (checked:boolean) =>{
        setTodos(todos => {
            const copy = [...todos]
            console.log(copy)
            const td = copy.find(curr => curr.id === todo.id)
            td!.complited = checked
            return copy
        })
    };
  return (
    <div className='item'>
        <input type="checkbox" 
        checked={todo.complited}
        onChange={e=>handeleComplited(e.target.checked)}
        />
        <p>{todo.title}</p>
        <p>{todo.create_at.toLocaleString()}</p>
        <button>delete</button>
    </div>
  )
}

export default Item
