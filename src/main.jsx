import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from "./layout/pages/login.jsx"
import Signup from './layout/pages/signup.jsx'
import ErrorPage from './layout/pages/404.jsx'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <div>Hello World</div>,
      errorElement: <ErrorPage/>
    },
    {
      path: "/login",
      element: <LoginPage/>
    },
    {
      path:"/signup",
      element: <Signup/>
    }
  ]
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
