# BarStar Information Website

The **BarStar Information Website** serves as the marketing, onboarding, and partner portal for venues and vendors to interact with the BarStar platform. It provides signup, subscription management, payments, and private dashboards for venue performance analytics.

---

## 🧭 Overview

This site is a **secure, data-driven web portal** that enables venues and vendors to:

* Learn about BarStar and its gamified nightlife ecosystem
* Register for a BarStar account (venue or vendor)
* Manage subscriptions and payments securely
* Access private dashboards with performance metrics and insights
* Contact support or manage billing and payout details

The public portion remains a marketing hub, while the authenticated section provides private, API-backed features for business users.

---

## 🧱 Tech Stack

| Layer           | Technology                                             | Purpose                                          |
| --------------- | ------------------------------------------------------ | ------------------------------------------------ |
| Framework       | **Next.js**                                            | Server-side rendering and private routes         |
| Styling         | **Tailwind CSS**                                       | Responsive and modern UI styling                 |
| Forms           | **React Hook Form / Zod**                              | Secure, validated form input                     |
| Payments        | **Stripe**                                             | Subscription billing, venue plans, invoices      |
| Auth            | **OAuth 2.0 (Google, Apple)** + JWT                    | Secure login and session handling                |
| API Integration | **[https://api.barstar.ca/](https://api.barstar.ca/)** | Data for venue analytics and management          |
| Hosting         | **Vercel** or **Cloudflare Pages**                     | Global deployment with HTTPS                     |
| Database        | **Postgres (via API)**                                 | Persisted venue/user analytics and subscriptions |
| CI/CD           | **GitHub Actions if possible**                         | Auto deploy on main branch                       |

---

## 🚀 Key Features

### Public Area

* Overview of BarStar features and platform benefits
* Pricing and plan details for venues and advertisers
* Vendor and venue signup forms with onboarding flow
* Embedded performance teasers and success stories
* Contact and FAQ pages

### Authenticated Area

* Venue dashboard showing:

  * Daily/weekly/monthly check-in statistics
  * XP, badge, and engagement metrics
  * RSVP and guest trends
  * Top-performing nights and promotions
* Vendor dashboard for campaign metrics and impressions
* Subscription management (upgrade, cancel, billing history)
* Payment history and invoices

---

## 🌐 Deployment & Environment

Deployed via **Vercel** from the `master` branch with environment variables:

```
NEXT_PUBLIC_API_BASE=https://api.barstar.ca
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=pk_live_xxx
STRIPE_SECRET_KEY=sk_live_xxx
NEXTAUTH_SECRET=change-me
NEXTAUTH_URL=https://barstar.ca
JWT_SECRET=super-secret-key
```

All environment variables for payment, auth, and API access are securely managed via the hosting platform or a `.env.production` file excluded from version control.

---

## 🗂️ Folder Structure

```
barstar-website/
├── public/               # Images, icons, static assets
├── src/
│   ├── pages/
│   │   ├── index.tsx           # Marketing home
│   │   ├── signup.tsx          # Vendor/Venue signup flow
│   │   ├── dashboard/          # Authenticated dashboards
│   │   ├── pricing.tsx         # Pricing and plan selection
│   │   ├── faq.tsx             # FAQ page
│   │   └── contact.tsx         # Contact form
│   ├── components/             # UI (Navbar, Footer, Chart, PaymentForm)
│   ├── lib/                    # API utils, auth helpers
│   ├── styles/                 # Tailwind and global CSS
│   ├── hooks/                  # Custom React hooks
│   └── data/                   # Static site data and config
├── .env.example
├── next.config.js
├── tailwind.config.js
└── README.md
```

---

## 🔐 Authentication & Authorization

* Uses **NextAuth.js** for session management
* Supports **Google** and **Apple OAuth 2.0** login
* Issues **short-lived JWTs** for API communication with `api.barstar.ca`
* Role-based access (Venue Admin, Vendor, Staff)
* CSRF and HTTPS enforced for all protected endpoints

---

## 💳 Payment & Subscription Flow

* Integrated with **Stripe Billing** via `stripe.com`
* Supports recurring plans for venues (monthly, yearly)
* Vendors can purchase ad slots or promotional campaigns
* Webhooks handled by backend (`/webhooks/stripe`)
* Venue invoices and receipts accessible in dashboard

---

## 📊 Data & Analytics

Venue and vendor dashboards display metrics retrieved via BarStar’s backend API:

* Venue Check-ins per night/week
* Customer engagement & XP distribution
* RSVP and attendance tracking
* Promotion performance and conversion rates
* Top vendors and trending nights (for marketing)

---

## 🧱 Security & Privacy

* HTTPS-only site with HSTS via Cloudflare
* All API calls authenticated with signed JWT
* No sensitive data stored in browser local storage
* Stripe PCI-compliant payment forms
* GDPR & PIPEDA-aligned privacy and data retention

---

## 🧩 Possible Future Enhancements

* [ ] Integrate venue-specific QR-based check-in stats
* [ ] Add referral tracking for promoters
* [ ] Partner portal for ad campaign configuration
* [ ] AI-based insights on customer behavior
* [ ] Dark mode and white-label theming for venues

