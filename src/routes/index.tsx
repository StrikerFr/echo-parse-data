import { createFileRoute } from "@tanstack/react-router";
import { DataWall, Section, SourceLink } from "@/components/research-ui";

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

function Index() {
  const consultationTimes = [
    { label: "Historic 01", value: 1.5, source: "consult-time-global" },
    { label: "Historic 02", value: 1.9, source: "consult-time-global" },
    { label: "Historic 03", value: 2, source: "consult-time-global" },
    { label: "Historic 04", value: 2.3, source: "consult-time-global" },
    { label: "Public audit", value: 2.4, source: "primary-care-audit" },
    { label: "500 doctors", value: 9.8, source: "consult-time-india" },
  ];

  return (
    <>
      <h1 className="sr-only">Indian healthcare consultation research data</h1>
      <Section index="01" title="Consultation time / India">
        <div className="grid gap-10 lg:grid-cols-[1.65fr_0.85fr]">
          <div role="img" aria-label="Six-bar comparison of Indian consultation-time findings, from 1.5 to 9.8 minutes" className="space-y-3">
            <div aria-hidden className="ml-28 grid grid-cols-6 text-[10px] font-mono text-muted-foreground"><span>0</span><span>2</span><span>4</span><span>6</span><span>8</span><span className="text-right">10m</span></div>
            {consultationTimes.map((item, index) => (
              <div key={item.label} className="grid grid-cols-[6rem_1fr] items-center gap-4">
                <span className="text-[10px] font-bold uppercase leading-tight text-muted-foreground">{item.label}</span>
                <div className="relative h-12 bg-muted">
                  <div className={`flex h-full min-w-12 items-center justify-end px-3 ${index === consultationTimes.length - 1 ? "bg-primary text-primary-foreground" : "bg-accent text-primary-foreground"}`} style={{ width: `${item.value * 10}%` }}>
                    <span className="font-mono text-lg font-bold">{item.value}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <aside className="grid grid-cols-2 border-l border-t border-border self-stretch">
            {[["1.5", "min / historic"], ["9.8", "min / survey"], ["500", "physicians"], ["2017–24", "source years"]].map(([value, label]) => (
              <div key={label} className="flex flex-col justify-center border-b border-r border-border p-5">
                <strong className="font-mono text-3xl text-accent-foreground sm:text-4xl">{value}</strong>
                <span className="mt-2 text-[10px] font-bold uppercase text-muted-foreground">{label}</span>
              </div>
            ))}
          </aside>
        </div>
        <div className="mt-8 flex flex-wrap gap-7"><SourceLink id="consult-time-global" label="Historic data"/><SourceLink id="primary-care-audit" label="Audit data"/><SourceLink id="consult-time-india" label="Survey data"/></div>
      </Section>

      <Section index="02" title="Case-taking signals" dark>
        <div className="grid gap-px bg-primary-foreground/20 lg:grid-cols-2">
          <article className="grid min-h-[390px] place-items-center bg-primary p-8">
            <div className="relative grid aspect-square w-full max-w-[270px] place-items-center rounded-full infographic-ring-16" role="img" aria-label="16 percent of checklist items completed in the public primary-care audit">
              <div className="grid size-[68%] place-items-center rounded-full bg-primary text-center"><div><strong className="font-mono text-6xl text-accent">16%</strong><p className="mt-2 text-[10px] font-bold uppercase">checklist capture</p></div></div>
            </div>
            <SourceLink id="primary-care-audit" label="2016 audit" />
          </article>
          <article className="grid min-h-[390px] place-items-center bg-primary p-8">
            <div className="relative grid aspect-square w-full max-w-[270px] place-items-center rounded-full infographic-ring-53" role="img" aria-label="53 percent of clinicians reported at least one communication-related critical incident in a six-site study">
              <div className="grid size-[68%] place-items-center rounded-full bg-primary text-center"><div><strong className="font-mono text-6xl text-accent">53%</strong><p className="mt-2 max-w-28 text-[10px] font-bold uppercase">communication incident</p></div></div>
            </div>
            <SourceLink id="communication-ed" label="106 clinicians / 6 sites" />
          </article>
        </div>
      </Section>

      <Section index="03" title="Prakriti validation funnel">
        <div role="img" aria-label="Prakriti review funnel: 64 tools identified, 20 with some validation, and 2 meeting seven of nine methodological criteria" className="mx-auto flex max-w-5xl flex-col items-center gap-3">
          {[
            ["64", "tools identified", "w-full", "bg-primary text-primary-foreground"],
            ["20", "some validation", "w-[62%]", "bg-accent text-primary-foreground"],
            ["2", "met 7 / 9 criteria", "w-[34%]", "bg-secondary text-secondary-foreground"],
          ].map(([value, label, width, color]) => (
            <div key={value} className={`grid min-h-24 place-items-center px-3 text-center ${width} ${color}`}>
              <p><strong className="font-mono text-4xl sm:text-5xl">{value}</strong><span className="ml-3 text-[10px] font-bold uppercase sm:text-xs">{label}</span></p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center"><SourceLink id="prakriti-review" label="2025 review" /></div>
      </Section>

      <Section index="04" title="Research map" dark>
        <div role="img" aria-label="Research flow from short consultations through communication, AYUSH context, fragmented records, and digital foundations to MediKiosk" className="research-flow grid gap-3 md:grid-cols-3 xl:grid-cols-6">
          {[
            ["01", "Minutes", "1.5–9.8"],
            ["02", "Language", "3.75 avg"],
            ["03", "AYUSH", "64 → 20 → 2"],
            ["04", "Records", "fragmented"],
            ["05", "ABDM", "100 cr"],
            ["06", "MediKiosk", "bridge"],
          ].map(([index, label, value], itemIndex) => (
            <div key={label} className={`relative min-h-44 border p-5 ${itemIndex === 5 ? "border-accent bg-accent text-primary-foreground" : "border-primary-foreground/25 bg-primary"}`}>
              <span className="font-mono text-xs opacity-60">{index}</span>
              <p className="mt-10 text-xs font-bold uppercase">{label}</p>
              <strong className="mt-2 block font-mono text-2xl">{value}</strong>
              {itemIndex < 5 && <span aria-hidden className="absolute -right-3 top-1/2 z-10 hidden size-6 -translate-y-1/2 place-items-center bg-accent font-mono text-primary-foreground xl:grid">→</span>}
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-7"><SourceLink id="communication-ed" label="Communication"/><SourceLink id="prakriti-review" label="AYUSH"/><SourceLink id="abha-records-2026" label="Digital health"/></div>
      </Section>

      <Section index="05" title="Indian evidence atlas"><DataWall /></Section>
    </>
  );
}
