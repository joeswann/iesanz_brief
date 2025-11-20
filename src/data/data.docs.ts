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

export const docsOverview: DocPageData = {
    title: "Project Overview",
    sections: [
        {
            title: "Purpose",
            blocks: [
                {
                    content: "This project is a comprehensive renewal of the IESANZ digital online presence. The goal is to implement an intuitive, clean and functional interface for visitors and members, while streamlining back-office procedures through well-planned digital processes and integrations."
                }
            ]
        },
        {
            title: "Approach",
            blocks: [
                {
                    content: "The project addresses the disparate components of the organisation (Awards, Conferences, Education, etc.) by integrating them into a unified platform. The solution is designed to reflect the business structure, including the chapter system, board portfolios, and the membership system."
                }
            ]
        },
        {
            title: "Success Criteria",
            blocks: [
                {
                    content: "A successful outcome will deliver a platform that supports approximately 1,000 active members, providing both internal and external users with an intuitive, cohesive and productive experience. It should strengthen membership growth through simpler onboarding and clearer communication of benefits, while improving operational efficiency for administrators."
                }
            ]
        },
    ]
};

export const docsContents: DocPageData = {
    title: "Contents",
    sections: [
        {
            title: "Document Contents",
            blocks: [
                {
                    content: "Documentation for this project is organised into several key sections, accessible via the header at the top of the page:",
                    list: [
                        "<strong>Overview:</strong> General project information, process and reverse brief.",
                        "<strong>Architecture:</strong> Technical details, services and sitemap.",
                        "<strong>Guidance:</strong> Recommended priorities and project phases.",
                        "<strong>Vendor:</strong> Tender information and project brief for vendors.",
                        "<strong>Admin:</strong> Documentation for the administrative dashboard and tools.",
                        "<strong>Studio:</strong> Guides for managing content and commerce via the Studio.",
                        "<strong>Appendix:</strong> Supplementary information."
                    ]
                },
                {
                    content: "The sidebar on the left provides context-specific navigation for the currently selected section."
                }
            ]
        }
    ]
};

