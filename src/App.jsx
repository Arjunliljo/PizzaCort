import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./UI/Home";
import Menu, { loader as menuLoader } from "./Features/Menu/Menu";
import Cart from "./Features/Cart/Cart";
import CreateOrder, {
  action as createOrderAction,
} from "./Features/Order/CreateOrder";
import Order, { loader as orderLoader } from "./Features/Order/Order";
import AppLayout from "./UI/AppLayout";
import Error from "./UI/Error";
import "./index.css";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
