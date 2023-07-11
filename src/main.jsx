import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import TodoList from './pages/todolistform/todolist'
import AddTodoForm from './pages/addtodoform/addtodoform'
import TodoDetails from './pages/tododetailform/tododetailform'

const router = createBrowserRouter([
  {
    path: '/',
    element: <TodoList />,
  },
  {
    path: '/add',
    element: <AddTodoForm />,
  },
  {
    path: '/:id',
    element: <TodoDetails />,
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>
)