export const docsOverviewReverseBrief: DocPageData = {
    title: "Reverse Brief",
    sections: [
        {
            title: "IESANZ",
            blocks: [
                {
                    content: "IESANZ is an international organisation based in Australia and New Zealand. It’s organisational structure consists of a central board with portfolios for fundamental areas of the organisation (Awards, Conferences, Education, etc) and six chapters (NZ, NSW + ACT, WA, VIC + TAS, SA + NT, QLD), these all have an influence on the governance and administration of the overall organisation and the website."
                }
            ]
        },
        {
            title: "Purpose",
            blocks: [
                {
                    content: "This project is a comprehensive renewal of the IESANZ digital online presence, based around the functionality of the website located at https://www.iesanz.org/. Once completed the new website will implement an intuitive, clean and functional interface for visitors and members, while streamlining a wide range of back office procedures through well planned digital processes and integrations."
                }
            ]
        },
        {
            title: "Approach",
            blocks: [
                {
                    content: "As there are several components and portfolios within the organisation there are quite a few disparate areas to integrate across the platform. This document will be organised into a number of groups and verticals that separate these areas, along with details around the various key components of the website structure and production process."
                },
                {
                    content: "The brief will be organised as much as possible to reflect the business structure and processes that drive it, this includes the chapter system, board portfolios, and external drivers such as marketing and advertising."
                },
                {
                    content: "The complexity of the brief will involve some careful consideration of priorities in order to produce a clearly successful result within a reasonable timeframe and budget. To that end we will highlight details which make sense to action in a future phase of the platforms evolution."
                }
            ]
        },
        {
            title: "Outline",
            blocks: [
                {
                    content: "Visitors to the IESANZ platform can be grouped into several categories / segments, and the content they view can be determined by a number of factors such as which chapter they belong to, whether they are logged in, and which level of access they have. On the surface level there is public content, which is accessible by any visitor and is generally used for information about the organisation, marketing for the benefits of membership, and onboarding. Chapters communicate with their members through their hubs, which provide a centralised location for announcements and important information. Finally there are the member hubs, which are where the majority of the digital membership benefits are located. These include educational resources, ticket functionality, access to whitepapers, and so on."
                }
            ]
        },
        {
            title: "What success looks like",
            blocks: [
                {
                    content: "A successful outcome delivers a platform that supports approximately 1,000 active members and provides a more productive and value-driven experience for members, chapters, and administrators. It should strengthen the case for joining and remaining a member through simpler onboarding, clearer communication of benefits, and streamlined renewal and upgrade paths. The platform should also enable the organisation to operate more efficiently across its various portfolios and chapters by reducing manual work and improving the accuracy and timeliness of member-related processes."
                }
            ]
        },
        {
            title: "Design Brief",
            blocks: [
                {
                    content: "The new digital presence should modernise the organisation’s branding, typography, layout and overall presentation, while ensuring that the transition between public-facing content and member-specific functionality is seamless. The public website should communicate the organisation’s value, purpose, and opportunities, while the member area should provide functional depth without compromising ease of use. Clear calls-to-action, effective storytelling, and a consistent visual language should support the marketing objectives of membership growth, event attendance, sponsorship, and participation in awards and education programs."
                }
            ]
        },
        {
            title: "Public",
            blocks: [
                {
                    content: "The public website will serve as the primary entry point for prospective members, partners, and the general public. It will provide accessible information about the organisation, its chapters, and its activities, along with regularly updated content such as upcoming events, news items, and public announcements."
                },
                {
                    content: "Key content includes case studies, interviews, news articles, awards information, white papers, and general information pages such as Objectives, FAQ, and Conditions of Entry. Public storytelling should support marketing and member acquisition, offering clear pathways to learn more, sign up, and engage."
                },
                {
                    content: "Portfolio-level content (Awards, Conferences, Education, Marketing, Membership) as well as chapter-specific updates will be visible to the public as appropriate. A centralised knowledge base will cover membership support, education resources, mentorship information, policy and advocacy content, CPD guidance, and general FAQs."
                },
                {
                    content: "The public area will also include a directory of members (who have opted in), with appropriate filters and recognition of achievements such as awards or credentials."
                }
            ]
        },
        {
            title: "Chapters",
            blocks: [
                {
                    content: "Chapters will be able to publish and manage content tailored to their region, including upcoming events, workshops, CPD opportunities, awards, news, and committee information. Each chapter will maintain a hub that serves as a central point for local activities and communications."
                },
                {
                    content: "Chapter Coordinators will use the CMS and admin tools to publish content, update contacts, and maintain chapter channels."
                }
            ]
        },
        {
            title: "Member Area",
            blocks: [
                {
                    content: "The Member Area will provide deeper access to organisational resources and benefits. This includes gated educational material, technical papers, recordings, and other member-only content. Members will be able to register for events, access their tickets, request access to webinars, and interact with content relevant to their membership grade and chapter."
                },
                {
                    content: "A unified dashboard will provide an overview of membership status, invoices, payment methods, education enrolments, awards entries, event tickets, sponsorships, and future CPD tracking. This area should be intuitive to navigate and designed for ongoing engagement."
                }
            ]
        },
        {
            title: "Accounts",
            blocks: [
                {
                    content: "Members will be able to manage their contact information, login details, communication preferences, privacy settings, and chapter affiliation. Over time, profile information will support further personalisation such as the profiles in the public member directory."
                }
            ]
        },
        {
            title: "Membership",
            blocks: [
                {
                    content: "The membership section supports the full lifecycle of member engagement. Members can submit upgrades, renewals, and other membership requests through multi-step forms that allow saving progress and resuming later."
                },
                {
                    content: "Different membership grades (corporate, non-corporate, student, emerging professional, chapter tiers) will be built out over time according to clearly defined benefits and rules. Special statuses such as lifetime, honorary, resigned, and terminated will also be supported. Where appropriate, the system will automate lifecycle communications, sending reminders for renewals or lapsed accounts and supporting reactivation flows."
                },
                {
                    content: "In future corporate memberships will include tools for managing delegates, allocating seats, administering billing, and tracking usage."
                }
            ]
        },
        {
            title: "Education & Training",
            blocks: [
                {
                    content: "The platform will provide structured access to education and training materials, including downloadable resources such as publications, white papers, and case studies. Access levels will align with membership tiers where relevant."
                },
                {
                    content: "Education pathways, including courses, webinars, conferences, and mentorship programs, will be clearly presented. A comprehensive knowledge base will support both members and administrators with information relevant to education and CPD."
                }
            ]
        },
        {
            title: "Conferences",
            blocks: [
                {
                    content: "Conference content may be delivered through dedicated hubs containing agendas, speaker profiles, sponsor information, testimonials, and registration options."
                },
                {
                    content: "A future version of this section could include deeper tooling for managing the conference organisation via the wider platform."
                }
            ]
        },
        {
            title: "Awards",
            blocks: [
                {
                    content: "The awards section will support the complete awards lifecycle from a content perspective, from public promotion to entry submission, judging, and archiving. Past winners, juror bios, media kits, and sponsorship placements will be maintained in a consistent structure aligned with branding and marketing objectives."
                },
                {
                    content: "A future version of this section could include deeper tooling for managing the award process via the wider platform."
                }
            ]
        },
        {
            title: "Marketing",
            blocks: [
                {
                    content: "The website can support marketing initiatives through scheduled announcements, speaker spotlights, sponsorship communication, and social content distribution. Storytelling through case studies, testimonials, and other assets should reinforce the organisation’s strategic goals."
                }
            ]
        },
        {
            title: "Commerce",
            blocks: [
                {
                    content: "The storefront will work toward offering publications, job advertisements, sponsorship packages, merchandise, and chapter-specific products. Integration with store, payment, and accounting platforms will ensure accurate invoicing, reporting, and fulfilment. Localisation requirements include NZD and AUD handling, GST (NZ/AU/None), and variations in between Australia and New Zealand."
                },
                {
                    content: "In future updates the purchasing on behalf of others, including corporate delegates, will be supported."
                }
            ]
        },
        {
            title: "Content Management Admin",
            blocks: [
                {
                    content: "Administrators will maintain content categories covering informational pages, the knowledgebase, educational content, articles, and marketing assets."
                }
            ]
        },
        {
            title: "Super Admin",
            blocks: [
                {
                    content: "Super Admin users oversee global details across the platform including navigation, integrations, reports, and settings."
                }
            ]
        },
        {
            title: "Integrations",
            blocks: [
                {
                    content: "The platform will interact with multiple external systems, including the membership database, Content Management System, Store, Payments, Accounts, Events, Analytics, and Marketing platforms."
                },
                {
                    content: "Membership profiles, chapter permissions, and CRM data will be unified to improve accuracy and reduce duplication."
                }
            ]
        },
        {
            title: "Automations",
            blocks: [
                {
                    content: "Key processes such as onboarding, renewals, upgrades, account recovery, and chapter assignment will be automated where possible to reduce administrative load. Implementing automated checks for duplicate accounts or suspicious activity will support data quality and security."
                }
            ]
        },
        {
            title: "Performance",
            blocks: [
                {
                    content: "Performance targets include strong Core Web Vitals, optimised loading of images and media, effective caching, and minimal blocking scripts. The platform should include monitoring to help track issues and guide ongoing optimisation."
                }
            ]
        },
        {
            title: "Security",
            blocks: [
                {
                    content: "Access control must ensure that public, chapter, member, and administrative areas remain appropriately separated and inaccessible by the wrong users. Administrative and CMS tools should not be publicly exposed. Recommended practises such as 2FA should be considered throughout."
                },
                {
                    content: "Role-based access will reflect the organisation’s structure, including board roles, chapter coordinators, and administrative levels."
                }
            ]
        },
        {
            title: "Reporting & Governance",
            blocks: [
                {
                    content: "Comprehensive reporting will support membership analysis, finance and commerce insights, event participation, content usage, and marketing performance. Dashboards should provide both real-time monitoring and historical views, with future extensions planned for CPD tracking and corporate account reporting."
                },
                {
                    content: "Analytics integrations will support reporting across membership activities, events, CPD, and marketing outcomes."
                }
            ]
        },
        {
            title: "Financials",
            blocks: [
                {
                    content: "Financial processes will include consistent handling of refunds, failed payments, sponsorship deliverables, and compliance requirements. Synchronisation between CRM, CMS, finance tools, awards, and education systems will ensure accurate records. This will be an ongoing process, potentially starting as a separate phase after the core membership system has been built."
                }
            ]
        },
        {
            title: "Legal",
            blocks: [
                {
                    content: "The platform must comply with privacy laws in Australia and New Zealand, GDPR requirements, and the Spam Act. Accessible design principles should be incorporated, and claims related to accreditation must be correct and compliant. Payment systems must meet PCI standards."
                }
            ]
        },
        {
            title: "Migrations",
            blocks: [
                {
                    content: "Where existing workflows, such as [Monday.com](http://monday.com/) are replaced, the migration process will include QA, testing, and clearly understood transition plans."
                }
            ]
        },
        {
            title: "Ongoing Updates",
            blocks: [
                {
                    content: "The platform will continue to evolve, with planned future enhancements including corporate account systems, conference ticketing integration, improved awards management, consolidation of microsites, advanced sponsorship tools, download licensing, CPD tracking, livestreaming and virtual event features, and advanced financial management of members."
                },
                {
                    content: "These updates will be prioritised in collaboration with the board and chapters as the core platform stabilises."
                }
            ]
        }
    ]
};

export const docsVendor: DocPageData = {
    title: "Vendor Information",
    sections: [
        {
            title: "Project Scope",
            blocks: [
                {
                    content: "IESANZ is seeking a partner to deliver a comprehensive digital platform renewal. The project involves building a headless frontend (Next.js), configuring a headless CMS (Sanity), and integrating with Shopify and other third-party services."
                }
            ]
        },
        {
            title: "Key Deliverables",
            blocks: [
                {
                    list: [
                        "<strong>Public Website:</strong> A modern, responsive marketing site.",
                        "<strong>Member Portal:</strong> A secure area for members to manage their profile, renewals, and CPD.",
                        "<strong>Events & Ticketing:</strong> A robust system for event management and registration.",
                        "<strong>Awards Platform:</strong> A digital submission and judging system.",
                        "<strong>E-commerce Store:</strong> A shop for physical and digital products.",
                        "<strong>Migration:</strong> Migration of existing member and content data."
                    ]
                }
            ]
        },
        {
            title: "Technical Requirements",
            blocks: [
                {
                    content: "The solution must strictly adhere to the proposed architecture: Next.js for the frontend, Sanity for content, and Shopify for commerce. The vendor must demonstrate expertise in these technologies."
                }
            ]
        },
        {
            title: "Communication & Process",
            blocks: [
                {
                    title: "Clarifications",
                    content: "All questions regarding this brief should be submitted via email to the project manager. Responses will be shared with all tendering parties to ensure fairness."
                },
                {
                    title: "Quoting",
                    content: "Proposals should provide a detailed breakdown of costs, including design, development, migration, and ongoing support. Please separate one-off costs from recurring license fees."
                },
                {
                    title: "Timeline",
                    content: "Please provide an estimated timeline for delivery, including key milestones for discovery, design, development, and UAT."
                }
            ]
        }
    ]
};

