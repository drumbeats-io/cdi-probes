# cdi-probes

Tiny scheduled jobs for the **Cron Drift Index**: they ping [Drumbeats](https://drumbeats.io) on every run, so we can measure how late each platform's scheduler fires.

| Platform | File | Schedule (UTC) |
|---|---|---|
| GitHub Actions | `.github/workflows/cdi.yml` | `*/15 * * * *`, `7 * * * *` |
| Vercel Cron (Hobby) | `api/cdi.js` + `vercel.json` | `0 9 * * *` |
| Netlify Scheduled Functions | `netlify/functions/cdi-netlify-15m.mjs` | `*/15 * * * *` |

The ping base URL is never in the code. It lives in:
- GitHub: repository secret `DRUMBEATS_BASE`
- Vercel and Netlify: environment variable `DRUMBEATS_BASE`

`keepalive.yml` re-enables the schedules weekly, because GitHub turns them off after 60 days without activity.
