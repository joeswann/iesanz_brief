# Frontend Reverse Brief

- **Experience Goals**
  - Surpass benchmark sites (e.g., CIBSE) in typography, layout, responsiveness, and storytelling per the July 2024 client brief.
  - Harmonize the informative public experience with the member/admin CRM side noted in IESANZ Spec v3, ensuring users transition smoothly between marketing and transactional flows.
  - Reflect Purple Giraffe’s marketing objectives: highlight value propositions, member success stories, testimonials, ESG commitments, and clear CTAs for joining, attending, sponsoring, or learning.

- **Information Architecture**
  - Core navigation: Memberships, Awards, Chapters, Member Lookup, Education, Conference, Store, Blog/News, Download Portal, Knowledgebase (membership assistance, education assistance, mentorship), Terms/Privacy.
  - Board portfolio hubs (Conferences, Awards, Education, Marketing, Memberships) plus chapter microsites covering events (upcoming/past), awards, news, committee contacts, calendars, galleries, and chapter-specific store listings (context Reverse Brief).
  - Membership Hub dashboards aggregating actions (sign up, renew, upgrade, enroll in education, manage events/forms, payments, CPD points) and corporate membership workflows.

- **UI/UX Pillars**
  - Personalized panels for logged-in members showing membership status, invoices, CPD progress (future), awards entries, education enrollments, communications feed, and chapter alerts.
  - Fast galleries/carousels with tag filtering for awards showcases and events; intuitive search across knowledgebase, member directory, and store.
  - Accessible (WCAG AA) design with cohesive branding, templated chapter assets, social widgets pulling tagged posts, and embedded PR/storytelling modules to address “outdated digital presence” weakness.

- **Technical Approach**
  - Next.js (or similar) headless frontend consuming APIs from the CMS, CRM/membership system, Shopify/storefront, Stripe, Xero, Eventbrite, Buffer, analytics (GA4, etc.), and marketing automation (Mailchimp/Campaign Monitor).
  - Static generation + incremental revalidation for public/SEO-heavy pages; SSR/ISR hybrids for personalized data; secure API routes for payments and membership updates.
  - Localization hooks for AU/NZ currency, GST messaging, chapter context, and potential APAC expansion noted as marketing opportunity.

- **Performance, Security & Operations**
  - Core Web Vitals emphasis: CDN caching, optimized media, lazy loading, minimized blocking scripts, observability dashboards tying into analytics KPIs.
  - Enforce role-based gating (public vs chapter vs member vs admin) both client and server side; keep CMS/admin endpoints private, apply WAF/firewall, malware protection, and monitoring.
  - Future-proof component library for upcoming initiatives (community space, CPD tracker, corporate portals) and coordinate release cadence with BOT handover/training schedules.
