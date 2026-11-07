import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam";
import { ScrollReveal } from "@/components/scroll-reveal";

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="w-full scroll-mt-24 border-t border-[#E5C5A3]/15 bg-[#100d0a] px-6 py-20 text-[#E5C5A3] lg:px-12 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal><p className="mb-5 font-mono text-xs tracking-[0.25em] text-[#EB9900] uppercase">04 / Made with purpose</p>
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 id="projects-heading" className="font-sans text-[clamp(2rem,9vw,3rem)] uppercase sm:text-7xl lg:text-8xl">
            My <span className="font-mono font-extrabold text-[#EB9900]">projects.</span>
          </h2>
          <p className="max-w-sm font-mono text-sm leading-7 text-[#E5C5A3]/65">Dari sebuah ide menjadi halaman yang bisa dijelajahi. Berikut karya dan eksplorasi di balik portfolio ini.</p>
        </div></ScrollReveal>

        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <ScrollReveal delay={0.12}><article className="relative overflow-hidden rounded-2xl border border-[#E5C5A3]/15 bg-[#15110d]">
            <a href="#home" aria-label="Jelajahi Personal Portfolio" className="group block focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-[#EB9900]">
              <div className="relative aspect-[16/10] overflow-hidden border-b border-[#E5C5A3]/10">
                <Image src="/images/project-portfolio.jpg" alt="Tampilan desktop portfolio Rissz dengan karakter anime dan judul PORTFOLIO" fill sizes="(min-width: 1024px) 680px, 100vw" className="object-cover object-top transition-transform duration-500 group-hover:scale-105 motion-reduce:transform-none" />
              </div>
              <div className="p-6 sm:p-8">
                <p className="mb-3 font-mono text-xs tracking-widest text-[#EB9900] uppercase">01 / Personal website</p>
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-mono text-2xl font-bold">Personal Portfolio</h3>
                  <ArrowUpRight aria-hidden="true" className="size-6 shrink-0 text-[#EB9900]" />
                </div>
                <p className="mt-4 font-mono text-xs leading-6 text-[#E5C5A3]/65">Portfolio dengan identitas visual gelap, karakter anime, dan layout responsif. Dibangun untuk mempertemukan desain personal dengan pengalaman web yang mudah dijelajahi.</p>
                <ul aria-label="Teknologi Personal Portfolio" className="mt-6 flex flex-wrap gap-2 font-mono text-[11px] text-[#E5C5A3]/80">
                  {['Next.js', 'Tailwind CSS', 'Magic UI'].map((tag) => <li key={tag} className="rounded-full border border-[#E5C5A3]/15 px-3 py-1">{tag}</li>)}
                </ul>
              </div>
            </a>
            <div aria-hidden="true" className="motion-reduce:hidden"><BorderBeam duration={12} size={180} colorFrom="#EB9900" colorTo="#E5C5A3" /></div>
          </article></ScrollReveal>

          <ScrollReveal delay={0.24}><article className="group relative h-full overflow-hidden rounded-2xl border border-[#E5C5A3]/15 bg-[#15110d]">
            <a href="#timeline" className="block h-full focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-[#EB9900]">
              <div className="relative flex aspect-[16/10] flex-col justify-center gap-3 overflow-hidden border-b border-[#E5C5A3]/10 bg-[radial-gradient(ellipse_at_top_right,#793e0640,transparent_70%)] px-8" aria-hidden="true">
                {['01 / Explore', '02 / Build', '03 / Refine'].map((label, index) => (
                  <div key={label} className="flex items-center gap-4 rounded-xl border border-[#EB9900]/20 bg-[#0d0b09]/80 p-4 font-mono text-xs text-[#E5C5A3]" style={{ marginLeft: index * 12 }}>
                    <span className="size-2 shrink-0 rounded-full bg-[#EB9900]" />{label}
                  </div>
                ))}
              </div>
              <div className="p-6 sm:p-8">
                <p className="mb-3 font-mono text-xs tracking-widest text-[#EB9900] uppercase">02 / UI study</p>
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-mono text-2xl font-bold">Motion &amp; Interface</h3>
                  <ArrowUpRight aria-hidden="true" className="size-6 shrink-0 text-[#EB9900]" />
                </div>
                <p className="mt-4 font-mono text-xs leading-6 text-[#E5C5A3]/65">Eksplorasi komponen di portfolio ini: timeline bertahap, navigasi Dock, dan aksen border bergerak. Fokus pada detail kecil yang membantu pengalaman pengguna.</p>
                <p className="mt-6 font-mono text-xs text-[#EB9900]">Lihat timeline <span aria-hidden="true" className="font-mono">↗</span></p>
              </div>
            </a>
          </article></ScrollReveal>
        </div>
      </div>
    </section>
  );
}
