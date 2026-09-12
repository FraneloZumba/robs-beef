# Rob's Beef — Web demo

Next.js + TypeScript, responsive y listo para Vercel.

## Ejecutar

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
```

## Cambios rápidos

- WhatsApp: `app/page.tsx` → `WHATSAPP_NUMBER`
- Instagram: `app/page.tsx` → `INSTAGRAM_URL`
- Ubicación: `app/page.tsx` → `MAP_URL`
- Imágenes: `public/README-IMAGENES.txt`

El `tsconfig.json` ya incluye `noUncheckedSideEffectImports: false` para evitar el falso error de `./globals.css` en VS Code.
