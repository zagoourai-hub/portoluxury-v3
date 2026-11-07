import Image from "next/image";
import { Code2, MapPin } from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam";
import { Meteors } from "@/components/ui/meteors";
import { ScrollReveal } from "@/components/scroll-reveal";

export function AboutMe() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative isolate w-full overflow-hidden border-t border-[#E5C5A3]/15 bg-[#0d0b09] px-6 py-20 text-[#E5C5A3] lg:px-12 lg:py-28"
    >
      <Meteors className="bg-amber-700 " number={30} />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_50%,#793e0626,transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl">
        <ScrollReveal><p className="mb-5 font-mono text-xs tracking-[0.25em] text-[#EB9900] uppercase">
          01 / Behind the code
        </p>
        <h2 id="about-heading" className="mb-12 font-sans text-5xl uppercase sm:text-7xl lg:text-8xl">
          About <span className="font-mono font-extrabold text-[#EB9900]">me.</span>
        </h2></ScrollReveal>

        <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <ScrollReveal delay={0.12}><div className="relative overflow-hidden rounded-2xl border border-[#E5C5A3]/20 bg-linear-to-br from-[#2b1c10] to-[#100d0a]">
            <div aria-hidden="true" className="absolute inset-x-0 top-8 text-center font-sans text-7xl text-[#E5C5A3]/10 sm:text-8xl">
              RISSZ
            </div>
            <div className="relative mx-6 mt-6 aspect-square">
              <Image
                src="/images/about-rissz-anime.png"
                alt="Illustrated portrait of Rissz, web developer based in West Java"
                fill
                sizes="(min-width: 1024px) 430px, (min-width: 640px) 600px, 90vw"
                className="object-contain object-bottom"
              />
            </div>
            <div className="relative flex flex-wrap items-center justify-between gap-3 border-t border-[#E5C5A3]/15 bg-[#100d0a] p-6 font-mono text-xs">
              <p className="flex items-center gap-2">
                <MapPin aria-hidden="true" className="size-4 text-[#EB9900]" />
                West Java, Indonesia
              </p>
              <p className="text-[#E5C5A3]/70">Web Developer</p>
            </div>
            <div aria-hidden="true" className="motion-reduce:hidden">
              <BorderBeam size={160} duration={10} colorFrom="#EB9900" colorTo="#E5C5A3" />
            </div>
          </div></ScrollReveal>

          <ScrollReveal delay={0.24}><div>
            <p className="mb-4 font-mono text-sm text-[#EB9900]">Hello, I&apos;m Rissz.</p>
            <h3 className="max-w-xl font-mono text-2xl leading-snug font-bold sm:text-3xl">
              Thoughtful design.<br />
              Purposeful development.
            </h3>
            <p className="mt-6 font-mono text-sm leading-7 text-[#E5C5A3]/75">
              I&apos;m a web developer based in West Java. I design and develop
              modern, high-performance websites with a focus on exceptional
              user experiences.
            </p>
            <p className="mt-4 font-mono text-sm leading-7 text-[#E5C5A3]/75">
              My approach brings design and code together: clear interfaces,
              thoughtful details, and experiences that feel natural to use.
            </p>

            <div className="mt-8 border-t border-[#E5C5A3]/15 pt-6">
              <h4 className="mb-4 flex items-center gap-2 font-mono text-xs tracking-widest uppercase">
                <Code2 aria-hidden="true" className="size-4 text-[#EB9900]" />
                My toolkit
              </h4>
              <ul className="flex flex-wrap gap-3 font-mono text-sm">
                <li className="rounded-lg border border-[#EB9900]/25 bg-[#EB9900]/5 px-4 py-2">Next.js</li>
                <li className="rounded-lg border border-[#EB9900]/25 bg-[#EB9900]/5 px-4 py-2">Prisma</li>
                <li className="rounded-lg border border-[#EB9900]/25 bg-[#EB9900]/5 px-4 py-2">Shadcn UI</li>
              </ul>
            </div>
          </div></ScrollReveal>
        </div>
      </div>
    </section>
  );
}
