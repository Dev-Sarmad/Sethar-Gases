import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Certifications", to: "/certifications" },
  { label: "Contact", to: "/contact" },
];

function Navbar() {
  return (
    <header className="sticky top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-lg font-semibold">
          <img  src="/logo.webp" alt="logo" className="w-12 rounded-2xl"/>
        </Link>

        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.to}>
                  <NavigationMenuLink asChild>
                    <Link
                      to={link.to}
                      className="px-4 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="md:hidden ">
          <Sheet>
            <SheetTrigger className="inline-flex items-center justify-center rounded-md p-2 hover:bg-accent">
              <Menu className="h-5 w-5" />
            </SheetTrigger>

            <SheetContent side="right" className="w-full">
              <nav className="flex flex-col items-center  gap-4 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="text-sm font-medium px-3 py-2  rounded-md hover:bg-accent hover:text-accent-foreground"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
