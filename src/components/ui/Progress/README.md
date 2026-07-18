# Progress Component

## Usage

```tsx
<Progress value={75} />

<Progress
  value={45}
  showLabel
/>
```

## Accessibility

- Uses `role="progressbar"`.
- Announces current value with ARIA attributes.
- Suitable for determinate progress only.
