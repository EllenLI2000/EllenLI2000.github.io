"use client";

import { useState } from "react";
import { aboutMe, publications, cv, teaching, researchProjects } from "@/lib/data";
import PublicationList from "./PublicationList";
import CVSection from "./CVSection";

function RichText({ text }: { text: string }) {
  const tokens = text.split(/(\*\*.*?\*\*|\[.*?\]\(.*?\))/g);
  return (
    <>
      {tokens.map((token, i) => {
        if (token.startsWith("**") && token.endsWith("**")) {
          return <strong key={i}>{token.slice(2, -2)}</strong>;
        }
        const linkMatch = token.match(/^\[(.*?)\]\((.*?)\)$/);
        if (linkMatch) {
          return <a key={i} href={linkMatch[2]} className="prose-link" target="_blank" rel="noopener noreferrer">{linkMatch[1]}</a>;
        }
        return token;
      })}
    </>
  );
}

function TeachingGrid() {
  return (
    <div className="teaching-grid">
      {teaching.map((item, i) => (
        <div key={i} className="teaching-card">
          <div className="teaching-thumb">
            {item.thumbnail
              ? <img src={item.thumbnail} alt={item.title} className="teaching-thumb-img" />
              : <span className="teaching-thumb-placeholder">＋ Add image</span>
            }
          </div>
          <div className="teaching-info">
            <p className="teaching-title">{item.title}</p>
            <p className="teaching-role">{item.role}</p>
            <p className="teaching-period">{item.period}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

const TABS = ["About Me", "Publications"] as const;
type Tab = (typeof TABS)[number];

export default function MainContent() {
  const [activeTab, setActiveTab] = useState<Tab>("About Me");

  return (
    <main className="main-content">
      <nav className="tab-bar">
        {TABS.map((tab) => (
          <button key={tab} onClick={() => setActiveTab(tab)} className={`tab-btn ${activeTab === tab ? "tab-active" : ""}`}>
            {tab}
          </button>
        ))}
      </nav>

      {activeTab === "About Me" && (
        <div className="tab-panel">
          <section className="prose-section">
            <h2 className="content-heading">About Me</h2>
            {aboutMe.split("\n\n").map((para, i) => (
              <p key={i} className="prose-text" style={{ marginBottom: "1em" }}>
                <RichText text={para} />
              </p>
            ))}
          </section>

          <section className="prose-section">
            <h2 className="content-heading">Active Research Projects</h2>
            {researchProjects.map((proj, i) => (
              <div key={i} style={{ marginBottom: "1rem" }}>
                <p className="prose-text"><strong><RichText text={proj.title} /></strong></p>
                <p className="prose-text">
                  {proj.description.split("\n").map((line, j, arr) => (
                    <span key={j}><RichText text={line} />{j < arr.length - 1 && <br />}</span>
                  ))}
                </p>
              </div>
            ))}
          </section>

          <section className="prose-section">
            <h2 className="content-heading">Academic Service</h2>
            <div className="cv-content">
              {cv.service.map((s, i) => (
                <div key={i} className="cv-item">
                  <div className="cv-item-main">
                    <span className="cv-item-title">{s.role}</span>
                  </div>
                  <p className="cv-item-sub">
                    {s.url ? <a href={s.url} className="cv-link" target="_blank" rel="noopener noreferrer">{s.detail}</a> : s.detail}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="prose-section">
            <h2 className="content-heading">Coaching & Teaching</h2>
            <TeachingGrid />
          </section>

          <section className="prose-section">
            <h2 className="content-heading">Working Experience</h2>
            <div className="cv-content">
              {cv.work.map((w, i) => (
                <div key={i} className="cv-item">
                  <div className="cv-item-main">
                    <span className="cv-item-title">{w.role}</span>
                    <span className="cv-item-period">{w.period}</span>
                  </div>
                  <p className="cv-item-sub">
                    <a href={w.orgUrl} className="cv-link" target="_blank" rel="noopener noreferrer">{w.org}</a>
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}

      {activeTab === "Publications" && (
        <div className="tab-panel">
          <h2 className="content-heading">Publications</h2>
          <PublicationList publications={publications} />
        </div>
      )}
    </main>
  );
}
