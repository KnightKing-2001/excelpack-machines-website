# Table Component

## Overview

Reusable table component for displaying structured information across the application.

---

## Features

- Generic TypeScript support
- Custom column definitions
- Custom cell rendering
- Empty state handling
- Responsive horizontal scrolling
- Hover states

---

## Usage

```tsx
const columns = [
  {
    key: "name",
    label: "Machine Name",
  },
  {
    key: "price",
    label: "Price",
  },
];

<Table columns={columns} data={machines} />;
```
