# Modal Component

## Overview

The Modal component is a reusable overlay component used to display content above the current page.

It is part of the Excelpack Machines Design System and provides a consistent modal experience across the application.

---

## Features

- Controlled open/close state
- Overlay click close support
- Escape key close support
- Body scroll lock
- Accessible dialog structure
- Responsive sizing
- Header support
- Footer support
- TypeScript support

---

## Usage

```tsx
import { Modal } from "@/components/overlays";

function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Modal</button>

      <Modal open={open} onClose={() => setOpen(false)} title="Example Modal">
        Modal Content
      </Modal>
    </>
  );
}
```
