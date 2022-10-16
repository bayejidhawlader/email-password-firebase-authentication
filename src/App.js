import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import LoginBootstrap from "./components/Layout/LoginBootstrap/LoginBootstrap";
import Main from "./components/Layout/Main";
import RegisterReactBootstrap from "./components/Register/RegisterReactBootstrap";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <RegisterReactBootstrap></RegisterReactBootstrap> },
      {
        path: "/register",
        element: <RegisterReactBootstrap></RegisterReactBootstrap>,
      },
      {
        path: "/login",
        element: <LoginBootstrap></LoginBootstrap>,
      },
    ],
  },
]);

function App() {
  return (
    <div className="Ap">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
