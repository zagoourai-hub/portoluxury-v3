import { ArrowUpRight, Check } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

const packages = [
  { name: "Landing Page", description: "Halaman fokus untuk memperkenalkan produk, layanan, atau ide.", features: ["Desain responsif", "Halaman promosi", "Tombol kontak"] },
  { name: "Website Bisnis", description: "Website untuk memperkenalkan bisnis dan menjangkau calon pelanggan.", features: ["Beberapa halaman", "Desain responsif", "Informasi layanan"] },
  { name: "Custom Project", description: "Punya kebutuhan yang berbeda? Kita diskusikan solusi yang sesuai.", features: ["Scope sesuai kebutuhan", "Desain personal", "Diskusi proyek"] },
];

export function Pricing() {
  return (
    <section id="pricing" aria-labelledby="pricing-heading" className="w-full scroll-mt-24 border-t border-[#E5C5A3]/15 bg-[#0d0b09] px-6 py-20 text-[#E5C5A3] lg:px-12 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <p className="mb-5 font-mono text-xs tracking-[0.25em] text-[#EB9900] uppercase">06 / Work together</p>
          <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h2 id="pricing-heading" className="font-sans text-[clamp(2rem,9vw,3rem)] uppercase sm:text-7xl lg:text-8xl">My <span className="font-mono font-extrabold text-[#EB9900]">pricing.</span></h2>
            <p className="max-w-sm font-mono text-sm leading-7 text-[#E5C5A3]/65">Setiap proyek punya kebutuhan berbeda. Ceritakan idemu untuk mendapatkan penawaran yang sesuai.</p>
          </div>
        </ScrollReveal>
        <div className="grid gap-5 md:grid-cols-3">
          {packages.map(({ name, description, features }, index) => (
            <ScrollReveal key={name} delay={(index + 1) * 0.12} className="h-full">
              <article className="flex h-full flex-col rounded-2xl border border-[#E5C5A3]/15 bg-[#15110d] p-6 sm:p-8">
                <p className="font-mono text-xs tracking-widest text-[#EB9900] uppercase">0{index + 1} / Service</p>
                <h3 className="mt-6 font-mono text-xl font-bold">{name}</h3>
                <p className="mt-3 min-h-18 font-mono text-xs leading-6 text-[#E5C5A3]/65">{description}</p>
                <p className="mt-6 border-t border-[#E5C5A3]/15 pt-6 font-mono text-lg font-bold">Hubungi saya</p>
                <ul className="mt-6 flex-1 space-y-3 font-mono text-xs text-[#E5C5A3]/80">
                  {features.map((feature) => <li key={feature} className="flex items-center gap-3"><Check aria-hidden="true" className="size-4 shrink-0 text-[#EB9900]" />{feature}</li>)}
                </ul>
                <a href="#contact" className="mt-8 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-[#EB9900]/50 px-4 font-mono text-xs text-[#EB9900] transition-colors hover:bg-[#EB9900] hover:text-[#100d0a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EB9900]">Diskusikan proyek <ArrowUpRight aria-hidden="true" className="size-4" /></a>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
