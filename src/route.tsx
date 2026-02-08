import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AppLayout from "./layouts/AppLayout";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Certifications from "./pages/Certifications";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/certifications",
        element: <Certifications />,
      },
    ],
  },
]);

export default router;
