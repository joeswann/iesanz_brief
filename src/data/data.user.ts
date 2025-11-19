import { chapters } from "./data.chapters";

export const user = {
    isLoggedIn: true,
    name: "Joe Swann",
    email: "joe@example.com",
    chapter: chapters[0], // Default to first chapter (e.g. NSW)
    subscription: {
        grade: "Member (MIES)",
        status: "Active",
        renews: "1st July 2025",
    },
    events: {
        upcoming: [
            {
                id: 1,
                title: "Annual Lighting Gala",
                date: "15th Dec 2024",
                location: "Sydney Opera House",
                link: "#",
                action: "View Ticket"
            },
            {
                id: 2,
                title: "Technical Seminar: LEDs",
                date: "20th Jan 2025",
                location: "Online",
                link: "#",
                action: "Join Webinar"
            }
        ],
        past: [
            {
                id: 3,
                title: "Networking Night",
                date: "5th Sep 2024",
                location: "The Rocks, Sydney",
                link: "#",
                action: "View Photos"
            }
        ]
    },
    awards: {
        active: [
            {
                id: 1,
                title: "Luminaire Design Award 2024",
                project: "Sydney Metro Station",
                status: "Submitted",
                date: "12th Oct 2024",
                link: "#",
                action: "View Entry"
            }
        ],
        past: [
            {
                id: 2,
                title: "Lighting Design Award 2023",
                project: "Hyde Park Upgrade",
                status: "Finalist",
                date: "10th Oct 2023",
                link: "#",
                action: "View Entry"
            }
        ]
    },
    invoices: [
        {
            id: "INV-2024-001",
            date: "1st July 2024",
            description: "Annual Membership Renewal",
            amount: "$450.00",
            status: "Paid",
            link: "#"
        },
        {
            id: "INV-2024-002",
            date: "15th Nov 2024",
            description: "Annual Lighting Gala Ticket",
            amount: "$150.00",
            status: "Paid",
            link: "#"
        }
    ],
    education: {
        cpd: {
            currentPeriod: "2024-2025",
            points: 12,
            required: 40,
            history: [
                { id: 1, activity: "Webinar: Lighting for Health", points: 2, date: "10th Aug 2024" },
                { id: 2, activity: "Technical Paper: Glare Metrics", points: 5, date: "15th Sep 2024" },
                { id: 3, activity: "Conference Attendance", points: 5, date: "20th Oct 2024" }
            ]
        },
        continueLearning: [
            {
                id: 1,
                title: "Lighting Design Fundamentals",
                module: "Module 3: Color Rendering",
                progress: 60,
                image: "#eee"
            }
        ],
        resources: [
            { title: "Understanding Glare Metrics (PDF)", link: "#" },
            { title: "Sustainable Lighting Practices (Video)", link: "#" },
            { title: "2024 Lighting Standards Update (Article)", link: "#" }
        ],
        webinars: {
            upcoming: [
                { title: "Lighting for Health", date: "24th Nov 2024", time: "12:00 PM AEDT", link: "#" },
                { title: "Smart City Lighting", date: "1st Dec 2024", time: "2:00 PM AEDT", link: "#" }
            ],
            past: [
                { title: "2023 Awards Showcase", date: "Oct 2023", link: "#" },
                { title: "Dark Sky Preservation", date: "Sep 2023", link: "#" }
            ]
        }
    }
};
