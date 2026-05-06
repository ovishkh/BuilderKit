
# Builder Kit

Builder Kit is a full-stack repository of curated system prompts, UI modules, and guides for building AI SaaS products. It provides a standardized way to manage prompts for Claude, GPT, and other models, alongside reusable frontend components and architectural patterns. Use Builder Kit to accelerate your development, learn from real-world examples, and assemble high-converting SaaS flows with proven patterns.

---

## Features
- **Visual & Code-Based**: Prebuilt modules and documentation for rapid development.
- **SaaS Foundation**: Pre-configured patterns for Database (Prisma) and Authentication (Clerk/NextAuth).
- **Claude Skills**: Optimized system prompts and instructions for building with AI.
- **Modern Tech Stack**: HTML/JS, Tailwind CSS, and React-focused patterns.
- **Integrations**: Stripe for payments, PostHog for analytics, and Resend for email.
- **Modular UI**: Reusable components for CTA, Hero, Features, Testimonials, and more.
- **Analytics & Testing**: Event hooks and A/B testing support built-in.

---

## Modules

### SaaS Core
- [Database](SaaS/Database/Database.md): SaaS-ready schemas and database provider guides.
- [Authentication](SaaS/Authentication/Authentication.md): Modern auth patterns using Clerk and NextAuth.js.
- [Claude Skills](SaaS/Claude-Skills/ClaudeSkills.md): Specialized prompts and instructions for AI-first development.
- [Payments](SaaS/Payments/Stripe.md): Stripe integration and subscription management.
- [Analytics](SaaS/Analytics/PostHog.md): Product tracking and session recordings.
- [Email](SaaS/Email/Resend.md): Transactional email patterns.
- [Error Tracking](SaaS/Error-Tracking/Sentry.md): Real-time monitoring and debugging.

### UI & UX
- [UI Components](Components/): Premium React + Tailwind components (Hero, Pricing, etc.).
- [CTA Module](CTA/CTA.md): Reusable call-to-action components for driving conversions.
- [Landing Page Guide](Landing%20Page/landing_page.md): Best practices for high-converting landing pages.

---

## Installation
1. Clone this repository:
	```bash
	git clone git@github.com:ovishkh/BuilderKit.git
	cd BuilderKit
	```
2. Install dependencies (if applicable):
	```bash
	npm install
	# or
	yarn install
	```

---

## Usage
1. **Explore the Modules:**
   Browse the folders to find system prompts, database schemas, and UI patterns.
2. **Build your landing page:**
   Follow the [Landing Page Guide](Landing%20Page/landing_page.md) to assemble your frontend.
3. **Integrate SaaS Features:**
   Use the Authentication and Database modules to set up your backend.

---

## Example
Here’s a sample landing page structure using Builder Kit components:

```jsx
<LandingPage>
  <Hero title="AI SaaS for Everyone" />
  <Features items={featuresList} />
  <CTAButton text="Get Started" />
  <Testimonials data={testimonials} />
  <Pricing plans={pricingOptions} />
</LandingPage>
```

---

## Contributing
Contributions are welcome! Please read our [Contributing Guide](.github/CONTRIBUTING.md) if available, or simply open issues and pull requests for improvements, bug fixes, or new features.

---

## License
This project is licensed under the [MIT License](LICENSE).
