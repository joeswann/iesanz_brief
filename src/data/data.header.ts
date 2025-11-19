import { chapters } from "./data.chapters";

export const links = [
  ["Home", "/"],
  ["News", "/news"],
  ["Events", "/events"],
  ["Awards", "/awards"],
  ["Conferences", "/conferences"],
  ["Chapters", "/chapters"],
  ["Store", "/store"],
] as [string, string][];

export const account = [
  ["Account", "/account"],
  [`Chapter: ${chapters[0].name}`, "#chapter"],
  ["Cart (0)", "#cart"],
] as [string, string][];
