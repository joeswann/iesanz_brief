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
            title: "Reverse Brief",
            blocks: [
                {
                    title: "Public Website",
                    content: "The public website serves as the primary entry point, providing accessible information about the organisation, chapters, and activities. Key content includes case studies, news, awards info, and general pages (Objectives, FAQ). It supports marketing and member acquisition."
                },
                {
                    title: "Chapters",
                    content: "Chapters can publish and manage content tailored to their region (events, news, committee info). Each chapter maintains a hub for local activities. Chapter Coordinators use the CMS to manage this content."
                },
                {
                    title: "Member Area",
                    content: "Provides deeper access to resources (gated educational material, technical papers). Members can register for events, access tickets, and view a unified dashboard of their status, invoices, and CPD tracking."
                },
                {
                    title: "Accounts & Membership",
                    content: "Members manage contact info and preferences. The system supports the full membership lifecycle (join, renew, upgrade) with multi-step forms. Different grades (corporate, student, etc.) are supported."
                },
                {
                    title: "Events & Conferences",
                    content: "A central calendar displays all events. The system handles ticketing (free/paid, member/non-member pricing) and registration. Conferences have dedicated sub-sections with program details and speaker bios."
                },
                {
                    title: "Awards",
                    content: "The Awards program (LiDA) is fully digitized. Entrants submit projects online, and judges review them via a dedicated portal. The system manages categories, entry fees, and winner showcases."
                },
                {
                    title: "Education (Course/CPD)",
                    content: "The Course is a major revenue stream. The platform handles enrollment, payment, and access to course materials. CPD points are tracked automatically where possible."
                },
                {
                    title: "Shop",
                    content: "An e-commerce section for selling physical and digital goods (guides, standards, merchandise). It integrates with the inventory and payment systems."
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
                    content: "The central hub for administrators, providing a high-level view of system status, recent activity, and key metrics."
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
                    content: "Manage member accounts, view membership status, update contact info, and handle renewals or upgrades."
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
                    content: "Access tools for managing website content, including the Knowledgebase, educational resources, and marketing assets."
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
                    content: "Configure global system settings, including site metadata, navigation menus, and integration parameters."
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
                    content: "View a log of all financial transactions, including membership fees, event tickets, and store purchases."
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
                    content: "Generate reports on membership growth, financial performance, event attendance, and website analytics."
                }
            ]
        }
    ]
};

export const docsAdminAwards: DocPageData = {
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
};

export const docsAdminEvents: DocPageData = {
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
};

export const docsAdminMemberships: DocPageData = {
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
};

export const docsAdminSubmissions: DocPageData = {
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
};

export const docsAdminSupport: DocPageData = {
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
};

export const docsAppendix: DocPageData = {
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
};

export const docsAppendixWordpress: DocPageData = {
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
};

// Backward compatibility object if needed, though we should migrate away from it
export const docsData = {
    overview: docsOverview,
    architecture: docsArchitecture,
    process: docsProcess,
    architectureSitemap: docsArchitectureSitemap,
    architectureServices: docsArchitectureServices,
    servicesSanity: docsServicesSanity,
    servicesShopify: docsServicesShopify,
    servicesAuth0: docsServicesAuth0,
    servicesKlaviyo: docsServicesKlaviyo,
    servicesAlgolia: docsServicesAlgolia,
    studio: docsStudio,
    studioNews: docsStudioNews,
    studioEvents: docsStudioEvents,
    studioProducts: docsStudioProducts,
    studioOrders: docsStudioOrders,
    studioCustomers: docsStudioCustomers,
    studioCollections: docsStudioCollections,
    studioAwards: docsStudioAwards,
    studioPages: docsStudioPages,
    admin: docsAdmin,
    adminDashboard: docsAdminDashboard,
    adminMembers: docsAdminMembers,
    adminContent: docsAdminContent,
    adminSettings: docsAdminSettings,
    adminPayments: docsAdminPayments,
    adminReports: docsAdminReports,
    adminAwards: docsAdminAwards,
    adminEvents: docsAdminEvents,
    adminMemberships: docsAdminMemberships,
    adminSubmissions: docsAdminSubmissions,
    adminSupport: docsAdminSupport,
    appendix: docsAppendix,
    appendixWordpress: docsAppendixWordpress
};
