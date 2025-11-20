export const contactDetails = {
    general: {
        label: "General Inquiries",
        phone: {
            display: "+61 7 3326 2318",
            url: "tel:+61733262318"
        },
        email: {
            display: "secretariat@iesanz.org",
            url: "mailto:secretariat@iesanz.org"
        }
    },
    postal: {
        label: "Postal Address",
        address: [
            "PO Box 576",
            "Crows Nest NSW 1585",
            "Australia"
        ]
    },
    chapter: {
        title: "Chapter Contacts",
        description: "For local inquiries, please reach out to your Chapter President."
    },
    form: {
        title: "Send us a message",
        fields: {
            name: { label: "Name", placeholder: "Your name" },
            email: { label: "Email", placeholder: "your@email.com" },
            subject: { label: "Subject", placeholder: "How can we help?" },
            message: { label: "Message", placeholder: "Write your message here..." }
        },
        submit: "Send Message"
    }
};
