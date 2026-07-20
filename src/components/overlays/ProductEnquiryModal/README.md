# ProductEnquiryModal Component

## Overview

ProductEnquiryModal is a reusable enquiry dialog designed for machine/product communication workflows.

It allows customers to request information, pricing, specifications, or demonstrations.

---

## Features

- Product-specific title support
- Reuses Modal component
- Responsive layout
- Ready for enquiry forms
- TypeScript support

---

## Usage

```tsx
<ProductEnquiryModal
  open={open}
  productName="Automatic Packaging Machine"
  onClose={() => setOpen(false)}
>
  Enquiry Form
</ProductEnquiryModal>
```
