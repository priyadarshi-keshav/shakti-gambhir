import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Locations } from "@/components/sections/Locations";
import { InstagramFeed } from "@/components/sections/InstagramFeed";
import { Gallery } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { Events } from "@/components/sections/Events";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <About />
      <Services />
      <WhyChoose />
      <Locations />
      <Events />
      <InstagramFeed />
      <Gallery />
      <Testimonials />
      <Contact />
    </main>
  );
}
