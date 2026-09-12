import { ArrowUpRight, FileText } from "lucide-react";
import { type ReactNode } from "react";
import { findings, sourceById } from "@/lib/research-data";

export function PageIntro({ index, eyebrow, title, subtitle }: { index: string; eyebrow: string; title: string; subtitle: string }) {
  return <header className="mx-auto max-w-[1600px] border-b border-border px-5 pb-16 pt-16 lg:px-10 lg:pb-24 lg:pt-24">
    <div className="grid gap-8 lg:grid-cols-[1fr_3fr]"><div className="text-xs font-bold uppercase tracking-[0.18em] text-accent-foreground">{index} / {eyebrow}</div><div><h1 className="max-w-5xl font-serif text-5xl leading-[0.96] sm:text-6xl lg:text-8xl">{title}</h1><p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground lg:text-lg">{subtitle}</p></div></div>
  </header>;
}

export function Section({ index, title, children, dark = false }: { index?: string; title?: string; children: ReactNode; dark?: boolean }) {
  return <section className={dark ? "bg-primary text-primary-foreground" : "bg-background"}><div className="mx-auto max-w-[1600px] px-5 py-16 lg:px-10 lg:py-24">{title && <div className={`mb-12 flex items-center gap-4 border-b pb-4 ${dark ? "border-primary-foreground/20" : "border-border"}`}><span className="font-mono text-xs opacity-60">{index}</span><h2 className="text-xs font-bold uppercase tracking-[0.18em]">{title}</h2></div>}{children}</div></section>;
}

export function SourceLink({ id, label = "Open source" }: { id: string; label?: string }) {
 const source = sourceById(id); if (!source) return null;
 return <a href={source.url} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-2 border-b border-current text-xs font-bold uppercase tracking-[0.12em] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">{label}<ArrowUpRight className="size-4"/><span className="sr-only">: {source.title} (opens in new tab)</span></a>
}

export function DataWall() {
 const scales = [23, 65, 53, 31, 16, 38];
 return <div className="grid border-l border-t border-border md:grid-cols-2 xl:grid-cols-3">{findings.map((f,i)=><article key={f.value} className="group flex min-h-[310px] flex-col border-b border-r border-border p-6 lg:p-8"><div className="flex justify-between text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground"><span>IND / {String(i+1).padStart(2,"0")}</span><span>{f.year.split(";").at(-1)}</span></div><p className="mt-10 font-mono text-5xl font-semibold leading-none text-primary sm:text-6xl">{f.value}</p><p className="mt-4 text-xs font-bold uppercase tracking-[0.14em] text-accent-foreground">{f.label}</p><div aria-hidden className="mt-8 h-2 bg-muted"><div className="h-full bg-accent" style={{width:`${scales[i]}%`}} /></div><div className="mt-auto pt-8"><SourceLink id={f.sourceId} label="Source"/></div></article>)}</div>
}

export function DiagramArrow() { return <div aria-hidden className="my-3 text-center font-mono text-2xl text-accent-foreground">↓</div> }
export function EvidenceNote({ children }: { children: ReactNode }) { return <aside className="border-l-4 border-accent bg-muted p-5 text-sm leading-relaxed"><FileText className="mb-3 size-5"/>{children}</aside> }
