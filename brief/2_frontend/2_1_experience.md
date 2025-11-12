# Frontend Experience

## Summary
- Defines the headless frontend vision that outperforms benchmarks in storytelling, responsiveness, and conversion.
- Aligns navigation, member journeys, and chapter microsites with marketing objectives and CRM experiences.
- Lists technical patterns (Next.js, ISR/SSR mix), localization needs, and performance/security operations.

## Experience Goals
  - Surpass benchmark sites (e.g., CIBSE) in typography, layout, responsiveness, and storytelling per the July 2024 client brief.
  - Harmonize the informative public experience with the member/admin CRM side noted in IESANZ Spec v3, ensuring users transition smoothly between marketing and transactional flows.
  - Reflect Purple Giraffe’s marketing objectives: highlight value propositions, member success stories, testimonials, ESG commitments, and clear CTAs for joining, attending, sponsoring, or learning.

## Information Architecture
  - Core navigation: Memberships, Awards, Chapters, Member Lookup, Education, Conference, Store, Blog/News, Download Portal, Knowledgebase (membership assistance, education assistance, mentorship), Terms/Privacy.
  - Board portfolio hubs (Conferences, Awards, Education, Marketing, Memberships) plus chapter microsites covering events (upcoming/past), awards, news, committee contacts, calendars, galleries, and chapter-specific store listings (context Reverse Brief).
  - Membership Hub entry point surfaces quick actions for members and corporates, with detailed dashboard flows owned by [Members Hub](../6_membership/6_2_members.md).

## UI/UX Pillars
  - Personalized panels for logged-in members showing membership status, invoices, CPD progress (future), awards entries, education enrollments, communications feed, and chapter alerts surfaced by [Members Hub](../6_membership/6_2_members.md).
  - Fast galleries/carousels with tag filtering for awards showcases and events; intuitive search across knowledgebase, member directory, and store.
  - Accessible (WCAG AA) design with cohesive branding, templated chapter assets, social widgets pulling tagged posts, and embedded PR/storytelling modules to address “outdated digital presence” weakness.

## Membership Self-Service Journeys
  - Public storytelling and conversion flows that let prospects join, compare benefits, register interest, or book consults, then hand off seamlessly to authenticated Member Hub actions.
  - Logged-in dashboard actions for renewing, upgrading/downgrading, cancelling, managing preferences, buying add-ons, and accessing invoices/certificates with a low-click UX.
  - Future corporate account mode that lets delegates switch between IESANZ-managed and self-managed rosters, managing seats, tickets, sponsorship inclusions, and reporting in one place.
  - History views (payments, CPD when live, awards participation) surfaced contextually so members can self-serve without raising tickets.
  - Inline controls for communication and privacy preferences, plus chapter affiliation management to keep directories and alerts accurate.

## Technical Approach
  - Next.js (or similar) headless frontend consuming APIs from the CMS, CRM/membership system, Shopify/storefront, Stripe, Xero, Eventbrite, Buffer, analytics (GA4, etc.), and marketing automation (Mailchimp/Campaign Monitor).
  - Static generation + incremental revalidation for public/SEO-heavy pages; SSR/ISR hybrids for personalized data; secure API routes for payments and membership updates.
  - Localization hooks for AU/NZ currency, GST messaging, chapter context, and potential APAC expansion noted as marketing opportunity.

## Performance, Security & Operations
  - Core Web Vitals emphasis: CDN caching, optimized media, lazy loading, minimized blocking scripts, observability dashboards tying into analytics KPIs.
  - Enforce role-based gating (public vs chapter vs member vs admin) both client and server side; keep CMS/admin endpoints private, apply WAF/firewall, malware protection, and monitoring.
  - Future-proof component library for upcoming initiatives (community space, CPD tracker, corporate portals) and coordinate release cadence with BOT handover/training schedules.
