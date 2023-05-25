import React from 'react'
import TodoListItem from './TodoListItem.js'

const TodoList = ({todos,handleTaskChange,handleDeleteTodo}) => {
  return (
    <div className='row p-3'>
    {todos.map((todoItem)=>{
        return (<TodoListItem
         id={todoItem.id}
         key={todoItem.id}
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
