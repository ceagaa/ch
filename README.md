# CH — Portfólio

Minha página pessoal **Carlos Henrique (CH)**: desenvolvedor full-stack focado em React, Next.js e soluções web sob medida.

## Sobre

Landing page única (one-page) construída com Next.js App Router. Apresenta banner com apresentação pessoal, trajetória profissional, portfólio de projetos, stack técnica (ferramentas e arquitetura), depoimentos e contato direto (e-mail, WhatsApp e redes).

## Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19** + **TypeScript**
- **Tailwind CSS 4** (breakpoints customizados: 576 / 768 / 992 / 1200 / 1400px)
- **Lenis** (scroll suave) e **Swiper** (carrossel de projetos)
- Fontes locais Sequel Sans (headings) + Inter (corpo), servidas de `public/fonts/`

## Como rodar

```bash
npm install      # instala dependências
npm run dev      # servidor de desenvolvimento em http://localhost:3000
```

## Comandos úteis

```bash
npm run dev        # desenvolvimento
npm run build      # build de produção
npm run start      # serve o build de produção
npm run lint       # lint (ESLint)
npm run typecheck  # checagem de tipos (tsc)
npm run check      # lint + typecheck + build de uma vez
```

## Estrutura

```
src/
├── app/                 # layout global, página única, estilos, favicon/OG
│   ├── globals.css      # tokens de tema + estilos do site
│   ├── layout.tsx       # metadados SEO, fontes, providers
│   └── page.tsx         # composição das seções
├── components/          # todos os componentes da home
│   ├── site-header.tsx / site-footer.tsx / page-effects.tsx
│   ├── banner-section.tsx / about-intro.tsx / about-slider.tsx
│   ├── resume-section.tsx / skills-section.tsx
│   ├── testimonial-section.tsx / blog-section.tsx
│   └── icons.tsx / primitives.tsx / reveal.tsx   # compartilhados
├── lib/                 # fontes
└── types/               # tipos compartilhados

public/
├── fonts/               # Sequel Sans (woff2)
└── images/              # fotos, projetos, OG image
```

## Conteúdo e personalização

- Textos, links e imagens ficam nos componentes de `src/components/`.
- O mapa de assets usados está em `src/components/icons.tsx` (`SITE_ASSETS`).
- Redes sociais, e-mail e WhatsApp estão no rodapé (`site-footer.tsx`) e no banner (`banner-section.tsx`).

## SEO / metadados

- Título, descrição, Open Graph e Twitter Card em `src/app/layout.tsx`.
- `metadataBase` usa `NEXT_PUBLIC_SITE_URL` (defina no `.env.local` ao publicar, ex.: `NEXT_PUBLIC_SITE_URL=https://seu-dominio.com.br`).
- Favicon em `src/app/icon.svg` + `src/app/favicon.ico`; imagem social em `public/images/og.png`.

## Deploy

Compatível com Vercel, Netlify ou qualquer host Node:

```bash
npm run build
npm run start
```

---

Desenvolvido por **2swebtech**.
