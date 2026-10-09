import type { Metadata } from "next";
import { siteFontVariables } from "@/lib/fonts";
import "./globals.css";

const TITLE = "Carlos Henrique (CH) — Desenvolvedor Web Full Stack";
const DESCRIPTION =
  "Bem vindo a minha página oficial. Sou desenvolvedor full-stack com mais de 15 anos de experiência em aplicações web, SaaS, painéis administrativos, mobile e APIs. Conheça os projetos e entre em contato.";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://ch.2swebtech.com.br/"
  ),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
  // Marca Pessoal
  "Carlos Henrique",
  "CH",
  "Carlos Henrique desenvolvedor",
  "Carlos Henrique CH",
  "portfólio Carlos Henrique",

  // Especialidade e Cargo
  "desenvolvedor web full stack",
  "desenvolvedor full stack freelancer",
  "desenvolvedor frontend e backend",

  // Core Tech Stack
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "PHP",
  "WordPress",
  "Tailwind CSS",
  "Vite",
  "Supabase",

  // Enterprise, Infra e Legado
  "SAP ABAP",
  "Docker",
  "integração de APIs",
  "suporte a sistemas corporativos",

  // Serviços e Entregas
  "criação de sistemas web",
  "desenvolvimento de SaaS e dashboards",
  "desenvolvimento mobile",
  "React Native",
  "Flutter",
  "arquitetura de software",

  // Termos Gerais de Busca
  "portfólio",
  "freelancer"
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
