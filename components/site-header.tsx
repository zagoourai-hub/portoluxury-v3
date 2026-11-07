import { BookOpen, Compass, Home, Mail, UserRound } from "lucide-react";
import { Dock, DockIcon } from "@/components/ui/dock";

const links = [
  { href: "#home", label: "Home", icon: Home },
  { href: "#about", label: "About", icon: UserRound },
  { href: "#timeline", label: "Journey", icon: Compass },
  { href: "#learning", label: "My Learning", icon: BookOpen },
  { href: "#contact", label: "Contact", icon: Mail },
];

export function SiteHeader() {
  return (
    <>
    <header className="fixed hidden md:block inset-x-0 top-0 z-50 border-b border-[#E5C5A3]/15 bg-[#0d0b09]/70 text-[#E5C5A3] backdrop-blur-md">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 lg:px-12"
      >
        <a href="#home" className="font-sans text-2xl tracking-wide text-[#EB9900]" aria-label="Rissz home">
          R<span className="font-mono">.</span>
        </a>
        <div className="hidden items-center gap-5 font-mono text-[11px] uppercase tracking-wider sm:gap-8 sm:text-xs md:flex">
          <a href="#home" className="transition-colors hover:text-[#EB9900]">Home</a>
          <a href="#about" className="transition-colors hover:text-[#EB9900]">About</a>
          <a href="#timeline" className="transition-colors hover:text-[#EB9900]">Journey</a>
          <a href="#learning" className="transition-colors hover:text-[#EB9900]">Learning</a>
          <a href="#projects" className="transition-colors hover:text-[#EB9900]">Projects</a>
          <a href="#blog" className="transition-colors hover:text-[#EB9900]">Blog</a>
          <a href="#pricing" className="transition-colors hover:text-[#EB9900]">Pricing</a>
          <a
            href="#contact"
            className="rounded-full border border-[#EB9900]/60 px-4 py-2 text-[#EB9900] transition-colors hover:bg-[#EB9900] hover:text-[#100d0a] sm:px-5"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
      <nav aria-label="Mobile navigation" className="fixed inset-x-0 bottom-5 z-50 px-4 md:hidden">
        <Dock
          disableMagnification
          className="mt-0 h-14 gap-3 border-[#E5C5A3]/20 bg-[#0d0b09]/85 text-[#E5C5A3] shadow-lg shadow-black/30"
        >
          {links.map(({ href, label, icon: Icon }) => (
            <DockIcon key={label} className="size-10">
              <a
                href={href}
                aria-label={label}
                className="flex size-10 items-center justify-center rounded-full text-[#E5C5A3] transition-colors hover:bg-[#EB9900]/15 hover:text-[#EB9900] focus-visible:outline-2 focus-visible:outline-[#EB9900]"
              >
                <Icon aria-hidden="true" className="size-5" />
              </a>
            </DockIcon>
          ))}
        </Dock>
      </nav>
    </>
  );
}
