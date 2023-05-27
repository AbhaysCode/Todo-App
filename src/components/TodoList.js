import React from 'react'
import TodoListItem from './TodoListItem.js'

const TodoList = ({todos,handleTaskChange,handleDeleteTodo}) => {
  console.log("Value of todos is in todolist.js : ",todos);
  return (
    <div className='row p-3'>
    {todos.map((todoItem)=>{
        return (<TodoListItem
         id={todoItem._id}
         key={todoItem._id}
         handleDeleteTodo={handleDeleteTodo}
         date={todoItem.date} 
         time={todoItem.time} 
         task={todoItem.task} 
         category={todoItem.category}
         priority={todoItem.priority}
         handleTaskChange={handleTaskChange}
         />)
    })}
    </div>
  )
}

export default TodoList
