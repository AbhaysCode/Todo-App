import { useState } from 'react';
import './App.css';
import AddButton from './components/AddButton';
import TodoList from './components/TodoList.js';

function App() {
  const [todos,setTodos] = useState([]);
  const addTodo = (newTodo) => {
    setTodos([...todos,newTodo]);
  }
  return (
    <>
    <TodoList todos={todos}/>
    <AddButton addTodo={addTodo}/>
    </>
  );
}

export default App;
