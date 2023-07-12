import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import { TextField, Button } from '@mui/material';
import axios from 'axios';
import './addtodoform.css'; // Import the CSS file

function AddTodoForm() {
  const [title, setTitle] = useState('');
  const [completed, setCompleted] = useState(false);
  // const history = useHistory();

  const handleFormSubmit = async event => {
    event.preventDefault();
    const newTodo = {
      title: title,
      completed: completed,
    };

    try {
      await axios.post('https://jsonplaceholder.typicode.com/todos', newTodo);
      // history.push('/'); // Redirect to the todo list page after adding the todo
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="todo-add-container">
      <div className="todo-card">
        <h1>Add Todo</h1>
        <form onSubmit={handleFormSubmit} className="todo-form">
          <TextField
            label="Title"
            variant="outlined"
            value={title}
            onChange={event => setTitle(event.target.value)}
            className="input-field"
            required
          />
          <div className="checkbox-container">
            <label htmlFor="completed" className="checkbox-label">
              Completed:
            </label>
            <input
              type="checkbox"
              id="completed"
              checked={completed}
              onChange={event => setCompleted(event.target.checked)}
              className="checkbox-input"
            />
          </div>
          <Button type="submit" variant="contained" color="primary" className="submit-button">
            Add
          </Button>
        </form>
      </div>
    </div>
  );
}

export default AddTodoForm;