export const docsVendorBrief: DocPageData = {
    title: "Project Brief & Tender",
    sections: [
        {
            title: "Project Scope",
            blocks: [
                {
                    content: "IESANZ is seeking a partner to deliver a comprehensive digital platform renewal. The project involves building a headless frontend (Next.js), configuring a headless CMS (Sanity), and integrating with Shopify and other third-party services."
                }
            ]
        },
        {
            title: "Key Deliverables",
            blocks: [
                {
                    list: [
                        "<strong>Public Website:</strong> A modern, responsive marketing site.",
                        "<strong>Member Portal:</strong> A secure area for members to manage their profile, renewals, and CPD.",
                        "<strong>Events & Ticketing:</strong> A robust system for event management and registration.",
                        "<strong>Awards Platform:</strong> A digital submission and judging system.",
                        "<strong>E-commerce Store:</strong> A shop for physical and digital products.",
                        "<strong>Migration:</strong> Migration of existing member and content data."
                    ]
                }
            ]
        },
        {
            title: "Technical Requirements",
            blocks: [
                {
                    content: "The solution must strictly adhere to the proposed architecture: Next.js for the frontend, Sanity for content, and Shopify for commerce. The vendor must demonstrate expertise in these technologies."
                }
            ]
        },
        {
            title: "Communication & Process",
            blocks: [
                {
                    title: "Clarifications",
                    content: "All questions regarding this brief should be submitted via email to the project manager. Responses will be shared with all tendering parties to ensure fairness."
                },
                {
                    title: "Quoting",
                    content: "Proposals should provide a detailed breakdown of costs, including design, development, migration, and ongoing support. Please separate one-off costs from recurring license fees."
                },
                {
                    title: "Timeline",
                    content: "Please provide an estimated timeline for delivery, including key milestones for discovery, design, development, and UAT."
                }
            ]
        }
    ]
};

export const docsArchitecture: DocPageData = {
    title: "Systems",
    sections: [
        {
            title: "Headless Approach",
            blocks: [
                {
                    content: "We are using a headless architecture to separate the frontend user experience from backend services. This allows for straightforward maintenance, optimised performance, and the ability to integrate best-in-class services without vendor lock-in."
                }
            ]
        },
        {
            title: "Technology Stack",
            blocks: [
                {
                    title: "Frontend",
                    content: "Next.js (React) is used for the frontend to provide server-side rendering, high performance, and SEO benefits. It consumes content from the headless CMS and other APIs."
                },
                {
                    title: "CMS",
                    content: "Sanity CMS is the chosen headless content management system. It offers a highly customisable admin studio and flexible content modelling."
                },
                {
                    title: "Ecommerce",
                    content: "Shopify handles the ecommerce functionality (products, cart, checkout, payments). It integrates with Xero for accounting."
                },
                {
                    title: "Integrations",
                    content: "Key integrations include Xero (Finance), Klaviyo (Marketing/Newsletters), and potentially others for specific needs like events."
                }
            ]
        },
        {
            title: "Deployment & Infrastructure",
            blocks: [
                {
                    title: "Vercel",
                    content: "The Next.js frontend is deployed on Vercel, taking advantage of their global Edge Network for low-latency delivery. Vercel also handles CI/CD, automatically deploying updates from the Git repository."
                },
                {
                    title: "Caching Strategy",
                    content: "We utilize Incremental Static Regeneration (ISR) to serve static pages that can be updated in the background. This ensures the site remains fast while displaying up-to-date content."
                }
            ]
        },
        {
            title: "Comparison with WordPress",
            blocks: [
                {
                    title: "Security",
                    content: "Headless architecture significantly reduces the attack surface compared to a plugin-heavy WordPress site. There are no public-facing PHP plugins to exploit."
                },
                {
                    title: "Performance",
                    content: "Static generation and CDN delivery ensure fast load times. The separation of concerns prevents backend heaviness from slowing down the user experience."
                },
                {
                    title: "Maintenance",
                    content: "Avoids the 'plugin hell' of managing updates and conflicts across numerous WordPress plugins. Maintenance is more predictable and focused on code rather than configuration."
                },
                {
                    title: "Flexibility",
                    content: "Allows for complete control over the frontend design and user experience, without being constrained by theme templates or plugin outputs."
                }
            ]
        }
    ]
};

export const docsArchitectureMemberships: DocPageData = {
    title: "Memberships",
    sections: [
        {
            title: "System Overview",
            blocks: [
                {
                    content: "The membership system is the central component of the IESANZ platform, responsible for managing user identities, access privileges, and the complete member lifecycle. It serves as the source of truth for who a user is and what they are entitled to access."
                }
            ]
        },
        {
            title: "Core Strategy",
            blocks: [
                {
                    content: "To deliver a robust and scalable solution, we are designing the membership system around a flexible core that can evolve over time. The implementation will follow one of two strategic paths:"
                },
                {
                    title: "Option A: Custom Core System",
                    content: "A lightweight, purpose-built service designed specifically for IESANZ's unique structure (Chapters, Grades, Portfolios). This system would handle the business logic of membership rules while delegating authentication to Auth0 and payments to a dedicated provider. This approach offers maximum flexibility and ensures the data model fits the organization perfectly."
                },
                {
                    title: "Option B: External SaaS Platform",
                    content: "Leveraging a specialized Association Management Software (AMS) or Membership Management System (MMS) to handle the heavy lifting of records, renewals, and compliance. This reduces custom development effort but requires careful integration to ensure a seamless user experience across the custom frontend."
                }
            ]
        },
        {
            title: "Implementation Phases",
            blocks: [
                {
                    title: "Phase 1: Accounts & Identity",
                    content: "The initial release focuses on the 'Accounts' aspect. This includes secure login via Auth0, profile management, and the establishment of the basic member record. Users will be able to update their details and view their current status, laying the foundation for all future interactions."
                },
                {
                    title: "Phase 2: Payments & Lifecycle",
                    content: "Subsequent phases will introduce full payment processing for membership renewals, upgrades, and new applications. This will involve deep integration with the payment gateway and the financial reporting systems, automating what is currently a manual administrative burden."
                }
            ]
        }
    ]
};

export const docsProcess: DocPageData = {
    title: "Development Process",
    sections: [
        {
            title: "Phases",
            blocks: [
                {
                    title: "1. Discovery & Planning",
                    content: "Clarifying objectives, gathering requirements and establishing the technical strategy and roadmap."
                },
                {
                    title: "2. Design & Architecture",
                    content: "Collaborating on design prototypes and refining technical requirements and integration plans."
                },
                {
                    title: "3. Development",
                    content: "Building the core functionalities (frontend, CMS, integrations) and managing supplier coordination."
                },
                {
                    title: "4. Testing & QA",
                    content: "Verifying features, testing performance and resolving issues."
                },
                {
                    title: "5. Deployment",
                    content: "Setting up the production environment, migrating content and launching the site."
                },
                {
                    title: "6. Post-Launch Support",
                    content: "Monitoring performance and addressing any immediate post-launch issues."
                }
            ]
        }
    ]
};

