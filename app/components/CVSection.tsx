import { cv } from "@/lib/data";

type CVData = typeof cv;

export default function CVSection({ cv }: { cv: CVData }) {
  return (
    <div className="cv-content">
      <CVBlock title="Research Experience">
        {cv.research.map((e, i) => (
          <div key={i} className="cv-item">
            <div className="cv-item-main">
              <span className="cv-item-title">{e.role}</span>
              <span className="cv-item-period">{e.period}</span>
            </div>
            <p className="cv-item-sub">
              {e.org} · supervised by{" "}
              <a href={e.supervisorUrl} className="cv-link" target="_blank" rel="noopener noreferrer">{e.supervisor}</a>
            </p>
          </div>
        ))}
      </CVBlock>
    </div>
  );
}

function CVBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="cv-block">
      <h3 className="cv-block-title">{title}</h3>
      <div className="cv-block-body">{children}</div>
    </section>
  );
}
