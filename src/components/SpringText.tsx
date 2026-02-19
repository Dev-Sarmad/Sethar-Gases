 
import { AnimatePresence, motion, useInView } from 'motion/react';
import * as React from 'react';
 
export function SpringText({ text}: { text: string }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="flex space-x-1 justify-center">
      <AnimatePresence>
        {text.split('').map((char, i) => (
          <motion.h1
            ref={ref}
            key={i}
            initial={{ opacity: 0, x: -18 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            exit="hidden"
            
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center font-bold text-2xl mt-5 md:mt-2 md:font-extrabold text-[#F54E26] tracking-tighter md:text-4xl"
          >
            {char === ' ' ? <span>&nbsp;</span> : char}
          </motion.h1>
        ))}
      </AnimatePresence>
    </div>
  );
}