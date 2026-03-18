"use client";

import { profile, news, cv } from "@/lib/data";

function AvatarArea() {
  if (profile.avatar) {
    return (
      <img src={profile.avatar} alt={profile.name} className="avatar" />
    );
  }
  const initials = profile.name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();
  return (
    <div className="avatar-placeholder" title="Add your photo: place avatar.jpg in /public">
      <span className="avatar-initials">{initials}</span>
      <div className="avatar-hint">
        <span className="avatar-hint-icon">＋</span>
        <span className="avatar-hint-text">Add photo</span>
      </div>
    </div>
  );
}

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-section sidebar-profile">
        <AvatarArea />
        <h1 className="name">{profile.name}</h1>
        <p className="title-line">{profile.title}</p>
        <p className="affiliation">{profile.affiliation}</p>
        <p className="email"><a href={`mailto:${profile.email}`}>{profile.email}</a></p>
        <div className="links">
          {profile.links.map((l) => (
            <a key={l.label} href={l.href} className="link-chip">{l.label}</a>
          ))}
        </div>
      </div>

      <div className="sidebar-section">
        <h2 className="section-heading">Education</h2>
        <ul className="edu-list">
          {cv.education.map((e, i) => (
            <li key={i} className="edu-item">
              <span className="edu-degree">{e.degree}</span>
              <span className="edu-institution">{e.institution}</span>
              <span className="edu-period">{e.period}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="sidebar-section">
        <h2 className="section-heading">News & Travel</h2>
        <ul className="timeline-list">
          {news.map((item, i) => (
            <li key={i} className="timeline-item">
              <span className="timeline-date">{item.date}</span>
              <span className="timeline-text">{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
