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
        id: "member-guide",
        title: "Member Help Guide",
        description: "A comprehensive guide for IESANZ members on how to use the website and manage their membership.",
        lastUpdated: "November 2025",
        sections: [
            {
                title: "Getting Started",
                content: "Welcome to the new IESANZ website! As a member, you have access to exclusive content, event registration discounts, and more. To get started, please ensure you can log in to your account using the email address associated with your membership."
            },
            {
                title: "Managing Your Profile",
                content: "You can update your personal details, contact information, and communication preferences in the 'My Account' section. Keeping your profile up-to-date ensures you receive relevant news and event invitations from your local chapter."
            },
            {
                title: "Event Registration",
                content: "To register for an event, navigate to the Events page or your Chapter's event listing. Members should log in before registering to automatically receive any applicable member discounts. You can view your upcoming and past event registrations in your account dashboard."
            },
            {
                title: "CPD Tracking",
                content: "The website allows you to track your Continuing Professional Development (CPD) points. You can log new activities and view your progress towards your annual goals in the Education section of your account."
            }
        ]
    },
    {
        id: "technical-brief",
        title: "Website Technical Brief",
        description: "Technical documentation outlining the architecture, technologies, and design principles of the IESANZ website.",
        lastUpdated: "November 2025",
        sections: [
            {
                title: "Architecture Overview",
                content: "The IESANZ website is built as a modern Single Page Application (SPA) using React. It utilizes a client-side routing architecture powered by TanStack Router for seamless navigation and state management."
            },
            {
                title: "Technology Stack",
                content: "Key technologies include:\n- **Framework:** React 19\n- **Routing:** TanStack Router\n- **Styling:** Linaria (Zero-runtime CSS-in-JS)\n- **Build Tool:** Vite\n- **Language:** TypeScript"
            },
            {
                title: "Design System",
                content: "The UI is built upon a custom 'Lofi' design system that prioritizes clean typography and structural clarity. We use a consistent set of typography components (`TypeHeading`, `TypeBody`) and layout primitives to ensure visual consistency across the site."
            },
            {
                title: "Data Management",
                content: "Content is currently managed via structured data files within the application, allowing for easy updates and version control. Future iterations may integrate with a headless CMS for dynamic content management."
            }
        ]
    }
];
