import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AuthProvider from './AuthProvider.tsx';
import Users from './pages/Users.tsx';
import Index from './pages/Index.tsx';
import Login from './pages/Login.tsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/users",
    element: <Users />
  
  },
  {
    path: "/index",
    element: <Index />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