export const docsArchitectureSitemap: DocPageData = {
    title: "Sitemap",
    sections: [
        {
            title: "Public Routes",
            blocks: [
                {
                    title: "Main Navigation",
                    list: [
                        "<strong>/</strong> - Home page",
                        "<strong>/news</strong> - News & Articles listing",
                        "<strong>/news/$slug</strong> - Individual news article",
                        "<strong>/events</strong> - Events calendar and listing",
                        "<strong>/events/$slug</strong> - Event details and registration",
                        "<strong>/awards</strong> - Awards program overview",
                        "<strong>/awards/enter</strong> - Award entry form",
                        "<strong>/awards/gallery</strong> - Past winners gallery",
                        "<strong>/education</strong> - Education & Course overview",
                        "<strong>/education/course</strong> - The Course details",
                        "<strong>/membership</strong> - Membership benefits and tiers",
                        "<strong>/membership/join</strong> - Join application flow",
                        "<strong>/contact</strong> - Contact information and forms"
                    ]
                }
            ]
        },
        {
            title: "Member Area (Protected)",
            blocks: [
                {
                    title: "Dashboard",
                    list: [
                        "<strong>/account</strong> - Member dashboard home",
                        "<strong>/account/profile</strong> - Edit profile and contact info",
                        "<strong>/account/membership</strong> - Membership status and renewal",
                        "<strong>/account/invoices</strong> - Payment history and invoices",
                        "<strong>/account/cpd</strong> - CPD points tracking",
                        "<strong>/account/events</strong> - My registered events"
                    ]
                }
            ]
        },
        {
            title: "Admin & Studio",
            blocks: [
                {
                    title: "Back Office",
                    list: [
                        "<strong>/studio</strong> - Sanity Studio (Content Management)",
                        "<strong>/admin</strong> - Custom Admin Dashboard",
                        "<strong>/docs</strong> - Project Documentation (This site)"
                    ]
                }
            ]
        }
    ]
};

export const docsArchitectureServices: DocPageData = {
    title: "Services & Integrations",
    sections: [
        {
            title: "Overview",
            blocks: [
                {
                    content: "The IESANZ platform integrates with several best-in-class external services to handle specific functionalities like content management, commerce, authentication, and marketing. This 'composable' approach allows us to swap or upgrade individual components without rebuilding the entire system."
                }
            ]
        },
        {
            title: "Service Map",
            blocks: [
                {
                    list: [
                        "<strong>Sanity CMS:</strong> The source of truth for all non-commerce content (pages, news, events).",
                        "<strong>Shopify:</strong> The engine for all transactions, product management, and customer orders.",
                        "<strong>Auth0:</strong> The guardian of user identity, handling login and access control.",
                        "<strong>Algolia:</strong> The search indexer, providing instant search results across content and products.",
                        "<strong>Klaviyo:</strong> The marketing hub, syncing user data to drive engagement campaigns."
                    ]
                }
            ]
        }
    ]
};

export const docsServicesSanity: DocPageData = {
    title: "Sanity CMS",
    sections: [
        {
            title: "Core Infrastructure",
            blocks: [
                {
                    title: "Sanity",
                    content: "Sanity is the Headless Content Management System (CMS) used to manage all dynamic content across the platform. It provides a flexible, structured content lake that powers the website, mobile apps, and other digital touchpoints. It allows for real-time collaboration, version control, and a customizable editing environment for administrators."
                }
            ]
        },
        {
            title: "Key Features",
            blocks: [
                {
                    title: "Structured Content",
                    content: "Unlike traditional CMSs that store HTML blobs, Sanity stores content as structured data (JSON). This allows us to reuse content across different contexts (e.g., using the same 'Author' object for a news article and an event)."
                },
                {
                    title: "The Studio",
                    content: "The Sanity Studio is an open-source React application that we have customized to fit IESANZ's specific workflows. It includes custom input components, previews, and validation rules."
                },
                {
                    title: "GROQ",
                    content: "We use GROQ (Graph-Relational Object Queries) to query data. It allows us to request exactly the data we need for a page, reducing payload sizes and improving performance."
                }
            ]
        }
    ]
};

export const docsServicesShopify: DocPageData = {
    title: "Shopify Commerce",
    sections: [
        {
            title: "Commerce & Finance",
            blocks: [
                {
                    title: "Shopify",
                    content: "Shopify is used as the headless e-commerce engine. It handles product management, cart functionality, and secure checkout processing. It supports multi-currency transactions, tax calculation, and subscription management, ensuring a robust and compliant commerce experience."
                }
            ]
        },
        {
            title: "Integration Details",
            blocks: [
                {
                    title: "Storefront API",
                    content: "We utilize Shopify's GraphQL Storefront API to build a custom shopping experience within our Next.js application. This gives us full control over the UI while offloading complex logic (like tax and shipping) to Shopify."
                },
                {
                    title: "Checkout",
                    content: "While the browsing and cart experience happens on our custom frontend, the final checkout step redirects the user to Shopify's secure, hosted checkout page. This ensures PCI compliance and trust."
                },
                {
                    title: "Webhooks",
                    content: "Shopify Webhooks notify our system of key events, such as a successful order or a customer update, allowing us to trigger downstream actions like sending a welcome email or updating a member's status."
                }
            ]
        }
    ]
};

export const docsServicesAuth0: DocPageData = {
    title: "Auth0 Identity",
    sections: [
        {
            title: "Identity & Security",
            blocks: [
                {
                    title: "Auth0",
                    content: "Auth0 is the recommended Identity Provider (IdP) for managing user authentication and authorization. It handles secure login, registration, password recovery, and multi-factor authentication (MFA). It provides a unified user profile system that can be shared across different parts of the platform."
                }
            ]
        },
        {
            title: "Implementation",
            blocks: [
                {
                    title: "Universal Login",
                    content: "We use Auth0's Universal Login page, which provides a secure, hosted login form. This isolates authentication from our application code, reducing security risks."
                },
                {
                    title: "User Metadata",
                    content: "We store IESANZ-specific user data (like Member ID, Chapter affiliation, and Membership Tier) in Auth0's `app_metadata`. This data is included in the ID Token, allowing our frontend to personalize the experience without making extra API calls."
                },
                {
                    title: "SSO",
                    content: "Auth0 enables Single Sign-On (SSO), meaning a user logs in once and gains access to all connected applications (e.g., the Member Portal, the Awards Platform, and the Community Forum)."
                }
            ]
        }
    ]
};

export const docsServicesKlaviyo: DocPageData = {
    title: "Klaviyo Marketing",
    sections: [
        {
            title: "Marketing & Analytics",
            blocks: [
                {
                    title: "Klaviyo",
                    content: "Klaviyo is the marketing automation platform used for email communications and customer engagement. It integrates with the user database to send personalized newsletters, transactional emails (e.g., welcome messages, renewal reminders), and targeted campaigns based on user behavior."
                }
            ]
        },
        {
            title: "Capabilities",
            blocks: [
                {
                    title: "Segmentation",
                    content: "We can create dynamic segments of users based on their attributes (e.g., 'Student Members in NSW') or behavior (e.g., 'Registered for 2025 Conference'). This allows for highly relevant communication."
                },
                {
                    title: "Flows",
                    content: "Automated email flows are triggered by specific events. For example, a 'New Member Onboarding' flow can send a series of educational emails over the first month of membership."
                },
                {
                    title: "Sync",
                    content: "Member data is synced from our core database and Shopify to Klaviyo in real-time, ensuring marketing lists are always up to date."
                }
            ]
        }
    ]
};

