export interface ConferenceSpeaker {
    id: string;
    name: string;
    role: string;
    company: string;
    imageLabel: string;
}

export interface ConferenceSession {
    id: string;
    time: string;
    title: string;
    speakerId?: string;
    track: "Smart Lighting" | "Human-Centric" | "Sustainability" | "General" | "Design" | "Technology";
}

export interface TicketPackage {
    name: string;
    price: string;
    description: string;
}

export interface Conference {
    id: string;
    title: string;
    year: number;
    dates: string;
    location: string;
    theme: string;
    description: string;
    status: "Upcoming" | "Past";
    imageLabel: string;
    tracks: string[];
    speakers: ConferenceSpeaker[];
    program: ConferenceSession[];
    sponsors: string[];
    tickets: TicketPackage[];
}

export const conferences: Conference[] = [
    {
        id: "conf-2026",
        title: "IESANZ 2026: Light in Focus",
        year: 2026,
        dates: "Aug 12-14, 2026",
        location: "Auckland, NZ",
        theme: "Te Ao Marama - The World of Light",
        description:
            "Join us in Auckland for the 2026 IESANZ Conference. We will explore the cultural and technological dimensions of light, with a focus on indigenous perspectives and sustainable innovation.",
        status: "Upcoming",
        imageLabel: "Auckland Skyline",
        tracks: ["Smart Lighting", "Human-Centric", "Sustainability", "Advocacy"],
        speakers: [
            {
                id: "spk-1",
                name: "Dr. Aroha Ngata",
                role: "Cultural Lighting Advisor",
                company: "Toi Marama",
                imageLabel: "Aroha N.",
            },
            {
                id: "spk-2",
                name: "James Sterling",
                role: "Director of Innovation",
                company: "Global Light Corp",
                imageLabel: "James S.",
            },
        ],
        program: [
            {
                id: "sess-1",
                time: "09:00",
                title: "Keynote: Indigenous Perspectives on Light",
                speakerId: "spk-1",
                track: "General",
            },
            {
                id: "sess-2",
                time: "11:00",
                title: "The Future of Smart Cities",
                speakerId: "spk-2",
                track: "Smart Lighting",
            },
        ],
        sponsors: ["LumenCorp", "RayTech"],
        tickets: [
            {
                name: "Early Bird Full Registration",
                price: "$750",
                description: "Full access to all sessions and social events. Limited time offer.",
            },
            {
                name: "Standard Registration",
                price: "$950",
                description: "Full access to all sessions and social events.",
            },
        ],
    },
    {
        id: "conf-2023",
        title: "IESANZ 2023: Light in Focus",
        year: 2023,
        dates: "Nov 20-21, 2023",
        location: "Sydney, NSW",
        theme: "Reconnecting with Light",
        description:
            "Held at the stunning Doltone House, Jones Bay Wharf, the 2023 conference brought together the lighting community to reconnect and share ideas after a period of disruption.",
        status: "Past",
        imageLabel: "Sydney Harbour",
        tracks: ["Wellbeing", "Technology", "Design"],
        speakers: [],
        program: [],
        sponsors: [],
        tickets: [],
    },
    {
        id: "conf-2021",
        title: "IESANZ 2021: Resilience",
        year: 2021,
        dates: "Oct 15-16, 2021",
        location: "Melbourne, VIC",
        theme: "Resilience in Design",
        description:
            "A hybrid event exploring how the lighting industry adapts to changing global landscapes and environmental challenges.",
        status: "Past",
        imageLabel: "Melbourne City",
        tracks: ["Resilience", "Health", "Innovation"],
        speakers: [],
        program: [],
        sponsors: [],
        tickets: [],
    },
    {
        id: "conf-2019",
        title: "IESANZ 2019: Spectrum",
        year: 2019,
        dates: "Sep 10-12, 2019",
        location: "Perth, WA",
        theme: "The Full Spectrum",
        description:
            "Celebrating the diversity of lighting applications from mining to museums in the vibrant city of Perth.",
        status: "Past",
        imageLabel: "Perth Sunset",
        tracks: ["Mining", "Art", "Public Spaces"],
        speakers: [],
        program: [],
        sponsors: [],
        tickets: [],
    },
];
