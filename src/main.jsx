import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Layout/Main.jsx';
import Home from './components/Home/Home.jsx';
import Statistics from './components/Statistics/Statistics.jsx';
import AppliedJob from './components/AppliedJob/AppliedJob.jsx';
import Blogs from './components/Blogs/Blogs.jsx';
import JobDetail from './components/JobDetail/JobDetail.jsx';
import JobFeatures from './components/JobFeatures/JobFeatures.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader:() => fetch('job.json')
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>
      },
      {
        path:'blogs',
        element:<Blogs></Blogs>
      },
      {
        path: 'appliedJob',
        element: <AppliedJob></AppliedJob>
      },
      {
        path:'jobFeatures',
        element: <JobFeatures></JobFeatures>,
      },

      {
        path: 'job/jobDetails/:id',
        element:<JobDetail></JobDetail>,
        loader:({params}) => fetch(`job.json${params.id}`)
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
