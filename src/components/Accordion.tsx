import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionComponent() {
  return (
    <>
    <div className="container mt-10"> <h1 className=" text-center text-4xl md:text-5xl">FAQ</h1>
    <Accordion
  type="single"
  collapsible
  defaultValue="supply"
  className="w-full max-w-4xl mx-auto mt-16 px-4 sm:px-6 lg:px-8"
>
  <AccordionItem value="supply">
    <AccordionTrigger className="text-left text-base sm:text-lg font-semibold text-white">
      Can you handle continuous bulk supply without delays?
    </AccordionTrigger>
    <AccordionContent className="text-sm sm:text-base text-slate-300 leading-relaxed">
      Yes. We ensure uninterrupted bulk supply for hotels, gas stations, and commercial kitchens — even during peak demand.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="delivery">
    <AccordionTrigger className="text-left text-base sm:text-lg font-semibold text-white">
      How fast is your emergency delivery?
    </AccordionTrigger>
    <AccordionContent className="text-sm sm:text-base text-slate-300 leading-relaxed">
      Rapid dispatch with priority same-day delivery options to prevent operational downtime.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="pricing">
    <AccordionTrigger className="text-left text-base sm:text-lg font-semibold text-white">
      Do you offer better pricing for long-term contracts?
    </AccordionTrigger>
    <AccordionContent className="text-sm sm:text-base text-slate-300 leading-relaxed">
      Absolutely. We provide volume-based pricing and flexible commercial agreements for SMEs.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="safety">
    <AccordionTrigger className="text-left text-base sm:text-lg font-semibold text-white">
      How do you guarantee safety and compliance?
    </AccordionTrigger>
    <AccordionContent className="text-sm sm:text-base text-slate-300 leading-relaxed">
      All cylinders follow strict safety checks and regulatory compliance standards.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="support">
    <AccordionTrigger className="text-left text-base sm:text-lg font-semibold text-white ">
      What support do we get after onboarding?
    </AccordionTrigger>
    <AccordionContent className="text-sm sm:text-base text-slate-300 leading-relaxed">
      Dedicated account support, scheduled refills, and responsive service whenever needed.
    </AccordionContent>
  </AccordionItem>
</Accordion>
</div>
</>
  )
}
