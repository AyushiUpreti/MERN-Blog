import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layouts from './Components/Layouts';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import PostDetail from './pages/PostDetail';
import Register from './pages/Register';
import LoginPage from './pages/LoginPage';
import UserProfile from './pages/UserProfile';
import Authors from './pages/Authors';
import CreatePost from './pages/CreatePost';
import CategoryPost from './pages/CategoryPost';
import AuthorPosts from './pages/AuthorPosts';
import Dashboard from './pages/Dashboard';
import EditPost from './pages/EditPost';
import DeletePost from './pages/DeletePost';
import LogoutPage from './pages/LogoutPage';
import UserProvider from './context/userContext';

const router= createBrowserRouter([
  {
  path:"/",         //in this path
  element:<UserProvider><Layouts/></UserProvider>,  //show this page 
  errorElement:<ErrorPage/>,
  children:[
    {index:true, element: <Home/>},
    {path: "posts/:id", element:<PostDetail/>},
    {path: "register", element:<Register/>},
    {path: "loginPage", element:<LoginPage/>},
    {path: "profile/:id", element:<UserProfile/>},
    {path: "authors", element:<Authors/>},
    {path: "create", element:<CreatePost/>},
    {path: "posts/categories/:category", element:<CategoryPost/>},
    {path: "posts/users/:id", element:<AuthorPosts/>},
    {path: "myposts/:id", element:<Dashboard/>},
    {path: "posts/:id/edit", element:<EditPost/>},
    {path: "posts/:id/delete", element:<DeletePost/>},
    {path: "logout", element:<LogoutPage/>},

  ]
  }
])
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);