export const docsServicesAlgolia: DocPageData = {
    title: "Algolia Search",
    sections: [
        {
            title: "Search & Discovery",
            blocks: [
                {
                    title: "Algolia",
                    content: "Algolia is the search and discovery engine required to provide fast, relevant search results across the site's content. It indexes data from Sanity and Shopify to enable instant search, faceting, and filtering for members, events, resources, and products."
                }
            ]
        },
        {
            title: "Configuration",
            blocks: [
                {
                    title: "Indices",
                    content: "We maintain separate indices for different content types (e.g., `iesanz_content`, `iesanz_products`, `iesanz_members`) to allow for specialized search relevance settings."
                },
                {
                    title: "InstantSearch",
                    content: "On the frontend, we use Algolia's InstantSearch UI library to provide an 'as-you-type' search experience with typo tolerance and highlighting."
                },
                {
                    title: "Faceting",
                    content: "Facets allow users to refine search results by categories, tags, or dates (e.g., filtering Events by 'Chapter' or 'Year')."
                }
            ]
        }
    ]
};

export const docsStudio: DocPageData = {
    title: "Studio & Operations",
    sections: [
        {
            title: "Overview",
            blocks: [
                {
                    content: "The Studio is the operational heart of the IESANZ platform, providing administrators with the tools to manage content, commerce, and member interactions. It serves as the bridge between the headless frontend and the backend services (Sanity and Shopify)."
                }
            ]
        },
        {
            title: "Content Management",
            blocks: [
                {
                    title: "Sanity CMS",
                    content: "All informational content is managed via Sanity CMS. This includes:",
                    list: [
                        "General Pages: About, Privacy Policy, Terms.",
                        "News & Articles: Chapter news, industry updates.",
                        "Events: Conferences, webinars, and chapter meetings.",
                        "Awards: Award categories, criteria, and galleries.",
                        "Resources: The Knowledgebase, technical documents, and member guides."
                    ]
                },
                {
                    title: "Workflow",
                    content: "Content follows a structured workflow from draft to publication, ensuring quality control before updates go live on the public site."
                }
            ]
        },
        {
            title: "Commerce Operations",
            blocks: [
                {
                    title: "Shopify Integration",
                    content: "Commercial aspects are handled through Shopify, integrated seamlessly into the Studio dashboard.",
                    list: [
                        "Products: Management of physical goods, digital downloads, and event tickets.",
                        "Orders: Processing and tracking of customer purchases.",
                        "Customers: View of customer profiles and purchase history.",
                        "Collections: Grouping products for the storefront."
                    ]
                }
            ]
        },
        {
            title: "Access Control",
            blocks: [
                {
                    content: "Access to the Studio is restricted to authorized administrators. Different roles (e.g., Chapter Admin, Super Admin) may have varying levels of access to content and commerce features."
                }
            ]
        }
    ]
};

export const docsStudioNews: DocPageData = {
    title: "News Management",
    sections: [
        {
            title: "Creating News",
            blocks: [
                {
                    content: "To create a new news article, navigate to the 'News' section in the Studio desk structure and click the 'Create' button (plus icon).",
                    list: [
                        "<strong>Title:</strong> The headline of the article.",
                        "<strong>Slug:</strong> The URL-friendly version of the title (click 'Generate').",
                        "<strong>Published Date:</strong> When the article should appear on the site.",
                        "<strong>Author:</strong> Link to an existing author profile.",
                        "<strong>Main Image:</strong> The primary visual for the article, used in listings and social sharing."
                    ]
                }
            ]
        },
        {
            title: "Content & Categorization",
            blocks: [
                {
                    title: "Body Content",
                    content: "The main content is edited using the Portable Text editor, which allows for rich text formatting, embedding images, and adding links."
                },
                {
                    title: "Taxonomy",
                    content: "Articles can be categorized to ensure they appear in the right sections:",
                    list: [
                        "<strong>Chapter:</strong> Assign to a specific chapter (e.g., 'NSW') to display on that chapter's page.",
                        "<strong>Topics:</strong> Tag with relevant topics (e.g., 'Lighting Design', 'Standards') for filtering."
                    ]
                }
            ]
        }
    ]
};

export const docsStudioEvents: DocPageData = {
    title: "Event Management",
    sections: [
        {
            title: "Event Setup",
            blocks: [
                {
                    content: "Events are a core part of the platform. Creating an event involves defining its logistics and content.",
                    list: [
                        "<strong>Basic Info:</strong> Title, slug, and a brief summary.",
                        "<strong>Date & Time:</strong> Start and end times. Ensure the correct timezone is selected.",
                        "<strong>Location:</strong> Physical address (with map integration) or 'Online' for virtual events.",
                        "<strong>Organiser:</strong> The chapter or group responsible for the event."
                    ]
                }
            ]
        },
        {
            title: "Ticketing & Registration",
            blocks: [
                {
                    content: "Events can be free or paid. For paid events, you must link a Shopify Product.",
                    list: [
                        "<strong>Ticket Product:</strong> Select the corresponding product from Shopify. This handles the price, inventory (capacity), and purchase flow.",
                        "<strong>Member Pricing:</strong> If the Shopify product has variants for 'Member' vs 'Non-Member', the site will automatically show the correct price based on the user's login status."
                    ]
                }
            ]
        },
        {
            title: "Content",
            blocks: [
                {
                    content: "Rich content can be added to promote the event:",
                    list: [
                        "<strong>Description:</strong> Full details about the event.",
                        "<strong>Speakers:</strong> Link to speaker profiles.",
                        "<strong>Sponsors:</strong> Display logos of event sponsors.",
                        "<strong>Agenda:</strong> A structured schedule of sessions."
                    ]
                }
            ]
        }
    ]
};

export const docsStudioProducts: DocPageData = {
    title: "Product Management",
    sections: [
        {
            title: "Shopify Sync",
            blocks: [
                {
                    content: "Products are primarily managed in Shopify and synchronized to Sanity for display enrichment. The 'source of truth' for price, inventory, and SKU is Shopify."
                }
            ]
        },
        {
            title: "Managing in Shopify",
            blocks: [
                {
                    list: [
                        "<strong>Title & Description:</strong> The core product details.",
                        "<strong>Media:</strong> Product images and videos.",
                        "<strong>Pricing:</strong> Set the price and compare-at price (for sales).",
                        "<strong>Inventory:</strong> Track stock levels to prevent overselling.",
                        "<strong>Variants:</strong> Create options for Size, Color, or Type (e.g., 'Member Ticket' vs 'General Admission')."
                    ]
                }
            ]
        },
        {
            title: "Enhancing in Studio",
            blocks: [
                {
                    content: "Once synced to Sanity, you can add extra data that Shopify doesn't support natively, such as related articles, detailed technical specifications, or downloadable PDF attachments."
                }
            ]
        }
    ]
};

export const docsStudioOrders: DocPageData = {
    title: "Order Management",
    sections: [
        {
            title: "Processing Orders",
            blocks: [
                {
                    content: "Orders are handled within the Shopify Admin interface. This ensures secure handling of payment data and accurate financial reporting."
                }
            ]
        },
        {
            title: "Workflow",
            blocks: [
                {
                    list: [
                        "<strong>New Order:</strong> When a customer completes checkout, an order is created with 'Unfulfilled' status.",
                        "<strong>Payment:</strong> Verify that payment status is 'Paid'.",
                        "<strong>Fulfillment:</strong> For physical goods, pack the item and click 'Fulfill items'. Enter the tracking number if applicable. This triggers a shipping confirmation email to the customer.",
                        "<strong>Digital Goods:</strong> Orders containing only digital products or tickets may be automatically fulfilled by the system."
                    ]
                }
            ]
        },
        {
            title: "Refunds & Returns",
            blocks: [
                {
                    content: "Refunds should be processed directly in Shopify to ensure the money is returned to the customer's original payment method and taxes are adjusted correctly."
                }
            ]
        }
    ]
};

