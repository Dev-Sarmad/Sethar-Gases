import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Certifications from "./pages/Certifications";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
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
