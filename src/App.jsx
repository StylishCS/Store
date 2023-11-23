import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Pages
import Home from "./home";
import Login from "./Login.jsx";
import ErrorPage from "./error-page";
import Product from './Product.jsx'
import Search from './Search.jsx';
import Add from './Add.jsx';
import RootLayout from './layout/RootLayout.jsx';
import Cart from "./Cart.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    errorElement: <ErrorPage />,
    children: [
      {
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
        path: "/cart",
        element: <Cart />,
      },
    ]
  },
  {
    path: "/login",
    element: <Login />,
  },
])

function App() {
  return(
    <RouterProvider router={router} />
  );
}

export default App
