import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Users from './pages/Users.tsx';
import Login from './pages/Login.tsx';

import EventsCalendar from './pages/EventsCalendar.tsx';
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
    path: "/calendar",
    element: <EventsCalendar />
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
