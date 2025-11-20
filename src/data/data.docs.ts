export interface ContentBlock {
    title?: string;
    content?: string;
    list?: string[];
    orderedList?: string[];
}

export interface PageSection {
    title: string;
    blocks: ContentBlock[];
}

export interface DocPageData {
    title: string;
    sections: PageSection[];
}

export const docsData: Record<string, DocPageData> = {
    overview: {
        title: "IESANZ Website Documentation",
        sections: [
            {
                title: "Welcome",
                blocks: [
                    {
                        content: "Welcome to the IESANZ technical documentation. This section contains the full technical brief and specifications for the website build. Use the sidebar to navigate through the different sections of the brief."
                    }
                ]
            },
            {
                title: "Table of Contents",
                blocks: [
                    {
                        list: [
                            "<strong>Structure</strong> – Sits above the stack, pointing to plan artefacts and priorities.",
                            "<strong>Experience</strong> – Public journeys, member hub UX, ecommerce storytelling.",
                            "<strong>Studio</strong> – CMS, admin console",
                            "<strong>Admin</strong> – Super admin structure and purpose",
                            "<strong>Operations</strong> – Integrations and automations",
                            "<strong>Appendix</strong> – Security, marketing, SEO, analytics, finance"
                        ]
                    }
                ]
            }
        ]
    },
    structure: {
        title: "1. Structure & Navigation",
        sections: [
            {
                title: "1.2 Priorities Framework",
                blocks: [
                    {
                        title: "Purpose",
                        content: "To provide a consistent decision lens for phase planning, ensuring delivery stays aligned with board expectations. Maintain visibility for handover partners — chapters, contractors, new vendors — so they understand why priorities are ordered the way they are."
                    },
                    {
                        title: "Evaluation Criteria",
                        list: [
                            "<strong>Value:</strong> Measures contribution to membership growth/retention, revenue, advocacy influence, and user experience improvements.",
                            "<strong>Effort:</strong> Considers relative size spanning design, engineering, content, change management, and cross-vendor coordination.",
                            "<strong>Difficulty:</strong> Captures technical complexity, dependencies on legacy systems, and regulatory exposure.",
                            "<strong>Urgency:</strong> Reflects time pressures such as award cycles, conference deadlines, financial year renewals, or compliance mandates."
                        ]
                    },
                    {
                        title: "Phase 1: Core Foundation (Launch)",
                        list: [
                            "Membership Engine: Join, renew, upgrade, profile management.",
                            "Public Face: Brand refresh, news, events calendar, chapter hubs.",
                            "Admin Console: Member management, basic reporting, content publishing."
                        ]
                    },
                    {
                        title: "Phase 2: Commerce & Community",
                        list: [
                            "Awards Program: Entries, judging, galleries.",
                            "Store & Payments: Merchandise, sponsorships, complex invoicing.",
                            "Knowledgebase: Gated resources, policy documents."
                        ]
                    },
                    {
                        title: "Phase 3: Advanced Features",
                        list: [
                            "CPD Tracker: Self-logging, audit workflows.",
                            "Corporate Portals: Bulk management for firms.",
                            "Deep Analytics: Custom dashboards, predictive churn."
                        ]
                    }
                ]
            }
        ]
    },
    frontend: {
        title: "2. Frontend Experience",
        sections: [
            {
                title: "2.1 Experience & Navigation",
                blocks: [
                    {
                        title: "Objectives",
                        content: "Improvements in branding, typography, layout, responsiveness, and storytelling. Integrate the informative public experience with the member/admin CRM side, ensuring users transition smoothly between marketing and membership flows."
                    },
                    {
                        title: "Information Architecture",
                        list: [
                            "<strong>Public Content:</strong> News, Member Directory, Information. Portfolio hubs (Conferences, Awards, Education, Marketing, Memberships).",
                            "<strong>Chapter Content:</strong> News, events (upcoming & past), committee contacts.",
                            "<strong>Member Hub:</strong> Membership, Chapter Hub, Education, Tickets, Forms."
                        ]
                    },
                    {
                        title: "Technical Approach",
                        list: [
                            "Headless frontend",
                            "API Integrations: Membership, CMS (Sanity), Store (Shopify), Payments (Stripe), Finance (Xero), Events (Eventbrite), Analytics (GA4), Marketing (Klaviyo).",
                            "Localisation: AU / NZ currency, GST messaging."
                        ]
                    }
                ]
            },
            {
                title: "2.2 Awards Program",
                blocks: [
                    {
                        title: "Objectives",
                        content: "Deliver an end-to-end awards experience with superior visuals, responsiveness, and storytelling. Align awards with board portfolios, marketing goals, and membership value propositions."
                    },
                    {
                        title: "Entries & Payments",
                        list: [
                            "Multi-step/tabbed entry forms with save/resume.",
                            "Secure upload pipelines.",
                            "Shopping-cart checkout for multiple entries, tickets, sponsorships.",
                            "Handle AUD/NZD currencies and GST logic."
                        ]
                    },
                    {
                        title: "Public Experience",
                        list: [
                            "CMS-driven gallery pages with carousels and tag filtering.",
                            "Storytelling blocks for case studies and testimonials.",
                            "Archive management for past winners."
                        ]
                    }
                ]
            },
            {
                title: "2.3 Conferences",
                blocks: [
                    {
                        title: "Objectives",
                        content: "Support the biennial IESANZ conference plus chapter-led symposia. Tie conference outcomes to board portfolios and sponsorship revenue goals."
                    },
                    {
                        title: "Registration & Commerce",
                        list: [
                            "Tiered ticketing (member, non-member, student, corporate).",
                            "Integrate with Stripe/Xero for invoicing.",
                            "Manage sponsorship packages."
                        ]
                    }
                ]
            },
            {
                title: "2.4 Knowledgebase & Resources",
                blocks: [
                    {
                        title: "Objectives",
                        content: "Provide a centralized knowledgebase covering membership assistance, education, mentorship, policy, and FAQs. Host controlled downloads with gated access."
                    },
                    {
                        title: "Content Structure",
                        list: [
                            "Categories: Membership Assistance, Education, Mentorship, Policy, Standards, CPD, Toolkits.",
                            "Content types: articles, checklists, videos, PDFs."
                        ]
                    }
                ]
            },
            {
                title: "2.5 Store & Sponsorships",
                blocks: [
                    {
                        title: "Objectives",
                        content: "Centralise ecommerce for publications, job ads, sponsorships, membership add-ons, and merchandise. Support national and chapter-specific offerings."
                    },
                    {
                        title: "Catalog & Pricing",
                        list: [
                            "Product types: sponsorships, ads, publications, merchandise, membership add-ons.",
                            "Pricing controls: multi-currency, GST variations, member vs non-member rates."
                        ]
                    }
                ]
            },
            {
                title: "2.6 Members Hub",
                blocks: [
                    {
                        title: "Member Hub Experience",
                        content: "Unified dashboard surface: membership status, invoices, payment methods, CPD tracker, awards entries, education enrollments, event tickets."
                    },
                    {
                        title: "Self-Service & Support",
                        list: [
                            "Profile management: contact info, privacy preferences.",
                            "Account recovery flows.",
                            "Help center coverage."
                        ]
                    }
                ]
            },
            {
                title: "2.7 Education & CPD",
                blocks: [
                    {
                        title: "Mission & Audience",
                        content: "Showcase national + chapter-led education pathways. Serve multiple cohorts: students, emerging professionals, accredited members."
                    },
                    {
                        title: "CPD Roadmap",
                        list: [
                            "Future-state CPD tracker.",
                            "Feed CPD data into analytics dashboards."
                        ]
                    }
                ]
            }
        ]
    },
    studio: {
        title: "3. Studio",
        sections: [
            {
                title: "3.1 CMS Architecture",
                blocks: [
                    {
                        title: "Purpose & Architecture",
                        content: "Adopt a headless, API-first CMS (Sanity) to separate presentation from services. Support BOT handover expectations with minimal backend customization."
                    },
                    {
                        title: "Content Model & Taxonomy",
                        list: [
                            "Core content families: general pages, help articles, events, awards, bulletins, case studies.",
                            "Portfolio/Board collections and chapter-specific clusters.",
                            "Knowledgebase groupings and store collections."
                        ]
                    },
                    {
                        title: "Access, Roles & Workflows",
                        list: [
                            "Hierarchical permissions: public, regional chapter, member-only, admin, board/super-admin.",
                            "Chapter-managed areas with central override.",
                            "Live preview, draft/approval workflows."
                        ]
                    }
                ]
            },
            {
                title: "3.2 Chapter Operations",
                blocks: [
                    {
                        title: "Mission & Structure",
                        content: "Provide localized experiences for each regional chapter while balancing autonomy with national oversight. Enable chapters to surface their contributions within board portfolios."
                    },
                    {
                        title: "Key Roles",
                        list: [
                            "Chapter Coordinator: Publish events/news, manage contacts.",
                            "Volunteer Treasurer: Track payments, invoices.",
                            "Marketing Lead: Run newsletters/social.",
                            "Committee Chair: Approve content, escalate risks."
                        ]
                    },
                    {
                        title: "Events & Calendars",
                        list: [
                            "Allow chapters to create upcoming/past events.",
                            "Sync chapter calendars with national feeds."
                        ]
                    }
                ]
            },
            {
                title: "3.3 Studio Operations",
                blocks: [
                    {
                        title: "Roles & Permissions",
                        content: "Personas include secretariat/admin, finance/accounts, chapter coordinators, volunteer coordinators, and board observers."
                    },
                    {
                        title: "Operational Views",
                        list: [
                            "Manage product catalogues (memberships, upgrades, tickets, sponsorships).",
                            "Surface alerts for failed payments, orphaned invoices.",
                            "Provide chapter dashboards."
                        ]
                    },
                    {
                        title: "Workflow Orchestration",
                        list: [
                            "Configure award/event forms, juror processes.",
                            "Mirror legacy Monday.com/Approval Max checklists."
                        ]
                    }
                ]
            },
            {
                title: "3.4 Awards Operations",
                blocks: [
                    {
                        title: "Juror & Judging Management",
                        content: "Manage juror empanelment workflows. Provide adjudication tooling with stage-based scoring."
                    },
                    {
                        title: "Admin Consoles & Workflows",
                        list: [
                            "Review/approve submissions, track payment state.",
                            "Coordinate file routing to OneDrive.",
                            "Surface sponsorship deliverables."
                        ]
                    }
                ]
            },
            {
                title: "3.5 Events & Conferences Operations",
                blocks: [
                    {
                        title: "Attendee & Venue Operations",
                        content: "Maintain admin dashboards for attendee management. Coordinate venue logistics, catering, AV."
                    },
                    {
                        title: "Hybrid Delivery & Technology",
                        list: [
                            "Support livestream scheduling, virtual networking.",
                            "Monitor platform health."
                        ]
                    },
                    {
                        title: "Chapter & Vendor Coordination",
                        list: [
                            "Provide templates and toolkits for chapters.",
                            "Track vendor contracts."
                        ]
                    }
                ]
            }
        ]
    },
    admin: {
        title: "4. Admin",
        sections: [
            {
                title: "4.1 Admin Governance",
                blocks: [
                    {
                        title: "Mandate & Governance",
                        content: "Own global configuration for branding, navigation, integrations, automation rules, and compliance commitments. Approve environment changes and schema updates."
                    },
                    {
                        title: "Identity & Security",
                        list: [
                            "Define RBAC tiers, enforce MFA/SSO.",
                            "Oversee incident response including backups and disaster recovery."
                        ]
                    },
                    {
                        title: "Data & Compliance",
                        list: [
                            "Govern datalake/content-lake roadmaps and retention policies.",
                            "Validate new integrations and track ESG commitments."
                        ]
                    },
                    {
                        title: "Membership Operations Oversight",
                        list: [
                            "<strong>Catalog & Pricing:</strong> Define membership grades, benefits, and pricing tables.",
                            "<strong>Lifecycle & Upgrade:</strong> Oversee onboarding, renewal, and upgrade workflows.",
                            "<strong>Automation & Reporting:</strong> Direct admin tooling and govern automations.",
                            "<strong>Risk & Compliance:</strong> Guard against pricing errors and fraud."
                        ]
                    }
                ]
            },
            {
                title: "6.1 Memberships",
                blocks: [
                    {
                        title: "Goals & Context",
                        content: "Support ~1,000 members with a productive and value-driven platform. Grow/retain membership by simplifying onboarding and enabling upgrades."
                    },
                    {
                        title: "Reference Map",
                        list: [
                            "<strong>Frontend experience:</strong> Membership self-service journeys.",
                            "<strong>Backend/governance:</strong> Catalog, lifecycle, upgrade controls.",
                            "<strong>Programs & entitlements:</strong> Education, CPD, awards dependencies."
                        ]
                    },
                    {
                        title: "Lifecycle Swimlane",
                        list: [
                            "Discover & Convert: Marketing / Frontend",
                            "Join & Onboard: Admin Console",
                            "Nurture & Engage: Chapters / Programs",
                            "Renew / Upgrade: Super Admin / Finance",
                            "Reactivate / Retain: Admin / Marketing"
                        ]
                    }
                ]
            }
        ]
    },
    integrations: {
        title: "5. Integrations",
        sections: [
            {
                title: "5.1 Automation",
                blocks: [
                    {
                        title: "Purpose",
                        content: "Coordinate automation across memberships, payments, awards, education, communications, and analytics to reduce manual work and improve reliability."
                    },
                    {
                        title: "Automation Domains",
                        list: [
                            "<strong>Members:</strong> Onboarding, renewal reminders, CPD tracking.",
                            "<strong>Memberships:</strong> Add-ons, corporate account management.",
                            "<strong>Awards & Events:</strong> Deadline reminders, ticket confirmations.",
                            "<strong>Payments/Finance:</strong> Failed payment alerts, invoice generation.",
                            "<strong>Communications:</strong> Transactional emails, social media auto-posting.",
                            "<strong>Analytics:</strong> Anomaly detection, report scheduling."
                        ]
                    },
                    {
                        title: "Priority Sequence",
                        orderedList: [
                            "Phase 1: Membership onboarding/renewal, payment failure notifications.",
                            "Phase 2: Awards/event journeys, sponsorship fulfilment.",
                            "Phase 3: CPD tracking, corporate account automations."
                        ]
                    }
                ]
            },
            {
                title: "5.2 Integrations",
                blocks: [
                    {
                        title: "Purpose",
                        content: "Deliver a cohesive integration layer connecting CMS, membership data, finance, awards, events and marketing tools."
                    },
                    {
                        title: "Integration Pillars",
                        list: [
                            "<strong>Finance & Payments:</strong> Stripe ↔ Xero.",
                            "<strong>Membership & CRM:</strong> CMS membership tables ↔ External CRM.",
                            "<strong>Awards & Content Intake:</strong> Form engines ↔ OneDrive ↔ CMS.",
                            "<strong>Events & Commerce:</strong> Eventbrite ↔ CMS ↔ Shopify.",
                            "<strong>Marketing & Communications:</strong> Mailchimp ↔ Buffer ↔ Analytics."
                        ]
                    },
                    {
                        title: "Implementation Approach",
                        list: [
                            "Prioritise integrations that unblock revenue/membership workflows first.",
                            "Document runbooks per integration.",
                            "Build regression tests/smoke checks."
                        ]
                    }
                ]
            }
        ]
    },
    appendix: {
        title: "6. Appendix",
        sections: [
            {
                title: "6.1 Analytics",
                blocks: [
                    {
                        title: "Objectives & Governance",
                        content: "Measure success pillars: systems flexibility, usability, and memberships. Provide real-time visibility and historical reporting."
                    },
                    {
                        title: "Data Sources",
                        list: [
                            "Web/app telemetry (GA4).",
                            "CMS + headless frontend events.",
                            "Commerce/finance feeds (Stripe, Xero).",
                            "Marketing stack (Mailchimp, Buffer)."
                        ]
                    }
                ]
            },
            {
                title: "6.2 Communications",
                blocks: [
                    {
                        title: "Purpose",
                        content: "Coordinate internal/member communications distinct from external marketing. Improve usability with structured feeds and preference management."
                    },
                    {
                        title: "Channels",
                        list: [
                            "Bulletin board with rich formatting.",
                            "System notifications (transactional emails/SMS).",
                            "Internal announcements."
                        ]
                    }
                ]
            },
            {
                title: "6.3 Payments",
                blocks: [
                    {
                        title: "Mandate",
                        content: "Ensure accurate, auditable financial flows. Integrate online payments with accounting (Xero) and support multi-bank operations."
                    },
                    {
                        title: "Payment Processing",
                        list: [
                            "Gateways: Stripe, Eventbrite/Shopify.",
                            "Features: Multi-currency, GST handling."
                        ]
                    }
                ]
            },
            {
                title: "6.4 Forms",
                blocks: [
                    {
                        title: "Purpose",
                        content: "Provide consistent, member-friendly forms that power onboarding, upgrades, awards, and CPD logging."
                    },
                    {
                        title: "Experience Standards",
                        list: [
                            "Save & Resume.",
                            "Draft & History.",
                            "Validation & Guidance."
                        ]
                    }
                ]
            },
            {
                title: "6.5 Marketing",
                blocks: [
                    {
                        title: "Strategic Objectives",
                        content: "Increase awareness among lighting professionals. Translate marketing into tangible KPIs."
                    },
                    {
                        title: "Channels",
                        list: [
                            "Owned: Headless site, blog, newsletters.",
                            "Shared/Social: LinkedIn, Facebook, Instagram.",
                            "Events/Community: Webinars, conferences."
                        ]
                    }
                ]
            },
            {
                title: "6.6 Security",
                blocks: [
                    {
                        title: "Objectives",
                        content: "Protect member data and financial transactions. Reduce attack surface via headless architecture."
                    },
                    {
                        title: "Security Posture",
                        list: [
                            "MFA/SSO across admin portals.",
                            "WAF/firewall, malware protection.",
                            "Secure integration patterns."
                        ]
                    }
                ]
            },
            {
                title: "6.7 SEO",
                blocks: [
                    {
                        title: "Technical Foundations",
                        content: "Headless frontend for semantic markup and fast delivery. Core Web Vitals emphasis."
                    },
                    {
                        title: "Content Strategy",
                        list: [
                            "Cover CMS content families.",
                            "Highlight marketing storytelling pillars.",
                            "Create structured directories."
                        ]
                    }
                ]
            }
        ]
    }
}
