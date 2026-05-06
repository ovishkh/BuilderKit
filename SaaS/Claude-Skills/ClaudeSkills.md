# Claude Skills for SaaS Builders

Optimize Claude's performance for building and maintaining your SaaS by using specialized skills and system prompts.

## 1. Custom Instructions (`.claudeskills`)
Create a `.claudeskills` file in your root directory to give Claude permanent context about your stack.

```markdown
# SaaS Development Stack
- Framework: Next.js 14 (App Router)
- Styling: Tailwind CSS
- Database: Prisma + PostgreSQL
- Auth: Clerk
- Payments: Stripe

# Coding Standards
- Use TypeScript for all files.
- Prefer Server Components where possible.
- Use 'lucide-react' for icons.
- Implement responsive design by default.
```

## 2. MCP Tools for SaaS
Model Context Protocol (MCP) allows Claude to interact with your SaaS infrastructure directly.

### Recommended MCP Servers:
- **Stripe MCP**: Manage products, prices, and customers from the chat.
- **Postgres MCP**: Query and modify your database schemas.
- **GitHub MCP**: Manage issues, PRs, and workflows.

## 3. Specialized System Prompts
Use these prompts when asking Claude to build specific modules:

### Landing Page Architect
> "Act as a Senior UX Designer. Create a high-converting landing page section for [Feature]. Use a 'Problem-Agitation-Solution' framework. Output as a React component using Tailwind CSS."

### Database Architect
> "Design a Prisma schema for [Feature] including multi-tenancy and audit logs. Ensure all relations are correctly mapped and include necessary indexes for performance."
