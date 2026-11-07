import HeroPage from "./section/hero";
import { AboutMe } from "./section/about-me";
import { Timeline } from "./section/timeline";
import { MyLearning } from "./section/my-learning";
import { Projects } from "./section/projects";
import { Blog } from "./section/blog";
import { Contact } from "./section/contact";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Pricing } from "./section/pricing";
import { AiAgentPopup } from "@/components/ai-agent-popup";

export default function Home() {
  return (
   <main className="flex flex-col justify-center items-center ">

    <HeroPage />
    <AboutMe />
    <Timeline />
    <MyLearning />
    <Projects />
    <Blog />
    <Pricing />
    <Contact />
    <AiAgentPopup />
    <footer className="w-full border-t border-[#E5C5A3]/15 bg-[#0d0b09] px-6 pt-8 pb-28 text-center text-[#E5C5A3]/60 md:pb-8 lg:px-12">
      <ScrollReveal><p className="font-mono text-xs">Designed &amp; built by Rissz.</p></ScrollReveal>
    </footer>
   </main>
  );
}
