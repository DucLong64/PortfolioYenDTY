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
const FADE_MS = 1200;

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
      {PHOTOS.map((photo, i) => (
        <div
          key={photo.src}
          className={`profile-slider-slide${i === index ? " is-active" : ""}`}
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

      <style>{`
        .profile-slider {
          position: relative;
          width: 100%;
          max-width: 420px;
          aspect-ratio: 3 / 4;
          overflow: hidden;
          border-radius: var(--radius-lg);
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
        .profile-slider-slide {
          position: absolute;
          inset: 0;
          opacity: 0;
          z-index: 0;
          transform: scale(1.015);
          transition:
            opacity ${FADE_MS}ms cubic-bezier(0.4, 0, 0.2, 1),
            transform ${FADE_MS}ms cubic-bezier(0.4, 0, 0.2, 1);
          will-change: opacity, transform;
        }
        .profile-slider-slide.is-active {
          opacity: 1;
          z-index: 1;
          transform: scale(1);
        }
        @media (prefers-reduced-motion: reduce) {
          .profile-slider-slide {
            transition: none;
          }
        }
      `}</style>
    </div>
  );
}
