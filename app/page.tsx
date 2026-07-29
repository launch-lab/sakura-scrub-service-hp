import { Suspense } from "react";
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
      <Suspense>
        <Services />
      </Suspense>
      <Suspense>
        <News />
      </Suspense>
      <Strengths />
      <Suspense>
        <Works />
      </Suspense>
      <Flow />
      <Faq />
      <About />
      <Contact />
    </>
  );
}
