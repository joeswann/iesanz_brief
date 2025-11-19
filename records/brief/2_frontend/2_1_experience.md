
## Objectives
Improvements in branding, typography, layout, responsiveness, and storytelling. Integrate the informative public experience with the member/admin CRM side, ensuring users transition smoothly between marketing and membership flows. Reflect marketing objectives: highlight value propositions, member success stories, testimonials and clear CTAs for joining, attending, sponsoring, or learning.

## Information Architecture
- **Public Content** – News, Member Directory, Information (eg Terms). Portfolio hubs (Conferences, Awards, Education, Marketing, Memberships) plus chapter hubs covering events (upcoming & past), news, committee contacts, and calendars.
- **Portfolio Content** – Conferences, Awards, Education, Marketing, Memberships
- **Chapter Content** – News, events (upcoming & past), committee contacts,.
- **Member Hub** – Membership, Chapter Hub, Education, Tickets, Forms.
- **Admin** – Content Management (General and Chapter)
- **Super Admin** – Membership management, reporting, 

## Technical Approach
- Headless frontend 
- API Integrations with external systems including 
	- Membership system
	- Content Management (eg Sanity)
	- Online store (eg Shopify)
	- Payments service (eg Stripe)
	- Financial service (eg Xero)
	- Events system (eg Eventbrite)
	- Analytics (eg GA4) 
	- Marketing tools (eg Klaviyo).
- Localisation - eg AU / NZ currency, GST messaging, and chapter content context.

## Considerations
- Core Web Vitals: CDN caching, optimized media, lazy loading, minimized blocking scripts, observability dashboards tying into analytics KPIs.
- Security: enforce role-based gating (public vs chapter vs member vs admin) client/server side; keep CMS/admin endpoints private, apply WAF/firewall, malware protection, and monitoring.
- Roadmap: future-proof component library for community space, CPD tracker, corporate portals, coordinating release cadence with BOT handover/training schedules.
