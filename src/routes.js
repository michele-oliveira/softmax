import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ModulesPage from "./pages/ModulesPage";
import Manual from "./pages/Manual";
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
    element: <Manual />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

export default router;
