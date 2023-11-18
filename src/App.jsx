import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'

// Pages
import Home from "./home";
import Login from "./Login.jsx";
import ErrorPage from "./error-page";
import Product from './Product.jsx'
import Search from './Search.jsx';
import Add from './Add.jsx';
import RootLayout from './layout/RootLayout.jsx';
import { UserContextProvider } from "./UserContext.jsx";
import {CartProvider} from "./CartContext.jsx"
import Cart from "./Cart.jsx";

function App() {
const routes = [{
    index: true,
    element: <Home />,
  },
  {
    path: "/products/:category",
    element: <Product />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/add",
    element: <Add />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]


const router = createBrowserRouter([
 {
    path: "/",
    element: <UserContextProvider>
      <CartProvider>
      <RootLayout />
      </CartProvider>
    </UserContextProvider>,
    children: routes,
    errorElement: <ErrorPage />,
  },
]);


  return(

    <RouterProvider router={router} />
  )
}

export default App