export const docsStudioCustomers: DocPageData = {
    title: "Customer Management",
    sections: [
        {
            title: "Customer Profiles",
            blocks: [
                {
                    content: "A unified view of customer data is essential for support and marketing. While Auth0 handles login identity, Shopify and Sanity maintain the customer's profile and history."
                }
            ]
        },
        {
            title: "Data Points",
            blocks: [
                {
                    list: [
                        "<strong>Contact Info:</strong> Email, phone, and shipping addresses.",
                        "<strong>Order History:</strong> A complete log of past purchases.",
                        "<strong>Membership Status:</strong> Tags or metadata indicating if they are a current financial member.",
                        "<strong>Notes:</strong> Internal staff notes regarding the customer (e.g., 'Preferential seating requested')."
                    ]
                }
            ]
        }
    ]
};

export const docsStudioCollections: DocPageData = {
    title: "Collection Management",
    sections: [
        {
            title: "Organizing Products",
            blocks: [
                {
                    content: "Collections are used to group products for display on the website, such as 'New Arrivals', 'Publications', or 'Conference Merch'."
                }
            ]
        },
        {
            title: "Types of Collections",
            blocks: [
                {
                    list: [
                        "<strong>Manual Collections:</strong> You manually select which products belong to the collection. Good for curated lists.",
                        "<strong>Automated Collections:</strong> Products are automatically added based on conditions (e.g., 'Product tag is equal to Publication'). This is efficient for large catalogs."
                    ]
                }
            ]
        },
        {
            title: "Display",
            blocks: [
                {
                    content: "Collections can be featured on the homepage or have their own dedicated landing pages. The sort order (e.g., Best Selling, Newest First) can be controlled from Shopify."
                }
            ]
        }
    ]
};

export const docsStudioAwards: DocPageData = {
    title: "Awards Management",
    sections: [
        {
            title: "Program Setup",
            blocks: [
                {
                    content: "Setting up an awards program (e.g., 'LiDA 2025') involves defining the structure and rules.",
                    list: [
                        "<strong>Program Details:</strong> Title, year, and description.",
                        "<strong>Key Dates:</strong> Open for entries, entries close, judging period, winners announced.",
                        "<strong>Categories:</strong> Define the award categories (e.g., 'Public Spaces', 'Residential'). Each category can have its own specific criteria."
                    ]
                }
            ]
        },
        {
            title: "Entries",
            blocks: [
                {
                    content: "Entries are submitted via the website and appear in the Studio. Admins can review entries for completeness before passing them to judges."
                }
            ]
        },
        {
            title: "Galleries",
            blocks: [
                {
                    content: "Once winners are decided, you can publish a 'Winners Gallery'. This links the entry content (images, project description) to the award they won (e.g., 'Gold Award')."
                }
            ]
        }
    ]
};

export const docsStudioPages: DocPageData = {
    title: "Page Management",
    sections: [
        {
            title: "General Pages",
            blocks: [
                {
                    content: "For content that doesn't fit into a specific structured type (like News or Events), use the 'Page' document type. This is ideal for 'About Us', 'Privacy Policy', or landing pages."
                }
            ]
        },
        {
            title: "Page Builder",
            blocks: [
                {
                    content: "We use a modular 'Page Builder' approach. Instead of a single text field, you construct the page by stacking different sections:",
                    list: [
                        "<strong>Hero:</strong> Large banner with image and text.",
                        "<strong>Text Block:</strong> Standard rich text content.",
                        "<strong>Image Gallery:</strong> Grid or slider of images.",
                        "<strong>Call to Action:</strong> Prominent button to drive user action.",
                        "<strong>Form:</strong> Embed a contact or signup form."
                    ]
                }
            ]
        },
        {
            title: "SEO Settings",
            blocks: [
                {
                    content: "Every page has an SEO tab where you can define:",
                    list: [
                        "<strong>Meta Title:</strong> The title shown in browser tabs and Google results.",
                        "<strong>Meta Description:</strong> A brief summary for search engines.",
                        "<strong>Social Image:</strong> The image displayed when the link is shared on Facebook or LinkedIn."
                    ]
                }
            ]
        }
    ]
};



export const docsAdmin: DocPageData = {
    title: "Admin & Super Admin",
    sections: [
        {
            title: "Content Management Admin",
            blocks: [
                {
                    content: "Administrators will maintain content categories covering informational pages, the knowledgebase, educational content, articles, and marketing assets."
                }
            ]
        },
        {
            title: "Super Admin",
            blocks: [
                {
                    content: "Super Admin users oversee global details across the platform including navigation, integrations, reports, and settings."
                }
            ]
        }
    ]
};

export const docsAdminDashboard: DocPageData = {
    title: "Admin Dashboard",
    sections: [
        {
            title: "Overview",
            blocks: [
                {
                    content: "The Admin Dashboard serves as the landing page for administrators, providing a high-level overview of the system's health and recent activity."
                }
            ]
        },
        {
            title: "Key Features",
            blocks: [
                {
                    list: [
                        "<strong>Quick Stats:</strong> Real-time counters for total members, active subscriptions, recent orders, and pending support tickets.",
                        "<strong>Recent Activity Feed:</strong> A log of recent system actions, such as new member registrations, content updates, and error logs.",
                        "<strong>System Status:</strong> Indicators for the health of connected services (Sanity, Shopify, Auth0, etc.).",
                        "<strong>Quick Actions:</strong> Shortcuts to common tasks like 'Add New Member', 'Create Event', or 'Publish News'."
                    ]
                }
            ]
        }
    ]
};

export const docsAdminMembers: DocPageData = {
    title: "Member Management",
    sections: [
        {
            title: "Overview",
            blocks: [
                {
                    content: "The Member Management section is the core CRM component of the admin panel, allowing detailed management of the IESANZ membership base."
                }
            ]
        },
        {
            title: "Functionality",
            blocks: [
                {
                    list: [
                        "<strong>Member Search & Filtering:</strong> Advanced search capabilities to find members by name, email, chapter, membership type, or status.",
                        "<strong>Profile Management:</strong> View and edit member details, including contact info, professional details, and communication preferences.",
                        "<strong>Subscription Management:</strong> View current membership status, history, and manually adjust renewal dates or status.",
                        "<strong>Role Assignment:</strong> Assign system roles (e.g., Chapter Admin, Board Member) to users.",
                        "<strong>Export Data:</strong> Export member lists to CSV for external reporting or marketing purposes."
                    ]
                }
            ]
        }
    ]
};

export const docsAdminContent: DocPageData = {
    title: "Content Management",
    sections: [
        {
            title: "Overview",
            blocks: [
                {
                    content: "While most content is managed via the Sanity Studio, this section provides specific tools for managing structured content within the application context."
                }
            ]
        },
        {
            title: "Features",
            blocks: [
                {
                    list: [
                        "<strong>Knowledgebase Management:</strong> Organize and curate technical resources, assigning them to specific member tiers or chapters.",
                        "<strong>Educational Resources:</strong> Manage course listings, CPD point allocations, and resource availability.",
                        "<strong>Featured Content:</strong> Select specific articles or events to be highlighted on the homepage or chapter pages.",
                        "<strong>Menu Management:</strong> Configure the main navigation and footer links."
                    ]
                }
            ]
        }
    ]
};

