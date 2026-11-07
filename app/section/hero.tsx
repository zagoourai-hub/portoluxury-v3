"use client";
import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import { Particles } from "@/components/ui/particles";
import Image from "next/image";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { ScrollReveal } from "@/components/scroll-reveal";
import { motion, useReducedMotion } from "motion/react";

export default function HeroPage() {
    const color = "#EB9900";
    const reducedMotion = useReducedMotion();
    return (
        <section
            id="home"
            className="
        relative isolate w-full overflow-hidden pt-6 pb-28 md:pt-24 lg:min-h-225 lg:py-2
        bg-[url('/images/bg-hero.png')]
        bg-cover bg-center bg-no-repeat
        text-[#E5C5A3]
      "
        >
            <Particles
                className="absolute inset-0 z-0"
                quantity={160}
                ease={100}
                color={color}
                refresh
            />
            <div className="relative mx-auto max-w-[1600px] px-6 lg:px-12">


                {/* MAIN GRID */}
                <div
                    className="
                     relative z-10 grid
                    md:grid-cols-12 items-end
                    gap-x-4 gap-y-5
                    lg:mt-0 lg:min-h-175 lg:gap-y-0
          "
                >
                <p
                    className="
            relative z-10 order-4 col-span-12 mt-2 text-center font-mono text-xs tracking-wide text-[#E5C5A3]/65 sm:text-sm
            lg:pointer-events-none lg:absolute lg:inset-x-0 lg:top-[59%] lg:mt-0 lg:px-4 lg:text-4xl lg:text-[#E5C5A3]
  "
                >
                    Tech Stack: Next.js, Prisma, Shadcn UI
                </p>
                    {/* LEFT CONTENT */}
                    <div
                        className="
                        relative z-20
                        col-span-12
                        order-3
                        lg:order-1
                        space-y-4 text-center lg:text-left
                        lg:col-span-3
                         lg:space-y-5
                         lg:translate-y-1/4
            "
                    >
                        <ScrollReveal delay={0.24}><div className="space-y-4 lg:space-y-5"><h1 className="text-3xl font-mono font-bold uppercase lg:text-5xl">
                            I am
                            <span className="block font-mono pt-2">Web Developer</span>
                        </h1>

                        <p className="mx-auto max-w-sm font-mono text-xs leading-6 text-white/70 lg:mx-0 lg:mt-6 lg:max-w-xs lg:text-sm">
                            I design and develop modern, high-performance websites with a
                            focus on exceptional user experiences.
                        </p>
                        <Button
                            variant="outline"
                            size="lg"
                            className="relative h-11 w-full max-w-sm cursor-pointer font-mono lg:absolute lg:mt-0 lg:h-9 lg:w-auto"
                        >
                            Get My CV
                            <BorderBeam
                                borderWidth={2}
                                size={60}
                                duration={2}
                                initialOffset={20}
                                className="from-transparent via-yellow-500   to-transparent"
                                transition={{
                                    type: "spring",
                                    stiffness: 10,
                                    damping: 10,
                                }}
                            />
                        </Button></div></ScrollReveal>
                    </div>

                    {/* CENTER IMAGE */}
                    <div
                        className="
                            relative z-10
                            col-span-12
                            h-[clamp(220px,80vw,360px)] lg:max-h-[760px]
                            order-2
                            lg:order-2

                            lg:col-span-6 lg:h-190
                             "
                    >
                <ScrollReveal className="relative h-full" delay={0.12}>{/* BACKGROUND TITLE */}
                <TypingAnimation
                    words={["PORTFOLIO"]}
                    cursorStyle="line"
                    showCursor={false}
                    typeSpeed={50}
                    deleteSpeed={150}
                    loop
                    className="pointer-events-none
                    font-sans absolute
                    inset-x-0 top-4 z-0 lg:-inset-x-1/2 lg:top-36
                    whitespace-nowrap text-center text-[clamp(3rem,16vw,7rem)] lg:translate-x-[3%] lg:text-[clamp(8rem,14vw,20em)]
                    leading-none font-extrabold
                    tracking-[10]
                    text-shadow-xl/60
                  text-shadow-regal-blue"
                />

                        <motion.div
                            className="pointer-events-none absolute inset-0 motion-reduce:!transform-none"
                            animate={reducedMotion ? { y: 0 } : { y: [0, -10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        ><Image
                            alt="Profile"
                            src="/images/bg-hero2.png"
                            fill
                            priority
                            sizes="(min-width: 1024px) 50vw, 100vw"
                            className="object-cover object-bottom drop-shadow-lg drop-shadow-amber-500/50 lg:object-contain lg:scale-150"
                        /></motion.div></ScrollReveal>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div
                        className="
                        relative z-20
                        col-span-12
                        order-1
                        top-0
                        lg:order-3
                        lg:col-span-3 
                        flex flex-col items-center lg:items-start
             
            "
                    >
                        <ScrollReveal><p className="text-center text-[clamp(0.95rem,4.8vw,1.25rem)] font-extrabold font-mono uppercase sm:text-2xl lg:text-left lg:text-[26px]">
                            Design That Inspires.
                            <span className="block font-mono">Code That Performs.</span>
                        </p></ScrollReveal>

                        <ScrollReveal delay={0.12}><p className="mt-3 text-center text-xs font-mono text-white/60 lg:mt-6 lg:text-left lg:text-sm">
                            Based in West Java
                            <span className="ml-2 font-mono lg:ml-0 lg:block">/ Rissz</span>
                        </p></ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
