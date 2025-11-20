import { chapters } from "./data.chapters";
import { user } from "./data.user";

import { awardsEvents } from "./data.awards";
import { conferences } from "./data.conferences";

export const links = [
  ["Home", "/"],
  ["News", "/news"],
  ["Events", "/events"],
  ["Conferences", "/conferences/conf-2026"],
  ["Awards", "/awards"],
  ["Chapters", `/chapters/${user.chapter.slug}`],
  ["Resources", "/resources"],
  ["Store", "/store"],
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
      .map((evt) => [evt.title, `/awards/${evt.year}`] as [string, string]),
    ...awardsEvents
      .filter((evt) => evt.year !== 2026)
      .sort((a, b) => b.year - a.year)
      .map((evt) => [evt.year.toString(), `/awards/${evt.year}`] as [string, string]),
  ],
  "/conferences/conf-2026": [
    ...conferences
      .filter((c) => c.status === "Upcoming")
      .map((c) => [c.title, `/conferences/${c.id}`] as [string, string]),
    ...conferences
      .filter((c) => c.status === "Past")
      .sort((a, b) => b.year - a.year)
      .map((c) => [c.year.toString(), `/conferences/${c.id}`] as [string, string]),
  ],
  "/chapters": [
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
