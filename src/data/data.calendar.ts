export interface CalendarEvent {
    id: string;
    title: string;
    date: string; // YYYY-MM-DD
    time: string;
    location: string;
    type: "Event" | "Webinar" | "Course" | "Chapter";
}

export const calendarEvents: CalendarEvent[] = [
    {
        id: "1",
        title: "Lighting Design Basics",
        date: "2025-10-05",
        time: "18:00",
        location: "Sydney, NSW",
        type: "Course",
    },
    {
        id: "2",
        title: "October Chapter Meeting",
        date: "2025-10-08",
        time: "19:00",
        location: "Melbourne, VIC",
        type: "Chapter",
    },
    {
        id: "3",
        title: "The Future of LEDs Webinar",
        date: "2025-10-15",
        time: "12:00",
        location: "Online",
        type: "Webinar",
    },
    {
        id: "4",
        title: "IESANZ Awards Night",
        date: "2025-10-24",
        time: "19:00",
        location: "Auckland, NZ",
        type: "Event",
    },
    {
        id: "5",
        title: "Networking Drinks",
        date: "2025-10-30",
        time: "17:30",
        location: "Perth, WA",
        type: "Chapter",
    },
];
