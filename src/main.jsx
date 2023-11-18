import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'




// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "/products/:category",
//     element: <Product />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "/search",
//     element: <Search />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "/add",
//     element: <Add />,
//     errorElement: <ErrorPage />,
//   },
// ]);



/**
 * to do
 * delete all products first, then
 * modify all images => show and add
 * *update or delete products
 * *update or delete categories
 * *proceed with invoices
 * ?statistics
 * *deploy and test
 */



ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
