"use client";

import { useState } from "react";
import { type Publication } from "@/lib/data";

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

function PubCard({ pub, onTagClick }: { pub: Publication; onTagClick: (tag: string) => void }) {
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
              <button key={tag} className="tag tag-clickable" onClick={() => onTagClick(tag)}>{tag}</button>
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
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const allTags = Array.from(new Set(publications.flatMap((p) => p.tags))).sort();
  const filtered = activeTag ? publications.filter((p) => p.tags.includes(activeTag)) : publications;

  const handleTagClick = (tag: string) => {
    setActiveTag((prev) => (prev === tag ? null : tag));
  };

  return (
    <div className="pub-list">
      <div className="pub-filter-bar">
        <span className="pub-filter-label">Filter by topic:</span>
        <div className="pub-filter-tags">
          {allTags.map((tag) => (
            <button
              key={tag}
              className={`tag tag-clickable ${activeTag === tag ? "tag-active" : ""}`}
              onClick={() => handleTagClick(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
        {activeTag && (
          <button className="pub-filter-clear" onClick={() => setActiveTag(null)}>
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
              {group.map((pub) => <PubCard key={pub.id} pub={pub} onTagClick={handleTagClick} />)}
            </div>
          </div>
        );
      })}
    </div>
  );
}
