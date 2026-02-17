import { Button } from "@/components/ui/button";
import Velocity from "@/components/Velocity";

export default function Home() {
  return (
    <section className="container relative w-full text-white overflow-hidden">
      <div className="absolute inset-0" />

      <div className="relative container mx-auto px-6 md:py-10 flex flex-col items-center text-center">
        <div className="max-w-2xl ">
          <h1 className="text-4xl md:text-7xl font-bold leading-tight text-center">
            From Kitchen <span className="text-[#F54E26] cursor-pointer">Flames</span>
            <span className="block">
              to Factory{" "}
              <span className="text-[#007656] block md:inline cursor-pointer">Floors</span>
            </span>
          </h1>
          <p className="mt-5 text-lg text-slate-300">
            Fast, dependable gas delivery for homes and businesses.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-[#F54E26] hover:bg-[#d9431f] text-white"
            >
              Order Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#007656] text-[#007656] hover:bg-[#007656] hover:text-white"
            >
              View Services
            </Button>
          </div>
        </div>
      </div>
      <Velocity />
    </section>
  );
}
