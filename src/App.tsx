import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import {
  About,
  Cart,
  Checkout,
  HomeLayout,
  Landing,
  Login,
  Orders,
  Products,
  Register,
  SingleProduct,
} from "./pages";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
function App() {
  const { userData } = useSelector((store: RootState) => store.user);

  const router = createBrowserRouter([
    {
      path: "/",
      element: userData ? <HomeLayout /> : <Navigate to={"/signup"} />,
      children: [
        {
          index: true,
          element: <Landing />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/products/:id",
          element: <SingleProduct />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/checkout",
          element: <Checkout />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
      ],
    },
    {
      path: "/login",
      element: userData ? <Navigate to={"/"} /> : <Login />,
    },
    {
      path: "/signup",
      element: userData ? <Navigate to={"/"} /> : <Register />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
