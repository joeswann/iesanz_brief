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
        },
        {
            title: "Documentation Navigation",
            blocks: [
                {
                    content: "The documentation is organized into several key sections, accessible via the top navigation bar:",
                    list: [
                        "<strong>Overview:</strong> General project information, process, and the reverse brief.",
                        "<strong>Architecture:</strong> Technical details, services, and sitemap.",
                        "<strong>Vendor:</strong> Tender information and project brief for vendors.",
                        "<strong>Admin:</strong> Documentation for the administrative dashboard and tools.",
                        "<strong>Studio:</strong> Guides for managing content and commerce via the Studio.",
                        "<strong>Guidance:</strong> Recommended priorities and project phases.",
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
            title: "Events & Conferences",
            blocks: [
                {
                    content: "A central calendar displays all events. The system handles ticketing (free/paid, member/non-member pricing) and registration. Conferences have dedicated sub-sections with program details and speaker bios."
                }
            ]
        },
        {
            title: "Awards",
            blocks: [
                {
                    content: "The Awards program (LiDA) is fully digitized. Entrants submit projects online, and judges review them via a dedicated portal. The system manages categories, entry fees, and winner showcases."
                }
            ]
        },
        {
            title: "Education (Course/CPD)",
            blocks: [
                {
                    content: "The Course is a major revenue stream. The platform handles enrollment, payment, and access to course materials. CPD points are tracked automatically where possible."
                }
            ]
        },
        {
            title: "Shop",
            blocks: [
                {
                    content: "An e-commerce section for selling physical and digital goods (guides, standards, merchandise). It integrates with the inventory and payment systems."
                }
            ]
        }
    ]
};

export const docsVendor: DocPageData = {
    title: "Vendor Information",
    sections: [
        {
            title: "Overview",
            blocks: [
                {
                    content: "This section contains information for vendors wishing to tender for the IESANZ digital platform project. It outlines the project scope, technical requirements, and the process for submitting a proposal."
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
};

export const docsProcess: DocPageData = {
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
                    content: "The IESANZ platform integrates with several best-in-class external services to handle specific functionalities like content management, commerce, authentication, and marketing."
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
            title: "Overview",
            blocks: [
                {
                    content: "The News section allows administrators to publish articles, press releases, and updates. Content can be tagged by chapter or topic."
                }
            ]
        }
    ]
};

export const docsStudioEvents: DocPageData = {
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
};

export const docsStudioProducts: DocPageData = {
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
};

export const docsStudioOrders: DocPageData = {
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
};

export const docsStudioCustomers: DocPageData = {
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
};

export const docsStudioCollections: DocPageData = {
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
};

export const docsStudioAwards: DocPageData = {
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
};

export const docsStudioPages: DocPageData = {
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

export const docsGuidancePriorities: DocPageData = {
    title: "Priorities",
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
            title: "High Priority (Must Have)",
            blocks: [
                {
                    list: [
                        "<strong>Public Content Pages:</strong> Essential for marketing and information dissemination (Home, About, Contact).",
                        "<strong>Membership Information:</strong> Clear details on benefits and how to join.",
                        "<strong>Basic Member Portal:</strong> Allow members to log in and view their status.",
                        "<strong>Events Listing:</strong> Display upcoming events to drive engagement."
                    ]
                }
            ]
        },
        {
            title: "Medium Priority (Should Have)",
            blocks: [
                {
                    list: [
                        "<strong>Online Membership Application:</strong> Streamline the joining process.",
                        "<strong>Event Registration:</strong> Allow users to register for events online.",
                        "<strong>News & Articles:</strong> Keep the site dynamic with regular updates.",
                        "<strong>Awards Gallery:</strong> Showcase past winners."
                    ]
                }
            ]
        },
        {
            title: "Low Priority (Nice to Have)",
            blocks: [
                {
                    list: [
                        "<strong>E-commerce Store:</strong> Selling merchandise and publications.",
                        "<strong>Advanced Member Features:</strong> CPD tracking, invoice history.",
                        "<strong>Integration with External Systems:</strong> Deep integration with webinars/ticketing platforms."
                    ]
                }
            ]
        }
    ]
};

export const docsGuidancePhases: DocPageData = {
    title: "Phases",
    sections: [
        {
            title: "Project Phases",
            blocks: [
                {
                    content: "The project will be delivered in phases to ensure a timely launch of essential features while allowing for the development of more complex functionality."
                }
            ]
        },
        {
            title: "Phase 1: Essentials",
            blocks: [
                {
                    content: "The goal of Phase 1 is to get the website live with critical content and basic member systems. This establishes the digital presence and allows for basic member interaction.",
                    list: [
                        "<strong>Content:</strong> All public marketing pages, news, and basic event listings.",
                        "<strong>Membership:</strong> Information pages and a basic login for members to view their profile.",
                        "<strong>Awards:</strong> Information and gallery.",
                        "<strong>No Payment Integrations:</strong> Payments for membership or events will be handled offline or via simple forms initially."
                    ]
                }
            ]
        },
        {
            title: "Phase 2: Advanced Features",
            blocks: [
                {
                    content: "Phase 2 focuses on deepening the functionality, particularly around financial transactions and system integrations.",
                    list: [
                        "<strong>Financial System:</strong> Full integration with payment gateways for membership renewals and event tickets.",
                        "<strong>Deep Integrations:</strong> Automated syncing with webinar platforms, ticketing systems, and accounting software.",
                        "<strong>E-commerce:</strong> Full online store for physical and digital goods.",
                        "<strong>Advanced Member Portal:</strong> CPD tracking, invoice history, and self-service profile management."
                    ]
                }
            ]
        }
    ]
};
