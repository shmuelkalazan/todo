import React from 'react'
import Todo from '../Model/todoModel'
import Item from './Item'
interface Props{
    todos:Todo[]
    setTodos:(x:(todos:Todo[])=>Todo[])=>void

}

function List({todos ,setTodos}:Props) {
  return (
    <div className='list card'>
    {/* {JSON.stringify(todos[0].title)} */}
    {/* {todos.map(item =><h1>{item.title}</h1>)} */}
    {todos.map(todo => <Item key={todo.id} todo={todo} setTodos={setTodos}/>)}

    </div>
  )
}

export default List
