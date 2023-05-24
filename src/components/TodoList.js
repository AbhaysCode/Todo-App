import React from 'react'
import TodoListItem from './TodoListItem.js'

const TodoList = ({todos}) => {
  const onDeleteTodo = (id) =>{
    console.log("In TodoList.js id of item to be deleted is ",id);
  }
  return (
    <div className='row p-3'>
    {todos.map((todoItem,index)=>{
        return (<TodoListItem
         key={index}
         onDeleteTodo={onDeleteTodo}
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
