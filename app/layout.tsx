import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "热心网友洗护中心 | 精洗 · 内饰 · 镀膜",
  description: "热心网友洗护中心汽车精洗、内饰深洁、漆面护理与镀膜预约页面。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
