export interface AwardEntry {
    id: string;
    projectName: string;
    designer: string;
    chapter: string;
    imageLabel: string;
    description: string;
    status: "Winner" | "Commendation" | "Merit" | "Finalist";
}

export interface AwardCategory {
    id: string;
    title: string;
    entries: AwardEntry[];
}

export interface AwardsEvent {
    id: string;
    title: string;
    year: number;
    categories: AwardCategory[];
}

export const awardsEvents: AwardsEvent[] = [
    {
        id: "evt-2025",
        title: "2025 IESANZ Lighting Design Awards",
        year: 2025,
        categories: [
            {
                id: "cat-excellence",
                title: "Excellence in Lighting",
                entries: [
                    {
                        id: "1",
                        projectName: "The Luminous Pavilion",
                        designer: "Lumina Studio",
                        chapter: "VIC",
                        imageLabel: "Pavilion Night",
                        description:
                            "A stunning example of integrated lighting design that transforms a public space into an immersive art installation.",
                        status: "Winner",
                    },
                    {
                        id: "2",
                        projectName: "Heritage Library Restoration",
                        designer: "Heritage Lights",
                        chapter: "NSW",
                        imageLabel: "Library Interior",
                        description:
                            "Preserving the past while illuminating the future, this project delicately balances conservation with modern functionality.",
                        status: "Commendation",
                    },
                ],
            },
            {
                id: "cat-luminaire",
                title: "Luminaire Design",
                entries: [
                    {
                        id: "5",
                        projectName: "Sculptural Pendant Series",
                        designer: "Artisan Lights",
                        chapter: "SA",
                        imageLabel: "Pendant Light",
                        description:
                            "An innovative series of pendant luminaires that combine traditional craftsmanship with advanced LED technology.",
                        status: "Winner",
                    },
                ],
            },
            {
                id: "cat-public",
                title: "Public Spaces",
                entries: [
                    {
                        id: "3",
                        projectName: "Urban River Walk",
                        designer: "City Scapes",
                        chapter: "QLD",
                        imageLabel: "River Walk",
                        description:
                            "Enhancing safety and aesthetics along the riverfront with sustainable, wildlife-sensitive lighting solutions.",
                        status: "Merit",
                    },
                ]
            }
        ],
    },
    {
        id: "evt-2024",
        title: "2024 IESANZ Lighting Design Awards",
        year: 2024,
        categories: [
            {
                id: "cat-2024-workplace",
                title: "Workplace Lighting",
                entries: [
                    {
                        id: "4",
                        projectName: "Tech Hub Office",
                        designer: "Modern Workspaces",
                        chapter: "NZ",
                        imageLabel: "Office Open Plan",
                        description:
                            "A human-centric lighting approach for a 24/7 technology hub, focusing on circadian rhythms and visual comfort.",
                        status: "Winner",
                    },
                ],
            },
            {
                id: "cat-2024-infrastructure",
                title: "Infrastructure",
                entries: [
                    {
                        id: "6",
                        projectName: "Bridge of Light",
                        designer: "Infrastructure Design Co.",
                        chapter: "WA",
                        imageLabel: "Bridge",
                        description:
                            "A dynamic lighting scheme that turns a functional infrastructure element into a city landmark.",
                        status: "Commendation",
                    },
                ],
            },
        ],
    },
    {
        id: "evt-2026",
        title: "2026 IESANZ Lighting Design Awards",
        year: 2026,
        categories: [
            {
                id: "cat-2026-open",
                title: "Open Category",
                entries: [],
            }
        ],
    },
];
