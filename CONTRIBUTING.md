# Contributing to Chopper's Hanoi Meal Timetable

Thank you for your interest in contributing! This document provides guidelines and instructions for contributing to the project.

## Code of Conduct

- Be respectful and inclusive
- Welcome all skill levels
- Focus on the code, not the person
- Help others learn and grow

## Getting Started

### Fork & Clone

```bash
# Fork the repository on GitHub, then:
git clone https://github.com/yourusername/chopper-timetable.git
cd chopper-timetable
```

### Set Up Development Environment

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# In another terminal, run type checking
pnpm check
```

## Development Workflow

### 1. Create a Feature Branch

```bash
git checkout -b feature/your-feature-name
# or for bug fixes:
git checkout -b fix/bug-description
```

### 2. Make Your Changes

- Follow the existing code style
- Keep commits atomic and well-described
- Update tests if applicable
- Update documentation for new features

### 3. Code Style

```bash
# Format your code
pnpm format

# Type check
pnpm check
```

### 4. Commit & Push

```bash
git add .
git commit -m "feat: add new feature" # or "fix:", "docs:", etc.
git push origin feature/your-feature-name
```

### 5. Create a Pull Request

- Provide a clear description of changes
- Reference any related issues
- Include screenshots for UI changes
- Ensure all checks pass

## Commit Message Format

Follow conventional commits:

```
type(scope): subject

body (optional)

footer (optional)
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Code style (no logic change)
- `refactor`: Code refactoring
- `perf`: Performance improvement
- `test`: Test addition/modification
- `chore`: Build, dependencies, etc.

**Examples:**
```
feat(calendar): add month navigation
fix(modal): resolve accessibility error
docs(readme): update installation instructions
```

## Project Structure Guidelines

### Adding New Features

1. **New Components**: Add to `client/src/components/`
2. **New Pages**: Add to `client/src/pages/`
3. **New Hooks**: Add to `client/src/hooks/`
4. **New Utilities**: Add to `client/src/lib/`
5. **Styles**: Keep component styles in component files or `Home.css`

### File Naming

- Components: PascalCase (e.g., `MealCard.tsx`)
- Utilities: camelCase (e.g., `formatDate.ts`)
- Styles: kebab-case (e.g., `meal-card.css`)

## Adding New Meals

To add new Hanoi Vietnamese meals:

1. Edit `meals-data.json`
2. Add a new entry with:
   - Unique `id` (increment from last)
   - `name`: Meal name in English
   - `description`: Brief description
   - `category`: Food category
   - `image`: URL to meal image

```json
{
  "id": 53,
  "name": "Bánh Cuốn",
  "description": "Steamed rice rolls with pork and shrimp",
  "category": "appetizer",
  "image": "https://example.com/banh-cuon.jpg"
}
```

## Testing

While the project currently lacks automated tests, please:

1. Test your changes locally with `pnpm dev`
2. Test on multiple screen sizes (desktop, tablet, mobile)
3. Test keyboard navigation and screen reader compatibility
4. Test with different browsers

## Documentation

- Update `README.md` for user-facing changes
- Add comments for complex logic
- Document new environment variables in `.env.example`
- Update this file if contribution process changes

## Performance Considerations

- Minimize bundle size impact
- Avoid unnecessary re-renders
- Optimize images before adding
- Use React.memo for expensive components
- Profile with browser DevTools

## Accessibility

- Ensure keyboard navigation works
- Maintain proper color contrast (WCAG AA minimum)
- Use semantic HTML
- Add alt text to images
- Test with screen readers

## Reporting Issues

When reporting bugs, include:

1. **Description**: What's the issue?
2. **Steps to Reproduce**: How to trigger the bug
3. **Expected Behavior**: What should happen
4. **Actual Behavior**: What actually happens
5. **Screenshots**: Visual evidence
6. **Environment**: Browser, OS, device
7. **Logs**: Console errors or warnings

## Feature Requests

When suggesting features:

1. **Use Case**: Why is this needed?
2. **Description**: What should it do?
3. **Examples**: How would users interact with it?
4. **Alternatives**: Any workarounds?
5. **Priority**: How important is this?

## Review Process

- Maintainers will review PRs within 3-5 days
- Feedback will be constructive and helpful
- Changes may be requested before merging
- All checks must pass before merge

## Questions?

- Open a GitHub Discussion
- Create an issue for clarification
- Check existing issues and PRs first

## Recognition

Contributors will be recognized in:
- Project README
- Release notes
- GitHub contributors page

Thank you for contributing! 🎉
