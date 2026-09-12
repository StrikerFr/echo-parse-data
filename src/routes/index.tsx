import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowRight } from "lucide-react";
import { DataWall, Section } from "@/components/research-ui";
import { sources } from "@/lib/research-data";

// No head() here: the home route inherits title/description/og/twitter from
// __root.tsx, and ships no og:image so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "MediKiosk Research — Patient Case-Taking in India" },
    { name: "description", content: "An evidence-led exploration of Indian consultations, communication, AYUSH, digital health and patient records." },
    { property: "og:title", content: "MediKiosk Research — Patient Case-Taking in India" },
    { property: "og:description", content: "Evidence behind the gap between a patient’s story and the clinical record." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Index,
});

// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
  return (
    <>
      <section className="mx-auto max-w-[1600px] px-5 pb-16 pt-16 lg:px-10 lg:pb-24 lg:pt-28">
        <div className="grid gap-10 lg:grid-cols-[1fr_3fr]"><p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-foreground">MediKiosk • Research 2026</p><div><h1 className="max-w-6xl font-serif text-5xl leading-[0.94] sm:text-7xl lg:text-[7.5rem]">Understanding the gap between a patient’s story and the clinical record.</h1><p className="mt-10 max-w-3xl text-base leading-relaxed text-muted-foreground lg:text-xl">We examined Indian consultation research, healthcare communication, AYUSH assessment, digital health infrastructure, patient documents and accessibility standards to understand where case-taking can improve.</p></div></div>
        <div className="mt-20 grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-4">{[["INDIA","Primary context"],["AYUSH","Clinical focus"],["7+","Research domains"],[String(sources.length),"Verified sources"]].map(([a,b])=><div key={a} className="border-b border-r border-border p-6"><strong className="font-serif text-4xl">{a}</strong><p className="mt-2 text-xs uppercase tracking-[0.12em] text-muted-foreground">{b}</p></div>)}</div>
      </section>
      <Section index="00" title="The problem in one line" dark>
        <div className="grid items-center gap-6 text-center md:grid-cols-[1fr_auto_1fr_auto_1fr]"><p className="font-serif text-4xl lg:text-6xl">Patient story</p><ArrowRight className="mx-auto hidden size-8 text-accent md:block"/><ArrowDown className="mx-auto size-8 text-accent md:hidden"/><p className="border-y border-accent py-8 font-serif text-4xl text-accent lg:text-6xl">Case-taking</p><ArrowRight className="mx-auto hidden size-8 text-accent md:block"/><ArrowDown className="mx-auto size-8 text-accent md:hidden"/><p className="font-serif text-4xl lg:text-6xl">Clinical record</p></div>
        <p className="mt-14 text-center text-sm uppercase tracking-[0.18em] text-primary-foreground/70">Where information becomes fragmented, time becomes expensive.</p>
      </Section>
      <Section index="01" title="The evidence, at a glance"><DataWall /></Section>
      <Section index="08" title="The conclusion">
        <div className="grid gap-10 lg:grid-cols-[2fr_1fr]"><h2 className="font-serif text-6xl leading-[0.95] lg:text-8xl">The information exists.<br/><span className="text-accent-foreground">The bridge is missing.</span></h2><div className="flex flex-col justify-end"><p className="text-sm leading-relaxed text-muted-foreground">The research points toward a structured, reviewable bridge between how patients describe their health and what clinicians need to assess it.</p><a href="/evidence" className="mt-6 inline-flex min-h-11 items-center gap-2 font-bold uppercase tracking-[0.12em]">Follow the evidence <ArrowRight className="size-4"/></a></div></div>
      </Section>
    </>
  );
}
