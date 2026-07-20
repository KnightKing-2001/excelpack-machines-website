# ConfirmModal Component

## Overview

ConfirmModal is a reusable confirmation dialog built on top of the Modal component.

It is used for actions requiring user confirmation.

---

## Features

- Confirmation workflow
- Cancel action
- Loading state
- Multiple variants
- Accessible modal structure
- TypeScript support

---

## Variants

### Primary

General confirmation actions.

### Danger

Destructive actions.

Example:

- Delete machine
- Remove customer

### Warning

Risk-related actions.

---

## Usage

```tsx
<ConfirmModal
  open={open}
  title="Delete Machine?"
  description="This action cannot be undone."
  variant="danger"
  onConfirm={handleDelete}
  onCancel={() => setOpen(false)}
/>
```
