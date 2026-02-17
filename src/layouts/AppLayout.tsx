import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Outlet } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";

const AppLayout = () => {
  return (
    <>
      <TooltipProvider>
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </TooltipProvider>
    </>
  );
};

export default AppLayout;
