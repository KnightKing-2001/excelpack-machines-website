# ImagePreviewModal Component

## Overview

ImagePreviewModal displays large images inside a reusable modal container.

It is designed for product galleries, machine images, and technical visuals.

---

## Features

- Responsive image display
- Reuses Modal component
- Accessible image alt text
- Large image viewing
- Supports custom titles

---

## Usage

```tsx
<ImagePreviewModal
  open={open}
  src="/images/machine.jpg"
  alt="Automatic Packaging Machine"
  title="Machine Preview"
  onClose={() => setOpen(false)}
/>
```
