# Walkthrough - LayoutFooter Update

I have updated the `LayoutFooter` component to include standard links using a data-driven approach.

## Changes

### 1. Created `src/data/data.footer.ts`

I created a new data file to hold the footer links, keeping the data separate from the presentation.

```typescript
export const links = [
  ["Contacts", "/contacts"],
  ["Privacy Policy", "/privacy-policy"],
  ["Social Media", "/social-media"],
] as [string, string][];
```

### 2. Updated `src/components/layout/LayoutFooter.tsx`

I updated the footer component to use `LofiMenu` and the new data file.

```tsx
import { DCI } from "@/types/dci";
import { css } from "@linaria/core";
import LofiBox from "../lofi/LofiBox";
import LofiMenu from "../lofi/LofiMenu";
import { links } from "@/data/data.footer";

const styles = css`
  width: 100%;
  margin-top: 10px;
`;

const LayoutFooter: DCI = ({ children }) => {
  return (
    <div className={styles}>
      <LofiBox className="menu">
        <LofiMenu links={links} />
        <div>&copy; 2025</div>
      </LofiBox>
    </div>
  );
};

export default LayoutFooter;
```

## Verification results

### Automated Tests
- Linting passed (fixed missing imports and unused variables).

### Manual Verification
- The footer should now display the links "Contacts", "Privacy Policy", and "Social Media" above the copyright notice.
