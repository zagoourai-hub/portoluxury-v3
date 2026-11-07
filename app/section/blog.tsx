import { ArrowDown, BookOpen, LayoutTemplate, Type } from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam";
import { ScrollReveal } from "@/components/scroll-reveal";

const posts = [
  {
    category: "Layout",
    title: "Merapikan hero untuk layar kecil",
    icon: LayoutTemplate,
    summary: "Catatan tentang urutan konten, proporsi karakter, dan ruang untuk navigasi mobile.",
    paragraphs: [
      "Pada hero portfolio ini, susunan desktop memakai tiga kolom. Di mobile, susunannya menjadi slogan, karakter, lalu perkenalan dan tombol CV. Urutan ini menjaga pesan utama tetap terbaca sebelum pengunjung menggulir halaman.",
      "Gambar karakter memiliki kanvas landscape dengan ruang transparan di sisi kiri dan kanan. Memakai object-cover pada area mobile membuat karakter lebih proporsional. Judul PORTFOLIO ditempatkan di dalam area gambar agar tidak bergeser ketika tinggi layar berubah.",
      "Navigasi Dock berada di bawah layar. Ruang di akhir section membantu konten tetap bisa dijangkau, sementara pemeriksaan pada lebar 320 px memastikan halaman tidak melebar ke samping.",
    ],
  },
  {
    category: "Typography",
    title: "Ketika Anton jatuh ke Arial",
    icon: Type,
    summary: "Mengapa font fallback muncul, dan bagaimana font lokal menjaga identitas visual portfolio.",
    paragraphs: [
      "Judul hero sudah memakai kelas font-sans, tetapi bentuk hurufnya sempat berubah. Pemeriksaan di browser menunjukkan bahwa font Anton SC gagal diunduh saat server lokal dijalankan. Akibatnya, browser memakai font fallback berbasis Arial.",
      "Perbaikannya ada di sumber font. File Anton SC disimpan bersama project beserta lisensinya, kemudian dimuat lewat next/font/local. Kelas yang dipakai komponen tetap sama, tetapi file font sekarang dilayani oleh aplikasi sendiri.",
      "Perubahan ini menjaga judul tetap konsisten saat koneksi ke layanan font eksternal bermasalah. Status pemuatan font di browser juga perlu diperiksa, karena nama font di CSS belum membuktikan file font berhasil dimuat.",
    ],
  },
  {
    category: "Components",
    title: "Memberi gerak pada detail UI",
    icon: BookOpen,
    summary: "Memakai Magic UI untuk menambahkan aksen gerak yang tetap mendukung isi halaman.",
    paragraphs: [
      "Portfolio ini memakai komponen Magic UI yang disimpan sebagai source lokal. BorderBeam memberi aksen pada tepi kartu, AnimatedList memperkenalkan milestone secara bertahap, dan Dock menyatukan tautan navigasi pada layar kecil.",
      "Sebelum menambah efek, tentukan fungsi komponennya. Informasi penting harus tetap terbaca tanpa menunggu animasi. Tombol dan tautan juga memerlukan label yang jelas dan akses keyboard, meskipun tampilannya berupa ikon.",
      "Efek dekoratif pada kartu Projects dan Blog disembunyikan saat pengunjung memilih reduced motion. Gerakan berfungsi sebagai aksen; struktur, kontras, dan jarak antar konten tetap menjadi fondasi tampilan.",
    ],
  },
];

export function Blog() {
  return (
    <section id="blog" aria-labelledby="blog-heading" className="w-full scroll-mt-24 border-t border-[#E5C5A3]/15 bg-[#0d0b09] px-6 py-20 text-[#E5C5A3] lg:px-12 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal><p className="mb-5 font-mono text-xs tracking-[0.25em] text-[#EB9900] uppercase">05 / Notes along the way</p>
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 id="blog-heading" className="font-sans text-[clamp(2rem,9vw,3rem)] uppercase sm:text-7xl lg:text-8xl">My <span className="font-mono font-extrabold text-[#EB9900]">blog.</span></h2>
          <p className="max-w-sm font-mono text-sm leading-7 text-[#E5C5A3]/65">Catatan singkat dari proses membangun portfolio ini. Hal yang dicoba, masalah yang ditemui, dan pelajaran yang dibawa pulang.</p>
        </div></ScrollReveal>
        <div className="relative overflow-hidden rounded-2xl border border-[#E5C5A3]/15 bg-[#15110d]">
          <div className="grid items-start divide-y divide-[#E5C5A3]/15 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
            {posts.map(({ category, title, icon: Icon, summary, paragraphs }, index) => (
              <ScrollReveal key={title} delay={(index + 1) * 0.12}><article className="min-w-0 p-6 sm:p-8">
                <div className="mb-8 flex items-center justify-between text-[#EB9900]">
                  <Icon aria-hidden="true" className="size-5" />
                  <p className="font-mono text-[11px] tracking-widest uppercase">{category}</p>
                </div>
                <h3 className="font-mono text-xl leading-snug font-bold">{title}</h3>
                <p className="mt-4 font-mono text-xs leading-6 text-[#E5C5A3]/65">{summary}</p>
                <details className="group mt-6 font-mono text-xs">
                  <summary className="flex w-fit cursor-pointer list-none items-center gap-2 rounded-sm py-2 text-[#EB9900] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EB9900] [&::-webkit-details-marker]:hidden">
                    Baca catatan <ArrowDown aria-hidden="true" className="size-3 transition-transform group-open:rotate-180 motion-reduce:transition-none" />
                  </summary>
                  <div className="mt-4 space-y-4 border-t border-[#E5C5A3]/15 pt-4 leading-6 text-[#E5C5A3]/80">
                    {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </div>
                </details>
              </article></ScrollReveal>
            ))}
          </div>
          <div aria-hidden="true" className="motion-reduce:hidden"><BorderBeam duration={16} size={140} colorFrom="#EB9900" colorTo="#E5C5A3" /></div>
        </div>
      </div>
    </section>
  );
}
