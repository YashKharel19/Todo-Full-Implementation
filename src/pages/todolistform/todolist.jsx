import { useEffect, useState } from 'react';
import axios from 'axios';

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
    <div>
      <h1>Todos</h1>
      {todos.map(todo => (
        <div key={todo.id}>
          <h3>{todo.title}</h3>
          <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>
          <a href={`/${todo.id}`}>View Details</a>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
