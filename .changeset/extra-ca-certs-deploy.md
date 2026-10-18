---
"trigger.dev": patch
"@trigger.dev/core": patch
"@trigger.dev/build": patch
---

Fix `extraCACerts` in `trigger.config.ts` having no effect on deployed tasks. The CA file is now included in the deployed image and `NODE_EXTRA_CA_CERTS` points at it, so self-signed or corporate certificates are trusted at runtime, including with `--local-bundle` and `--from-bundle`. Also fixes files outside the project directory (such as `../shared/ca.crt`) being copied to the wrong place on Windows.
