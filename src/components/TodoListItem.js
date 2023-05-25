import React, { useState } from 'react'
import './TodoListItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const TodoListItem = ({id,date,time,task,priority,handleDeleteTodo,handleTaskChange}) => {

  const [updatedTask,setUpdatedTask] = useState(task);

  const handleDelete = (todoId) => {
    handleDeleteTodo(todoId);
  };

  const handleTitleChange = (e) => {
    const updatedTaskInput = e.target.textContent;
    setUpdatedTask(updatedTaskInput);
  };

  const handleSaveChange = () =>{
    handleTaskChange(id, updatedTask);
  }
  
  return (
    <div  className='col-lg-3 col-md-6 col-sm-12 mb-4'>
       <div className={`card shadow-lg sticky-note hoverable ${
              priority === 'high'
                ? 'bg-danger'
                : priority === 'medium'
                ? 'bg-warning'
                : 'bg-info'
            }`}
          >
             <div className="delete-icon" onClick={() => handleDelete(id)}>
              <FontAwesomeIcon type='button' icon={faTrash} />
            </div>
            <div className="card-body">
                <div className="card-title"
                 contentEditable="true"
                 onInput={handleTitleChange}
                 onBlur={handleSaveChange}
                 suppressContentEditableWarning={true}
                 style={{ fontFamily: "'Open Sans', 'Arial', 'sans-serif'"}}
                >{task}</div>
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
