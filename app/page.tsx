import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Faq } from "@/components/sections/faq";
import { Flow } from "@/components/sections/flow";
import { Hero } from "@/components/sections/hero";
import { News } from "@/components/sections/news";
import { Services } from "@/components/sections/services";
import { Strengths } from "@/components/sections/strengths";
import { Works } from "@/components/sections/works";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <News />
      <Strengths />
      <Works />
      <Flow />
      <Faq />
      <About />
      <Contact />
    </>
  );
}
