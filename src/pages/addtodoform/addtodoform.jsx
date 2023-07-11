import { useState } from 'react';

function AddTodoForm() {
  const [title, setTitle] = useState('');
  const [completed, setCompleted] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();

    // Logic to add the new todo to the todo list
    // ...

    // Reset form fields
    setTitle('');
    setCompleted(false);
  };

  return (
    <div>
      <h1>Add Todo</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={event => setTitle(event.target.value)}
          />
        </label>
        <br />
        <label>
          Completed:
          <input
            type="checkbox"
            checked={completed}
            onChange={event => setCompleted(event.target.checked)}
          />
        </label>
        <br />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}

export default AddTodoForm;
