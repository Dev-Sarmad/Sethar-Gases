import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Outlet } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "sonner";

const AppLayout = () => {
  return (
    <>
      <TooltipProvider>
        <div className="flex min-h-screen flex-col">
          <Navbar />

          <main className="flex-1">
            <Outlet />
          </main>

          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </>
  );
};

export default AppLayout;
