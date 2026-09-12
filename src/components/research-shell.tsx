import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Accessibility, ArrowUpRight, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";

const nav = [
  ["Overview", "/"], ["Consultation", "/consultation"], ["Patients", "/patients"],
  ["AYUSH", "/ayush"], ["Digital Health", "/digital-health"], ["Evidence", "/evidence"], ["Sources", "/sources"],
] as const;

export function ResearchShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [hindi, setHindi] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return <div className="min-h-dvh overflow-x-clip bg-background text-foreground">
    <a href="#content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-primary focus:px-4 focus:py-3 focus:text-primary-foreground">Skip to content</a>
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-[1600px] items-center justify-between px-5 lg:px-10">
        <Link to="/" className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
          <span className="grid size-9 place-items-center bg-primary font-serif text-lg text-primary-foreground">M</span>
          <span className="text-[11px] font-bold uppercase leading-[1.05] tracking-[0.18em]">MediKiosk<br/><span className="text-accent-foreground">Research</span></span>
        </Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-5 xl:flex">
          {nav.map(([label, to]) => <Link key={to} to={to} className={`border-b py-2 text-xs font-semibold uppercase tracking-[0.12em] transition-colors ${pathname === to ? "border-primary text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"}`}>{label}</Link>)}
        </nav>
        <div className="flex items-center gap-1">
          <Button variant="ghost" className="hidden min-h-11 text-xs sm:inline-flex" onClick={() => setHindi(!hindi)} aria-pressed={hindi}>{hindi ? "English" : "हिन्दी"}</Button>
          <Button variant="ghost" size="icon" className="min-h-11 min-w-11" aria-label="Open accessibility standard" asChild><a href="https://guidelines.india.gov.in/accessibility-guidelines-and-attributes/" target="_blank" rel="noreferrer"><Accessibility /></a></Button>
          <Button variant="ghost" size="icon" className="min-h-11 min-w-11 xl:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>{open ? <X/> : <Menu/>}</Button>
        </div>
      </div>
      {open && <nav aria-label="Mobile navigation" className="border-t border-border bg-background px-5 py-5 xl:hidden">{nav.map(([label,to]) => <Link key={to} to={to} onClick={() => setOpen(false)} className="flex min-h-12 items-center justify-between border-b border-border text-sm font-semibold uppercase tracking-[0.12em]">{label}<span aria-hidden>↗</span></Link>)}</nav>}
    </header>
    <main id="content">{children}</main>
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-4 px-5 py-8 text-xs md:flex-row md:items-center md:justify-between lg:px-10">
        <p className="font-bold uppercase tracking-[0.16em]">MediKiosk Research · India · SIH 2026</p>
        <Link to="/sources" className="inline-flex items-center gap-2 font-semibold">All data + sources <ArrowUpRight className="size-4"/></Link>
      </div>
    </footer>
  </div>;
}
