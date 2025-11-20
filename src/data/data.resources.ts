export interface ResourceSection {
    title: string;
    content: string;
}

export interface Resource {
    id: string;
    title: string;
    description: string;
    lastUpdated: string;
    sections: ResourceSection[];
}

export const resources: Resource[] = [
    {
        id: "memberships",
        title: "Memberships",
        description: "Information about IESANZ membership grades, benefits, and how to manage your membership.",
        lastUpdated: "November 2025",
        sections: [
            {
                title: "Membership Benefits",
                content: "IESANZ membership offers a wide range of benefits designed to support your professional growth and connection to the lighting industry.\n\n### Key Benefits\n- **Networking:** Connect with a diverse community of lighting professionals.\n- **Education:** Access to technical publications, webinars, and CPD opportunities.\n- **Events:** Discounted registration for conferences, awards, and chapter events.\n- **Recognition:** Eligibility for industry awards and professional grades.\n- **Advocacy:** Support for the advancement of quality lighting standards."
            },
            {
                title: "Membership Grades",
                content: "We offer several grades of membership to suit professionals at different stages of their careers.\n\n### Associate (MIES Associate)\nOpen to those with an interest in lighting or who are just starting their career.\n\n### Technician (TechIES)\nFor individuals with technical qualifications and experience in lighting.\n\n### Member (MIES)\nFor experienced professionals who have demonstrated competence in lighting design or engineering.\n\n### Fellow (FIES)\nAwarded to members who have made significant contributions to the Society and the industry."
            },
            {
                title: "Getting Started",
                content: "Welcome to the new IESANZ website! As a member, you have access to exclusive content, event registration discounts, and more. To get started, please ensure you can log in to your account using the email address associated with your membership."
            },
            {
                title: "Managing Your Profile",
                content: "You can update your personal details, contact information, and communication preferences in the 'My Account' section. Keeping your profile up-to-date ensures you receive relevant news and event invitations from your local chapter."
            },
            {
                title: "CPD Tracking",
                content: "The website allows you to track your Continuing Professional Development (CPD) points. You can log new activities and view your progress towards your annual goals in the Education section of your account."
            }
        ]
    },
    {
        id: "project-brief",
        title: "Project Brief",
        description: "A comprehensive renewal of the IESANZ digital online presence.",
        lastUpdated: "November 2025",
        sections: [
            {
                title: "IESANZ",
                content: "IESANZ is an international organisation based in Australia and New Zealand. It’s organisational structure consists of a central board with portfolios for fundamental areas of the organisation (Awards, Conferences, Education, etc) and six chapters (NZ, NSW + ACT, WA, VIC + TAS, SA + NT, QLD), these all have an influence on the governance and administration of the overall organisation and the website."
            },
            {
                title: "Purpose",
                content: "This project is a comprehensive renewal of the IESANZ digital online presence, based around the functionality of the website located at [https://www.iesanz.org/](https://www.iesanz.org/). Once completed the new website will implement an intuitive, clean and functional interface for visitors and members, while streamlining a wide range of back office procedures through well planned digital processes and integrations."
            },
            {
                title: "Approach",
                content: "As there are several components and portfolios within the organisation there are quite a few disparate areas to integrate across the platform. This document will be organised into a number of groups and verticals that separate these areas, along with details around the various key components of the website structure and production process.\n\nThe brief will be organised as much as possible to reflect the business structure and processes that drive it, this includes the chapter system, board portfolios, and external drivers such as marketing and advertising.\n\nThe complexity of the brief will involve some careful consideration of priorities in order to produce a clearly successful result within a reasonable timeframe and budget. To that end we will highlight details which make sense to action in a future phase of the platforms evolution."
            },
            {
                title: "Outline",
                content: "Visitors to the IESANZ platform can be grouped into several categories / segments, and the content they view can be determined by a number of factors such as which chapter they belong to, whether they are logged in, and which level of access they have. On the surface level there is public content, which is accessible by any visitor and is generally used for information about the organisation, marketing for the benefits of membership, and onboarding. Chapters communicate with their members through their hubs, which provide a centralised location for announcements and important information. Finally there are the member hubs, which are where the majority of the digital membership benefits are located. These include educational resources, ticket functionality, access to whitepapers, and so on."
            },
            {
                title: "What success looks like",
                content: "A successful outcome delivers a platform that supports approximately 1,000 active members and provides a more productive and value-driven experience for members, chapters, and administrators. It should strengthen the case for joining and remaining a member through simpler onboarding, clearer communication of benefits, and streamlined renewal and upgrade paths. The platform should also enable the organisation to operate more efficiently across its various portfolios and chapters by reducing manual work and improving the accuracy and timeliness of member-related processes."
            },
            {
                title: "Design Brief",
                content: "The new digital presence should modernise the organisation’s branding, typography, layout and overall presentation, while ensuring that the transition between public-facing content and member-specific functionality is seamless. The public website should communicate the organisation’s value, purpose, and opportunities, while the member area should provide functional depth without compromising ease of use. Clear calls-to-action, effective storytelling, and a consistent visual language should support the marketing objectives of membership growth, event attendance, sponsorship, and participation in awards and education programs."
            },
            {
                title: "Public",
                content: "The public website will serve as the primary entry point for prospective members, partners, and the general public. It will provide accessible information about the organisation, its chapters, and its activities, along with regularly updated content such as upcoming events, news items, and public announcements.\n\nKey content includes case studies, interviews, news articles, awards information, white papers, and general information pages such as Objectives, FAQ, and Conditions of Entry. Public storytelling should support marketing and member acquisition, offering clear pathways to learn more, sign up, and engage.\n\nPortfolio-level content (Awards, Conferences, Education, Marketing, Membership) as well as chapter-specific updates will be visible to the public as appropriate. A centralised knowledge base will cover membership support, education resources, mentorship information, policy and advocacy content, CPD guidance, and general FAQs.\n\nThe public area will also include a directory of members (who have opted in), with appropriate filters and recognition of achievements such as awards or credentials."
            },
            {
                title: "Chapters",
                content: "Chapters will be able to publish and manage content tailored to their region, including upcoming events, workshops, CPD opportunities, awards, news, and committee information. Each chapter will maintain a hub that serves as a central point for local activities and communications.\n\nChapter Coordinators will use the CMS and admin tools to publish content, update contacts, and maintain chapter channels."
            },
            {
                title: "Member Area",
                content: "The Member Area will provide deeper access to organisational resources and benefits. This includes gated educational material, technical papers, recordings, and other member-only content. Members will be able to register for events, access their tickets, request access to webinars, and interact with content relevant to their membership grade and chapter.\n\nA unified dashboard will provide an overview of membership status, invoices, payment methods, education enrolments, awards entries, event tickets, sponsorships, and future CPD tracking. This area should be intuitive to navigate and designed for ongoing engagement."
            },
            {
                title: "Accounts",
                content: "Members will be able to manage their contact information, login details, communication preferences, privacy settings, and chapter affiliation. Over time, profile information will support further personalisation such as the profiles in the public member directory."
            },
            {
                title: "Membership",
                content: "The membership section supports the full lifecycle of member engagement. Members can submit upgrades, renewals, and other membership requests through multi-step forms that allow saving progress and resuming later.\n\nDifferent membership grades (corporate, non-corporate, student, emerging professional, chapter tiers) will be built out over time according to clearly defined benefits and rules. Special statuses such as lifetime, honorary, resigned, and terminated will also be supported. Where appropriate, the system will automate lifecycle communications, sending reminders for renewals or lapsed accounts and supporting reactivation flows.\n\nIn future corporate memberships will include tools for managing delegates, allocating seats, administering billing, and tracking usage."
            },
            {
                title: "Education & Training",
                content: "The platform will provide structured access to education and training materials, including downloadable resources such as publications, white papers, and case studies. Access levels will align with membership tiers where relevant.\n\nEducation pathways, including courses, webinars, conferences, and mentorship programs, will be clearly presented. A comprehensive knowledge base will support both members and administrators with information relevant to education and CPD."
            },
            {
                title: "Conferences",
                content: "Conference content may be delivered through dedicated hubs containing agendas, speaker profiles, sponsor information, testimonials, and registration options.\n\nA future version of this section could include deeper tooling for managing the conference organisation via the wider platform."
            },
            {
                title: "Awards",
                content: "The awards section will support the complete awards lifecycle from a content perspective, from public promotion to entry submission, judging, and archiving. Past winners, juror bios, media kits, and sponsorship placements will be maintained in a consistent structure aligned with branding and marketing objectives.\n\nA future version of this section could include deeper tooling for managing the award process via the wider platform."
            },
            {
                title: "Marketing",
                content: "The website can support marketing initiatives through scheduled announcements, speaker spotlights, sponsorship communication, and social content distribution. Storytelling through case studies, testimonials, and other assets should reinforce the organisation’s strategic goals."
            },
            {
                title: "Commerce",
                content: "The storefront will work toward offering publications, job advertisements, sponsorship packages, merchandise, and chapter-specific products. Integration with store, payment, and accounting platforms will ensure accurate invoicing, reporting, and fulfilment. Localisation requirements include NZD and AUD handling, GST (NZ/AU/None), and variations in between Australia and New Zealand.\n\nIn future updates the purchasing on behalf of others, including corporate delegates, will be supported."
            },
            {
                title: "Content Management Admin",
                content: "Administrators will maintain content categories covering informational pages, the knowledgebase, educational content, articles, and marketing assets."
            },
            {
                title: "Super Admin",
                content: "Super Admin users oversee global details across the platform including navigation, integrations, reports, and settings."
            },
            {
                title: "Integrations",
                content: "The platform will interact with multiple external systems, including the membership database, Content Management System, Store, Payments, Accounts, Events, Analytics, and Marketing platforms.\n\nMembership profiles, chapter permissions, and CRM data will be unified to improve accuracy and reduce duplication."
            },
            {
                title: "Automations",
                content: "Key processes such as onboarding, renewals, upgrades, account recovery, and chapter assignment will be automated where possible to reduce administrative load. Implementing automated checks for duplicate accounts or suspicious activity will support data quality and security."
            },
            {
                title: "Performance",
                content: "Performance targets include strong Core Web Vitals, optimised loading of images and media, effective caching, and minimal blocking scripts. The platform should include monitoring to help track issues and guide ongoing optimisation."
            },
            {
                title: "Security",
                content: "Access control must ensure that public, chapter, member, and administrative areas remain appropriately separated and inaccessible by the wrong users. Administrative and CMS tools should not be publicly exposed. Recommended practises such as 2FA should be considered throughout.\n\nRole-based access will reflect the organisation’s structure, including board roles, chapter coordinators, and administrative levels."
            },
            {
                title: "Reporting & Governance",
                content: "Comprehensive reporting will support membership analysis, finance and commerce insights, event participation, content usage, and marketing performance. Dashboards should provide both real-time monitoring and historical views, with future extensions planned for CPD tracking and corporate account reporting.\n\nAnalytics integrations will support reporting across membership activities, events, CPD, and marketing outcomes."
            },
            {
                title: "Financials",
                content: "Financial processes will include consistent handling of refunds, failed payments, sponsorship deliverables, and compliance requirements. Synchronisation between CRM, CMS, finance tools, awards, and education systems will ensure accurate records. This will be an ongoing process, potentially starting as a separate phase after the core membership system has been built."
            },
            {
                title: "Legal",
                content: "The platform must comply with privacy laws in Australia and New Zealand, GDPR requirements, and the Spam Act. Accessible design principles should be incorporated, and claims related to accreditation must be correct and compliant. Payment systems must meet PCI standards."
            },
            {
                title: "Migrations",
                content: "Where existing workflows, such as Monday.com are replaced, the migration process will include QA, testing, and clearly understood transition plans."
            },
            {
                title: "Ongoing Updates",
                content: "The platform will continue to evolve, with planned future enhancements including corporate account systems, conference ticketing integration, improved awards management, consolidation of microsites, advanced sponsorship tools, download licensing, CPD tracking, livestreaming and virtual event features, and advanced financial management of members.\n\nThese updates will be prioritised in collaboration with the board and chapters as the core platform stabilises."
            }
        ]
    }
];
