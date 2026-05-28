"use client";
import Link from "next/link";
import { assignments } from "@/data/assignments";

export default function BaiTapPage() {
  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh", paddingTop: "72px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "4rem 2rem" }}>
        {/* Header */}
        <div style={{ marginBottom: "5rem", borderBottom: "1px solid var(--border)", paddingBottom: "3rem" }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--primary)", marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "1rem" }}>
            <span style={{ width: 24, height: 1, background: "var(--primary)", display: "inline-block" }} />
            Sản phẩm &amp; Học thuật
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1rem" }}>
            <h1 style={{ fontFamily: "'Merriweather', serif", fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 900, color: "var(--text)", lineHeight: 1.05 }}>
              Bài tập{" "}
              <em style={{ color: "var(--green)" }}>&amp; Dự án</em>
            </h1>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.75rem", color: "var(--text-dim)", letterSpacing: "0.1em" }}>
              {assignments.length} bài tập
            </span>
          </div>
        </div>

        {/* List */}
        <div className="assignment-masonry">
          {assignments.map((assignment, index) => (
            <article
              key={assignment.id}
              className="assignment-card"
            >
              {/* Number + Subject */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.2rem", gap: "1rem" }}>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.9rem", letterSpacing: "0.12em", color: "var(--border-strong)" }}>
                  {String(index + 1).padStart(2, "0")}
                </div>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.62rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--primary)", background: "var(--primary-muted)", padding: "0.25rem 0.7rem", border: "1px solid var(--primary-border)", borderRadius: "var(--radius-sm)" }}>
                  {assignment.subject}
                </span>
              </div>

              {/* Meta */}
              <div style={{ display: "flex", gap: "0.7rem", marginBottom: "0.9rem", flexWrap: "wrap" }}>
                {assignment.tools.slice(0, 3).map((tool) => (
                  <span key={tool} style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.62rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-dim)", background: "var(--surface2)", border: "1px solid var(--border)", padding: "0.2rem 0.55rem", borderRadius: "var(--radius-sm)" }}>
                    {tool}
                  </span>
                ))}
                {assignment.tools.length > 3 && (
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.62rem", color: "var(--border-strong)" }}>
                    +{assignment.tools.length - 3}
                  </span>
                )}
              </div>

              {/* Title */}
              <h2 style={{ fontFamily: "'Merriweather', serif", fontSize: "1.35rem", fontWeight: 700, color: "var(--text)", lineHeight: 1.3, marginBottom: "0.9rem" }}>
                {assignment.title}
              </h2>

              {/* Summary */}
              <p className="assignment-summary" style={{ fontFamily: "'Source Sans 3', serif", fontSize: "0.98rem", color: "var(--text-dim)", lineHeight: 1.7, marginBottom: "1.2rem" }}>
                {assignment.summary}
              </p>

              {/* Sections list */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem", marginBottom: "1.4rem", minHeight: "4.6rem", alignContent: "flex-start" }}>
                {assignment.sections.flatMap((section) =>
                  section.steps?.length
                    ? section.steps.slice(0, 4).map((step, stepIndex) => (
                        <span
                          key={`${section.title}-${stepIndex}`}
                          style={{
                            fontFamily: "'DM Mono', monospace",
                            fontSize: "0.6rem",
                            letterSpacing: "0.06em",
                            color: "var(--text-dim)",
                            background: "var(--surface2)",
                            padding: "0.25rem 0.6rem",
                            border: "1px solid var(--border)",
                            borderRadius: "var(--radius-sm)",
                          }}
                        >
                          {String(stepIndex + 1).padStart(2, "0")}: {step.title}
                        </span>
                      ))
                    : section.title
                      ? [
                          <span
                            key={section.title}
                            style={{
                              fontFamily: "'DM Mono', monospace",
                              fontSize: "0.6rem",
                              letterSpacing: "0.06em",
                              color: "var(--text-dim)",
                              background: "var(--surface2)",
                              padding: "0.25rem 0.6rem",
                              border: "1px solid var(--border)",
                              borderRadius: "var(--radius-sm)",
                            }}
                          >
                            {section.title}
                          </span>,
                        ]
                      : []
                )}
              </div>

              {/* CTA */}
              <div className="assignment-cta-wrap">
                <Link
                  href={`/bai-tap/${assignment.id}`}
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.7rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--on-primary)",
                    background: "var(--primary)",
                    padding: "0.7rem 1.2rem",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    whiteSpace: "nowrap",
                    transition: "background 0.2s",
                    borderRadius: "var(--radius-md)",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--primary-light)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--primary)"; }}
                >
                  Xem chi tiết
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .assignment-masonry {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1.2rem;
          align-items: stretch;
        }
        .assignment-card {
          display: flex;
          flex-direction: column;
          min-height: 460px;
          border: 1px solid transparent;
          border-radius: var(--radius-lg);
          background:
            linear-gradient(var(--surface), var(--surface)) padding-box,
            linear-gradient(145deg, rgba(0, 102, 179, 0.24), rgba(0, 166, 81, 0.2)) border-box;
          padding: 1.25rem;
          box-shadow: var(--shadow);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .assignment-summary {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          min-height: 5rem;
        }
        .assignment-cta-wrap {
          margin-top: auto;
          padding-top: 0.4rem;
        }
        .assignment-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 24px rgba(0, 77, 138, 0.12);
        }
        @media (max-width: 1080px) {
          .assignment-masonry {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        @media (max-width: 768px) {
          .assignment-masonry {
            grid-template-columns: 1fr;
          }
          .assignment-card {
            min-height: auto;
          }
        }
      `}</style>
    </div>
  );
}
