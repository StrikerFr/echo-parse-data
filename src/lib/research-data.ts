export type Category = "Healthcare" | "AYUSH" | "Communication" | "Digital Health" | "Accessibility" | "AI / Research";
export type Credibility = "OFFICIAL GOVERNMENT" | "PEER-REVIEWED" | "SYSTEMATIC REVIEW" | "CLINICAL STUDY" | "STANDARD / GUIDELINE";

export type Source = {
  id: string; title: string; publisher: string; year: string; country: string;
  studyType: Credibility; categories: Category[]; url: string; matters: string;
};

export const sources: Source[] = [
  { id: "consult-time-global", title: "International variations in primary care physician consultation time: a systematic review of 67 countries", publisher: "BMJ Open", year: "2017", country: "International", studyType: "SYSTEMATIC REVIEW", categories: ["Healthcare"], url: "https://bmjopen.bmj.com/content/7/10/e017902", matters: "Places historical Indian consultation-time findings within a global evidence base." },
  { id: "consult-time-india", title: "A study of average consultation time in India", publisher: "Journal of Family Medicine and Primary Care", year: "2018", country: "India", studyType: "CLINICAL STUDY", categories: ["Healthcare"], url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6259525/", matters: "Shows how consultation duration can differ by study design and clinical setting." },
  { id: "communication-ed", title: "Language diversity and challenges to communication in Indian emergency departments", publisher: "International Journal of Emergency Medicine", year: "2020", country: "India", studyType: "CLINICAL STUDY", categories: ["Communication", "Healthcare"], url: "https://intjem.biomedcentral.com/articles/10.1186/s12245-020-00296-0", matters: "Documents communication risk in a multilingual emergency-care sample." },
  { id: "ayush-report", title: "Annual Report 2024–25", publisher: "Ministry of Ayush, Government of India", year: "2025", country: "India", studyType: "OFFICIAL GOVERNMENT", categories: ["AYUSH", "Healthcare"], url: "https://ayush.gov.in/resources/annualReport/Annual_Report_2024-2025_English.pdf", matters: "Provides reported activity figures for selected national AYUSH institutions." },
  { id: "namaste", title: "National AYUSH Morbidity and Standardized Terminologies Electronic Portal", publisher: "Ministry of Ayush, Government of India", year: "Current portal", country: "India", studyType: "OFFICIAL GOVERNMENT", categories: ["AYUSH", "Digital Health"], url: "https://namstp.ayush.gov.in/", matters: "Shows the national infrastructure for standardized AYUSH terminology and morbidity coding." },
  { id: "abdm", title: "Ayushman Bharat Digital Mission — Frequently Asked Questions", publisher: "National Health Authority", year: "Current", country: "India", studyType: "OFFICIAL GOVERNMENT", categories: ["Digital Health", "Healthcare"], url: "https://abdm.gov.in/faq", matters: "Explains consent-based exchange in India's digital-health architecture." },
  { id: "gigw", title: "Guidelines for Indian Government Websites and Apps 3.0", publisher: "Government of India", year: "2023", country: "India", studyType: "STANDARD / GUIDELINE", categories: ["Accessibility", "Digital Health"], url: "https://guidelines.india.gov.in/", matters: "Sets expectations for accessible, usable and user-centric public digital services." },
  { id: "ccras-prakriti", title: "AYUR-Prakriti Assessment Manual", publisher: "Central Council for Research in Ayurvedic Sciences", year: "2018", country: "India", studyType: "OFFICIAL GOVERNMENT", categories: ["AYUSH"], url: "https://ccras.nic.in/wp-content/uploads/2024/06/AYUR-Prakriti-Assessment-Manual.pdf", matters: "Documents a structured approach to Prakriti assessment across multiple domains." },
  { id: "prakriti-review", title: "A critical review of Prakriti assessment tools", publisher: "Frontiers in Medicine", year: "2025", country: "India / International", studyType: "SYSTEMATIC REVIEW", categories: ["AYUSH", "AI / Research"], url: "https://www.frontiersin.org/journals/medicine", matters: "Highlights the scale of tool development and the continuing importance of methodological validation." },
  { id: "wcag", title: "Web Content Accessibility Guidelines (WCAG) 2.2", publisher: "W3C", year: "2023", country: "International", studyType: "STANDARD / GUIDELINE", categories: ["Accessibility"], url: "https://www.w3.org/TR/WCAG22/", matters: "Provides testable criteria for inclusive digital interaction." },
];

export const findings = [
  { value: "1.5–2.3 min", label: "Historical Indian study data", context: "Reported consultation-time values from Indian studies included in a 67-country systematic review. Not a current national average.", year: "Studies published 1985–2015; review 2017", sourceId: "consult-time-global", category: "Healthcare" as Category },
  { value: "9.8 min", label: "Indian physician survey", context: "Average consultation time reported by 500 Indian physicians in a later survey.", year: "2018", sourceId: "consult-time-india", category: "Healthcare" as Category },
  { value: "53%", label: "Single study", context: "Clinicians reporting at least one critical incident in the previous year where poor communication played a part; 106 clinicians across six partner sites. Not a national estimate.", year: "2020", sourceId: "communication-ed", category: "Communication" as Category },
  { value: "64 → 20 → 2", label: "Prakriti assessment review", context: "Tools identified → tools with some validation → tools meeting seven of nine methodological criteria. This does not mean only two tools are valid.", year: "2025", sourceId: "prakriti-review", category: "AYUSH" as Category },
  { value: "653K+", label: "AIIA, New Delhi", context: "OPD patients reported for calendar year 2024; selected institution, not a national AYUSH total.", year: "2024", sourceId: "ayush-report", category: "AYUSH" as Category },
  { value: "657,231", label: "NIS, Chennai", context: "OPD patients reported for calendar year 2024; selected institution, not a national AYUSH total.", year: "2024", sourceId: "ayush-report", category: "AYUSH" as Category },
];

export const sourceById = (id: string) => sources.find((source) => source.id === id);
