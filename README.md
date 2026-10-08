# CH — Portfólio

Meu site pessoal :)

## Rodar

```bash
npm install
npm run dev
```

Acesse: http://localhost:3000

## Comandos

| Comando | O que faz |
|---|---|
| `npm run dev` | servidor de desenvolvimento |
| `npm run build` | build de produção |
| `npm run start` | serve o build de produção |
| `npm run check` | lint + typecheck + build |

## Deploy

O deploy roda no **Cloudflare Workers** via integração Git (`npx wrangler deploy`). O worker se chama `ch` — esse nome está em `wrangler.jsonc` e precisa bater com o *project setting* do dashboard da Cloudflare (Settings → Domains & Workers).

Ao publicar, defina `NEXT_PUBLIC_SITE_URL` no `.env.local` (ou nas env vars do worker) com o domínio final (ex.: `https://seudominio.com.br`) para corrigir os metadados sociais (Open Graph).

## Stack

- Next.js 16 (App Router)
- React 19 + TypeScript
- Tailwind CSS 4

## Estrutura

- `src/app/` — layout, página e estilos
- `src/components/` — seções da home, ícones e utilitários visuais
- `src/lib/` e `src/types/` — fontes e tipos
- `public/` — imagens e fontes locais

## Deploy

Funciona na Vercel, Netlify ou qualquer host Node (`npm run build` e depois `npm run start`). Ao publicar, defina `NEXT_PUBLIC_SITE_URL` no `.env.local` com o domínio final (ex.: `https://seudominio.com.br`) para corrigir os metadados sociais (Open Graph).

---

Desenvolvido por **2swebtech**.
