# peek

Visit any guns.lol profile without adding to their view count.

peek is a tiny browser extension that blocks the single analytics request
guns.lol sends to count a profile view. Profiles load fully and normally,
the view counter just never moves. No account, no data collection, free.

- Chrome Web Store: https://chromewebstore.google.com/detail/peek-viewless-gunslol-vie/gmlnooigmmhchjcpdchkiokoiedliknl
- Firefox Add-ons: https://addons.mozilla.org/en-US/firefox/addon/peek-viewless-guns-lol-viewer (in review)
- Website: https://gunslol.club/peek

## How it works

The whole blocking logic is one declarativeNetRequest rule
(`chrome/rules.json`, `firefox/rules.json`):

```json
[
  {
    "id": 1,
    "priority": 1,
    "action": { "type": "block" },
    "condition": {
      "urlFilter": "||guns.lol/api/analytics/view",
      "resourceTypes": ["xmlhttprequest"]
    }
  }
]
```

## Layout

- `chrome/` - Manifest V3 extension for Chrome and Chromium browsers
- `firefox/` - Same extension with a Firefox manifest (AMO)

## Building the zips

```sh
cd chrome && zip -r ../peek.zip . -x ".DS_Store" "PRIVACY.md" "README.md"
cd firefox && zip -r ../peek-firefox.zip . -x ".DS_Store" "PRIVACY.md" "README.md"
```

## Disclaimer

peek is not affiliated with or endorsed by guns.lol.
