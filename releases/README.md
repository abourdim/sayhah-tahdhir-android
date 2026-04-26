# Releases — {{APP_NAME}}

Installable artifacts for **{{APP_NAME}}** ({{TITLE_EN}}).

| File | Platform | Size | Signing | Use |
|---|---|---|---|---|
| `{{SLUG}}-vX.Y-debug.apk` | 🤖 Android | ~4 MB | Debug keystore | `adb install`, sideload, or Play Store (Internal testing) |

## How to install on Android

### Sideload (USB)

```bash
adb install {{SLUG}}-v1.0-debug.apk
```

App appears in your launcher as "{{APP_NAME}}" (or "{{TITLE_AR}}" if device locale is Arabic).

### Manual install

1. Copy the `.apk` file to your phone via Google Drive, AirDrop-to-Android, email, or USB file transfer.
2. Tap the file in your file manager.
3. Allow "Install unknown apps" if prompted (Settings → Apps → Special access).
4. Tap **Install**.

## iOS

| File | Platform | Notes |
|---|---|---|
| `{{SLUG}}-v1.0.ipa` | 📱 iOS / iPhone | Requires full Xcode (~10 GB, Mac App Store). See WORKSHOP.html §12. |

## Provenance

- **Source**: [{{SLUG}}](https://github.com/abourdim/{{SLUG}}) book repo
- **Wrapper**: [{{SLUG}}-android](https://github.com/abourdim/{{SLUG}}-android)
- **Package ID**: `{{APP_ID}}`
- **Built with**: [Capacitor](https://capacitorjs.com) 8.x

## License

See the [LICENSE](../LICENSE) in the parent repo. The APK contains:
- {{SLUG}} source (MIT) — by Abdelhak Bourdim
- Capacitor runtime (MIT)
- Arabic content derived from Sheikh Mohammed al-Ghazali's "{{BOOK_TITLE_AR}}"
