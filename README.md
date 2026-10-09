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

Deploy no **Cloudflare Workers** via integração Git (repo `github.com/ceagaa/ch`).

No dashboard: **Workers & Pages → ch → Settings → Build & Deploy**, configure:

| Campo | Valor |
|---|---|
| Build command | `npx opennextjs-cloudflare build` |
| Deploy command | `npx wrangler deploy` |

O build do OpenNext já inclui o `next build` e gera o bundle `.open-next/` que o `wrangler deploy` sobe. O worker se chama `ch` (`wrangler.jsonc`: `name`/`service` precisam bater com o project setting).

Ao publicar, defina `NEXT_PUBLIC_SITE_URL` nas env vars do worker com o domínio final (ex.: `https://seudominio.com.br`) para corrigir os metadados sociais (Open Graph).

## Stack

- Next.js 16 (App Router)
- React 19 + TypeScript
- Tailwind CSS 4

## Estrutura

- `src/app/` — layout, página e estilos
- `src/components/` — seções da home, ícones e utilitários visuais
- `src/lib/` e `src/types/` — fontes e tipos
- `public/` — imagens e fontes locais

---

Desenvolvido por **2swebtech**.
