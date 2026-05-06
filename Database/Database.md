# Database Setup for SaaS

Builder Kit recommends using **Prisma** with **PostgreSQL** (via Supabase or Neon) for a robust SaaS foundation.

## Recommended Schema

A standard SaaS requires at least:
- **Users**: Authentication and profile data.
- **Workspaces/Organizations**: For multi-tenancy.
- **Subscriptions**: Tracking Stripe/LemonSqueezy status.
- **Projects/Resources**: The core data your app manages.

### Prisma Schema Example (`schema.prisma`)

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model User {
  id            String    @id @default(cuid())
  name          String?
  email         String?   @unique
  emailVerified DateTime?
  image         String?
  accounts      Account[]
  sessions      Session[]
  
  // SaaS Specific
  organizationId String?
  organization   Organization? @relation(fields: [organizationId], references: [id])
  role           Role          @default(USER)
}

model Organization {
  id          String   @id @default(cuid())
  name        String
  slug        String   @unique
  plan        Plan     @default(FREE)
  stripeId    String?  @unique
  users       User[]
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

enum Role {
  ADMIN
  USER
  OWNER
}

enum Plan {
  FREE
  PRO
  ENTERPRISE
}
```

## Database Providers
1. **Supabase**: Great for starters, includes Auth and Storage.
2. **Neon**: Serverless Postgres, perfect for Next.js/Edge.
3. **PlanetScale**: MySQL-compatible, great for massive scaling.
