"use client";
import { useEffect } from "react";
import Link from "next/link";
import ProfileImageSlider from "@/components/ProfileImageSlider";

const directions = [
  {
    num: "01",
    title: "Ứng dụng AI trong Răng Hàm Mặt",
    desc: "Nghiên cứu công cụ AI tạo sinh và AI trong chẩn đoán hình ảnh nha khoa, hỗ trợ quy trình điều trị an toàn và hiệu quả.",
  },
  {
    num: "02",
    title: "Phát triển toàn diện",
    desc: "Song hành kỹ năng số cùng năng lực lâm sàng thực tế — hướng tới bác sĩ RHM thời đại số.",
  },
  {
    num: "03",
    title: "Triết lý hành nghề",
    desc: "Đề cao sự minh bạch, liêm chính học thuật. Tư duy lâm sàng là nền tảng cốt lõi, công nghệ là công cụ hỗ trợ đắc lực.",
  },
  {
    num: "04",
    title: "Giá trị thực tiễn trong điều trị",
    desc: "Kết hợp kiến thức y khoa truyền thống với giải pháp công nghệ tiên tiến nhằm tối ưu hóa giá trị thực tiễn cho người bệnh.",
  },
];

const focusAreas = [
  {
    cat: "Chuyên môn",
    items: ["Răng Hàm Mặt", "Chẩn đoán hình ảnh", "Thực hành lâm sàng", "Giải phẫu nha khoa"],
  },
  {
    cat: "Công nghệ & AI",
    items: ["AI trong y tế", "AI tạo sinh", "Prompt Engineering", "Công cụ hợp tác số"],
  },
  {
    cat: "Học thuật",
    items: ["Tìm kiếm tài liệu", "Đánh giá nguồn tin", "Trích dẫn chuẩn", "Liêm chính học thuật"],
  },
  {
    cat: "Giá trị cốt lõi",
    items: ["Tư duy lâm sàng", "An toàn bệnh nhân", "Minh bạch", "Học đi đôi với hành"],
  },
];

