import { useState } from 'react';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList.js';
import Navbar from './components/Navbar';
import NoTodos from './NoTodos.png';
import { v4 as uuidv4 } from 'uuid';
import './App.css';


function App() {
  const [todos,setTodos] = useState([
    {
    id:uuidv4(),
    category: "Productivity",
    date: "2023-05-05",
    priority: "high",
    task: "Testing is the Priority. I am Invincible.",
    time: "19:10"
  },
    {
    id:uuidv4(),
    category: "Productivity",
    date: "2023-05-05",
    priority: "high",
    task: "Testing is the Priority. I am Invincible.",
    time: "19:10"
  },
    {
    id:uuidv4(),
    category: "Productivity",
    date: "2023-05-05",
    priority: "low",
    task: "Testing is the Priority. I am Invincible.",
    time: "19:10"
  },
    {
    id:uuidv4(),
    category: "Productivity",
    date: "2023-05-05",
    priority: "medium",
    task: "Testing is the Priority. I am Invincible.",
    time: "19:10"
  }
]);

  const [showForm,setShowForm] = useState(false);

  const toggleFormVisibility = () =>{
    setShowForm(!showForm);
  }

  const addTodo = (newTodo) => {
    setTodos([...todos,newTodo]);
  }

  const handleTaskChange = (todoId, newTask) => {
    setTodos((prevTodo) =>
      prevTodo.map((todo) =>
        todo.id === todoId ? { ...todo, task: newTask } : todo
      )
    );
  };

  const handleDeleteTodo = (todoId) =>{
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  }

  return (
    <> 
    {showForm ? (
    <AddTodoForm addTodo={addTodo} toggleFormVisibility={toggleFormVisibility}/>):(
      <div className='p-0'>
        <Navbar />
        {todos.length === 0 ? (
          <div className="text-center">
            <img src={NoTodos} alt="Empty Todos" className="img-fluid" style={{ height: '200px' }}/>
            <h3>No todos available</h3>
          </div>
        ) : (
          <div>
            <TodoList todos={todos} handleTaskChange={handleTaskChange} handleDeleteTodo={handleDeleteTodo}/>
          </div>
        )}
      </div>
    )}
    <div className="position-fixed bottom-0 end-0 p-3 " onClick={toggleFormVisibility}>
      <button className="btn  btn-lg btn-dark rounded-circle">+</button>
    </div>
    </>
  );
}

export default App;
