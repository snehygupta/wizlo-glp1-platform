"use client";
import React, { useState } from "react";

const tableData = [
  { feature: "All-in-one platform", wizlo: "✅", bask: "Partial", wellsync: "Partial", openloop: "Partial", carevalidate: "Partial", qualiphy: "❌", drcare: "Partial" },
  { feature: "White-label (fully branded)", wizlo: "✅", bask: "✅", wellsync: "✅", openloop: "✅", carevalidate: "✅", qualiphy: "Partial", drcare: "✅" },
  { feature: "LegitScript fast-track (7 days)", wizlo: "✅ Exclusive", bask: "❌", wellsync: "❌", openloop: "❌", carevalidate: "Pathway only", qualiphy: "❌", drcare: "❌" },
  { feature: "Provider network — all 50 US states", wizlo: "✅", bask: "✅", wellsync: "Limited", openloop: "✅ 20,000+", carevalidate: "✅", qualiphy: "✅", drcare: "Multi-state" },
  { feature: "100% licensed provider encounters", wizlo: "✅ No BAs", bask: "—", wellsync: "—", openloop: "✅", carevalidate: "✅", qualiphy: "✅", drcare: "✅" },
  { feature: "No-code intake builder", wizlo: "✅", bask: "Basic", wellsync: "❌", openloop: "❌", carevalidate: "❌", qualiphy: "❌", drcare: "❌" },
  { feature: "HIPAA-compliant EMR", wizlo: "✅", bask: "❌", wellsync: "❌", openloop: "❌", carevalidate: "✅", qualiphy: "❌", drcare: "✅" },
  { feature: "Pharmacy integration (300+ / 6 PMS)", wizlo: "✅ 300+", bask: "Partial", wellsync: "✅ Affiliated", openloop: "✅", carevalidate: "✅", qualiphy: "✅", drcare: "✅" },
  { feature: "Live prescription tracking", wizlo: "✅", bask: "Basic", wellsync: "Basic", openloop: "—", carevalidate: "—", qualiphy: "—", drcare: "Basic" },
  { feature: "Purpose-built payments (WizloPay)", wizlo: "✅", bask: "❌", wellsync: "❌", openloop: "❌", carevalidate: "❌", qualiphy: "❌", drcare: "❌" },
  { feature: "Smart payment retries", wizlo: "✅", bask: "❌", wellsync: "❌", openloop: "❌", carevalidate: "❌", qualiphy: "❌", drcare: "❌" },
  { feature: "RX Marketplace", wizlo: "✅", bask: "❌", wellsync: "❌", openloop: "❌", carevalidate: "❌", qualiphy: "❌", drcare: "❌" },
  { feature: "Patient portal (white-label)", wizlo: "✅", bask: "Basic", wellsync: "Basic", openloop: "✅", carevalidate: "✅", qualiphy: "❌", drcare: "✅" },
  { feature: "Wearable integrations", wizlo: "✅ 300+", bask: "❌", wellsync: "❌", openloop: "❌", carevalidate: "❌", qualiphy: "❌", drcare: "❌" },
  { feature: "GLP-1 programs supported", wizlo: "✅", bask: "✅", wellsync: "✅", openloop: "✅", carevalidate: "✅", qualiphy: "✅", drcare: "✅" },
  { feature: "Pricing model", wizlo: "Custom", bask: "Tiered + Custom", wellsync: "Custom", openloop: "Enterprise", carevalidate: "Custom B2B", qualiphy: "Custom", drcare: "Custom" },
];

