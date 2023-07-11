import { useParams } from 'react-router-dom';

function TodoDetails() {
  const { id } = useParams();

  // Fetch the specific todo details using the `id` parameter
  // ...

  return (
    <div>
      <h1>Todo Details</h1>
      <h3>Todo ID: {id}</h3>
      {/* Display the details of the specific todo */}
      {/* ... */}
    </div>
  );
}

export default TodoDetails;
