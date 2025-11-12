
## Objectives
Improvements in branding, typography, layout, responsiveness, and storytelling. Harmonize the informative public experience with the member/admin CRM side noted in IESANZ Spec v3, ensuring users transition smoothly between marketing and transactional flows. Reflect marketing objectives: highlight value propositions, member success stories, testimonials, ESG commitments, and clear CTAs for joining, attending, sponsoring, or learning.

## Information Architecture
- Core navigation: Memberships, Awards, Chapters, Member Lookup, Education, Conference, Store, Blog/News, Download Portal, Knowledgebase (membership assistance, education assistance, mentorship), Terms/Privacy.
- Board portfolio hubs (Conferences, Awards, Education, Marketing, Memberships) plus chapter microsites covering events (upcoming/past), awards, news, committee contacts, calendars, galleries, and chapter-specific store listings (context Reverse Brief).
- Membership Hub entry point surfaces quick actions for members and corporates, with detailed dashboard flows owned by [Members Hub](../2_frontend/2_6_members.md).


```
Home
├─ Blog / News / Advocacy
├─ Terms / Privacy / Governance
│
├─ Memberships / Member Hub
│  ├─ Join / Renew / Upgrade
│  ├─ Dashboard (payments, CPD, awards, education)
│  └─ Member Lookup
├─ Awards
│  ├─ Program Overview
│  ├─ Entries (forms, payments)
│  └─ Showcase / Gallery
├─ Conferences & Events
│  ├─ Flagship Conference
│  └─ Chapter Symposia / Meetups
├─ Education & Knowledgebase
│  ├─ Courses / Webinars
│  └─ Resources / Download Portal
├─ Chapters
│  ├─ Hubs (news, events, store)
│  └─ Contact / Committee
│
└─ Store & Sponsorships
```

## Technical Approach
- Next.js (or similar) headless frontend consuming APIs from the CMS, CRM/membership system, Shopify/storefront, Stripe, Xero, Eventbrite (or similar), analytics (GA4, etc.), and marketing automation (Mailchimp/Campaign Monitor) etc.
- Localisation for AU / NZ currency, GST messaging, and chapter content context.

## Considerations
- Core Web Vitals: CDN caching, optimized media, lazy loading, minimized blocking scripts, observability dashboards tying into analytics KPIs.
- Security: enforce role-based gating (public vs chapter vs member vs admin) client/server side; keep CMS/admin endpoints private, apply WAF/firewall, malware protection, and monitoring.
- Roadmap: future-proof component library for community space, CPD tracker, corporate portals, coordinating release cadence with BOT handover/training schedules.
