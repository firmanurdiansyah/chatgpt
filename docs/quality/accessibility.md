# Quality and accessibility contract

## Accessibility

Components must provide semantic HTML, visible focus, keyboard operation, accessible names, state announcements and reduced-motion support. Dialogs use `role="dialog"`, `aria-modal`, labelled titles and Escape handling. Data tables expose real table semantics and keyboard-scrollable containers.

## Internationalization

No reusable component should own hardcoded user-facing copy. Consumers should provide translated labels or use `@ui-platform/i18n`. Dates, numbers and currencies must use locale-aware formatters.

## Responsive

Start from narrow layouts and progressively enhance. Dense data surfaces must have an intentional mobile representation; shrinking desktop tables is not an acceptable default.

## Theming

Components consume semantic CSS variables. Theme presets and brand overrides must never require component forks.

## Testing

Every component with behavior gets unit coverage. Page/domain blocks should have integration coverage. CI is the merge gate for typecheck, lint, test and build.
