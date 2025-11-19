export interface NewsItem {
    id: string;
    title: string;
    date: string;
    category: string;
    chapter?: string;
    summary: string;
    imageLabel: string;
    isPopular?: boolean;
    isArchived?: boolean;
}

export const categories = [
    "All News",
    "Chapter News",
    "Awards Updates",
    "Events & Conferences",
    "Industry Insights",
    "Member Spotlights",
];

export const newsData: NewsItem[] = [
    {
        id: "1",
        title: "IESANZ 2025 Awards Winners Announced",
        date: "2025-10-24",
        category: "Awards Updates",
        summary:
            "The Illuminating Engineering Society of Australia and New Zealand is proud to announce the winners of the 2025 Lighting Design Awards.",
        imageLabel: "Awards Night",
        isPopular: true,
    },
    {
        id: "2",
        title: "New Chapter Committee for NSW",
        date: "2025-10-20",
        category: "Chapter News",
        chapter: "NSW",
        summary:
            "We are pleased to welcome the newly elected committee members for the New South Wales chapter.",
        imageLabel: "Committee",
    },
    {
        id: "3",
        title: "Sustainable Lighting Practices Workshop",
        date: "2025-10-15",
        category: "Events & Conferences",
        chapter: "VIC",
        summary:
            "Join us for a hands-on workshop exploring the latest in sustainable lighting design and technology.",
        imageLabel: "Workshop",
        isPopular: true,
    },
    {
        id: "4",
        title: "The Future of LED Technology",
        date: "2025-10-10",
        category: "Industry Insights",
        summary:
            "An in-depth look at emerging trends in LED technology and what they mean for the future of illumination.",
        imageLabel: "LED Tech",
    },
    {
        id: "5",
        title: "Member Spotlight: Sarah Jenkins",
        date: "2025-10-05",
        category: "Member Spotlights",
        chapter: "QLD",
        summary:
            "Meet Sarah Jenkins, a lighting designer from Queensland who is making waves with her innovative approach to urban lighting.",
        imageLabel: "Portrait",
    },
    {
        id: "6",
        title: "2024 Annual Report Released",
        date: "2024-12-01",
        category: "All News",
        summary:
            "The 2024 Annual Report is now available for download, detailing the society's achievements and financial performance.",
        imageLabel: "Report Cover",
        isArchived: true,
    },
    {
        id: "7",
        title: "Lighting Design for Healthcare",
        date: "2025-09-28",
        category: "Industry Insights",
        summary:
            "Exploring the critical role of lighting in healthcare environments and its impact on patient recovery.",
        imageLabel: "Hospital",
    },
    {
        id: "8",
        title: "WA Chapter Networking Drinks",
        date: "2025-09-20",
        category: "Chapter News",
        chapter: "WA",
        summary:
            "Connect with fellow lighting professionals at our upcoming networking evening in Perth.",
        imageLabel: "Drinks",
    },
    {
        id: "9",
        title: "Changes to Membership Tiers",
        date: "2025-09-15",
        category: "All News",
        summary:
            "Important updates regarding membership tiers and benefits for the upcoming year.",
        imageLabel: "Membership",
        isPopular: true,
    },
];
