import React from 'react'
import { useState } from 'react';
import './AddButton.css';
import { v4 as uuidv4 } from 'uuid';

const AddTodoForm = ({addTodo,toggleFormVisibility}) => {
    const [formData, setFormData] = useState({
        id:uuidv4(),
        date: '',
        time: '',
        task: '',
        category: '',
        priority: '',
        isEditing:false
      });
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
        
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        toggleFormVisibility();
        addTodo(formData);
        console.log("FormData,Submit is Clicked",formData);
        setFormData({
          id:uuidv4(),
          date: '',
          time: '',
          task: '',
          category: '',
          priority: '',
          isEditing:false
        });
      };

    const isSubmitDisabled = Object.values(formData).some((value) => value === '');
  return (
    <div className='container d-flex justify-content-center align-items-center vh-100'>
        <form onSubmit={handleSubmit} className='d-flex flex-column custom-form '>
            <h3>Add Task</h3>
            <div className='row'>
                <div className="mb-2 col">
                <label htmlFor="date" className="form-label">
                  Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-2 col">
                <label htmlFor="time" className="form-label">
                  Time
                </label>
                <input
                  type="time"
                  className="form-control"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
           <div className="form-group mb-2">
              <label htmlFor="task">Task</label>
              <textarea 
              name='task'
              className="form-control"
              id="task" 
              rows="4" 
              value={formData.task} 
              onChange={handleChange}></textarea>
            </div>
            <div className='row'>
              <div className="mb-4 col">
                <label htmlFor="category" className="form-label">
                  Category
                </label>
                <select
                  className="form-select"
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Category</option>
                  <option value="Productivity">Productivity</option>
                  <option value="Daily Work">Daily Work</option>
                  <option value="Fitness">Fitness</option>
                </select>
              </div>
              <div className="mb-4 col">
                <label htmlFor="priority" className="form-label">
                  Priority
                </label>
                <select
                  className="form-select"
                  id="priority"
                  name="priority"
                  value={formData.priority}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Priority</option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
              </div>
           <div className='row'>
            <div className='col-6'>
              <button type="button" className="btn btn-danger custom-btn" onClick={toggleFormVisibility}>
                Cancel
              </button>
            </div>
            <div className='col-6 '>
              <button type="submit" className="btn btn-primary custom-btn" disabled={isSubmitDisabled}>
                Submit
              </button>
            </div>
           </div>
         </form>
    </div>
  )
}

export default AddTodoForm
