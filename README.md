# Terjemah Mandarin Taiwan (PWA)

Penerjemah Indonesia ⇄ Mandarin Tradisional (Taiwan). API key disimpan di browser pengguna.

## Deploy otomatis GitHub → Cloudflare
1. Push repo ini ke GitHub (folder `public/` dan `wrangler.jsonc` harus di root repo).
2. Cloudflare Dashboard → Workers & Pages → Create → Import a repository → pilih repo ini.
3. Build command: kosongkan. Deploy command: `npx wrangler deploy`. Root directory: `/`.
4. Setiap `git push` ke branch utama akan deploy otomatis.

Nama worker di `wrangler.jsonc` (`translet`) harus sama dengan nama worker di Cloudflare.
