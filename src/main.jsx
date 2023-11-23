import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { UserContextProvider } from "./UserContext.jsx";
import {CartProvider} from "./CartContext.jsx"








ReactDOM.createRoot(document.getElementById('root')).render(
  <UserContextProvider>
      <CartProvider>
        <App />
      </CartProvider>
  </UserContextProvider>
)