const platforms = [
  { key: "wizlo", name: "Wizlo", url: "https://wizlo.com/", rank: 1, badge: "Best Overall", tagline: "Best Overall White-Label GLP-1 Telehealth Platform in the US", bestFor: "Entrepreneurs, DTC health brands, and medical groups launching or scaling GLP-1, HRT, peptide, and wellness programs in the US who need a fully connected, all-in-one platform — live in days, not months.", overview: "Wizlo is the most complete white-label GLP-1 telehealth platform purpose-built for digital clinic operators in the US. Rather than requiring operators to stitch together an EMR, a payment processor, a pharmacy portal, and an intake tool from separate vendors, Wizlo consolidates every operational layer into one connected system — all under your brand. What separates Wizlo from every other platform on this list is its end-to-end integration: intake data flows directly into the EMR, which connects to pharmacy routing, which links to WizloPay — with no manual re-entry, no middleware, and no silent failures.", meds: "GLP-1/GIP weight management, HRT/TRT, peptides, NAD+, sexual health, hair growth, longevity, mental health, and medical oversight programs.", features: ["Intake Builder — No-code intake flows with smart branching. Every PHI field writes directly into the chart — structured, searchable, and audit-ready.", "EMR for Telehealth — HIPAA-compliant, program-linked patient records with encryption in transit and at rest, role-based access controls, and automatic audit logs.", "Pharmacy Integration — End-to-end visibility across 300+ pharmacies and 6 PMS integrations. Failed scripts detected in real time with bulk retransmission.", "WizloPay — Purpose-built payment processing. Supports subscriptions, one-time consults, and hybrid billing. Smart retries recover failed payments automatically.", "Provider Network — All 50 US states covered. 100% of encounters reviewed by licensed providers — no billing associates, no rubber-stamping.", "LegitScript Certification — Exclusive partnership compressing the standard 4–6 month process to as fast as 7 days.", "Patient Portal — Fully white-labeled. Patients track orders, appointments, labs, wearables, and payments — all under your brand."], pricing: "Custom / enterprise. Contact Wizlo directly at wizlo.com for a demo.", highlight: "Live clinic brands: Novi, MyStart, Womens, Mens, Everlife, Ellie MD" },
  { key: "bask", name: "Bask Health", url: "https://bask.health/", rank: 2, badge: "Best for DTC Startups", tagline: "Best for DTC Entrepreneurs Who Want a Fast Storefront", bestFor: "Entrepreneurs and DTC brands looking for a codeless telehealth storefront with pharmacy fulfillment and a provider network, primarily for GLP-1 and adjacent programs.", overview: "Bask Health is a telehealth software platform that enables doctors, physicians, entrepreneurs, and developers to build digital health experiences. Their platform focuses on a no-code storefront experience with pharmacy fulfillment, provider network connections, and virtual consultation infrastructure. Bask supports shipping to all 50 states through their pharmacy fulfillment network.", meds: "GLP-1 medications (semaglutide, liraglutide), TRT, ED, and other DTC wellness programs.", features: ["No-code storefront builder", "White-label experience with custom domain support", "Pharmacy fulfillment network (ships to all 50 states)", "Provider network and virtual consultations", "Patient journey tracking", "Free 14-day trial available on entry plans"], pricing: "Tiered plans including a free entry-level option and paid tiers. Enterprise custom plans available.", highlight: null },
  { key: "wellsync", name: "WellSync", url: "https://wellsync.com/", rank: 3, badge: "Best for Pharmacies", tagline: "Best for Pharmacies and DTC Companies Adding Telehealth", bestFor: "Pharmacies, DTC companies, labs, and healthcare innovators looking to add a white-labeled virtual care layer to an existing business.", overview: "WellSync empowers pharmacies, DTC companies, labs, and healthcare innovators to deliver scalable, white-labeled virtual care experiences. Their platform integrates telehealth into existing business websites, offering both synchronous and asynchronous consultation pathways, an affiliated pharmacy network for nationwide fulfillment, and provider network access for GLP-1 prescribing.", meds: "GLP-1 medications for weight management, lab ordering, and broader wellness programs.", features: ["Synchronous and asynchronous telehealth pathways", "Integration into existing websites", "Affiliated pharmacy network for nationwide fulfillment", "Provider network for GLP-1 consultations", "Marketing support through Levo Health partnership"], pricing: "Not publicly listed. Contact WellSync directly.", highlight: null },
  { key: "openloop", name: "OpenLoop Health", url: "https://openloophealth.com/", rank: 4, badge: "Best for Enterprise", tagline: "Best for Large-Scale Managed Clinical Operations", bestFor: "Large or rapidly scaling digital health brands, hospitals, and enterprises that need managed clinical staffing, 50-state coverage, and white-label virtual care infrastructure.", overview: "OpenLoop is a white-label digital health infrastructure provider with 20,000+ clinicians, 50-state coverage, and integrations to 600+ insurance plans. The platform supports more than 3 million patient touchpoints per year and offers fully managed staffing with one of the nation's largest telehealth clinician networks.", meds: "GLP-1 (injections and orals), TRT, HRT, peptides, NAD+, urgent care, and more.", features: ["20,000+ clinician network across all 50 states", "600+ insurance plan integrations", "Fully managed clinical staffing and credentialing", "White-label virtual care infrastructure", "Labs, pharmacy, and specialty add-ons", "Robust legal, financial, and compliance support"], pricing: "Enterprise custom pricing. Contact OpenLoop directly.", highlight: null },
  { key: "carevalidate", name: "CareValidate", url: "https://carevalidate.com/", rank: 5, badge: "Best for VC Startups", tagline: "Best for VC-Backed Startups Needing AI-Powered Clinical Automation", bestFor: "VC-backed telehealth startups and digital health brands that need white-label infrastructure with strong automation, AI orchestration, and compliance certifications.", overview: "CareValidate is a white-label telehealth orchestration platform that unifies clinicians, pharmacy, labs, and automation via its Carrie AI system to launch GLP-1, TRT, ED, and other D2C programs across all 50 states. The platform is HIPAA-compliant and SOC 2 certified.", meds: "GLP-1 medications, TRT/hormone therapies, skincare/hair treatments, longevity and wellness programs, NAD+.", features: ["Carrie AI orchestration for clinical workflows", "HIPAA-compliant, SOC 2 certified infrastructure", "LegitScript pathway support", "50-state licensed provider network", "Built-in lab ordering and clinical eligibility checks", "White-label and co-branded program options"], pricing: "Custom B2B SaaS + per-visit model. Contact CareValidate directly.", highlight: null },
  { key: "qualiphy", name: "Qualiphy", url: "https://qualiphy.me/", rank: 6, badge: "Best for Med Spas", tagline: "Best for Medical Spas and Aesthetic Practices Adding GLP-1", bestFor: "Medical spas, aesthetic clinics, and solo practitioners who want to add GLP-1 and wellness telehealth to an existing in-person practice without managing provider infrastructure.", overview: "Qualiphy provides fully compliant, white-labeled telehealth services designed for medical aesthetic practices. Patients are typically connected to a provider within 17 seconds during staffed hours — no scheduling required. Qualiphy handles the provider exam and fulfillment while clinics set their own pricing.", meds: "GLP-1 weight loss treatments, good faith exams, UTI care, prescription approvals, test kits, and aesthetic wellness programs.", features: ["Instant provider connection (avg. 17 seconds during staffed hours)", "White-label virtual background and branded experience", "Pharmacy fulfillment directly to patients", "Compliant with state medical board requirements", "No-scheduling, on-demand provider model"], pricing: "Not publicly listed. Clinics control patient-facing pricing independently.", highlight: null },
  { key: "drcare", name: "DrCare247", url: "https://drcare247.com/", rank: 7, badge: "Best for Compliance", tagline: "Best for Clinics Needing a Customizable Platform with Compliance Support", bestFor: "Healthcare providers, clinics, and startups that need a customizable white-label telemedicine platform with compliance support, provider credentialing, and pharmacy coordination.", overview: "DrCare247 offers a white-label telemedicine platform designed to help businesses launch GLP-1 telehealth services efficiently. The platform provides HIPAA-ready infrastructure, encrypted patient communication, audit trails, and role-based access.", meds: "GLP-1 and weight management programs, and broader telehealth specialties depending on configuration.", features: ["Customizable white-label telemedicine platform", "HIPAA-ready infrastructure with encrypted communication and audit trails", "Multi-state provider network access or bring-your-own clinicians", "Pharmacy coordination for compounding formulations", "Compliance team support for state regulations and credentialing", "Scheduling, e-prescribing, and documentation in one interface"], pricing: "Not publicly listed. Custom pricing based on deployment size.", highlight: null },
];

