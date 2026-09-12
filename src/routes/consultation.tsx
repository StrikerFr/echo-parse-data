import { createFileRoute } from "@tanstack/react-router";
import { SourceLink, Section } from "@/components/research-ui";
import consultationPhoto from "@/assets/india-medical-consultation.jpg.asset.json";
import opdPhoto from "@/assets/aiims-geriatric-opd.jpg.asset.json";

export const Route = createFileRoute("/consultation")({
  head: () => ({ meta: [
    { title: "India Consultation Data — MediKiosk Research" },
    { name: "description", content: "Visual research on consultation time, information capture and communication in Indian healthcare." },
    { property: "og:title", content: "India Consultation Data — MediKiosk Research" },
    { property: "og:description", content: "Indian consultation evidence shown through sourced charts and study context." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Consultation,
});

const timeline = [
  { value: 1.5, label: "Historic study 01", source: "BMJ review", year: "Review 2017", sourceId: "consult-time-global" },
  { value: 1.9, label: "Historic study 02", source: "BMJ review", year: "Review 2017", sourceId: "consult-time-global" },
  { value: 2.0, label: "Historic study 03", source: "BMJ review", year: "Review 2017", sourceId: "consult-time-global" },
  { value: 2.3, label: "Historic study 04", source: "BMJ review", year: "Review 2017", sourceId: "consult-time-global" },
  { value: 2.4, label: "Public audit", source: "AER audit", year: "2016", sourceId: "primary-care-audit" },
  { value: 9.8, label: "Physician survey", source: "500 physicians", year: "2024", sourceId: "consult-time-india" },
];

function Consultation() {
  return <>
    <header className="mx-auto max-w-[1600px] px-5 pb-10 pt-12 lg:px-10 lg:pb-16 lg:pt-20">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-foreground">02 / Indian consultation data</p>
      <div className="mt-6 grid items-end gap-8 lg:grid-cols-[2fr_1fr]"><h1 className="font-serif text-6xl leading-[0.92] sm:text-8xl lg:text-[8rem]">Minutes shape the record.</h1><div className="grid grid-cols-2 border-l border-t border-border">{[["4","datasets"],["India","context"]].map(([v,l])=><div key={v} className="border-b border-r border-border p-4"><p className="font-mono text-3xl text-accent-foreground">{v}</p><p className="mt-1 text-[10px] font-bold uppercase tracking-[0.12em] text-muted-foreground">{l}</p></div>)}</div></div>
    </header>

    <Section index="02.1" title="Consultation time / minutes">
      <div role="img" aria-label="Bar chart: four historical Indian studies reported 1.5, 1.9, 2.0 and 2.3 minutes; a public-provider audit reported 2.4 minutes; and a 500-physician survey reported 9.8 minutes." className="space-y-4">
        <div aria-hidden className="ml-auto hidden w-[calc(100%-12rem)] grid-cols-6 text-[10px] text-muted-foreground sm:grid"><span>0</span><span>2</span><span>4</span><span>6</span><span>8</span><span className="text-right">10 min</span></div>
        {timeline.map((item, index)=><div key={`${item.year}-${item.value}`} className="grid items-center gap-3 sm:grid-cols-[9rem_1fr_8rem]"><div><p className="text-xs font-bold uppercase">{item.label}</p><p className="text-[10px] text-muted-foreground">{item.year} · {item.source}</p></div><div className="h-11 bg-muted"><div className={`flex h-full min-w-12 items-center justify-end px-3 ${index===timeline.length-1?"bg-primary text-primary-foreground":"bg-accent text-primary-foreground"}`} style={{width:`${item.value/10*100}%`}}><span className="font-mono text-lg font-bold">{item.value}</span></div></div><SourceLink id={item.sourceId} label="Data"/></div>)}
      </div>
      <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-[10px] font-bold uppercase tracking-[0.12em] text-muted-foreground"><span>Not one national average</span><span>Different study methods</span><SourceLink id="consult-time-global" label="BMJ source"/><SourceLink id="consult-time-india" label="Survey source"/></div>
    </Section>

    <Section index="02.4" title="Study index">
      <div className="overflow-x-auto border border-border"><table className="w-full min-w-[720px] border-collapse text-left"><thead className="bg-primary text-primary-foreground"><tr>{["Signal","Value","Sample / setting","Year","Dataset"].map(x=><th key={x} className="p-4 text-[10px] uppercase tracking-[0.14em]">{x}</th>)}</tr></thead><tbody className="divide-y divide-border">{[
        ["Consultation time","9.8 min","500 physicians","2024","consult-time-india"],
        ["Public care time","2.4 min","Standardized patients","2016","primary-care-audit"],
        ["Checklist capture","16%","Public providers","2016","primary-care-audit"],
        ["Communication incidents","53%","106 clinicians / 6 sites","2021","communication-ed"],
        ["Languages spoken","3.75 avg","106 clinicians / 6 sites","2021","communication-ed"],
      ].map(([signal,value,sample,year,id])=><tr key={signal}><td className="p-4 text-xs font-bold uppercase">{signal}</td><td className="p-4 font-mono text-2xl text-accent-foreground">{value}</td><td className="p-4 text-xs text-muted-foreground">{sample}</td><td className="p-4 font-mono text-xs">{year}</td><td className="p-4"><SourceLink id={id} label="Open"/></td></tr>)}</tbody></table></div>
    </Section>

    <Section index="02.2" title="Public primary-care audit" dark>
      <div className="grid gap-10 md:grid-cols-2"><div className="flex flex-col justify-center border-l border-primary-foreground/20 pl-6"><p className="font-mono text-8xl text-accent">2.4</p><p className="mt-3 text-xs font-bold uppercase tracking-[0.15em]">average consultation minutes</p></div><div className="flex flex-col justify-center"><div className="relative mx-auto grid aspect-square w-full max-w-xs place-items-center rounded-full bg-conic-data" role="img" aria-label="16 percent of clinical checklist items completed"><div className="grid size-[68%] place-items-center rounded-full bg-primary text-center"><div><p className="font-mono text-7xl text-accent">16%</p><p className="text-[10px] font-bold uppercase tracking-[0.15em]">completed</p></div></div></div><div className="mt-8"><SourceLink id="primary-care-audit" label="Open audit data"/></div></div></div>
    </Section>

    <Section index="02.3" title="Communication risk / six-site study">
      <div className="grid gap-10 lg:grid-cols-[1fr_1fr_1fr]"><div className="relative grid aspect-square max-w-sm place-items-center rounded-full bg-conic-risk"><div className="grid size-[64%] place-items-center rounded-full bg-background text-center"><div><p className="font-mono text-7xl text-accent-foreground">53%</p><p className="text-[10px] font-bold uppercase">reported ≥1 incident</p></div></div></div><div className="grid grid-cols-2 gap-px bg-border self-stretch">{[["106","clinicians"],["6","sites"],["3.75","languages / clinician"],["2021","publication"]].map(([v,l])=><div key={l} className="flex flex-col justify-center bg-background p-5"><p className="font-mono text-4xl">{v}</p><p className="mt-2 text-[10px] font-bold uppercase tracking-[0.12em] text-muted-foreground">{l}</p></div>)}</div><div className="flex flex-col justify-end"><p className="border-l-4 border-accent pl-4 text-xs font-bold uppercase tracking-[0.12em]">Study signal<br/>not national estimate</p><div className="mt-8"><SourceLink id="communication-ed" label="Study source"/></div></div></div>
    </Section>

    <section className="grid bg-primary text-primary-foreground lg:grid-cols-2"><figure className="relative min-h-[420px]"><img src={consultationPhoto.url} alt="Doctor attending patients at an Indian government medical camp" className="absolute inset-0 size-full object-cover grayscale"/><figcaption className="absolute inset-x-0 bottom-0 bg-primary/90 p-4 text-[10px]">PIB, Government of India / GODL-India</figcaption></figure><figure className="relative min-h-[420px]"><img src={opdPhoto.url} alt="Geriatric outpatient department at AIIMS Delhi" className="absolute inset-0 size-full object-cover grayscale"/><figcaption className="absolute inset-x-0 bottom-0 bg-primary/90 p-4 text-[10px]">Nidhish.sagar / CC BY-SA 4.0</figcaption></figure></section>
  </>;
}