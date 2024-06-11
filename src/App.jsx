// styles
import "./App.css";
// layout
import MainLayout from "./layout/MainLayout";

// component
import ProtectedRoutes from "./components/ProtectedRoutes";
// context
import { useContext } from "react";
import { GlobalContext } from "./context/GlobalContext";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Register from "./pages/Register";

// react router dom imports
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

function App() {
  const { user } = useContext(GlobalContext);

  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={true}>
          <MainLayout />
        </ProtectedRoutes>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/product/:id",
          element: <Product />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
    {
      path: "/login",
      element: true ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "/register",
      element: true ? <Navigate to="/" /> : <Register />,
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
