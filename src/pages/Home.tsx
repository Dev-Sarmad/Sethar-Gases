import { AccordionComponent } from "@/components/Accordion";
import CTA from "@/components/CTA";
import Socials from "@/components/Socials";
import { Button } from "@/components/ui/button";
import Velocity from "@/components/Velocity";
import { motion } from "motion/react";

export default function Home() {
  return (
    <>
      <section className="container relative w-full text-white overflow-hidden">
        <div className="absolute inset-0" />

        <div className="relative container mx-auto px-6 md:py-10 flex flex-col items-center text-center">
          <div className="max-w-2xl ">
            <h1 className="text-4xl md:text-7xl font-bold leading-tight text-center">
              From Kitchen{" "}
              <motion.span
                className="text-[#F54E26] cursor-pointer"
                initial="rest"
                whileHover="hover"
                animate="rest"
              >
                Flames,{" "}
                <motion.img
                  variants={{
                    rest: {
                      opacity: 0,
                      rotate: -8,
                      scale: 0.9,
                    },
                    hover: {
                      opacity: 1,
                      rotate: -4,
                      scale: 1,

                      transition: { duration: 0.35, ease: "easeInOut" },
                    },
                  }}
                  src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExODZhMjlyczJlb3BiM2pzZHdxcm5mMDBxdnQxcmNkMXd1MGl6am1yNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5nsiFjdgylfK3csZ5T/giphy.gif"
                  alt=""
                  className="absolute right-60 top-20 -translate-y-1/2 hidden md:block md:w-32 rounded-xl shadow-2xl pointer-events-none will-change-transform"
                />
              </motion.span>
              <span className="block">
                to Factory{" "}
                <motion.span
                  whileHover="hover"
                  initial="rest"
                  animate="rest"
                  className="text-[#007656] block md:inline cursor-pointer"
                >
                  Floors.
                  <motion.img
                    variants={{
                      rest: {
                        opacity: 0,
                        rotate: 8,
                        scale: 0.9,
                      },
                      hover: {
                        opacity: 1,
                        rotate: 4,
                        scale: 1,

                        transition: { duration: 0.35, ease: "easeInOut" },
                      },
                    }}
                    src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2pzOWF0OGpoN29ocGV6ZWN4aW85am4xZTg1enA4bzczZHNnZ2FwcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2dmiD02aM9zX3Gw2oS/giphy.gif"
                    alt=""
                    className="absolute right-70 top-40 -translate-y-1/2 hidden md:block md:w-32 rounded-xl shadow-2xl pointer-events-none will-change-transform"
                  />
                </motion.span>
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
        <div className="relative w-full h-20 mt-20">
          <div className="absolute inset-0 bg-[#009e74] skew-y-6 z-0" />
          <div className="relative z-10">
            <Velocity />
          </div>
        </div>
        <CTA />
      </section>
      <Socials />
      <AccordionComponent />
    </>
  );
}
