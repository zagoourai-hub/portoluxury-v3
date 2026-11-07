import { Code2, Compass, Terminal } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

const milestones = [
  {
    number: "01",
    title: "The curiosity",
    description:
      "Ketertarikan pada desain dan teknologi berkembang menjadi keinginan untuk membangun sesuatu yang bisa digunakan orang.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Learning by building",
    description:
      "Mulai merancang dan membuat website, sambil terus belajar tentang pengalaman pengguna dan pengembangan web.",
    icon: Code2,
  },
  {
    number: "03",
    title: "Design meets code",
    description:
      "Sekarang, fokus pada website modern dengan Next.js, Prisma, dan Shadcn UI—menggabungkan detail visual dengan implementasi yang fungsional.",
    icon: Terminal,
  },
];

export function Timeline() {
  return (
    <section
      id="timeline"
      aria-labelledby="timeline-heading"
      className="w-full border-t border-[#E5C5A3]/15 bg-[#100d0a] px-6 py-20 text-[#E5C5A3] lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <ScrollReveal><p className="mb-5 font-mono text-xs tracking-[0.25em] text-[#EB9900] uppercase">
          02 / The journey
        </p>
        <h2
          id="timeline-heading"
          className="mb-14 font-sans text-5xl uppercase sm:text-7xl lg:text-8xl"
        >
          My <span className="font-mono font-extrabold text-[#EB9900]">journey.</span>
        </h2></ScrollReveal>

        <div className="relative flex flex-col gap-10 before:absolute before:top-3 before:bottom-3 before:left-[19px] before:w-px before:bg-[#EB9900]/30 md:gap-0 md:before:left-1/2">
          {milestones.map(({ number, title, description, icon: Icon }, index) => (
            <ScrollReveal key={number} delay={(index + 1) * 0.12}><article
              className="relative grid gap-5 pl-14 md:min-h-48 md:grid-cols-2 md:gap-16 md:pl-0"
            >
              <span className="absolute top-1 left-0 z-10 flex size-10 items-center justify-center rounded-full border border-[#EB9900]/50 bg-[#100d0a] text-[#EB9900] md:left-1/2 md:-translate-x-1/2">
                <Icon aria-hidden="true" className="size-4" />
              </span>
              <div className={index % 2 === 0 ? "md:pr-10 md:text-right" : "md:col-start-2 md:pl-10"}>
                <p className="mb-2 font-mono text-xs tracking-widest text-[#EB9900]">
                  {number} <span className="text-[#E5C5A3]/45">/ 03</span>
                </p>
                <h3 className="font-mono text-xl font-bold sm:text-2xl">{title}</h3>
                <p className="mt-3 max-w-lg font-mono text-sm leading-7 text-[#E5C5A3]/65 md:ml-auto">
                  {description}
                </p>
              </div>
            </article></ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
