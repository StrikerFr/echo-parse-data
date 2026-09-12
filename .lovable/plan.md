# MediKiosk Research — Independent Evidence Microsite

## Goal
Build a standalone, publication-style research experience showing how evidence about Indian consultations, communication, AYUSH, digital health, fragmented documents, accessibility, and clinical safety shaped MediKiosk.

## Structure
- Create a shared sticky research navigation and footer, with mobile menu, active-page states, Hindi/English reading controls, and accessibility controls.
- Build distinct, shareable pages for Overview, Consultation, Patients, AYUSH, Digital Health, Evidence, and Sources.
- Keep the narrative scannable: large verified figures, diagrams, timelines, matrices, filters, compact evidence cards, and short interpretation statements.
- Make “The Gap” and “Research → Design” the central bridge from evidence to the MediKiosk concept without turning the site into product marketing.

## Evidence and accuracy
- Create one typed evidence/source catalogue used by statistics, source cards, filters, and citations so claims do not drift between pages.
- Verify every statistic against an official government page/report or peer-reviewed source before displaying it.
- Preserve study scope and uncertainty in labels such as “single study,” “historical study data,” and “not a national estimate.”
- Calculate the visible source count from the catalogue instead of hardcoding it.
- Use live NAMASTE figures only if they can be reliably retrieved; otherwise show verified portal context without invented or stale metrics.
- Open external sources in new tabs with safe link attributes.

## Visual system
- Establish a new identity in warm ivory, deep ink, terracotta, muted sage, soft gray, and black using semantic design tokens.
- Pair an editorial serif display face with a precise sans-serif data face.
- Use restrained rules, index numbers, source annotations, and generous editorial spacing rather than marketing cards or decorative effects.
- Add purposeful motion for numbers, chart reveals, document organization, language fragments, and connected systems; disable it for reduced-motion users.

## Interaction and responsive behavior
- Add interactive consultation-time plotting, patient-language structuring, AYUSH radial context, institution nodes, digital-health flows, document processing, comparison matrix, evidence-to-design mapping, and evidence filters.
- Adapt dense tables into readable mobile cards and make filter chips horizontally scrollable without page overflow.
- Provide text alternatives for visualizations, visible keyboard focus, semantic headings/landmarks, 44px touch targets, and high-contrast states.

## Technical details
- Implement with the existing TanStack Start and Tailwind v4 foundation only; do not import or depend on another MediKiosk project.
- Create reusable research components and semantic tokens rather than route-specific hardcoded visual values.
- Give every content page unique title, description, Open Graph metadata, and Twitter card metadata.
- Verify the finished experience in desktop and mobile browser views, including navigation, filters, external links, overflow, accessibility basics, and runtime/build signals.
