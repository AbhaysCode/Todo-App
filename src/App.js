import { useState } from 'react';
import './App.css';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList.js';

function App() {
  const [todos,setTodos] = useState([]);
  const [showForm,setShowForm] = useState(false);
  const toggleFormVisibility = () =>{
    setShowForm(!showForm);
  }
  const addTodo = (newTodo) => {
    setTodos([...todos,newTodo]);
  }
  return (
    <> 
    {showForm ? (<AddTodoForm addTodo={addTodo} toggleFormVisibility={toggleFormVisibility}/>):(
      <TodoList todos={todos}/>
    )}
    <div className="position-fixed bottom-0 end-0 p-3 " onClick={toggleFormVisibility}>
    <button className="btn  btn-lg btn-dark rounded-circle">+</button>
    </div>
    </>
  );
}

export default App;
