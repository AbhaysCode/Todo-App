import React from 'react'
import TodoListItem from './TodoListItem.js'

const TodoList = ({todos}) => {
  return (
    <div>
    {todos.map((todoItem,index)=>{
        return (<TodoListItem
         key={index}
         date={todoItem.date} 
         time={todoItem.time} 
         task={todoItem.task} 
         category={todoItem.category}
         priority={todoItem.priority}
         />)
    })}
    </div>
  )
}

export default TodoList
