"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const SCHOOL_BANNER = "/images/logo.svg";

const navItems = [
  { label: "Giới thiệu", href: "/#gioi-thieu" },
  { label: "Học tập", href: "/#ky-nang" },
  { label: "Bài tập", href: "/bai-tap" },
  { label: "Liên hệ", href: "/#lien-he" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="site-header"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "box-shadow 0.4s ease, border-color 0.4s ease",
        background: "var(--nav-bg)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--border)",
        boxShadow: scrolled ? "var(--shadow)" : "none",
      }}
    >
      <nav
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 2rem",
          height: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Banner trường */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            flexShrink: 0,
          }}
          aria-label="Trang chủ — Trường Đại học Y Dược, ĐHQG Hà Nội"
        >
          <Image
            src={SCHOOL_BANNER}
            alt="Trường Đại học Y Dược — ĐHQG Hà Nội"
            width={220}
            height={44}
            priority
            style={{ height: 44, width: "auto", maxWidth: "min(220px, 55vw)", objectFit: "contain" }}
          />
        </Link>

        {/* Desktop Nav */}
        <div className="nav-links hidden-mobile">
          {navItems.map((item) => {
            const isActive =
              item.href === "/bai-tap"
                ? pathname.startsWith("/bai-tap")
                : false;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link${isActive ? " nav-link--active" : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile hamburger */}
        <button
          className="show-mobile"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "none",
            flexDirection: "column",
            gap: "5px",
            padding: "4px",
          }}
          aria-label="Menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: 24,
                height: 1.5,
                background: "var(--primary)",
                transition: "all 0.3s",
                transform:
                  menuOpen && i === 0
                    ? "translateY(6.5px) rotate(45deg)"
                    : menuOpen && i === 2
                    ? "translateY(-6.5px) rotate(-45deg)"
                    : menuOpen && i === 1
                    ? "scaleX(0)"
                    : "scaleX(1)",
              }}
            />
          ))}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            background: "var(--nav-bg)",
            borderTop: "1px solid var(--border)",
            boxShadow: "var(--shadow)",
            padding: "1.5rem 2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          {navItems.map((item) => {
            const isActive =
              item.href === "/bai-tap"
                ? pathname.startsWith("/bai-tap")
                : false;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`nav-link nav-link--mobile${isActive ? " nav-link--active" : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      )}

      <style>{`
        .nav-links {
          display: flex;
          gap: 0.35rem;
          align-items: center;
        }
        .nav-link {
          font-family: 'DM Mono', monospace;
          font-size: 0.78rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--text-muted);
          text-decoration: none;
          padding: 0.55rem 1rem;
          border-radius: 2px;
          transition: background-color 0.2s ease, color 0.2s ease;
        }
        .nav-link:hover,
        .nav-link:focus-visible {
          background-color: var(--primary);
          color: var(--on-primary);
        }
        .nav-link--active {
          background-color: var(--primary);
          color: var(--on-primary);
        }
        .nav-link--mobile {
          display: block;
          font-size: 0.85rem;
          letter-spacing: 0.1em;
          padding: 0.75rem 1rem;
        }
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
