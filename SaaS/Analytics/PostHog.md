# Analytics (PostHog)

Understand how users interact with your app and make data-driven decisions.

## Why PostHog?
- **Product Analytics**: Track events and conversion funnels.
- **Session Recording**: Watch how users actually use your product.
- **Feature Flags**: Roll out features safely.

## Installation
```bash
npm install posthog-js
```

## Setup
Initialize PostHog in your `_app.js` or `layout.tsx`:

```typescript
import posthog from 'posthog-js'

if (typeof window !== 'undefined') {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com',
  })
}
```
