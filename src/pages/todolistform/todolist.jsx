import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { CheckCircle, RemoveCircle } from '@mui/icons-material';
import './todolist.css'

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [todosPerPage] = useState(20);
  const fetchData = async () => {
    const { data } = await axios('https://jsonplaceholder.typicode.com/todos')
    console.log(data);
    setTodos(data);
  }
  useEffect(() => {
    fetchData()
  }, []);
  // Get current todos for the current page
  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

  // Change page
  const handleNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(prevPage => prevPage - 1);
  };
  const isLastPage = currentPage === Math.ceil(todos.length / todosPerPage);



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
          {currentTodos.map(todo => (
            <tr key={todo.id}>
              <td>{todo.title}</td>
              <td>
                {todo.completed ? (
                  <CheckCircle style={{ color: 'green' }} />
                ) : (
                  <RemoveCircle style={{ color: 'red' }} />
                )}
              </td>
              <td>
                <Link to={`/${todo.id}`}>
                  <IconButton>
                    <VisibilityIcon />
                  </IconButton>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="pagination">
        {currentPage > 1 && (
          <button className="pagination-button" onClick={handlePreviousPage}>
            Previous
          </button>
        )}
        <span className="page-count">
          Page {currentPage} of {Math.ceil(todos.length / todosPerPage)}
        </span>
        {!isLastPage && currentTodos.length === todosPerPage && (
          <button className="pagination-button" onClick={handleNextPage}>
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default TodoList;
