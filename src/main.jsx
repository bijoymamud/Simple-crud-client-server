import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx';
import Userss from './components/Userss.jsx';
import './index.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },

  {
    path: '/users',
    element: <Userss></Userss>,
    loader: () => fetch('http://localhost:5000/users')
  },


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
