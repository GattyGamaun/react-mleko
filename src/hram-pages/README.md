# Hram Pages integration payload

This directory contains the Hram Pages frontend implementation copied from the
standalone `hram-pages` project. It is intentionally isolated from the legacy
React entrypoint so the maintainer can wire the required routes and shared
layout without overwriting the existing site.

## Included
- public note form and payment-readiness information;
- admin panel UI;
- API client for `/api/notes` and `/api/admin/*`;
- local image assets.

## Integration note
`main.tsx` is the standalone entrypoint from Hram Pages. The host application
should import `App` (or the required components) into its route tree rather than
loading this entrypoint a second time. The backend contract is in the companion
`nodejs-mleko` pull request.
