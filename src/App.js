import { useState,useEffect } from 'react';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList.js';
import Navbar from './components/Navbar';
import NoTodos from './NoTodos.png';
import { v4 as uuidv4 } from 'uuid';
import './App.css';


function App() {
  const [todos,setTodos] = useState([]);

  const [showForm,setShowForm] = useState(false);

  const toggleFormVisibility = () =>{
    setShowForm(!showForm);
  }

  const addTodo = (newTodo) => {
    fetch("http://localhost:3000/todo/create",{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTodo)
    })
      .then(response => {
        if (response.ok) {
          console.log('Todo added successfully');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
    setTodos([...todos,newTodo]);
  }
  const handleTaskChange = (todoId, newTask) => {
    fetch(`http://localhost:3000/todo/${todoId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({task:newTask})
    }).then(() => {
          console.log('Todo updated successfully');
      })
      .catch(error => {
        console.error('Error:', error);
      });
    
    setTodos((prevTodo) =>
      prevTodo.map((todo) =>
        todo._id === todoId ? { ...todo, task: newTask } : todo
      )
    );
  };

  const handleDeleteTodo = (todoId) =>{
    console.log("id of todo to be deleted : ",todoId);
    fetch(`http://localhost:3000/todo/delete/${todoId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        if (response.ok) {
          setTodos(prevTodos => prevTodos.filter(todo => todo._id !== todoId));
          console.log("Updtaed Value of todos : ",todos);
        } else {
          throw new Error('Error deleting the todo');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  useEffect(()=>{
    fetch("http://localhost:3000/todo").then(res=>res.json())
    .then(data=>setTodos(data));
    console.log("In the UseEffect Hook");
    console.log("Value of todos is : ",todos);
  },[])

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
