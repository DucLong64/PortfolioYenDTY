"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

/** Tăng số này (hoặc NEXT_PUBLIC_PROFILE_PHOTOS_VERSION) sau mỗi lần đổi ảnh cùng tên file */
const PHOTOS_VERSION =
  process.env.NEXT_PUBLIC_PROFILE_PHOTOS_VERSION ?? "2";

const withCacheBust = (path: string) => `${path}?v=${PHOTOS_VERSION}`;

const PHOTOS = [
  { src: withCacheBust("/images/anh-ca-nhan-1.jpg"), alt: "Ảnh cá nhân 1" },
  { src: withCacheBust("/images/anh-ca-nhan-2.jpg"), alt: "Ảnh cá nhân 2" },
];

const INTERVAL_MS = 5000;
const SLIDE_MS = 700;

export default function ProfileImageSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % PHOTOS.length);
    }, INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="profile-slider" aria-label="Ảnh cá nhân">
      <div
        className="profile-slider-track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {PHOTOS.map((photo, i) => (
          <div
            key={photo.src}
            className="profile-slider-slide"
            aria-hidden={i !== index}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              style={{ objectFit: "cover" }}
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      <div className="profile-slider-dots" aria-hidden="true">
        {PHOTOS.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`profile-slider-dot${i === index ? " active" : ""}`}
            onClick={() => setIndex(i)}
            aria-label={`Ảnh ${i + 1}`}
          />
        ))}
      </div>

      <style>{`
        .profile-slider {
          position: relative;
          width: 100%;
          max-width: 420px;
          aspect-ratio: 3 / 4;
          overflow: hidden;
          border-radius: 4px;
          box-shadow: 0 24px 48px rgba(0, 77, 138, 0.12);
          border: 1px solid var(--border);
          background: var(--surface2);
        }
        .profile-slider::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 2;
          pointer-events: none;
          background: linear-gradient(
            160deg,
            rgba(0, 102, 179, 0.08) 0%,
            transparent 45%,
            rgba(0, 166, 81, 0.06) 100%
          );
        }
        .profile-slider-track {
          display: flex;
          width: 100%;
          height: 100%;
          transition: transform ${SLIDE_MS}ms cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform;
        }
        .profile-slider-slide {
          position: relative;
          flex: 0 0 100%;
          width: 100%;
          height: 100%;
        }
        .profile-slider-dots {
          position: absolute;
          bottom: 1rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 0.5rem;
          z-index: 3;
        }
        .profile-slider-dot {
          width: 8px;
          height: 8px;
          padding: 0;
          border: none;
          border-radius: 50%;
          cursor: pointer;
          background: rgba(255, 255, 255, 0.45);
          transition:
            background 0.35s ease,
            transform 0.35s ease,
            width 0.35s ease;
        }
        .profile-slider-dot.active {
          width: 22px;
          border-radius: 4px;
          background: var(--primary);
        }
        @media (prefers-reduced-motion: reduce) {
          .profile-slider-track {
            transition: none;
          }
        }
      `}</style>
    </div>
  );
}
