import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ModulesPage from "./pages/ModulesPage";
import Register from "./pages/manual/CarrierRegistration";
import Contact from "./pages/Contact";
import Manual from "./pages/Manual";

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
