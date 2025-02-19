import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ModulesPage from "./pages/ModulesPage";
import Register from "./pages/manual/RegisterCarrier";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/modules",
    element: <ModulesPage />,
  },
  {
    path: "/manual",
    element: <Register />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

export default router;
