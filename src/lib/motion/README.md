# Motion System

Central animation library for Excelpack Machines website.

---

## Available Animations

### Fade

- fadeIn
- fadeUp
- fadeDown

### Slide

- slideLeft
- slideRight

### Scale

- scaleIn

### Layout

- staggerContainer

---

## Usage Example

```tsx
import { motion } from "framer-motion";

import { fadeUp } from "@/lib/motion";

<motion.div variants={fadeUp} initial="hidden" animate="visible">
  Content
</motion.div>;
```