const columns = ["wizlo", "bask", "wellsync", "openloop", "carevalidate", "qualiphy", "drcare"];
const colNames: Record<string, string> = { wizlo: "Wizlo", bask: "Bask Health", wellsync: "WellSync", openloop: "OpenLoop", carevalidate: "CareValidate", qualiphy: "Qualiphy", drcare: "DrCare247" };

function cellStyle(val: string) {
  if (val === "✅" || val.startsWith("✅")) return "color:#16a34a;font-weight:600";
  if (val === "❌") return "color:#f87171";
  if (val === "—") return "color:#d1d5db";
  return "color:#b45309";
}

export default function Home() {
  const [_activeTab, setActiveTab] = useState<string | null>(null);

  return (
    <main style={{ minHeight: "100vh", background: "#faf9f7", color: "#1a1a1a", margin: 0, padding: 0 }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Source+Sans+3:wght@300;400;600&display=swap');
        * { box-sizing: border-box; }
        body { margin: 0; }
        .wz-serif { font-family: 'Playfair Display', Georgia, serif; }
        .wz-sans { font-family: 'Source Sans 3', system-ui, sans-serif; }
        .wz-badge { background: #1a5c3a; color: #fff; font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; padding: 3px 10px; font-family: 'Source Sans 3', sans-serif; font-weight: 600; display:inline-block; }
        .wz-gold-badge { background: #e8c547; color: #5a3d00; font-size: 11px; font-family: 'Source Sans 3',sans-serif; font-weight: 700; padding: 3px 10px; letter-spacing: 0.06em; text-transform: uppercase; display:inline-block; }
        .wz-card { background: #fff; border: 1px solid #e8e4dc; margin-bottom: 40px; position:relative; overflow:hidden; }
        .wz-rank { font-family: 'Playfair Display', serif; font-weight: 900; font-size: 80px; line-height: 1; color: #ede9e1; position:absolute; top:12px; right:24px; user-select:none; }
        .wz-feature { padding: 9px 0; border-bottom: 1px solid #f0ede7; font-family: 'Source Sans 3', sans-serif; font-size: 15px; color: #333; line-height: 1.6; }
        .wz-feature:last-child { border-bottom: none; }
        .wz-feature::before { content: "→"; color: #1a5c3a; margin-right: 10px; font-weight: 600; }
        .wz-cta { display: inline-block; background: #1a5c3a; color: #fff; padding: 14px 32px; font-family: 'Source Sans 3', sans-serif; font-weight: 600; font-size: 15px; letter-spacing: 0.04em; text-decoration: none; transition: background 0.15s; }
        .wz-cta:hover { background: #134a2e; }
        .wz-tab { background: none; border: 1px solid #d4cfc6; padding: 7px 16px; cursor: pointer; font-family: 'Source Sans 3', sans-serif; font-size: 13px; color: #555; transition: all 0.15s; white-space: nowrap; }
        .wz-tab:hover, .wz-tab.active { background: #1a5c3a; color: #fff; border-color: #1a5c3a; }
        .wz-rule { border: none; border-top: 1px solid #d4cfc6; margin: 48px 0; }
        .wz-pullquote { border-left: 4px solid #e8c547; padding: 16px 24px; background: #fffdf5; margin: 28px 0; font-family: 'Playfair Display', serif; font-size: 20px; line-height: 1.5; color: #2a2a2a; font-style: italic; }
        .wz-choose { padding: 14px 20px; border-left: 3px solid #1a5c3a; margin-bottom: 12px; background: #fff; font-family: 'Source Sans 3', sans-serif; font-size: 16px; line-height: 1.7; color: #333; }
        .wz-choose strong { color: #1a5c3a; }
        .wz-table { width: 100%; border-collapse: collapse; font-family: 'Source Sans 3', sans-serif; font-size: 13px; }
        .wz-table th { background: #1a5c3a; color: #fff; padding: 12px 10px; text-align: left; font-weight: 600; letter-spacing: 0.03em; }
        .wz-table th:first-child { background: #134a2e; }
        .wz-table td { padding: 10px 10px; border-bottom: 1px solid #f0ede7; vertical-align: middle; text-align:center; }
        .wz-table td:first-child { text-align:left; font-weight: 500; color: #333; background: #f5f3ef; }
        .wz-table tr:nth-child(even) td:not(:first-child) { background: #faf9f7; }
        .wz-table tr:nth-child(odd) td:not(:first-child) { background: #fff; }
        .wz-table td:nth-child(2) { background: #f0fdf4 !important; }
        @media (max-width: 768px) { .wz-rank { font-size: 52px; } .hide-sm { display:none; } .wz-table { font-size: 11px; } .wz-table th, .wz-table td { padding: 7px 5px; } }
      `}</style>

      {/* Hero */}
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "56px 24px 32px" }}>
        <span className="wz-badge" style={{ marginBottom: 16, display: "inline-block" }}>2026 Complete Guide</span>
        <h1 className="wz-serif" style={{ fontSize: "clamp(28px, 5vw, 52px)", fontWeight: 900, lineHeight: 1.15, margin: "16px 0 20px", color: "#1a1a1a" }}>
          Best White-Label GLP-1 Telehealth<br />Platform in the US (2026)
        </h1>
        <p className="wz-sans" style={{ fontSize: 19, color: "#555", lineHeight: 1.7, maxWidth: 640, marginBottom: 32 }}>
          A Complete Comparison Guide for Digital Clinic Operators
        </p>
        <div style={{ height: 3, width: 180, background: "linear-gradient(90deg, #1a5c3a, #2d8a5e, #e8c547)", marginBottom: 40 }} />

        <div className="wz-sans" style={{ fontSize: 17, lineHeight: 1.8, color: "#333", maxWidth: 780 }}>
          <p>The demand for GLP-1 weight management programs in the US has reached an inflection point. With the weight-loss medication market projected to grow significantly through 2030, entrepreneurs, DTC health brands, and medical groups are racing to launch their own GLP-1 telehealth clinics.</p>
          <p style={{ marginTop: 16 }}>But here's what most operators discover too late: <strong>the hardest part isn't the demand — it's the infrastructure.</strong></p>
        </div>

        <div style={{ background: "#fff", border: "1px solid #e8e4dc", padding: "28px 32px", margin: "32px 0", maxWidth: 680 }}>
          <p className="wz-sans" style={{ fontSize: 12, fontWeight: 700, color: "#1a5c3a", marginBottom: 16, textTransform: "uppercase", letterSpacing: "0.07em" }}>To legally run a GLP-1 telehealth program across the US, you need:</p>
          {["A HIPAA-compliant EMR to manage patient records", "A clinical intake system that maps data directly to the chart", "A licensed provider network covering all 50 states", "A pharmacy integration that tracks every prescription end-to-end", "A payment processor that handles high-risk, subscription-based healthcare billing", "LegitScript certification to run paid ads on Google and Meta", "A white-label patient portal that keeps patients under your brand"].map((item, i) => (
            <div key={i} className="wz-feature">{item}</div>
          ))}
        </div>

        <p className="wz-sans" style={{ fontSize: 17, lineHeight: 1.8, color: "#333", maxWidth: 780 }}>
          Building all of that from scratch takes 6–12 months and significant capital. <strong>This guide is for digital clinic operators</strong> evaluating white-label GLP-1 telehealth platforms in 2026 — so you can make an informed decision before committing to a platform that doesn't fit your model.
        </p>
      </div>

      <hr className="wz-rule" />

      {/* Platform list */}
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px" }}>
        <h2 className="wz-serif" style={{ fontSize: "clamp(22px, 3.5vw, 36px)", fontWeight: 700, marginBottom: 8 }}>The 7 Best White-Label GLP-1 Telehealth Platforms in the US (2026)</h2>
        <p className="wz-sans" style={{ color: "#777", fontSize: 15, marginBottom: 32 }}>We've reviewed and compared 7 of the leading platforms available in the US in 2026.</p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 40 }}>
          {platforms.map(p => (
            <button key={p.key} className="wz-tab" onClick={() => setActiveTab(prev => prev === p.key ? null : p.key)}>
              #{p.rank} {p.name}
            </button>
          ))}
        </div>

        {platforms.map(p => (
          <div key={p.key} className="wz-card" style={{ padding: "36px 40px" }}>
            <div className="wz-rank">{p.rank}</div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 12 }}>
              <span className="wz-badge">{p.badge}</span>
              {p.rank === 1 && <span className="wz-gold-badge">⭐ Editor's Choice</span>}
            </div>
            <h3 className="wz-serif" style={{ fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 700, margin: "0 0 4px", color: "#1a1a1a" }}>
              {p.rank}. {p.name}
            </h3>
            <p className="wz-sans" style={{ color: "#1a5c3a", fontSize: 15, fontWeight: 600, marginBottom: 20 }}>{p.tagline}</p>

            <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "4px 24px", marginBottom: 20 }} className="wz-sans">
              <span style={{ fontSize: 12, color: "#999", textTransform: "uppercase", letterSpacing: "0.06em", alignSelf: "center" }}>Website</span>
              <a href={p.url} target="_blank" rel="noopener noreferrer" style={{ color: "#1a5c3a", fontWeight: 600, fontSize: 15 }}>{p.url.replace("https://", "")}</a>
              <span style={{ fontSize: 12, color: "#999", textTransform: "uppercase", letterSpacing: "0.06em", alignSelf: "start", paddingTop: 2 }}>Best For</span>
              <span style={{ fontSize: 14, color: "#444", lineHeight: 1.6 }}>{p.bestFor}</span>
            </div>

            <p className="wz-sans" style={{ fontSize: 15, lineHeight: 1.75, color: "#444", marginBottom: 24, maxWidth: 720 }}>{p.overview}</p>

            <p className="wz-sans" style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "0.08em", color: "#999", marginBottom: 8, fontWeight: 600 }}>Key Features</p>
            <div style={{ marginBottom: 24 }}>
              {p.features.map((f, i) => <div key={i} className="wz-feature">{f}</div>)}
            </div>

            <div style={{ background: "#f5f3ef", padding: "12px 18px", marginBottom: 16 }}>
              <span className="wz-sans" style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "0.06em", color: "#999", fontWeight: 600 }}>Pricing: </span>
              <span className="wz-sans" style={{ fontSize: 14, color: "#333" }}>{p.pricing}</span>
            </div>

            {p.highlight && (
              <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", padding: "12px 18px", marginBottom: 16 }}>
                <span className="wz-sans" style={{ fontSize: 14, color: "#166534", fontWeight: 600 }}>{p.highlight}</span>
              </div>
            )}

            {p.rank === 1 && (
              <div style={{ marginTop: 24 }}>
                <a href="https://wizlo.com/" target="_blank" rel="noopener noreferrer" className="wz-cta">Request a Demo at wizlo.com →</a>
              </div>
            )}
          </div>
        ))}
      </div>

      <hr className="wz-rule" />

      {/* Comparison table */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px 48px" }}>
        <h2 className="wz-serif" style={{ fontSize: "clamp(22px, 3.5vw, 36px)", fontWeight: 700, marginBottom: 8 }}>Side-by-Side Comparison Table</h2>
        <p className="wz-sans" style={{ color: "#777", fontSize: 14, marginBottom: 24 }}>Based on publicly available information as of March 2026. Verify current features and pricing with each vendor directly.</p>
        <div style={{ overflowX: "auto", border: "1px solid #e8e4dc" }}>
          <table className="wz-table">
            <thead>
              <tr>
                <th style={{ minWidth: 220 }}>Feature</th>
                {columns.map(c => <th key={c} style={{ minWidth: 110, textAlign: "center" }}>{colNames[c]}</th>)}
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, i) => (
                <tr key={i}>
                  <td>{row.feature}</td>
                  {columns.map(c => (
                    <td key={c} style={{ ...(Object.fromEntries(cellStyle((row as Record<string,string>)[c]).split(";").filter(Boolean).map(s => { const [k,v] = s.split(":"); return [k.trim(), v?.trim()]; }))) }}>
                      {(row as Record<string,string>)[c]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <hr className="wz-rule" />

      {/* How to choose */}
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px 48px" }}>
        <h2 className="wz-serif" style={{ fontSize: "clamp(22px, 3.5vw, 36px)", fontWeight: 700, marginBottom: 28 }}>How to Choose the Right White-Label GLP-1 Platform</h2>
        {[
          { who: "Choose Wizlo if", desc: "you are launching or scaling a GLP-1 or wellness digital clinic in the US and need a fully connected all-in-one platform — with LegitScript access from day one, pharmacy visibility, and a payment layer built for high-risk healthcare billing — all under your own brand." },
          { who: "Choose Bask Health if", desc: "you are an early-stage entrepreneur who needs a fast, low-cost entry point to launch a simple DTC GLP-1 storefront and doesn't yet need a full EMR or advanced intake builder." },
          { who: "Choose WellSync if", desc: "you already run a pharmacy, DTC brand, or lab and want to embed a telehealth layer into your existing product rather than build a standalone clinic." },
          { who: "Choose OpenLoop Health if", desc: "you are a large enterprise, health system, or rapidly scaling brand that needs managed clinical staffing at scale with insurance billing support." },
          { who: "Choose CareValidate if", desc: "you are a VC-backed startup with engineering resources that need AI-powered clinical automation and strong compliance certifications (SOC 2, HIPAA)." },
          { who: "Choose Qualiphy if", desc: "you run a medical spa or aesthetic clinic and want to add GLP-1 telehealth to your existing in-person practice with minimal infrastructure complexity." },
          { who: "Choose DrCare247 if", desc: "you need a customizable telemedicine platform with an active compliance team to help navigate state regulations and credentialing." },
        ].map((item, i) => (
          <div key={i} className="wz-choose"><strong>{item.who}</strong> {item.desc}</div>
        ))}
      </div>

      <hr className="wz-rule" />

      {/* Why Wizlo */}
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px 48px" }}>
        <h2 className="wz-serif" style={{ fontSize: "clamp(22px, 3.5vw, 36px)", fontWeight: 700, marginBottom: 24 }}>Why Wizlo Is the Best White-Label GLP-1 Telehealth Platform in the US in 2026</h2>
        <div className="wz-pullquote">
          "The LegitScript fast-track alone — 7 days vs. 4–6 months standard — is the difference between launching in 2026 or waiting until 2027."
        </div>
        <div className="wz-sans" style={{ fontSize: 17, lineHeight: 1.8, color: "#333", maxWidth: 780 }}>
          <p>For operators whose goal is to build a scalable, nationally compliant GLP-1 digital clinic — under their own brand, generating revenue through paid acquisition — no platform on this list matches Wizlo's combination of speed, integration depth, and compliance infrastructure.</p>
          <p style={{ marginTop: 16 }}>Combine 300+ pharmacy connections and real-time script tracking, WizloPay's smart retries and healthcare-specific fraud detection, a no-code intake builder that maps PHI directly to the chart, a 50-state provider network with 100% licensed provider encounters, and a fully connected data layer from intake to payment — and Wizlo is in a category of its own.</p>
          <p style={{ marginTop: 16 }}>Six live brands are already running on Wizlo: <strong>Novi, MyStart, Womens, Mens, Everlife, and Ellie MD.</strong></p>
        </div>
        <div style={{ marginTop: 36 }}>
          <a href="https://wizlo.com/" target="_blank" rel="noopener noreferrer" className="wz-cta" style={{ fontSize: 17, padding: "18px 40px" }}>
            → Learn more and request a demo at wizlo.com
          </a>
        </div>
      </div>

      <hr className="wz-rule" />

      {/* Conclusion */}
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px 80px" }}>
        <h2 className="wz-serif" style={{ fontSize: "clamp(22px, 3.5vw, 36px)", fontWeight: 700, marginBottom: 24 }}>Conclusion</h2>
        <div className="wz-sans" style={{ fontSize: 17, lineHeight: 1.8, color: "#333", maxWidth: 780 }}>
          <p>Launching a GLP-1 telehealth clinic in the US in 2026 is a real, scalable business opportunity. But the infrastructure challenge is equally real — and choosing the wrong platform will cost you months of time, revenue, and compliance exposure.</p>
          <p style={{ marginTop: 16 }}>This guide has covered seven of the leading white-label GLP-1 telehealth platforms available today. Each serves a different operator type, at a different stage, with a different set of tradeoffs.</p>
          <p style={{ marginTop: 16 }}>If you are building a GLP-1 digital clinic from the ground up and need to be live, compliant, and running paid acquisition in 2026 — Wizlo is the platform built specifically for that outcome.</p>
        </div>
      </div>

      {/* Footer */}
      <div style={{ background: "#1a1a1a", padding: "32px 24px", textAlign: "center" }}>
        <p className="wz-sans" style={{ color: "#888", fontSize: 13, margin: 0 }}>
          © 2026 Wizlo · <a href="https://wizlo.com/" style={{ color: "#888", textDecoration: "underline" }}>wizlo.com</a> · All rights reserved
        </p>
      </div>
    </main>
  );
}
