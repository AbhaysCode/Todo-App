import { useState } from 'react';
import './App.css';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList.js';
import NoTodos from './NoTodos.png';

function App() {
  const [todos,setTodos] = useState([
  //   {
  //   category: "Productivity",
  //   date: "2023-05-05",
  //   priority: "high",
  //   task: "onDeleteTodoonDeleteTodoonDeleteTodoonDeleteTodoonDeleteTodoonDeleteTodoonDeleteTodoonDeleteTodoonDeleteTodoonDeleteTodoonDeleteTodoonDeleteTodoonDeleteTodoonDeleteTodoonDeleteTodoonDeleteTodoonDeleteTodoonDeleteTodoonDeleteTodoonDeleteTodoonDeleteTodo",
  //   time: "19:10"
  // },
  //   {
  //   category: "Productivity",
  //   date: "2023-05-05",
  //   priority: "high",
  //   task: "dmkmdkmcvsdmvplmsdpvmd",
  //   time: "19:10"
  // },
  //   {
  //   category: "Productivity",
  //   date: "2023-05-05",
  //   priority: "high",
  //   task: "onDelejustonDelejustonDelejustonDeleteTodoonDeleteTodoonDeleteTodo",
  //   time: "19:10"
  // },
  //   {
  //   category: "Productivity",
  //   date: "2023-05-05",
  //   priority: "high",
  //   task: "onDelejustonDelejustonDelejustonDeleteTodoonDeleteTodoonDeleteTodo",
  //   time: "19:10"
  // },
  //   {
  //   category: "Productivity",
  //   date: "2023-05-05",
  //   priority: "high",
  //   task: "onDelejustonDelejustonDelejustonDeleteTodoonDeleteTodoonDeleteTodo",
  //   time: "19:10"
  // },
  //   {
  //   category: "Productivity",
  //   date: "2023-05-05",
  //   priority: "high",
  //   task: "onDelejustonDelejustonDelejustonDeleteTodoonDeleteTodoonDeleteTodo",
  //   time: "19:10"
  // },
  //   {
  //   category: "Productivity",
  //   date: "2023-05-05",
  //   priority: "high",
  //   task: "onDelejustonDelejustonDelejustonDeleteTodoonDeleteTodoonDeleteTodo",
  //   time: "19:10"
  // },
  //   {
  //   category: "Productivity",
  //   date: "2023-05-05",
  //   priority: "high",
  //   task: "onDelejustonDelejustonDelejustonDeleteTodoonDeleteTodoonDeleteTodo",
  //   time: "19:10"
  // },
  //   {
  //   category: "Productivity",
  //   date: "2023-05-05",
  //   priority: "high",
  //   task: "onDelejustonDelejustonDelejustonDeleteTodoonDeleteTodoonDeleteTodo",
  //   time: "19:10"
  // },
  //   {
  //   category: "Productivity",
  //   date: "2023-05-05",
  //   priority: "high",
  //   task: "onDelejustonDelejustonDelejustonDeleteTodoonDeleteTodoonDeleteTodo",
  //   time: "19:10"
  // }
]);
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
      <div className='container'>
      <h1 className='text-center'>Todos</h1>
      {todos.length === 0 ? (
        <div className="text-center">
          <img src={NoTodos} alt="Empty Todos" className="img-fluid" style={{ height: '200px' }}/>
          <p>No todos available</p>
        </div>
      ) : (
        <div>
          <TodoList todos={todos}/>
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
