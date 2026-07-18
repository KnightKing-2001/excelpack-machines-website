# Navbar Component

## Purpose

Global desktop navigation component for Excelpack Machines website.

## Features

- Logo support
- Navigation links
- CTA button
- Sticky header
- Responsive ready
- Accessible navigation

## Usage

```tsx
<Navbar
  items={[
    {
      label: "Products",
      href: "/products",
    },
    {
      label: "Industries",
      href: "/industries",
    },
  ]}

  ctaLabel="Contact Us"

  ctaHref="/contact"
/>
```
