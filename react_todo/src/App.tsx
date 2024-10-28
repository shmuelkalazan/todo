import { useState } from "react"
import Add from "./components/Add"
import List from "./components/List"
import Todo from "./Model/todoModel"

function App() {
  const [todos , setTodos] = useState<Todo[]>([])
  
  // console.log(new Todo("do something"))
  return (
    <div className="app"> 
    {/* <p>{todos.length +1}</p> */}
      <Add setTodos={setTodos}/>
      <List todos={todos} setTodos={setTodos}/>
    </div>
  )
}

export default App
