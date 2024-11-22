import { Features } from "@/components/home/features";
import { Hero } from "@/components/home/hero";
import { Testimonials } from "@/components/home/testimonials";
import { ContactForm } from "@/components/home/contact-form";
import { FeaturedArtists } from "@/components/home/featured-artists";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedArtists />
      <Features />
      <Testimonials />
      <ContactForm />
    </main>
  );
}