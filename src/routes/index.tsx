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
  return (
    <>
      <h1 className="sr-only">Indian healthcare consultation research data</h1>
      <Section index="01" title="Indian evidence atlas"><DataWall /></Section>
      <Section index="01.2" title="Four research signals" dark>
        <div className="grid gap-px bg-primary-foreground/20 md:grid-cols-2 xl:grid-cols-4">
          {[
            ["Time", "1.5", "9.8", "consult-time-india"],
            ["Capture", "16", "100", "primary-care-audit"],
            ["Communication", "53", "100", "communication-ed"],
            ["Validation", "2", "64", "prakriti-review"],
          ].map(([label, value, total, source]) => <article key={label} className="bg-primary p-6 lg:p-8">
            <div className="flex items-end justify-between"><p className="text-xs font-bold uppercase tracking-[0.14em]">{label}</p><p className="font-mono text-3xl text-accent">{value}{total === "100" ? "%" : ""}</p></div>
            <div className="mt-8 flex h-32 items-end bg-primary-foreground/10" role="img" aria-label={`${label}: ${value} of ${total}`}><div className="w-full bg-accent" style={{height:`${Math.max(4, Number(value) / Number(total) * 100)}%`}} /></div>
            <div className="mt-5"><SourceLink id={String(source)} label="Open data" /></div>
          </article>)}
        </div>
      </Section>
    </>
  );
}
