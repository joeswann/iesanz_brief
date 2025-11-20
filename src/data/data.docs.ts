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
        title: "Project Overview",
        sections: [
            {
                title: "Purpose",
                blocks: [
                    {
                        content: "This project is a comprehensive renewal of the IESANZ digital online presence. The goal is to implement an intuitive, clean, and functional interface for visitors and members, while streamlining back-office procedures through well-planned digital processes and integrations."
                    }
                ]
            },
            {
                title: "Approach",
                blocks: [
                    {
                        content: "The project addresses the disparate components of the organisation (Awards, Conferences, Education, etc.) by integrating them into a unified platform. The solution is designed to reflect the business structure, including the chapter system and board portfolios."
                    }
                ]
            },
            {
                title: "Success Criteria",
                blocks: [
                    {
                        content: "A successful outcome delivers a platform that supports approximately 1,000 active members, providing a more productive experience. It should strengthen membership growth through simpler onboarding and clearer communication of benefits, while improving operational efficiency for administrators."
                    }
                ]
            }
        ]
    },
    brief: {
        title: "Reverse Brief",
        sections: [
            {
                title: "Public Website",
                blocks: [
                    {
                        content: "The public website serves as the primary entry point, providing accessible information about the organisation, chapters, and activities. Key content includes case studies, news, awards info, and general pages (Objectives, FAQ). It supports marketing and member acquisition."
                    }
                ]
            },
            {
                title: "Chapters",
                blocks: [
                    {
                        content: "Chapters can publish and manage content tailored to their region (events, news, committee info). Each chapter maintains a hub for local activities. Chapter Coordinators use the CMS to manage this content."
                    }
                ]
            },
            {
                title: "Member Area",
                blocks: [
                    {
                        content: "Provides deeper access to resources (gated educational material, technical papers). Members can register for events, access tickets, and view a unified dashboard of their status, invoices, and CPD tracking."
                    }
                ]
            },
            {
                title: "Accounts & Membership",
                blocks: [
                    {
                        content: "Members manage contact info and preferences. The system supports the full membership lifecycle (join, renew, upgrade) with multi-step forms. Different grades (corporate, student, etc.) are supported."
                    }
                ]
            },
            {
                title: "Education & Training",
                blocks: [
                    {
                        content: "Structured access to education materials, courses, webinars, and mentorship programs. Access levels align with membership tiers."
                    }
                ]
            },
            {
                title: "Conferences & Awards",
                blocks: [
                    {
                        content: "Conferences have dedicated hubs for agendas and registration. The Awards section supports the complete lifecycle from entry submission to judging and archiving winners."
                    }
                ]
            },
            {
                title: "Commerce",
                blocks: [
                    {
                        content: "The storefront offers publications, job ads, sponsorships, and merchandise. It integrates with payment and accounting platforms (Xero) and handles multi-currency (AUD/NZD) and GST."
                    }
                ]
            },
            {
                title: "Admin & Operations",
                blocks: [
                    {
                        content: "Administrators manage content categories. Super Admins oversee global settings. Integrations connect the CMS, membership database, finance, and marketing tools. Key processes like onboarding and renewals are automated."
                    }
                ]
            },
            {
                title: "Performance & Security",
                blocks: [
                    {
                        content: "Targets include strong Core Web Vitals and optimised loading. Security measures include role-based access control, separation of public/admin areas, and compliance with privacy laws (GDPR, Spam Act)."
                    }
                ]
            }
        ]
    },
    architecture: {
        title: "Technical Architecture",
        sections: [
            {
                title: "Headless Approach",
                blocks: [
                    {
                        content: "We are using a headless architecture to separate the frontend user experience from backend services. This allows for straightforward maintenance, better performance, and the ability to integrate best-in-class services without vendor lock-in."
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
    },
    process: {
        title: "Development Process",
        sections: [
            {
                title: "Phases",
                blocks: [
                    {
                        title: "1. Discovery & Planning",
                        content: "Clarifying objectives, gathering requirements, and establishing the technical strategy and roadmap."
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
                        content: "Verifying features, testing performance, and resolving issues."
                    },
                    {
                        title: "5. Deployment",
                        content: "Setting up the production environment, migrating content, and launching the site."
                    },
                    {
                        title: "6. Post-Launch Support",
                        content: "Monitoring performance and addressing any immediate post-launch issues."
                    }
                ]
            }
        ]
    },
    sitemap: {
        title: "Sitemap",
        sections: [
            {
                title: "Public Routes",
                blocks: [
                    {
                        list: [
                            "<strong>/</strong> – Home Page",
                            "<strong>/about</strong> – Organisation Information",
                            "<strong>/membership</strong> – Membership Info & Signup",
                            "<strong>/contact</strong> – Contact Details",
                            "<strong>/news</strong> – News & Articles",
                            "<strong>/events</strong> – Events Calendar",
                            "<strong>/awards</strong> – Awards Program",
                            "<strong>/conferences</strong> – Conference Information",
                            "<strong>/resources</strong> – Knowledgebase & Technical Documents",
                            "<strong>/store</strong> – Storefront",
                            "<strong>/cart</strong> – Shopping Cart",
                            "<strong>/calendar</strong> – Full Event Calendar"
                        ]
                    }
                ]
            },
            {
                title: "Chapter Routes",
                blocks: [
                    {
                        list: [
                            "<strong>/chapters</strong> – All Chapters Overview",
                            "<strong>/chapters/$chapterId</strong> – Specific Chapter Home",
                            "<strong>/chapters/$chapterId/news</strong> – Chapter News",
                            "<strong>/chapters/$chapterId/events</strong> – Chapter Events",
                            "<strong>/chapters/$chapterId/awards</strong> – Chapter Awards",
                            "<strong>/chapters/$chapterId/gallery</strong> – Chapter Gallery"
                        ]
                    }
                ]
            },
            {
                title: "Account Routes",
                blocks: [
                    {
                        list: [
                            "<strong>/account</strong> – Member Dashboard",
                            "<strong>/account/login</strong> – Login Page",
                            "<strong>/account/profile</strong> – Profile Management",
                            "<strong>/account/subscription</strong> – Membership Subscription",
                            "<strong>/account/invoices</strong> – Invoice History",
                            "<strong>/account/events</strong> – My Events",
                            "<strong>/account/awards</strong> – My Awards",
                            "<strong>/account/education</strong> – Education Dashboard",
                            "<strong>/account/education/cpd</strong> – CPD Tracking",
                            "<strong>/account/education/webinars</strong> – Webinars",
                            "<strong>/account/education/resources</strong> – Educational Resources",
                            "<strong>/account/upgrade</strong> – Membership Upgrade"
                        ]
                    }
                ]
            },
            {
                title: "Admin Routes",
                blocks: [
                    {
                        list: [
                            "<strong>/admin</strong> – Dashboard",
                            "<strong>/admin/members</strong> – Member Management",
                            "<strong>/admin/content</strong> – Content Management",
                            "<strong>/admin/settings</strong> – System Settings",
                            "<strong>/admin/payments</strong> – Payment History",
                            "<strong>/admin/reports</strong> – Reporting",
                            "<strong>/admin/awards</strong> – Awards Management",
                            "<strong>/admin/events</strong> – Events Management",
                            "<strong>/admin/memberships</strong> – Membership Products",
                            "<strong>/admin/submissions</strong> – Form Submissions",
                            "<strong>/admin/support</strong> – Support Tickets"
                        ]
                    }
                ]
            },
            {
                title: "Studio Routes",
                blocks: [
                    {
                        list: [
                            "<strong>/studio</strong> – Content & Commerce Dashboard",
                            "<strong>/studio/news</strong> – News Management",
                            "<strong>/studio/events</strong> – Event Management",
                            "<strong>/studio/products</strong> – Product Management",
                            "<strong>/studio/orders</strong> – Order Management",
                            "<strong>/studio/customers</strong> – Customer Management",
                            "<strong>/studio/collections</strong> – Product Collections",
                            "<strong>/studio/awards</strong> – Awards Management",
                            "<strong>/studio/pages</strong> – General Page Management"
                        ]
                    }
                ]
            },
            {
                title: "Documentation",
                blocks: [
                    {
                        list: [
                            "<strong>/docs</strong> – Overview",
                            "<strong>/docs/brief</strong> – Reverse Brief",
                            "<strong>/docs/architecture</strong> – Technical Architecture",
                            "<strong>/docs/process</strong> – Development Process",
                            "<strong>/docs/sitemap</strong> – Sitemap & Routes",
                            "<strong>/docs/studio</strong> – Studio Documentation"
                        ]
                    }
                ]
            }
        ]
    },
    studio: {
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
    },
    services: {
        title: "Services & Integrations",
        sections: [
            {
                title: "Core Infrastructure",
                blocks: [
                    {
                        title: "Sanity",
                        content: "Sanity is the Headless Content Management System (CMS) used to manage all dynamic content across the platform. It provides a flexible, structured content lake that powers the website, mobile apps, and other digital touchpoints. It allows for real-time collaboration, version control, and a customizable editing environment for administrators."
                    },
                    {
                        title: "Vercel",
                        content: "Vercel is the hosting and deployment platform for the Next.js frontend. It provides a global Edge Network for fast content delivery, serverless functions for dynamic API routes, and automatic deployments from Git. It ensures high performance, scalability, and security for the public-facing application."
                    }
                ]
            },
            {
                title: "Commerce & Finance",
                blocks: [
                    {
                        title: "Shopify",
                        content: "Shopify is used as the headless e-commerce engine. It handles product management, cart functionality, and secure checkout processing. It supports multi-currency transactions, tax calculation, and subscription management, ensuring a robust and compliant commerce experience."
                    },
                    {
                        title: "Xero",
                        content: "Xero is the accounting software integrated for financial management. The platform syncs invoices, payments, and customer data with Xero to ensure accurate financial reporting and streamlined bookkeeping. This integration automates the reconciliation process and reduces manual data entry."
                    }
                ]
            },
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
                title: "Marketing & Analytics",
                blocks: [
                    {
                        title: "Klaviyo",
                        content: "Klaviyo is the marketing automation platform used for email communications and customer engagement. It integrates with the user database to send personalized newsletters, transactional emails (e.g., welcome messages, renewal reminders), and targeted campaigns based on user behavior."
                    },
                    {
                        title: "Google Analytics 4 (GA4)",
                        content: "Google Analytics 4 is used for tracking website traffic, user behavior, and engagement metrics. It provides insights into how users interact with the platform, helping to inform content strategy and UX improvements."
                    }
                ]
            },
            {
                title: "Search & Discovery",
                blocks: [
                    {
                        title: "Algolia",
                        content: "Algolia is the search and discovery engine required to provide fast, relevant search results across the site's content. It indexes data from Sanity and Shopify to enable instant search, faceting, and filtering for members, events, resources, and products."
                    }
                ]
            }
        ]
    },
    admin: {
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
    },
    appendix: {
        title: "Appendix",
        sections: [
            {
                title: "Overview",
                blocks: [
                    {
                        content: "This section contains supplementary information and detailed comparisons to support the architectural decisions made for the IESANZ platform."
                    }
                ]
            }
        ]
    },
    appendixWordpress: {
        title: "Wordpress vs Headless Architecture",
        sections: [
            {
                title: "Top Line Issues with Wordpress Plugin Stack",
                blocks: [
                    {
                        list: [
                            "<strong>High Maintenance & Security Risks:</strong> Reliance on a stack of 7+ major plugins (Paid Memberships Pro, LearnDash, etc.) increases vulnerability. History of security breaches in these plugins requires constant patching.",
                            "<strong>Performance Bottlenecks:</strong> Wordpress is not optimized for high-performance logged-in user traffic. Heavy database queries from multiple plugins can slow down the site.",
                            "<strong>Plugin Conflicts:</strong> Plugins are not designed to work seamlessly together, leading to fragmented user experiences and potential breakages during updates.",
                            "<strong>Customization Limitations:</strong> Fixed templates and workflows limit deep functional customizations without risky hacks.",
                            "<strong>Long-Term Costs:</strong> Licensing fees for multiple premium plugins and increased hosting costs add up. Vendor lock-in is a significant risk."
                        ]
                    }
                ]
            },
            {
                title: "Why Headless is the Smarter Investment",
                blocks: [
                    {
                        content: "A headless CMS + Next.js architecture avoids these issues by separating the front-end from the back-end, using modern APIs instead of a plugin-based system.",
                        list: [
                            "<strong>Security & Stability:</strong> No reliance on vulnerable plugins; a statically generated front-end with locked-down APIs reduces the risk of hacking.",
                            "<strong>Performance & Scalability:</strong> Faster page loads, better handling of traffic spikes, and reduced server load.",
                            "<strong>Full Design & Functional Flexibility:</strong> Every part of the site can be custom-designed without plugin limitations.",
                            "<strong>Seamless Integrations:</strong> Direct API connections to services like Xero, Shopify, and Sanity ensure smooth data flow.",
                            "<strong>Lower Long-Term Costs:</strong> Eliminates ongoing plugin fees and reduces maintenance overhead."
                        ]
                    }
                ]
            }
        ]
    }
},
    studioNews: {
        title: "News Management",
        sections: [
            {
                title: "Overview",
                blocks: [
                    {
                        content: "The News section allows administrators to publish articles, press releases, and updates. Content can be tagged by chapter or topic."
                    }
                ]
            }
        ]
    },
    studioEvents: {
        title: "Event Management",
        sections: [
            {
                title: "Overview",
                blocks: [
                    {
                        content: "Manage upcoming events, conferences, and webinars. This includes setting dates, locations, ticket prices, and capacity limits."
                    }
                ]
            }
        ]
    },
    studioProducts: {
        title: "Product Management",
        sections: [
            {
                title: "Overview",
                blocks: [
                    {
                        content: "Manage the catalog of physical and digital products available in the store. This integrates directly with Shopify."
                    }
                ]
            }
        ]
    },
    studioOrders: {
        title: "Order Management",
        sections: [
            {
                title: "Overview",
                blocks: [
                    {
                        content: "View and process customer orders. Track fulfillment status and handle refunds or cancellations."
                    }
                ]
            }
        ]
    },
    studioCustomers: {
        title: "Customer Management",
        sections: [
            {
                title: "Overview",
                blocks: [
                    {
                        content: "View customer profiles, purchase history, and contact details. This data is synchronized with the membership system."
                    }
                ]
            }
        ]
    },
    studioCollections: {
        title: "Collection Management",
        sections: [
            {
                title: "Overview",
                blocks: [
                    {
                        content: "Group products into collections for easier browsing in the store (e.g., 'Publications', 'Merchandise')."
                    }
                ]
            }
        ]
    },
    studioAwards: {
        title: "Awards Management",
        sections: [
            {
                title: "Overview",
                blocks: [
                    {
                        content: "Manage award categories, entry criteria, and submission periods. This section also handles the judging process configuration."
                    }
                ]
            }
        ]
    },
    studioPages: {
        title: "Page Management",
        sections: [
            {
                title: "Overview",
                blocks: [
                    {
                        content: "Create and edit general content pages (e.g., About Us, Privacy Policy) using the Sanity CMS editor."
                    }
                ]
            }
        ]
    },
    adminDashboard: {
        title: "Admin Dashboard",
        sections: [
            {
                title: "Overview",
                blocks: [
                    {
                        content: "The central hub for administrators, providing a high-level view of system status, recent activity, and key metrics."
                    }
                ]
            }
        ]
    },
    adminMembers: {
        title: "Member Management",
        sections: [
            {
                title: "Overview",
                blocks: [
                    {
                        content: "Manage member accounts, view membership status, update contact info, and handle renewals or upgrades."
                    }
                ]
            }
        ]
    },
    adminContent: {
        title: "Content Management",
        sections: [
            {
                title: "Overview",
                blocks: [
                    {
                        content: "Access tools for managing website content, including the Knowledgebase, educational resources, and marketing assets."
                    }
                ]
            }
        ]
    },
    adminSettings: {
        title: "System Settings",
        sections: [
            {
                title: "Overview",
                blocks: [
                    {
                        content: "Configure global system settings, including site metadata, navigation menus, and integration parameters."
                    }
                ]
            }
        ]
    },
    adminPayments: {
        title: "Payment History",
        sections: [
            {
                title: "Overview",
                blocks: [
                    {
                        content: "View a log of all financial transactions, including membership fees, event tickets, and store purchases."
                    }
                ]
            }
        ]
    },
    adminReports: {
        title: "Reporting",
        sections: [
            {
                title: "Overview",
                blocks: [
                    {
                        content: "Generate reports on membership growth, financial performance, event attendance, and website analytics."
                    }
                ]
            }
        ]
    },
    adminAwards: {
        title: "Awards Administration",
        sections: [
            {
                title: "Overview",
                blocks: [
                    {
                        content: "Oversee the awards process, including managing submissions, assigning judges, and publishing winners."
                    }
                ]
            }
        ]
    },
    adminEvents: {
        title: "Events Administration",
        sections: [
            {
                title: "Overview",
                blocks: [
                    {
                        content: "Administrative tools for managing the events calendar, registrations, and attendee lists."
                    }
                ]
            }
        ]
    },
    adminMemberships: {
        title: "Membership Products",
        sections: [
            {
                title: "Overview",
                blocks: [
                    {
                        content: "Configure membership tiers, pricing, benefits, and renewal rules."
                    }
                ]
            }
        ]
    },
    adminSubmissions: {
        title: "Form Submissions",
        sections: [
            {
                title: "Overview",
                blocks: [
                    {
                        content: "View and manage submissions from various forms across the site, such as contact inquiries or expressions of interest."
                    }
                ]
            }
        ]
    },
    adminSupport: {
        title: "Support Tickets",
        sections: [
            {
                title: "Overview",
                blocks: [
                    {
                        content: "Track and resolve member support requests and technical issues."
                    }
                ]
            }
        ]
    }
};