export default function HomePage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = "1";
            (entry.target as HTMLElement).style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      {/* Hero */}
      <section
        id="gioi-thieu"
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          paddingTop: "72px",
          backgroundImage:
            "radial-gradient(ellipse 85% 70% at 85% 20%, rgba(0, 166, 81, 0.07) 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 10% 80%, rgba(0, 102, 179, 0.09) 0%, transparent 50%), linear-gradient(165deg, #ffffff 0%, #f6fafc 45%, #eef4f8 100%)",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "4rem 2rem", width: "100%" }} className="hero-grid">
          <div>
            {/* <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--primary)", marginBottom: "2rem", display: "flex", alignItems: "center", gap: "1rem" }}>
              <span style={{ width: 40, height: 1, background: "var(--primary)", display: "inline-block" }} />
              Portfolio Cá Nhân — 2025
            </div> */}
            <h1 style={{ fontFamily: "'Merriweather', serif", fontSize: "clamp(2.2rem, 5vw, 4.8rem)", fontWeight: 900, lineHeight: 1.05, color: "var(--text)", marginBottom: "1.5rem" }}>
              Tư duy lâm sàng là cốt lõi,{" "}
              <em style={{ color: "var(--green)", fontStyle: "italic" }}>công nghệ là đòn bẩy</em>
              <span style={{ color: "var(--border-strong)" }}>.</span>
            </h1>
            <p style={{ fontFamily: "'Source Sans 3', serif", fontSize: "1.25rem", color: "var(--text-muted)", maxWidth: "620px", lineHeight: 1.8, marginBottom: "3rem" }}>
              <strong style={{ color: "var(--text)" }}>Đặng Thị Yến Vy</strong> · Sinh viên năm 4 ngành{" "}
              <strong style={{ color: "var(--text)" }}>Răng Hàm Mặt</strong> tại Trường Đại học Y Dược — ĐHQGHN. Tôi định hướng trở thành bác sĩ RHM thời đại số, kết hợp{" "}
              <span style={{ color: "var(--primary)" }}>y khoa truyền thống</span> với{" "}
              <span style={{ color: "var(--primary)" }}>công nghệ tiên tiến</span> để tối ưu giá trị thực tiễn trong điều trị.
            </p>
            <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
              <Link href="/bai-tap" style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--on-primary)", background: "var(--primary)", padding: "0.9rem 2rem", textDecoration: "none", display: "inline-block", borderRadius: "2px" }}>
                Xem Bài Tập →
              </Link>
              <a href="#lien-he" style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)", background: "transparent", padding: "0.9rem 2rem", textDecoration: "none", border: "1px solid var(--border-strong)", display: "inline-block" }}>
                Liên Hệ
              </a>
            </div>
          </div>
          <div className="hero-photo">
            <ProfileImageSlider />
          </div>
        </div>
      </section>

      <div style={{ borderTop: "1px solid var(--border)", margin: "0 2rem" }} />

      {/* About */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "6rem 2rem", display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "5rem", alignItems: "start" }} className="about-grid">
        <div>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--primary)", marginBottom: "2rem", display: "flex", alignItems: "center", gap: "1rem" }}>
            <span style={{ width: 24, height: 1, background: "var(--primary)", display: "inline-block" }} />
            Thông tin
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {[["Họ tên","Đặng Thị Yến Vy"],["Vai trò","Sinh viên năm 4 — RHM"],["Trường","ĐH Y Dược — ĐHQGHN (UMP-VNU)"],["Chuyên ngành","Răng Hàm Mặt"],["Lớp","VNU1001_E2025"],["MSV","22100381"],["Thời gian","2022 — 2028"]].map(([label,value],i) => (
              <div key={i} style={{ display: "flex", borderBottom: "1px solid var(--border)", padding: "1rem 0" }}>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.72rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-dim)", width: "40%", flexShrink: 0 }}>{label}</span>
                <span style={{ fontFamily: "'Source Sans 3', serif", fontSize: "1rem", color: "var(--text)" }}>{value}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--primary)", marginBottom: "2rem", display: "flex", alignItems: "center", gap: "1rem" }}>
            <span style={{ width: 24, height: 1, background: "var(--primary)", display: "inline-block" }} />
            Về tôi
          </div>
          <h2 style={{ fontFamily: "'Merriweather', serif", fontSize: "2.2rem", fontWeight: 700, color: "var(--text)", lineHeight: 1.3, marginBottom: "1.5rem" }}>
            Tư duy lâm sàng là cốt lõi, <em style={{ color: "var(--green)" }}>công nghệ là đòn bẩy</em>
          </h2>
          <p style={{ fontFamily: "'Source Sans 3', serif", fontSize: "1.1rem", color: "var(--text-muted)", lineHeight: 1.9, marginBottom: "1.5rem" }}>
            Tôi là Đặng Thị Yến Vy, sinh viên ngành Răng Hàm Mặt tại Trường Đại học Y Dược, Đại học Quốc gia Hà Nội. Tôi định hướng trở một bác sĩ răng hàm mặt thời đại số, không ngừng kết hợp kiến thức y khoa truyền thống với các giải pháp công nghệ tiên tiến nhằm tối ưu hóa giá trị thực tiễn trong điều trị.
          </p>
          <p style={{ fontFamily: "'Source Sans 3', serif", fontSize: "1.1rem", color: "var(--text-muted)", lineHeight: 1.9, marginBottom: "1.5rem" }}>
            Lĩnh vực quan tâm gồm ứng dụng AI trong Răng Hàm Mặt — nghiên cứu công cụ AI tạo sinh và AI trong chẩn đoán hình ảnh nha khoa — cùng mục tiêu phát triển toàn diện: song hành kỹ năng số và năng lực lâm sàng thực tế.
          </p>
          <p style={{ fontFamily: "'Source Sans 3', serif", fontSize: "1.1rem", color: "var(--text-muted)", lineHeight: 1.9 }}>
            Triết lý hành nghề của tôi đề cao sự minh bạch, liêm chính học thuật. Tôi khẳng định tư duy lâm sàng là nền tảng cốt lõi, còn công nghệ là công cụ hỗ trợ đắc lực trong hành trình chăm sóc sức khỏe.
          </p>
        </div>
      </section>

      <div style={{ borderTop: "1px solid var(--border)", margin: "0 2rem" }} />

      {/* Skills */}
      <section id="ky-nang" style={{ maxWidth: 1200, margin: "0 auto", padding: "6rem 2rem" }}>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--primary)", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "1rem" }}>
          <span style={{ width: 24, height: 1, background: "var(--primary)", display: "inline-block" }} />
          Học tập &amp; Kỹ năng
        </div>
        <h2 style={{ fontFamily: "'Merriweather', serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, color: "var(--text)", lineHeight: 1.1, marginBottom: "4rem" }}>
          Định hướng &amp; <em style={{ color: "var(--green)" }}>Quan tâm</em>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1px", background: "var(--border)", marginBottom: "4rem" }} className="direction-grid">
          {directions.map((d) => (
            <div key={d.num} style={{ background: "var(--surface)", padding: "2.5rem", transition: "background 0.3s" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--surface2)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--surface)"; }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "2.5rem", fontWeight: 300, color: "var(--border-strong)", marginBottom: "1rem", lineHeight: 1 }}>{d.num}</div>
              <h3 style={{ fontFamily: "'Merriweather', serif", fontSize: "1.2rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.75rem", lineHeight: 1.3 }}>{d.title}</h3>
              <p style={{ fontFamily: "'Source Sans 3', serif", fontSize: "1rem", color: "var(--text-dim)", lineHeight: 1.7 }}>{d.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2rem" }} className="skills-grid">
          {focusAreas.map((group) => (
            <div key={group.cat}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--primary)", marginBottom: "1rem" }}>{group.cat}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {group.items.map((skill) => (
                  <div key={skill} style={{ fontFamily: "'Source Sans 3', serif", fontSize: "1rem", color: "var(--text-muted)", padding: "0.4rem 0", borderBottom: "1px solid var(--border)", transition: "color 0.2s", cursor: "default" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--text)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--text-muted)"; }}>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div style={{ borderTop: "1px solid var(--border)", margin: "0 2rem" }} />

      {/* Contact */}
      <section id="lien-he" style={{ maxWidth: 1200, margin: "0 auto", padding: "6rem 2rem" }}>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--primary)", marginBottom: "2rem", display: "flex", alignItems: "center", gap: "1rem" }}>
          <span style={{ width: 24, height: 1, background: "var(--primary)", display: "inline-block" }} />
          Liên hệ
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }} className="contact-grid">
          <div>
            <h2 style={{ fontFamily: "'Merriweather', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "var(--text)", lineHeight: 1.2, marginBottom: "1.5rem" }}>
              Hãy kết nối<br /><em style={{ color: "var(--green)" }}>cùng tôi</em>
            </h2>
            <p style={{ fontFamily: "'Source Sans 3', serif", fontSize: "1.1rem", color: "var(--text-dim)", lineHeight: 1.8 }}>
              Tôi luôn sẵn sàng trao đổi về ứng dụng AI trong y tế, nghiên cứu RHM, cơ hội học tập hoặc hợp tác trong các dự án liên quan đến chăm sóc sức khỏe.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {[
              { label: "Điện thoại", value: "0328 019 433", href: "tel:0328019433" },
              { label: "Email", value: "yenvy2801@gmail.com", href: "mailto:yenvy2801@gmail.com" },
              { label: "Facebook", value: "Đặng Yến Vy", href: "https://www.facebook.com/yen.vy.xinhiuu.12" },
            ].map(({ label, value, href }) => (
              <a key={label} href={href} style={{ display: "flex", borderBottom: "1px solid var(--border)", padding: "1.2rem 0", textDecoration: "none", transition: "all 0.2s", alignItems: "center" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.paddingLeft = "0.5rem"; (e.currentTarget.querySelector(".val") as HTMLElement).style.color = "var(--primary)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.paddingLeft = "0"; (e.currentTarget.querySelector(".val") as HTMLElement).style.color = "var(--text-muted)"; }}>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-dim)", width: "35%", flexShrink: 0 }}>{label}</span>
                <span className="val" style={{ fontFamily: "'Source Sans 3', serif", fontSize: "1rem", color: "var(--text-muted)", transition: "color 0.2s" }}>{value}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* <footer style={{ borderTop: "1px solid var(--border)", padding: "2rem", display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth: 1200, margin: "0 auto" }}>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.1em", color: "var(--text-dim)" }}>© 2025 Đặng Thị Yến Vy · VNU1001_E2025</span>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.1em", color: "var(--border-strong)" }}>Built with Next.js · Tailwind CSS</span>
      </footer> */}

      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
        }
        .hero-photo {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .hero-photo { order: -1; }
          .about-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .direction-grid { grid-template-columns: 1fr !important; }
          .skills-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .contact-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </div>
  );
}
