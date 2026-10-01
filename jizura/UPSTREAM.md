# JIZURA upstream copy

- Project: https://github.com/852wa/JIZURA
- Browser pages: `index.html` (Simplified Chinese default), `jp/` (Japanese), plus `en/`, `zh-hant/`, `ko/`, `id/`, and `vi/`. The old `zh-hans/` route remains as a Chinese alias.
- Browser-accessible After Effects downloads: `JIZURA_AE.jsx`, `JIZURA_AE_en.jsx`, `JIZURA_CEP.zip`, and `JIZURA_CEP_en.zip`.
- Source commit: `fc16bfe43ea4a6c25a21f1caf04d17326de14f00` (v0.10.1)
- License: MIT; see `LICENSE`.
- Bundled third-party notices: see `THIRD_PARTY_NOTICES.md`.

The upstream browser pages and prebuilt downloads are vendored at `/jizura/`. The Chinese upstream page serves `/jizura/`, the Japanese upstream page serves `/jizura/jp/`, and the former `/jizura/zh-hans/` route remains available. Each page's HTML `<title>` and `og:title` are changed to “歌词PV”, and the language links are rewritten to stay on this site. The blog's “歌词PV” menu opens `/jizura/`. Every app language remains outside the Shoka template and PJAX runtime.

To update it, review the upstream license and notices again, fetch the explicitly requested commit into a local upstream checkout, and run `node tools/sync-jizura-upstream.cjs <checkout> <commit>` from the blog root. This refreshes the seven built browser pages, Chinese alias, four prebuilt downloads and license notices together. It preserves the title changes and local language menu, and refuses to overwrite other local changes. After verification, update the source commit above and the integration test's version expectation. Verify the generated pages and test each language route before publishing. Developer sources and build scripts are intentionally not served as website pages.
