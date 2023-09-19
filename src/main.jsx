import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home/Home';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Users from './component/Users/Users';
import UserDetiles from './component/UserDetiles/UserDetiles';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>, 
    children: [
      {
        path: '/about', 
        element: <About></About>
      }, 
      {
        path: '/contact', 
        element: <Contact></Contact>
      }, 
      {
        path: '/users', 
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      }, 
      {
        path: '/userDetiles/:userID', 
        loader: ({params}) => fetch (`https://jsonplaceholder.typicode.com/users/${params.userID}`),
        element: <UserDetiles></UserDetiles>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
