# JIZURA font fallback

Google Fonts remains the preferred source. If its CSS or WOFF2 files fail or
exceed the shared 3.5-second wait, the page removes its Google font stylesheets
and switches to self-hosted copies for that page session. Local loading also
has a 15-second deadline, so neither preview nor export can wait forever.

These are the original Google Fonts subsets, not replacements with system
fonts. All 40 families, multilingual glyph ranges and requested weights are
preserved. Subsets are downloaded by the browser only when needed for current
text/styles, not as one upfront font package. `manifest.json` records source
URLs, SHA-256 hashes, file sizes and each family's original license text in
`licenses/`. M PLUS Rounded 1c uses the matching 2016 Rounded M+ license from
Google Fonts' `ofl/roundedmplus1c` directory. No font binaries are modified.

`files/`, fingerprinted CSS and `loader.*.js` are static assets copied into
`public/jizura/fonts/` by Hexo. Publish this directory together with the app
HTML; the loader resolves all fallback URLs relative to its own URL, including
subdirectory hosting. It does not use blog settings, Waline, AI or Orbit.

Maintainers: `node tools/download-jizura-fonts.cjs --download` explicitly
downloads official font data and licenses (no upstream scripts are run).
Then `node tools/patch-jizura-fonts.cjs` regenerates the fingerprinted loader
and applies the reviewed adaptation to all eight local routes. The upstream
sync tool preserves this adaptation and rejects an unknown font catalog.

The core loader is in `lib/jizura-font-loader.js`; its license is the app's
MIT license. The fonts themselves retain their individual SIL OFL 1.1 licenses.
