import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Logros from "./Pages/Logros";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "logros",
    element: <Logros />,
  },
]);
