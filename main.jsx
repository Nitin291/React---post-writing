import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {RouterProvider,createBrowserRouter } from 'react-router-dom'
import Createpost from './Components/Createpost.jsx'

 const router  = createBrowserRouter([{path:'/', element: <app/>},
  {path:'/create-post', element: <Createpost/>}

 ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router ={router}/>
    <App />
  </React.StrictMode>,
)
