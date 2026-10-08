import type { Metadata } from "next";
import { siteFontVariables } from "@/lib/fonts";
import "./globals.css";

const TITLE = "Carlos Henrique (CH) — Desenvolvedor Full Stack";
const DESCRIPTION =
  "Portfólio de Carlos Henrique (CH), desenvolvedor full-stack com mais de 15 anos de experiência em aplicações web, SaaS, painéis administrativos, mobile e APIs. Conheça os projetos e entre em contato.";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "Carlos Henrique",
    "CH",
    "desenvolvedor full stack",
    "portfólio",
    "React",
    "Next.js",
    "Node.js",
    "SAP ABAP",
    "freelancer",
  ],
  authors: [{ name: "Carlos Henrique" }],
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/",
    siteName: "Carlos Henrique (CH)",
    images: [
      {
        url: "/images/og.png",
        width: 2400,
        height: 1260,
        alt: "Currículo — Carlos Henrique (CH)",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${siteFontVariables} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
