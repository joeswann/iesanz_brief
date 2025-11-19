# Implementation Plan - Update LayoutFooter

Add standard links to the `LayoutFooter` component using the `LofiMenu` component and a data-driven approach, consistent with `LayoutHeader`.

## Proposed Changes

### Data Layer

#### [NEW] [data.footer.ts](file:///Users/joeswann/dev/iesanz/src/data/data.footer.ts)
- Create a new file to store footer links.
- Export `links` array with:
    - Contacts
    - Privacy Policy
    - Social Media (placeholder links)

### Components

#### [MODIFY] [LayoutFooter.tsx](file:///Users/joeswann/dev/iesanz/src/components/layout/LayoutFooter.tsx)
- Import `LofiMenu` from `../lofi/LofiMenu`.
- Import `links` from `@/data/data.footer`.
- Add `LofiMenu` to the `LofiBox` container, passing the `links` data.
- Maintain existing copyright notice.

## Verification Plan

### Manual Verification
- Run the dev server (if not running).
- Open the browser to the homepage.
- Verify that the footer now contains the links: "Contacts", "Privacy Policy", "Social Media".
- Verify styling matches `LofiMenu` appearance.
