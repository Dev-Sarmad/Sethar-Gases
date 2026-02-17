import { motion } from "motion/react";
import { useRef } from "react";
import useVelocity from "@/hooks/useVelocity";

export default function Velocity() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { x, setSpeedMultiplier } = useVelocity({
    containerRef,
    baseSpeed: 120,
    direction: -1,
  });

  return (
    <>
      <div
        className=" relative w-full h-20 bg-[#007656] overflow-hidden -skew-y-4 mb-2"
        onMouseEnter={() => setSpeedMultiplier(0.4)}
        onMouseLeave={() => setSpeedMultiplier(1)}
      >
        <motion.div ref={containerRef} style={{ x }} className=" flex w-max">
          <ul className="flex gap-10 text-2xl md:text-4xl font-bold items-center h-20">
            <li className="hover:text-[#F54E26]">Reliable</li>
            <li className="hover:text-[#F54E26]">Professional</li>
            <li className="hover:text-[#F54E26]">Safe</li>
            <li className="hover:text-[#F54E26]">Fast</li>
            <li className="hover:text-[#F54E26]">Industry-grade</li>
          </ul>
          <ul className="flex gap-10 text-2xl md:text-4xl font-bold items-center h-20">
            <li className="hover:text-[#F54E26]">dsdasd</li>
            <li className="hover:text-[#F54E26]">dfdsfjds</li>
            <li className="hover:text-[#F54E26]">dfjsdk</li>
            <li className="hover:text-[#F54E26]">idfidfoidsh</li>
            <li className="hover:text-[#F54E26]">iwsnx,mc-grade</li>
          </ul>
        </motion.div>
      </div>
    </>
  );
}
