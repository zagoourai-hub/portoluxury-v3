import { Code2, Database, PanelsTopLeft } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

const learningTopics = [
  {
    number: "01",
    title: "Building for the web",
    stack: "Next.js",
    icon: Code2,
    description:
      "Mempelajari cara menyusun halaman, komponen, dan navigasi menjadi pengalaman web yang utuh.",
    topics: ["App Router", "React components", "Responsive layouts"],
  },
  {
    number: "02",
    title: "Working with data",
    stack: "Prisma",
    icon: Database,
    description:
      "Mendalami pemodelan data dan hubungan antar entitas untuk membangun fondasi aplikasi yang terstruktur.",
    topics: ["Data modeling", "Relations", "Database queries"],
  },
  {
    number: "03",
    title: "Crafting interfaces",
    stack: "Shadcn UI / Magic UI",
    icon: PanelsTopLeft,
    description:
      "Mengeksplorasi komponen dan animasi untuk membuat antarmuka yang konsisten, mudah digunakan, dan terasa hidup.",
    topics: ["Reusable UI", "Accessibility", "Motion & interaction"],
  },
];

export function MyLearning() {
  return (
    <section
      id="learning"
      aria-labelledby="learning-heading"
      className="w-full scroll-mt-24 border-t border-[#E5C5A3]/15 bg-[#0d0b09] px-6 py-20 text-[#E5C5A3] lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <ScrollReveal><p className="mb-5 font-mono text-xs tracking-[0.25em] text-[#EB9900] uppercase">
          03 / Always a student
        </p>
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 id="learning-heading" className="font-sans text-[clamp(2rem,9vw,3rem)] uppercase sm:text-7xl lg:text-8xl">
            My <span className="font-mono font-extrabold text-[#EB9900]">learning.</span>
          </h2>
          <p className="max-w-sm font-mono text-sm leading-7 text-[#E5C5A3]/65">
            Belajar lewat eksplorasi, mencoba langsung, lalu memperbaiki detailnya.
            Berikut area yang saya pelajari dalam pengembangan web.
          </p>
        </div></ScrollReveal>

        <div className="grid gap-5 md:grid-cols-3">
          {learningTopics.map(({ number, title, stack, icon: Icon, description, topics }, index) => (
            <ScrollReveal key={number} delay={(index + 1) * 0.12}><article
              className="rounded-2xl border border-[#E5C5A3]/15 bg-linear-to-br from-[#21180f] to-[#100d0a] p-6 transition-colors hover:border-[#EB9900]/50 sm:p-8"
            >
              <div className="mb-8 flex items-center justify-between">
                <div className="flex size-12 items-center justify-center rounded-xl border border-[#EB9900]/25 bg-[#EB9900]/5 text-[#EB9900]">
                  <Icon aria-hidden="true" className="size-5" />
                </div>
                <span aria-hidden="true" className="font-mono text-sm text-[#E5C5A3]/35">{number}</span>
              </div>
              <p className="mb-3 font-mono text-xs text-[#EB9900]">{stack}</p>
              <h3 className="font-mono text-xl leading-snug font-bold">{title}</h3>
              <p className="mt-4 font-mono text-xs leading-6 text-[#E5C5A3]/65">{description}</p>
              <ul className="mt-6 space-y-3 border-t border-[#E5C5A3]/10 pt-6 font-mono text-xs text-[#E5C5A3]/80">
                {topics.map((topic) => (
                  <li key={topic} className="flex items-center gap-3">
                    <span aria-hidden="true" className="size-1 shrink-0 rounded-full bg-[#EB9900]" />
                    {topic}
                  </li>
                ))}
              </ul>
            </article></ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