export const docsAdminSettings: DocPageData = {
    title: "System Settings",
    sections: [
        {
            title: "Overview",
            blocks: [
                {
                    content: "Global configuration for the IESANZ platform, accessible only to Super Admins."
                }
            ]
        },
        {
            title: "Configuration Options",
            blocks: [
                {
                    list: [
                        "<strong>General Settings:</strong> Site title, description, and SEO defaults.",
                        "<strong>Integration Keys:</strong> Manage API keys for third-party services (Auth0, Stripe, Shopify, etc.).",
                        "<strong>Notification Settings:</strong> Configure email templates and triggers for system notifications.",
                        "<strong>Access Control:</strong> Define roles and permissions for admin users.",
                        "<strong>Redirects:</strong> Manage URL redirects to maintain SEO equity during migrations."
                    ]
                }
            ]
        }
    ]
};

export const docsAdminPayments: DocPageData = {
    title: "Payment History",
    sections: [
        {
            title: "Overview",
            blocks: [
                {
                    content: "A comprehensive log of all financial transactions processed through the platform."
                }
            ]
        },
        {
            title: "Features",
            blocks: [
                {
                    list: [
                        "<strong>Transaction Log:</strong> View all successful and failed payments with details (User, Amount, Date, Reference).",
                        "<strong>Invoice Generation:</strong> View and download PDF invoices for any transaction.",
                        "<strong>Refund Processing:</strong> Initiate partial or full refunds for eligible transactions.",
                        "<strong>Reconciliation:</strong> Tools to help reconcile platform payments with bank deposits."
                    ]
                }
            ]
        }
    ]
};

export const docsAdminReports: DocPageData = {
    title: "Reporting",
    sections: [
        {
            title: "Overview",
            blocks: [
                {
                    content: "Data visualization and reporting tools to track the performance of the organization."
                }
            ]
        },
        {
            title: "Available Reports",
            blocks: [
                {
                    list: [
                        "<strong>Membership Growth:</strong> Track new sign-ups, renewals, and churn rates over time.",
                        "<strong>Financial Performance:</strong> Revenue breakdown by stream (Membership, Events, Store).",
                        "<strong>Event Analytics:</strong> Attendance numbers, ticket sales, and revenue per event.",
                        "<strong>Website Engagement:</strong> Key metrics on site traffic, popular content, and user engagement."
                    ]
                }
            ]
        }
    ]
};

export const docsAdminAwards: DocPageData = {
    title: "Awards Management",
    sections: [
        {
            title: "Overview",
            blocks: [
                {
                    content: "Tools for managing the awards program, including submissions, judging, and winner announcements."
                }
            ]
        }
    ]
};

export const docsAdminEvents: DocPageData = {
    title: "Event Management",
    sections: [
        {
            title: "Overview",
            blocks: [
                {
                    content: "Tools for creating and managing events, including ticketing, attendee lists, and venue details."
                }
            ]
        }
    ]
};

export const docsAdminMemberships: DocPageData = {
    title: "Membership Management",
    sections: [
        {
            title: "Overview",
            blocks: [
                {
                    content: "Tools for managing membership tiers, benefits, and pricing."
                }
            ]
        }
    ]
};

export const docsAdminSubmissions: DocPageData = {
    title: "Submissions Management",
    sections: [
        {
            title: "Overview",
            blocks: [
                {
                    content: "Tools for managing submissions for awards, conferences, and other programs."
                }
            ]
        }
    ]
};

export const docsAdminSupport: DocPageData = {
    title: "Support Management",
    sections: [
        {
            title: "Overview",
            blocks: [
                {
                    content: "Tools for managing support tickets and user inquiries."
                }
            ]
        }
    ]
};

export const docsAppendix: DocPageData = {
    title: "Appendix",
    sections: [
        {
            title: "Glossary",
            blocks: [
                {
                    content: "Definitions of key terms and acronyms used throughout this documentation."
                }
            ]
        }
    ]
};

export const docsAppendixWordpress: DocPageData = {
    title: "Wordpress vs Headless",
    sections: [
        {
            title: "Comparison",
            blocks: [
                {
                    content: "A detailed comparison between the traditional Wordpress approach and the modern Headless architecture adopted for this project."
                }
            ]
        }
    ]
};

export const docsGuidancePhases: DocPageData = {
    title: "Phases",
    sections: [
        {
            title: "Recommended Priorities",
            blocks: [
                {
                    content: "This section outlines the recommended priorities for the website functionality based on a cost/benefit/urgency analysis."
                }
            ]
        },
        {
            title: "Phase 1 (Must Have)",
            blocks: [
                {
                    list: [
                        "<strong>Public Content:</strong> Essential for marketing and information dissemination (Home, About, Contact).",
                        "<strong>Chapter Content:</strong> Dedicated pages for each chapter to showcase local news and events.",
                        "<strong>Member Area:</strong> Allow members to log in and view their status.",
                        "<strong>Events Listing:</strong> Display upcoming events to drive engagement.",
                        "<strong>News & Articles:</strong> Keep the site dynamic with regular updates.",
                        "<strong>Membership Application:</strong> Streamline the joining process.",
                        "<strong>External Service Linking:</strong> Linking out to external services for critical actions (e.g. buying tickets) where native integration is not yet ready."
                    ]
                }
            ]
        },
        {
            title: "Phase 2 (Should Have)",
            blocks: [
                {
                    list: [
                        "<strong>Membership Upgrade Application:</strong> Allow members to apply for a higher grade. This process involves a form submission, admin review, and potential payment adjustment.",
                        "<strong>Event Registration:</strong> Allow users to register for events online."
                    ]
                }
            ]
        },
        {
            title: "Phase 3 (Nice to Have)",
            blocks: [
                {
                    list: [
                        "<strong>E-commerce Store:</strong> Selling merchandise and publications.",
                        "<strong>Advanced Member Features:</strong> CPD tracking, invoice history.",
                        "<strong>Membership Payments:</strong> Full online payment processing for new memberships and renewals.",
                        "<strong>Integration with External Systems:</strong> Deep integration with external platforms (e.g. webinars/ticketing platforms)."
                    ]
                }
            ]
        }
    ]
};

