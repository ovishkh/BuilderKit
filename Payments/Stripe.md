# Payments (Stripe)

The industry standard for handling subscriptions and one-time payments in SaaS.

## Integration Pattern
- **Stripe Checkout**: Use for low-code, secure billing.
- **Webhooks**: Essential for keeping your database in sync with payment events (e.g., `checkout.session.completed`).
- **Customer Portal**: Allow users to manage their own subscriptions and billing info.

## Installation
```bash
npm install stripe @stripe/stripe-js
```

## Setup Guide
1. Create a Stripe account.
2. Add your `STRIPE_SECRET_KEY` to `.env`.
3. Set up a webhook listener to handle subscription lifecycle events.
