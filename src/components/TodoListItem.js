import React from 'react'

const TodoListItem = ({date,time,task,priority,category}) => {
  return (
    <div>
      <p>Date - {date}</p>
      <p>Time - {time}</p>
      <p>Task - {task}</p>
      <p>Priority - {priority}</p>
      <p>Category - {category}</p>
    </div>
  )
}

export default TodoListItem
