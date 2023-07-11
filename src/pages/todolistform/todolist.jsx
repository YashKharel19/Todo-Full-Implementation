import { useEffect, useState } from 'react';
import axios from 'axios';
import './todolist.css'

function TodoList() {
  const [todos, setTodos] = useState([]);
const fetchData = async()=>{
    const {data} =await axios('https://jsonplaceholder.typicode.com/todos')
    console.log(data);
    setTodos(data);
}
  useEffect(() => {
    fetchData()
  }, []);

  return (
    <div className="todo-list-container">
      <h1>Todos</h1>
      <table className="todo-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Completed</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(todo => (
            <tr key={todo.id}>
              <td>{todo.title}</td>
              <td>{todo.completed ? 'Yes' : 'No'}</td>
              <td>
                <a href={`/${todo.id}`}>View Details</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TodoList;
