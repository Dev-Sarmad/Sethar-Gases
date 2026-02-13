import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <section className="container relative w-full text-white overflow-hidden">
      <div className="absolute inset-0" />

      <div className="relative container mx-auto px-6 py-24">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Fueling Your World with
            <span className="text-orange-500 block">
              Safe & Reliable LPG Solutions
            </span>
          </h1>

          <p className="mt-6 text-lg text-slate-300">
            Your trusted LPG gas distributor delivering safety, reliability, and
            energy excellence to homes and businesses. A place where power meets
            performance.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
              Order Gas Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-500 text-white hover:bg-slate-800"
            >
              View Services
            </Button>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

          <Card className="  hover:scale-105 transition-transform duration-300">
            <CardContent className="p-0">
              <img
                src="/images/shop.jpg"
                alt="Gas Shop"
                className="h-60 w-full object-cover rounded-lg"
              />
            </CardContent>
          </Card>
          <Card className="bg-slate-900/60 backdrop-blur-md border-slate-800 hover:scale-105 transition-transform duration-300">
            <CardContent className="p-0">
              <img
                src="/images/cylinders.jpg"
                alt="Gas Cylinders"
                className="h-60 w-full object-cover rounded-lg"
              />
            </CardContent>
          </Card>
          <Card className="bg-slate-900/60 backdrop-blur-md border-slate-800 hover:scale-105 transition-transform duration-300">
            <CardContent className="p-0">
              <img
                src="/images/delivery.jpg"
                alt="Gas Delivery"
                className="h-60 w-full object-cover rounded-lg"
              />
            </CardContent>
          </Card>
          <Card className="bg-slate-900/60 backdrop-blur-md border-slate-800 hover:scale-105 transition-transform duration-300">
            <CardContent className="p-0">
              <img
                src="/images/surroundings.jpg"
                alt="Shop Surroundings"
                className="h-60 w-full object-cover rounded-lg"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
