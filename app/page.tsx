import Cta from "@/components/cta";
import Hero from "@/components/hero";
import Portfolio from "@/components/portfolio";
import Services from "@/components/services";
import Testimonial from "@/components/testimonial";

export default function Home() {
  return (
    <main className="space-y-24 md:space-y-48 p-4 leading-tight ">
      <Hero />
      <Services />
      <Portfolio />
      <Testimonial />
      <Cta />
    </main>
  );
}
