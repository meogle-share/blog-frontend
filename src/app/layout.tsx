import type { Metadata, Viewport } from "next";
import { Press_Start_2P } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/components/providers/query-provider";
import { FloatingWriteButton } from "@/components/features/posts/floating-write-button";

const pressStart2P = Press_Start_2P({
  variable: "--font-pixel",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MEOGLE",
  description: "디지털 에세이 퀘스트 — 기술·예술·철학의 교차점",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className={`${pressStart2P.variable} antialiased`}>
        <QueryProvider>
          {children}
          <FloatingWriteButton />
        </QueryProvider>
      </body>
    </html>
  );
}
