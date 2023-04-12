import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from './components/Home/Home';
import DetailsJob from './components/DetailsJob/DetailsJob';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Statistics from './components/Statistics/Statistics';
import Blogs from './components/Blogs/Blogs';
import ErrorPage from './components/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element:<App></App>,
    children: [
      {
        path:'/',
        element:<Home></Home>,
        // loader: () => fetch('categories.json')
      },
      {
        path:'details/:id',
        element:<DetailsJob></DetailsJob>,
        loader: () => fetch(`/jobs.json`)
      },
      {
        path:'applied-jobs',
        element:<AppliedJobs></AppliedJobs>,
        loader:() => fetch('/jobs.json')
      },
      {
        path:'statistics',
        element:<Statistics></Statistics>
      },
      {
        path:'blogs',
        element:<Blogs></Blogs>
      },
      {
        path:'*',
        element: <ErrorPage></ErrorPage>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