export const docsGuidancePriorities: DocPageData = {
    title: "Feature Priorities",
    sections: [
        {
            title: "User Experience & Content",
            blocks: [
                {
                    title: "High Priority",
                    list: [
                        "<strong>Responsive Design:</strong> Fully responsive layout for mobile, tablet, and desktop.",
                        "<strong>Global Navigation:</strong> Clear, consistent header and footer navigation.",
                        "<strong>Search Functionality:</strong> Site-wide search powered by Algolia.",
                        "<strong>News Listing:</strong> Paginated list of news articles with filtering by category/chapter.",
                        "<strong>News Detail:</strong> Individual article pages with related content.",
                        "<strong>Static Pages:</strong> About Us, Contact, Privacy Policy, Terms of Service.",
                        "<strong>Chapter Pages:</strong> Dedicated landing pages for each chapter with local news and events."
                    ]
                },
                {
                    title: "Medium Priority",
                    list: [
                        "<strong>Breadcrumbs:</strong> Navigation aid for deep content hierarchy.",
                        "<strong>Social Sharing:</strong> Buttons to share content on social media.",
                        "<strong>Related Content:</strong> Automated suggestions for related articles or events."
                    ]
                }
            ]
        },
        {
            title: "Membership & Accounts",
            blocks: [
                {
                    title: "High Priority",
                    list: [
                        "<strong>Authentication:</strong> Secure login and registration via Auth0.",
                        "<strong>Password Reset:</strong> Self-service password recovery flow.",
                        "<strong>Member Dashboard:</strong> Overview of membership status and quick links.",
                        "<strong>Profile Management:</strong> Edit personal details and contact information.",
                        "<strong>Join Flow:</strong> Multi-step form for new member registration (initially offline payment)."
                    ]
                },
                {
                    title: "Medium Priority",
                    list: [
                        "<strong>Online Renewals:</strong> Integrated payment flow for membership renewals.",
                        "<strong>Upgrade Flow:</strong> Process to apply for membership grade upgrades.",
                        "<strong>Member Directory:</strong> Searchable directory of members (opt-in)."
                    ]
                },
                {
                    title: "Low Priority",
                    list: [
                        "<strong>CPD Tracking:</strong> Log and view Continuing Professional Development points.",
                        "<strong>Invoice History:</strong> View and download past invoices."
                    ]
                }
            ]
        },
        {
            title: "Events & Conferences",
            blocks: [
                {
                    title: "High Priority",
                    list: [
                        "<strong>Event Calendar:</strong> Monthly/Weekly view of upcoming events.",
                        "<strong>Event List:</strong> Filterable list of events by type and location.",
                        "<strong>Event Detail:</strong> Comprehensive event information page.",
                        "<strong>Registration (Basic):</strong> Simple form or external link for registration."
                    ]
                },
                {
                    title: "Medium Priority",
                    list: [
                        "<strong>Online Ticketing:</strong> Integrated purchase of event tickets.",
                        "<strong>Member Pricing:</strong> Automatic discount application for logged-in members.",
                        "<strong>Waitlists:</strong> Automated waitlist management for sold-out events."
                    ]
                },
                {
                    title: "Low Priority",
                    list: [
                        "<strong>Speaker Management:</strong> dedicated profiles for event speakers.",
                        "<strong>Conference Microsites:</strong> Specialized sub-sections for major conferences."
                    ]
                }
            ]
        },
        {
            title: "Awards (LiDA)",
            blocks: [
                {
                    title: "High Priority",
                    list: [
                        "<strong>Awards Information:</strong> Rules, categories, and entry guidelines.",
                        "<strong>Winners Gallery:</strong> Showcase of past award winners with images."
                    ]
                },
                {
                    title: "Medium Priority",
                    list: [
                        "<strong>Online Entry:</strong> Digital submission form for award entries.",
                        "<strong>Entry Payment:</strong> Integrated payment for entry fees."
                    ]
                },
                {
                    title: "Low Priority",
                    list: [
                        "<strong>Judging Portal:</strong> Secure area for judges to review and score entries."
                    ]
                }
            ]
        },
        {
            title: "Commerce (Shop)",
            blocks: [
                {
                    title: "Medium Priority",
                    list: [
                        "<strong>Product Catalog:</strong> Browsable list of products (publications, merchandise).",
                        "<strong>Shopping Cart:</strong> Add/remove items and view totals.",
                        "<strong>Checkout:</strong> Secure checkout process via Shopify."
                    ]
                },
                {
                    title: "Low Priority",
                    list: [
                        "<strong>Digital Downloads:</strong> Automated delivery of digital products after purchase.",
                        "<strong>Order History:</strong> Customer view of past orders and status."
                    ]
                }
            ]
        }
    ]
};



export const docsAppendixPlatformComparison: DocPageData = {
    title: "Platform Comparison",
    sections: [
        {
            title: "1. Software as a Service",
            blocks: [
                {
                    content: "Squarespace is a notable example. These tend to be focused on a specific market, for example Shopify focuses on Ecommerce. In the right situation these can be great for starting out due to minimal starting effort and maintenance requirements. Where this falls down for this project is these services typically have a fixed scope of functionality, don't deeply integrate with other platforms, and have very limited design. Another key drawback of this option is being completely locked in to the platform being used."
                }
            ]
        },
        {
            title: "2. Custom Monolith",
            blocks: [
                {
                    content: "This option would be a fully custom developed application built from the ground up. Benefits of this approach include completely custom design, content, and functionality. This approach works best for organisations which need (and can support) ongoing development. Where this is not a good fit for most projects is the higher cost and ongoing resources required."
                }
            ]
        },
        {
            title: "3. Self-hosted Monolith (Wordpress et al)",
            blocks: [
                {
                    content: "These are pre-existing software packages that typically have ecosystems of themes, plugins and integrations to expand on basic functionality. These can work well for organisations that are looking for a quick and affordable option with relatively straightforward requirements, particularly ones that don't mind putting up with rough edges or missing functionality. It’s less suited for multiple core features that would otherwise require complex plugins and deep customisation. More complex plugins typically cost a lot, don't integrate well with each other, and don't support easy customisation on top of what they already offer. Solving these issues over time is an expensive process and can result in a platform in many ways worse than custom monolith due to the added complexity of all the software involved. Additionally, underlying software updates and plugin changes can require comparable levels of maintenance to option (2) in practise."
                }
            ]
        },
        {
            title: "4. Headless",
            blocks: [
                {
                    content: "This approach evolved from the need to solve the fundamental problems associated with each of the above. The way this improves on these traditional methods is by building a small custom app to get the benefits of option (2) without the heavy costs, while communicating with multiple SAAS platforms to get the benefits of option (1) without the being limited to a single set of features. Headless software can be hosted securely at the edge via platforms like Vercel or Netlify, and at minimum only require enough maintenance to stay up to date with the API's of the various SAAS apps involved."
                }
            ]
        }
    ]
};

export const docsAppendixGlossary: DocPageData = {
    title: "Glossary",
    sections: [
        {
            title: "A-E",
            blocks: [
                {
                    title: "API (Application Programming Interface)",
                    content: "A set of rules that allows different software entities to communicate with each other. In our case, the frontend uses APIs to talk to Sanity, Shopify, and Auth0."
                },
                {
                    title: "CDN (Content Delivery Network)",
                    content: "A geographically distributed network of proxy servers and their data centers. The goal is to provide high availability and performance by distributing the service spatially relative to end-users."
                },
                {
                    title: "CMS (Content Management System)",
                    content: "Software used to manage the creation and modification of digital content. We use Sanity as our Headless CMS."
                }
            ]
        },
        {
            title: "F-J",
            blocks: [
                {
                    title: "Headless",
                    content: "An architectural style where the frontend (head) is decoupled from the backend (body). Content is delivered via APIs rather than being coupled to a specific display layer."
                },
                {
                    title: "ISR (Incremental Static Regeneration)",
                    content: "A Next.js feature that allows you to create or update static pages after you’ve built your site. This enables you to use static-generation on a per-page basis, without needing to rebuild the entire site."
                }
            ]
        },
        {
            title: "K-O",
            blocks: [
                {
                    title: "Next.js",
                    content: "A React framework that enables functionality such as server-side rendering and generating static websites for React based web applications."
                }
            ]
        },
        {
            title: "P-T",
            blocks: [
                {
                    title: "React",
                    content: "A free and open-source front-end JavaScript library for building user interfaces based on UI components."
                },
                {
                    title: "Sanity Studio",
                    content: "The open-source editor for Sanity.io that you can configure with JavaScript to fit your content needs."
                },
                {
                    title: "SSO (Single Sign-On)",
                    content: "An authentication scheme that allows a user to log in with a single ID and password to any of several related, yet independent, software systems."
                }
            ]
        },
        {
            title: "U-Z",
            blocks: [
                {
                    title: "Vercel",
                    content: "A cloud platform for static sites and Serverless Functions that fits perfectly with the workflow. It hosts our Next.js application."
                },
                {
                    title: "Webhook",
                    content: "A method of augmenting or altering the behavior of a web page or web application with custom callbacks. These may be maintained, modified, and managed by third-party users and developers who may not necessarily be affiliated with the originating website or application."
                }
            ]
        }
    ]
};
