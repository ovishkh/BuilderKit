# Essential SaaS Features

A professional SaaS requires more than just a landing page. Here are the core integrations every project needs.

## 1. Payments (Stripe)
The industry standard for handling subscriptions and one-time payments.

**Integration Pattern:**
- Use **Stripe Checkout** for low-code billing.
- Use **Webhooks** to keep your database in sync with payment status.
- Implement a **Customer Portal** for billing management.

```bash
npm install stripe @stripe/stripe-js
```

## 2. Analytics (PostHog)
Understand how users interact with your app.

**Why PostHog?**
- Product analytics, session recording, and feature flags in one tool.
- Self-hostable or cloud-hosted.

```bash
npm install posthog-js
```

## 3. Transactional Email (Resend)
Send beautiful emails using React components.

```bash
npm install resend @react-email/components
```

**Common Emails:**
- Welcome Email
- Password Reset
- Subscription Success
- Usage Limits

## 4. Error Tracking (Sentry)
Don't wait for users to report bugs.

```bash
npx @sentry/wizard@latest -i nextjs
```
