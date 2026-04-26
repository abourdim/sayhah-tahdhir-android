# koutoub-android-template

Template + factory for spawning Capacitor Android/iOS wrapper repos around Sheikh Mohammed al-Ghazali's books — one repo per book, all consistent.

## What this is

The first wrapper, [`abourdim/al-ghirbal-android`](https://github.com/abourdim/al-ghirbal-android), was hand-written. With **47 al-Ghazali books** queued, this template extracts the reusable scaffolding so each new book wrapper is generated in seconds and stays in sync with upstream toolchain fixes.

## Usage

Edit `books.yaml` (one entry per book), then:

```bash
./koutoub-spawn.sh <slug>             # spawn locally
./koutoub-spawn.sh <slug> --push      # also create+push the GitHub repo
```

Example:

```bash
./koutoub-spawn.sh jaddid-hayatak
```

Produces `<slug>-android/` (sibling directory) with all template files materialized and the source `www/` cloned from `abourdim/<slug>`.

## Files

| File | Purpose |
|---|---|
| `manage.sh`, `manage-{linux,macos,windows,ios}.sh` | OS-aware build/publish menus (templated) |
| `WORKSHOP.html` | Full build/publish walkthrough (templated) |
| `capacitor.config.json` | Capacitor config (templated) |
| `package.json` | NPM manifest (templated) |
| `index.html` | Landing page (templated) |
| `PLAY_STORE_LISTING.md` | Play Store copy in AR/EN/FR (templated) |
| `LICENSE.template` | MIT (rendered as `LICENSE` per book) |
| `README.md.tpl` | Per-book README (rendered as `README.md`) |
| `store-assets/` | privacy.html + feature-graphic.html (templated) |
| `releases/README.md` | Releases doc (templated) |
| `www-overlay/` | Files to overlay onto cloned `www/` (e.g. `tts-polyfill.js`) |
| `.gitignore` | Excludes node_modules, build outputs, keystores |
| `books.yaml` | Single source of truth — one entry per book |
| `koutoub-spawn.sh` | The generator |
| `docs/PLACEHOLDERS.md` | Token reference |

## Placeholders

See [`docs/PLACEHOLDERS.md`](docs/PLACEHOLDERS.md) for the full token catalog.

## License

MIT
