import React from 'react'
import './TodoListItem.css'

const TodoListItem = ({date,time,task,priority,onDeleteTodo}) => {
  const handleDelete = (todoId) => {
    onDeleteTodo(todoId);
  };
  return (
    <div  className='col-lg-3 col-md-6 col-sm-12 mb-4'>
       <div className={`card sticky-note ${
              priority === 'high'
                ? 'bg-danger'
                : priority === 'medium'
                ? 'bg-warning'
                : 'bg-info'
            }`}
          >
            <button
              type="button"
              className="btn-close close-btn"
              onClick={() => handleDelete(task)}
            ></button>
            <div className="card-body">
              <h5 className="card-title">{task}</h5>
            </div>
            <hr className='custom-hr'/>
            <div className="card-text row">
                <div className="col-8">{date}</div>
                <div className="col-4">{time}</div>
              </div>
          </div>
    </div>
  )
}

export default TodoListItem
