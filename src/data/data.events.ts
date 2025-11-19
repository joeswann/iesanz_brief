export interface EventItem {
    id: string;
    title: string;
    date: string;
    time: string;
    location: string;
    type: "Conference" | "Chapter Event" | "Webinar" | "Award" | "Workshop";
    chapter?: string;
    imageLabel: string;
    summary: string;
    price: string;
    isFeatured?: boolean;
}

export const eventsData: EventItem[] = [
    {
        id: "1",
        title: "IESANZ 2025 Conference: Illuminating Tomorrow",
        date: "2025-11-15",
        time: "09:00 - 17:00",
        location: "Sydney Convention Centre, NSW",
        type: "Conference",
        chapter: "NSW",
        imageLabel: "Conference Hall",
        summary:
            "Join us for the biennial IESANZ Conference, featuring keynote speakers from around the globe, interactive workshops, and the latest in lighting technology.",
        price: "$450 - $800",
        isFeatured: true,
    },
    {
        id: "2",
        title: "Sustainable Lighting Workshop",
        date: "2025-10-05",
        time: "18:00 - 20:00",
        location: "IESANZ VIC Office, Melbourne",
        type: "Workshop",
        chapter: "VIC",
        imageLabel: "Workshop",
        summary:
            "A hands-on workshop focused on sustainable lighting practices and energy-efficient design strategies.",
        price: "$50 Members / $100 Non-members",
    },
    {
        id: "3",
        title: "October Chapter Meeting: Urban Lighting",
        date: "2025-10-08",
        time: "19:00 - 21:00",
        location: "The Mint, Sydney",
        type: "Chapter Event",
        chapter: "NSW",
        imageLabel: "Urban Light",
        summary:
            "Discussing the impact of urban lighting on city nightscapes with guest speaker Dr. Jane Doe.",
        price: "Free for Members",
    },
    {
        id: "4",
        title: "Webinar: The Future of LEDs",
        date: "2025-10-15",
        time: "12:00 - 13:00",
        location: "Online",
        type: "Webinar",
        imageLabel: "Webinar",
        summary:
            "Explore the next generation of LED technology and its applications in architectural lighting.",
        price: "Free",
    },
    {
        id: "5",
        title: "2025 Lighting Design Awards Gala",
        date: "2025-10-24",
        time: "19:00 - 23:00",
        location: "SkyCity Convention Centre, Auckland",
        type: "Award",
        chapter: "NZ",
        imageLabel: "Gala Dinner",
        summary:
            "Celebrate the best in lighting design at our annual awards gala dinner.",
        price: "$200",
    },
    {
        id: "6",
        title: "WA Chapter Networking Drinks",
        date: "2025-10-30",
        time: "17:30 - 19:30",
        location: "The Aviary, Perth",
        type: "Chapter Event",
        chapter: "WA",
        imageLabel: "Drinks",
        summary:
            "Casual networking drinks for WA members and lighting professionals.",
        price: "Free",
    },
];

export const eventTypes = [
    "All Events",
    "Conference",
    "Chapter Event",
    "Webinar",
    "Award",
    "Workshop",
];
