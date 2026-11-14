# JIZURA upstream copy

- Project: https://github.com/852wa/JIZURA
- Browser pages: `index.html` (Simplified Chinese default), `jp/` (Japanese), plus `en/`, `zh-hant/`, `ko/`, `id/`, and `vi/`. The old `zh-hans/` route remains as a Chinese alias.
- Browser-accessible After Effects downloads: `JIZURA_AE.jsx`, `JIZURA_AE_en.jsx`, `JIZURA_CEP.zip`, and `JIZURA_CEP_en.zip`.
- Source commit: `fc16bfe43ea4a6c25a21f1caf04d17326de14f00` (v0.10.1)
- License: MIT; see `LICENSE`.
- Bundled third-party notices: see `THIRD_PARTY_NOTICES.md`.
- Local font fallback: original Google Fonts WOFF2 subsets and each family's license under `fonts/`; see `fonts/README.md` and `fonts/manifest.json`.

The upstream browser pages and prebuilt downloads are vendored at `/jizura/`. The Chinese upstream page serves `/jizura/`, the Japanese upstream page serves `/jizura/jp/`, and the former `/jizura/zh-hans/` route remains available. Each page's HTML `<title>` and `og:title` are changed to “歌词PV”, and the language links are rewritten to stay on this site. The blog's “歌词PV” menu opens `/jizura/`. Every app language remains outside the Shoka template and PJAX runtime.

The browser still prefers Google Fonts. Stylesheet and font-file waits share a 3.5-second deadline; after failure or timeout it uses the original fonts hosted under this page's `fonts/` directory for the rest of that page session. Font subsets are loaded only as needed. An unavailable remote font cannot block preview or MP4 export indefinitely; uploaded fonts are unchanged. No Orbit / GDACS behavior is modified by this adaptation.

To update it, review the upstream license and notices again, fetch the explicitly requested commit into a local upstream checkout, and run `node tools/sync-jizura-upstream.cjs <checkout> <commit>` from the blog root. This refreshes the seven built browser pages, Chinese alias, four prebuilt downloads and upstream license notices together. It preserves the title changes, local language menu and font fallback, and refuses to overwrite other local changes. If an upstream update introduces a new font, review and extend the local font package first; the updater rejects missing fonts. After verification, update the source commit above and the integration test's version expectation. Verify the generated pages and test each language route before publishing. Developer sources and build scripts are intentionally not served as website pages.
