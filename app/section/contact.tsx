"use client";

import { ArrowUpRight, Mail, MapPin, Send } from "lucide-react";
import type { FormEvent } from "react";
import { ScrollReveal } from "@/components/scroll-reveal";

const email = "riszz@gmail.com";
const fieldClass = "w-full rounded-lg border border-[#E5C5A3]/15 bg-[#0d0b09] px-4 py-3 font-mono text-sm text-[#E5C5A3] placeholder:text-[#E5C5A3]/35 focus:border-[#EB9900] focus:outline-none focus:ring-1 focus:ring-[#EB9900]";

export function Contact() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = `Portfolio inquiry from ${data.get("name")}`;
    const body = `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section id="contact" aria-labelledby="contact-heading" className="w-full scroll-mt-24 border-t border-[#E5C5A3]/15 bg-[#100d0a] px-6 py-20 text-[#E5C5A3] lg:px-12 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="mb-5 font-mono text-xs tracking-[0.25em] text-[#EB9900] uppercase">07 / Start a conversation</p>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <ScrollReveal><div>
            <h2 id="contact-heading" className="font-sans text-[clamp(2rem,9vw,3rem)] uppercase sm:text-7xl lg:text-8xl">Let&apos;s <span className="font-mono font-extrabold text-[#EB9900]">talk.</span></h2>
            <p className="mt-6 max-w-md font-mono text-sm leading-7 text-[#E5C5A3]/65">Punya ide, pertanyaan, atau ingin berkolaborasi? Ceritakan sedikit tentang rencanamu. Saya senang mendengar dari kamu.</p>
            <div className="mt-10 space-y-5 font-mono text-sm">
              <a href={`mailto:${email}`} className="group flex w-fit items-center gap-3 text-[#E5C5A3] transition-colors hover:text-[#EB9900] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EB9900]">
                <Mail aria-hidden="true" className="size-5 text-[#EB9900]" /> {email} <ArrowUpRight aria-hidden="true" className="size-4" />
              </a>
              <p className="flex items-center gap-3 text-[#E5C5A3]/65"><MapPin aria-hidden="true" className="size-5 text-[#EB9900]" /> West Java, Indonesia</p>
            </div>
          </div></ScrollReveal>

          <ScrollReveal delay={0.12}><form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-[#E5C5A3]/15 bg-[#15110d] p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2"><label htmlFor="contact-name" className="font-mono text-xs text-[#E5C5A3]/80">Nama</label><input id="contact-name" name="name" autoComplete="name" required maxLength={100} placeholder="Nama kamu" className={fieldClass} /></div>
              <div className="space-y-2"><label htmlFor="contact-email" className="font-mono text-xs text-[#E5C5A3]/80">Email</label><input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} placeholder="email@contoh.com" className={fieldClass} /></div>
            </div>
            <div className="space-y-2"><label htmlFor="contact-message" className="font-mono text-xs text-[#E5C5A3]/80">Pesan</label><textarea id="contact-message" name="message" required maxLength={2000} rows={6} placeholder="Ceritakan ide atau pertanyaanmu..." className={`${fieldClass} resize-y`} /></div>
            <button type="submit" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[#EB9900] px-6 py-3 font-mono text-sm font-bold text-[#100d0a] transition-colors hover:bg-[#ffc04d] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EB9900]">Tulis email <Send aria-hidden="true" className="size-4" /></button>
            <p className="font-mono text-xs leading-6 text-[#E5C5A3]/60">Aplikasi email kamu akan terbuka untuk meninjau dan mengirim pesan.</p>
          </form></ScrollReveal>
        </div>
      </div>
    </section>
  );
}
