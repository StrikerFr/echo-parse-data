import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { DataWall, Section } from "@/components/research-ui";
import { sources } from "@/lib/research-data";
import consultationPhoto from "@/assets/india-medical-consultation.jpg.asset.json";

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
      <section className="relative min-h-[76vh] overflow-hidden bg-primary text-primary-foreground">
        <img src={consultationPhoto.url} alt="Doctor consulting patients at an Indian government medical camp" className="absolute inset-0 size-full object-cover opacity-45 grayscale" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative mx-auto flex min-h-[76vh] max-w-[1600px] flex-col justify-between px-5 py-12 lg:px-10 lg:py-20">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">India / Consultation evidence / 2026</p>
          <div><h1 className="max-w-5xl font-serif text-6xl leading-[0.92] sm:text-8xl lg:text-[8.5rem]">India’s consultation gap.</h1><div className="mt-10 grid max-w-4xl grid-cols-2 gap-px bg-primary-foreground/30 sm:grid-cols-4">{[["1.5–2.3","min · historic"],["9.8","min · survey"],["53%","communication"],[String(sources.length),"verified sources"]].map(([a,b])=><div key={a} className="bg-primary/80 p-5"><strong className="font-mono text-3xl text-accent lg:text-4xl">{a}</strong><p className="mt-2 text-[10px] font-bold uppercase tracking-[0.12em] text-primary-foreground/70">{b}</p></div>)}</div></div>
          <a href="https://commons.wikimedia.org/wiki/File:The_Doctor_attending_patients_at_a_medical_camp,_organized_by_the_State_Health_Department,_during_the_Public_Information_Campaign_on_Bharat_Nirman,_organized_by_the_Press_Information_Bureau.jpg" target="_blank" rel="noreferrer" className="text-[10px] text-primary-foreground/65 underline">Photo: Press Information Bureau, Government of India / GODL-India</a>
        </div>
      </section>
      <Section index="01" title="Indian evidence atlas"><DataWall /></Section>
      <Section index="08" title="Research finding" dark>
        <div className="grid items-end gap-8 lg:grid-cols-[3fr_1fr]"><h2 className="font-serif text-6xl leading-[0.95] lg:text-8xl">Patient story <span className="text-accent">→</span> structured record.</h2><a href="/consultation" className="inline-flex min-h-11 items-center gap-2 border-b border-accent pb-2 text-xs font-bold uppercase tracking-[0.12em]">View consultation data <ArrowRight className="size-4"/></a></div>
      </Section>
    </>
  );
}
