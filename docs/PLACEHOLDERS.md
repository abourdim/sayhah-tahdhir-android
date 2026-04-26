# Placeholders reference

All template files use `{{TOKEN}}` syntax. The spawn script substitutes them via `sed`.

## Per-book (defined in `books.yaml`)

| Token | Type | Example |
|---|---|---|
| `{{SLUG}}` | string | `jaddid-hayatak` |
| `{{APP_NAME}}` | string | `Jaddid Hayatak` |
| `{{TITLE_AR}}` | string | `جدد حياتك` |
| `{{TITLE_EN}}` | string | `Renew Your Life` |
| `{{TITLE_FR}}` | string | `Renouvelez Votre Vie` |
| `{{BOOK_TITLE_AR}}` | string | `جدد حياتك` (full original title) |
| `{{BOOK_TITLE_EN}}` | string | `Renew Your Life` |
| `{{BOOK_TITLE_FR}}` | string | `Renouvelez Votre Vie` |
| `{{TAGLINE_AR}}` | string | one-line subtitle |
| `{{TAGLINE_EN}}` | string | one-line subtitle |
| `{{TAGLINE_FR}}` | string | one-line subtitle |
| `{{ABOUT_AR}}` | paragraph | 2–3 sentences |
| `{{ABOUT_EN}}` | paragraph | 2–3 sentences |
| `{{ABOUT_FR}}` | paragraph | 2–3 sentences |
| `{{SHORT_DESC_AR}}` | string | Play Store ≤80 chars |
| `{{SHORT_DESC_EN}}` | string | Play Store ≤80 chars |
| `{{SHORT_DESC_FR}}` | string | Play Store ≤80 chars |
| `{{FULL_DESC_AR}}` | block | Play Store ≤4000 chars |
| `{{FULL_DESC_EN}}` | block | Play Store ≤4000 chars |
| `{{FULL_DESC_FR}}` | block | Play Store ≤4000 chars |
| `{{EMOJI}}` | char | `🌱` |
| `{{BRAND_PRIMARY}}` | hex | `#0F3460` |
| `{{BRAND_PRIMARY_DARK}}` | hex | `#0A223D` |
| `{{BRAND_ACCENT}}` | hex | `#8B1A1A` |
| `{{BRAND_GRADIENT_MID}}` | hex | `#16213E` |
| `{{BG_DARK}}` | hex | `#0B1729` |
| `{{KOUTOUB_DIR}}` | string | `02-jaddid-hayatak` (local source dir name) |

## Derived (computed at spawn time)

| Token | Source |
|---|---|
| `{{APPID_SEGMENT}}` | `slug` with hyphens removed → `jaddidhayatak` |
| `{{APP_ID}}` | `org.workshopdiy.{{APPID_SEGMENT}}` |
| `{{AVD_NAME}}` | `slug` with hyphens replaced by `_` + `_test` |
| `{{SOURCE_BOOK_REPO}}` | `abourdim/{{SLUG}}` |
| `{{DATE}}` | spawn timestamp `YYYY-MM-DD` |

## Constants (hardcoded in templates, NOT placeholders)

These are intentional constants — same across all 47 books:
- Author: Sheikh Mohammed al-Ghazali (1917–1996)
- Contact email: `abdelhak.bourdim@gmail.com`
- Org: `workshop-diy.org`
- GitHub user: `abourdim`
- License: MIT
- Author name: Abdelhak Bourdim
