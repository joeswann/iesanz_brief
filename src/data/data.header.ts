import { chapters } from "./data.chapters";

import { awardsEvents } from "./data.awards";

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
    ["Featured News", "/news/featured"],
    ["Archived News", "/news/archived"],
  ],
  "/events": [
    ["Upcoming Events", "/events"],
    ["Past Events", "/events/past"],
    ["Calendar", "/calendar"],
  ],
  "/awards": [
    ...awardsEvents
      .filter((evt) => evt.year === 2026)
      .map((evt) => [evt.title, `/awards?year=${evt.year}`] as [string, string]),
    ...awardsEvents
      .filter((evt) => evt.year !== 2026)
      .sort((a, b) => b.year - a.year)
      .map((evt) => [evt.year.toString(), `/awards?year=${evt.year}`] as [string, string]),
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
