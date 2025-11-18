# CLAUDE.md - AI Assistant Guide for stebeq

> **Last Updated**: 2025-11-18
> **Repository**: vadimgumarov/stebeq
> **Purpose**: Comprehensive guide for AI assistants working with this codebase

## Table of Contents

1. [Project Overview](#project-overview)
2. [Repository Structure](#repository-structure)
3. [Development Workflow](#development-workflow)
4. [Coding Conventions](#coding-conventions)
5. [Git Workflow](#git-workflow)
6. [Testing Strategy](#testing-strategy)
7. [Common Tasks](#common-tasks)
8. [AI Assistant Guidelines](#ai-assistant-guidelines)

---

## Project Overview

### What is stebeq?

This repository contains the stebeq project. As the codebase evolves, this section should be updated with:
- Project purpose and goals
- Key features and functionality
- Target users and use cases
- Technology stack and architecture decisions

### Tech Stack

**To be determined as project develops. Common stacks might include:**

- **Frontend**: React, Vue, Angular, or other framework
- **Backend**: Node.js, Python, Go, or other runtime/language
- **Database**: PostgreSQL, MongoDB, MySQL, or other database
- **Build Tools**: Webpack, Vite, esbuild, or other bundler
- **Testing**: Jest, Vitest, Pytest, or other framework
- **CI/CD**: GitHub Actions, GitLab CI, or other platform

---

## Repository Structure

```
stebeq/
├── .git/                  # Git repository data
├── CLAUDE.md              # This file - AI assistant guide
├── README.md              # Project documentation (to be created)
├── package.json           # Node.js dependencies (if applicable)
├── src/                   # Source code (to be created)
│   ├── components/        # Reusable components
│   ├── services/          # Business logic and API services
│   ├── utils/             # Utility functions
│   └── config/            # Configuration files
├── tests/                 # Test files
├── docs/                  # Additional documentation
└── scripts/               # Build and deployment scripts
```

**Note**: This structure will be updated as the project architecture is defined.

---

## Development Workflow

### Initial Setup

```bash
# Clone the repository
git clone <repository-url>
cd stebeq

# Install dependencies (when package.json exists)
npm install  # or yarn install, pnpm install, etc.

# Set up environment variables (if needed)
cp .env.example .env
```

### Development Process

1. **Before Starting Work**
   - Fetch latest changes: `git fetch origin`
   - Create or switch to feature branch
   - Ensure dependencies are up to date

2. **During Development**
   - Write code following conventions (see below)
   - Write tests for new functionality
   - Run tests frequently: `npm test` (or equivalent)
   - Commit early and often with clear messages

3. **Before Committing**
   - Run linter: `npm run lint` (when configured)
   - Run tests: `npm test`
   - Build project: `npm run build` (when configured)
   - Review changes: `git diff`

4. **Code Review**
   - Create pull request with descriptive title and body
   - Link related issues
   - Request review from team members
   - Address feedback promptly

---

## Coding Conventions

### General Principles

- **Clarity over cleverness**: Write code that's easy to understand
- **Consistency**: Follow existing patterns in the codebase
- **DRY (Don't Repeat Yourself)**: Extract common logic into reusable functions
- **SOLID principles**: Especially Single Responsibility and Dependency Inversion
- **Error handling**: Always handle errors gracefully with meaningful messages

### File Naming

- Use kebab-case for file names: `user-service.js`, `api-client.ts`
- Use PascalCase for class/component files: `UserProfile.jsx`, `DataService.ts`
- Test files should mirror source files: `user-service.test.js`

### Code Style

**To be defined based on project language/framework:**

- **Indentation**: 2 or 4 spaces (no tabs)
- **Line length**: 80-120 characters max
- **Quotes**: Single or double (be consistent)
- **Semicolons**: Use or don't use (be consistent)
- **Trailing commas**: Use in multiline structures

### Comments and Documentation

```javascript
/**
 * Brief description of function purpose
 *
 * @param {Type} paramName - Description of parameter
 * @returns {Type} Description of return value
 * @throws {ErrorType} When error occurs
 */
function exampleFunction(paramName) {
  // Implementation
}
```

- Use JSDoc/docstrings for public APIs
- Comment "why" not "what" (code should be self-documenting)
- Keep comments up to date with code changes
- Use TODO/FIXME/NOTE comments appropriately

---

## Git Workflow

### Branch Naming Convention

- **Feature branches**: `feature/description` or `feat/description`
- **Bug fixes**: `fix/description` or `bugfix/description`
- **Hotfixes**: `hotfix/description`
- **Documentation**: `docs/description`
- **Refactoring**: `refactor/description`
- **Claude branches**: `claude/claude-md-*` (for AI assistant work)

### Commit Message Format

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, semicolons, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks, dependencies

**Examples:**
```
feat(auth): add JWT token authentication

Implement JWT-based authentication system with refresh tokens.
Includes middleware for route protection.

Closes #123
```

```
fix(api): handle null response in user endpoint

Add null check before accessing user data to prevent crashes.
```

### Pull Request Guidelines

1. **Title**: Clear and descriptive
2. **Description**:
   - What changes were made
   - Why they were made
   - How to test them
3. **Link Issues**: Use "Closes #123" or "Fixes #456"
4. **Small PRs**: Keep changes focused and reviewable
5. **Tests**: Include tests for new functionality
6. **Documentation**: Update docs if needed

---

## Testing Strategy

### Testing Pyramid

1. **Unit Tests** (most)
   - Test individual functions and components
   - Fast, isolated, numerous
   - Target: 80%+ code coverage

2. **Integration Tests** (medium)
   - Test component interactions
   - Test API endpoints
   - Test database operations

3. **E2E Tests** (least)
   - Test critical user flows
   - Test main application features
   - Run before releases

### Test File Organization

```
tests/
├── unit/              # Unit tests
├── integration/       # Integration tests
└── e2e/              # End-to-end tests
```

Or co-located with source files:
```
src/
├── components/
│   ├── Button.jsx
│   └── Button.test.jsx
```

### Running Tests

```bash
# Run all tests
npm test

# Run specific test file
npm test -- path/to/test.js

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage
```

---

## Common Tasks

### Adding a New Feature

1. Create feature branch: `git checkout -b feature/feature-name`
2. Implement feature with tests
3. Update documentation
4. Commit changes with conventional commits
5. Push and create pull request

### Fixing a Bug

1. Create bug fix branch: `git checkout -b fix/bug-description`
2. Write failing test that reproduces bug
3. Fix the bug
4. Verify test passes
5. Commit and create pull request

### Updating Dependencies

```bash
# Check for outdated packages
npm outdated

# Update specific package
npm update package-name

# Update all packages (carefully)
npm update

# For major version updates
npm install package-name@latest
```

### Running the Application

```bash
# Development mode
npm run dev

# Production build
npm run build

# Start production server
npm start
```

---

## AI Assistant Guidelines

### Best Practices for AI Assistants

1. **Always Read Before Writing**
   - Use Read tool to understand existing code
   - Review related files for context
   - Check for similar implementations

2. **Follow Existing Patterns**
   - Match the style of surrounding code
   - Use established utility functions
   - Follow naming conventions

3. **Security First**
   - Never introduce SQL injection vulnerabilities
   - Avoid XSS vulnerabilities
   - Validate and sanitize all inputs
   - Never commit secrets or credentials
   - Use environment variables for sensitive data

4. **Test Everything**
   - Write tests for new functionality
   - Update tests when changing code
   - Run tests before committing
   - Aim for high code coverage

5. **Clear Communication**
   - Explain what you're doing and why
   - Use file:line references when discussing code
   - Ask for clarification when requirements are unclear
   - Document non-obvious decisions

6. **Git Hygiene**
   - Make atomic commits (one logical change per commit)
   - Write clear, descriptive commit messages
   - Never commit directly to main/master
   - Always work on feature branches
   - Push to branches starting with `claude/` for AI work

### Common Pitfalls to Avoid

❌ **Don't:**
- Commit commented-out code
- Leave debugging statements (console.log, print, etc.)
- Create files unnecessarily (prefer editing existing)
- Use overly complex solutions when simple ones work
- Ignore linting errors or warnings
- Skip error handling
- Hardcode configuration values
- Commit large binary files

✅ **Do:**
- Remove unused imports and variables
- Handle edge cases and errors
- Write self-documenting code
- Keep functions small and focused
- Use meaningful variable names
- Add comments for complex logic
- Update documentation when changing behavior
- Consider performance implications

### File Reference Format

When discussing code locations, use this format:
```
src/components/UserProfile.jsx:45
src/services/api-client.ts:123-145
```

This allows users to quickly navigate to specific code sections.

### Decision Making

**When to ask for clarification:**
- Multiple valid approaches exist
- Requirements are ambiguous
- Breaking changes are needed
- Major architectural decisions required
- Security implications are unclear

**When to proceed autonomously:**
- Bug fixes with clear solutions
- Following established patterns
- Adding tests for existing code
- Documentation improvements
- Code style/formatting fixes

---

## Project-Specific Notes

### Environment Variables

```env
# Example environment variables (create .env file)
NODE_ENV=development
API_URL=http://localhost:3000
DATABASE_URL=postgresql://localhost/stebeq
```

### Key Dependencies

**To be populated as project develops:**

- List important libraries and their purposes
- Note any unusual or complex dependencies
- Document version constraints

### Known Issues

**To be populated as issues are discovered:**

- Document workarounds for known issues
- Link to GitHub issues for tracking
- Note any technical debt

### Performance Considerations

**To be populated based on project needs:**

- Database query optimization strategies
- Caching strategies
- Bundle size considerations
- API rate limiting

---

## Resources

### Documentation Links

- **Project Docs**: (to be added)
- **API Reference**: (to be added)
- **Architecture Docs**: (to be added)

### External Resources

- [Git Conventional Commits](https://www.conventionalcommits.org/)
- [Semantic Versioning](https://semver.org/)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)

---

## Maintenance

This CLAUDE.md file should be updated when:

- Project structure changes significantly
- New conventions are established
- Technology stack changes
- Development workflow changes
- New common tasks are identified

**Maintainers**: Update the "Last Updated" date at the top of this file when making changes.

---

## Questions or Issues?

If you encounter issues or have questions not covered in this guide:

1. Check the project README.md
2. Search existing GitHub issues
3. Ask the project maintainers
4. Create a new issue with the `question` label

---

*This document is a living guide and should evolve with the project.*
