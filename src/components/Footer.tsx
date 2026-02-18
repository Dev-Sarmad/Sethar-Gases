import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { Facebook, Linkedin, Twitter } from "lucide-react";
import getPakistanTime from "@/constants/date";
export default function Footer() {
  return (
    <footer className=" bottom-0 w-full ">
      <div className="mx-auto max-w-7xl px-4  sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 md:gap-2">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded bg-primary">
                <img src="./logo.webp" className="w-full" alt="" />
              </div>
              <span className="text-lg font-semibold">Sethar Gases</span>
            </div>

            <p className="max-w-sm text-sm text-muted-foreground ">
              Providing reliable industrial and medical gas solutions with
              safety, quality, and trust.
            </p>

            <div className="flex gap-4">
              <Link to="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link to="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link to="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="md:justify-self-center">
            <nav className="flex flex-col gap-3 text-sm">
              <Link to="/about">About</Link>
              <Link to="/certifications">Certifications</Link>
              <Link to="/faq">FAQ</Link>
              <Link to="/contact">Contact</Link>
            </nav>
          </div>
          <div>{`its ${getPakistanTime()} here in Pakistan `}</div>
        </div>

        <Separator className="my-8" />

        <div className="text-center text-sm text-muted-foreground">
          © 2026 — Made with <span className="animate-caret-blink">❤️</span> for
          Sethar Gases
        </div>
      </div>
    </footer>
  );
}
