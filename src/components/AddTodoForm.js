import React from 'react'
import { useState } from 'react';
import './AddButton.css';

const AddTodoForm = ({addTodo,toggleFormVisibility}) => {
    const [formData, setFormData] = useState({
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
        addTodo(formData);
        console.log("FormData,Submit is Clicked",formData);
        setFormData({
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

    <div className='container'>
      <div className="position-fixed bottom-0 end-0 p-3 ">
        <button className="btn  btn-lg btn-dark rounded-circle"
         data-bs-toggle="modal"
         data-bs-target="#modal"
         >+</button>
      </div>
      <div className='modal fade' id='modal'>
        <div className='modal-dialog modal-dialog-centered'>
          <div className='modal-content'>
            <div className='modal-header'><h1 className="text-center mx-auto">Add Task</h1></div>
            <div className='modal-body'>
            <form onSubmit={handleSubmit} className='d-flex flex-column custom-form '>
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
           <div className="form-group mb-2 ">
            <div className="form-floating">
              <textarea 
              name='task'
              className="form-control"
              id="task" 
              rows="4" 
              placeholder='task'
              value={formData.task} 
              onChange={handleChange}></textarea>
              <label htmlFor="task">Task</label>
              </div>
            </div>
            <div className='row'>
              <div className="mb-4 col">
                <label htmlFor="category" className="form-label">
                  Category
                </label>
               <input 
               type='text'
               name='category'
               className='form-control'
               id='category'
               value={formData.category}
               onChange={handleChange}
               />
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
              <button type="button" 
              className="btn btn-outline-secondary custom-btn" 
              data-bs-dismiss="modal"
              data-bs-target="#modal"
              >
                Cancel
              </button>
            </div>
            <div className='col-6 '>
              <button type="submit" 
              className="btn btn-primary custom-btn"
              data-bs-dismiss="modal"
              data-bs-target="#modal"
               disabled={isSubmitDisabled}>
                Submit
              </button>
            </div>
           </div>
         </form>
            </div>
          </div>
        </div>
      </div>
      </div>
      )
}

export default AddTodoForm
