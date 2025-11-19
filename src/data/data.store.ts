export interface Product {
    id: string;
    name: string;
    category: "Publications" | "Merchandise" | "Sponsorship" | "Job Ads";
    price: number;
    memberPrice?: number;
    imageLabel: string;
    description: string;
    isDigital?: boolean;
}

export const storeProducts: Product[] = [
    {
        id: "prod-1",
        name: "Lighting Design Guide 2025",
        category: "Publications",
        price: 150,
        memberPrice: 0,
        imageLabel: "Design Guide Cover",
        description: "The comprehensive guide to modern lighting standards and practices.",
        isDigital: true,
    },
    {
        id: "prod-2",
        name: "IESANZ Branded Hoodie",
        category: "Merchandise",
        price: 85,
        memberPrice: 75,
        imageLabel: "Hoodie",
        description: "Premium cotton hoodie with embroidered IESANZ logo.",
    },
    {
        id: "prod-3",
        name: "Job Advertisement (30 Days)",
        category: "Job Ads",
        price: 300,
        memberPrice: 200,
        imageLabel: "Job Ad Icon",
        description: "Post a job listing on our career board for 30 days.",
        isDigital: true,
    },
    {
        id: "prod-4",
        name: "Annual Conference Sponsorship - Silver",
        category: "Sponsorship",
        price: 5000,
        imageLabel: "Silver Sponsor",
        description: "Includes booth space and logo placement at the annual conference.",
    },
    {
        id: "prod-5",
        name: "Technical Paper: Circadian Rhythms",
        category: "Publications",
        price: 45,
        memberPrice: 25,
        imageLabel: "Tech Paper",
        description: "In-depth research paper on the impact of lighting on circadian health.",
        isDigital: true,
    },
    {
        id: "prod-6",
        name: "IESANZ Lapel Pin",
        category: "Merchandise",
        price: 20,
        memberPrice: 15,
        imageLabel: "Pin",
        description: "Enamel lapel pin for members.",
    },
];

export const productCategories = [
    "All Products",
    "Publications",
    "Merchandise",
    "Sponsorship",
    "Job Ads",
];
