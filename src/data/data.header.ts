import { chapters } from "./data.chapters";

export const links = [
  ["Home", "/"],
  ["News", "/news"],
  ["Events", "/events"],
  ["Awards", "/awards"],
  ["Conferences", "/conferences"],
  ["Chapters", "/chapters"],
  ["Store", "/store"],
  ["Resources", "/resources"],
] as [string, string][];

export const account = [
  ["Account", "/account"],
  [`Chapter: ${chapters[0].name}`, "#chapter"],
  ["Cart (0)", "#cart"],
] as [string, string][];
export const submenus: Record<string, [string, string][]> = {
  "/news": [
    ["Latest News", "/news"],
    ["Press Releases", "/news/press"],
    ["Industry Updates", "/news/industry"],
  ],
  "/events": [
    ["Upcoming Events", "/events"],
    ["Calendar", "/calendar"],
    ["Webinars", "/events/webinars"],
  ],
  "/awards": [
    ["Awards Home", "/awards"],
    ["Submit Entry", "/awards/submit"],
    ["Past Winners", "/awards/winners"],
    ["Gala Dinner", "/awards/gala"],
  ],
  "/conferences": [
    ["Conferences Home", "/conferences"],
    ["Program", "/conferences/program"],
    ["Speakers", "/conferences/speakers"],
    ["Registration", "/conferences/registration"],
  ],
  "/chapters": [
    ["All Chapters", "/chapters"],
    ...chapters.map((c) => [c.name, `/chapters/${c.slug}`] as [string, string]),
  ],
  "/store": [
    ["Store Home", "/store"],
    ["Publications", "/store/publications"],
    ["Merchandise", "/store/merchandise"],
  ],
  "/resources": [
    ["Knowledgebase", "/resources"],
    ["Member Guide", "/resources/member-guide"],
    ["Technical Brief", "/resources/technical-brief"],
  ],
};
