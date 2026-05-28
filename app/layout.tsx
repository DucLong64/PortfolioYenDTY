import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Portfolio — Đặng Thị Yến Vy",
  description:
    "Portfolio cá nhân — Đặng Thị Yến Vy, sinh viên Răng Hàm Mặt, Trường Đại học Y Dược, ĐHQG Hà Nội",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
