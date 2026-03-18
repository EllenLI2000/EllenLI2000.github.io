"use client";

import { useState } from "react";
import { type Publication } from "@/lib/data";

const TAG_CATEGORIES: Record<string, string> = {
  // Conversational AI
  "Chatbot": "Conversational AI",
  "Conversational Agents": "Conversational AI",
  "Conversational User Interface": "Conversational AI",
  "Health Chatbot": "Conversational AI",
  // LLM & Generative AI
  "LLM": "LLM & Generative AI",
  "GenAI": "LLM & Generative AI",
  "Prompting": "LLM & Generative AI",
  "Physicalization": "LLM & Generative AI",
  "Affective Computing": "LLM & Generative AI",
  "Writing": "LLM & Generative AI",
  "Speech": "LLM & Generative AI",
  // Mental Health & Wellbeing
  "Mental Health": "Mental Health & Wellbeing",
  "Emotional Support": "Mental Health & Wellbeing",
  "Smartphone Addiction": "Mental Health & Wellbeing",
  // Persuasive Technology
  "Persuasive Technology": "Persuasive Technology",
  "Reflection": "Persuasive Technology",
  // Personal Informatics
  "Personal Informatics": "Personal Informatics",
  "Review": "Personal Informatics",
  "Customization": "Personal Informatics",
  // Healthcare & Care
  "Health Belief Model": "Healthcare & Care",
  "Personalization": "Healthcare & Care",
  "Informal Care": "Healthcare & Care",
  "Temporality": "Healthcare & Care",
  "Design": "Healthcare & Care",
  // Privacy
  "Usable Privacy": "Privacy",
};

const FILTER_CATEGORIES = [
  "Conversational AI",
  "LLM & Generative AI",
  "Mental Health & Wellbeing",
  "Persuasive Technology",
  "Personal Informatics",
  "Healthcare & Care",
  "Privacy",
];

function pubMatchesCategory(pub: Publication, category: string) {
  return pub.tags.some((tag) => TAG_CATEGORIES[tag] === category);
}

function Authors({ text }: { text: string }) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return (
    <>
      {parts.map((part, i) => {
        const rendered = part.replace(/\\\*/g, "*");
        return i % 2 === 1 ? <strong key={i}>{rendered}</strong> : <span key={i}>{rendered}</span>;
      })}
    </>
  );
}

function Thumbnail({ pub }: { pub: Publication }) {
  if (pub.thumbnail) {
    return (
      <div className="pub-thumb">
        <img src={pub.thumbnail} alt={`${pub.id} thumbnail`} className="pub-thumb-img" />
      </div>
    );
  }
  return (
    <div className="pub-thumb pub-thumb-placeholder">
      <span className="pub-thumb-id">{pub.id}</span>
    </div>
  );
}

function PubCard({ pub }: { pub: Publication }) {
  return (
    <div className="pub-card">
      <Thumbnail pub={pub} />
      <div className="pub-card-body">
        <div className="pub-card-header">
          <span className="pub-id">{pub.id}</span>
          {pub.award && (
            <span className={pub.award.startsWith("🌟") ? "pub-award-highlight" : "pub-award"}>
              {pub.award}
            </span>
          )}
        </div>
        <p className="pub-title">{pub.title}</p>
        <p className="pub-authors"><Authors text={pub.authors} /></p>
        <p className="pub-venue">{pub.venue} · {pub.year}</p>
        <div className="pub-footer">
          <div className="pub-tags">
            {pub.tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
          <div className="pub-links">
            {pub.pdf && <a href={pub.pdf} className="pub-link">PDF</a>}
            {pub.video && <a href={pub.video} className="pub-link" target="_blank" rel="noopener noreferrer">Presentation</a>}
            {pub.doi && <a href={pub.doi} className="pub-link" target="_blank" rel="noopener noreferrer">DOI</a>}
          </div>
        </div>
      </div>
    </div>
  );
}

const SECTIONS: { type: Publication["type"]; label: string; note: string }[] = [
  { type: "full", label: "Full Papers", note: "fully peer reviewed" },
  { type: "lbw", label: "Late-Breaking Papers", note: "lightly peer reviewed" },
  { type: "workshop", label: "Workshop & Position Papers", note: "" },
];

export default function PublicationList({ publications }: { publications: Publication[] }) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = activeCategory
    ? publications.filter((p) => pubMatchesCategory(p, activeCategory))
    : publications;

  const handleCategoryClick = (category: string) => {
    setActiveCategory((prev) => (prev === category ? null : category));
  };

  return (
    <div className="pub-list">
      <div className="pub-filter-bar">
        <span className="pub-filter-label">Filter by topic:</span>
        <div className="pub-filter-tags">
          {FILTER_CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`tag tag-clickable ${activeCategory === cat ? "tag-active" : ""}`}
              onClick={() => handleCategoryClick(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        {activeCategory && (
          <button className="pub-filter-clear" onClick={() => setActiveCategory(null)}>
            Clear ✕
          </button>
        )}
      </div>

      <p className="pub-note">* Equal contribution</p>

      {SECTIONS.map(({ type, label, note }) => {
        const group = filtered.filter((p) => p.type === type);
        if (group.length === 0) return null;
        return (
          <div key={type} className="pub-year-group">
            <div className="pub-section-header">
              <h3 className="pub-year">{label}</h3>
              {note && <span className="pub-section-note">{note}</span>}
            </div>
            <div className="pub-cards-grid">
              {group.map((pub) => <PubCard key={pub.id} pub={pub} />)}
            </div>
          </div>
        );
      })}
    </div>
  );
}
