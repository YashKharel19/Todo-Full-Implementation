import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import './tododetailform.css'
import axios from 'axios';
import { CheckCircle, RemoveCircle } from '@mui/icons-material';

function TodoDetails() {
  const [apiData, setApiData] = useState('')
  const { id } = useParams();

  const fetchData = async () => {
    const { data } = await axios(`https://jsonplaceholder.typicode.com/todos/${id}`)
    console.log(data)
    setApiData(data)
  }
  useEffect(() => {
    fetchData()
  }, []);

  return (
    <div className="todo-details-container">
      <div className="header-container">
        <h1 className="todo-details-header">Todo Details</h1>
        <div className="buttons-container">
          <Link to="/add">
            <button className="add-todo-button">Add Todo</button>
          </Link>
          <Link to="/">
            <button className="todo-list-button">Todo List</button>
          </Link>
        </div>
      </div>
      <div className="todo-card">
        <div className="card-content">
          <h3 className="todo-title">
            Todo ID: <span className="todo-id">{apiData.id}</span>
          </h3>
          <h2 className="todo-title">
            Task Name: <span className="todo-id">{apiData.title}</span>
          </h2>
          <div className="status-container">
            <strong className="status-label">Status:</strong>
            {apiData.completed ? (
              <CheckCircle className="status-icon completed" />
            ) : (
              <RemoveCircle className="status-icon not-completed" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoDetails;
