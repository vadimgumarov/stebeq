# CLAUDE.md - STEBEQ

> AI Workflow Automation Platform - Transform repetitive tasks into human creativity

> **Note:** Core rules (communication, code standards, TDD, error recovery, version control) are in global memory (`~/.claude/settings.json`). This file contains PROJECT-SPECIFIC configuration only.

---

## QUICK START

```
1. Read docs/CONTINUATION.md
2. Read .claude_project for detailed config
3. State: [branch: X | issue: #Y | status: Z]
4. Proceed with TDD workflow
```

---

## PROJECT

| | |
|---|---|
| **What** | AI platform that observes workflow patterns and automates repetitive tasks |
| **Why** | Give teams 3+ hours back every day by eliminating repetitive work |
| **Who** | B2B enterprises seeking workflow automation |
| **Phase** | Alpha (0.1.0-alpha) |

### Stack

| Layer | Technology | Notes |
|-------|------------|-------|
| Frontend | Next.js 14+ (React) | TypeScript |
| Backend | Next.js API Routes | Node.js 18+ |
| Database | PostgreSQL | Phase 2 - SaaS platform |
| Testing | Jest + RTL, Playwright | Enterprise-level TDD |
| Hosting | Vercel | Auto-deploy from GitHub |

### Links

| Resource | URL |
|----------|-----|
| Repository | GitHub |
| Staging | Vercel preview |
| Production | TBD |

### Development Context

- **Approach:** Solo development
- **Tracking:** GitHub Issues
- **CI/CD:** GitHub Actions + Vercel

---

## REFERENCES

| Resource | Location |
|----------|----------|
| Principles | `FOUNDATION/domains/it/PRINCIPLES-IT.md` |
| Procedures | `FOUNDATION/procedures/MANIFEST.md` |
| Project Config | `.claude_project` (detailed stack, safety rules) |

---

## PROJECT DOCS

| Doc | Location | Purpose |
|-----|----------|---------|
| Continuation | `docs/CONTINUATION.md` | Current state |
| Progress | `docs/PROGRESS.md` | Accomplishment log |
| Issues | `docs/ISSUES.md` | Problems & solutions |
| Business | `Business-documentation/` | Business strategy |
| Landing | `stebeq-landing-page-concept.md` | Marketing copy |

---

## PROJECT RULES

### Safety

- **NEVER** implement employee monitoring features — only workflow pattern observation
- **NEVER** store personally identifiable data without explicit consent
- All automation must be transparent and user-controllable

### TDD Requirements (Non-Negotiable)

| Requirement | Target |
|-------------|--------|
| Unit test coverage | 95%+ for new code |
| Critical path coverage | 100% E2E |
| Integration tests | Real dependencies, no mocks |
| Performance benchmarks | Automated regression detection |

### Testing Pyramid

```
tests/
├── unit/           # 70% - Fast, isolated
├── integration/    # 20% - Real dependencies
├── e2e/            # 10% - User workflows
└── performance/    # Load and benchmarks
```

### Quality Gates (Pre-Commit)

- [ ] All tests passing (unit, integration, e2e)
- [ ] Code coverage ≥ 95% for new code
- [ ] Performance benchmarks within range
- [ ] Security scan passing
- [ ] No debug code or temporary hacks

### Constraints

- No feature flags for MVP
- No external analytics without user consent
- Keep bundle size minimal

### Conventions

- TypeScript strict mode
- ESLint + Prettier
- Conventional commits

---

## COMMANDS

```bash
# Development
npm run dev          # Start dev server
npm run build        # Production build
npm run start        # Start production

# Testing
npm test             # Run all tests
npm run test:unit    # Unit tests only
npm run test:e2e     # E2E tests (Playwright)
npm run test:coverage # Coverage report

# Quality
npm run lint         # ESLint
npm run format       # Prettier
```

---

## STATE TRACKING

Every code-related response starts with:

```
[branch: feature/123-feature-name | issue: #123 | status: clean]
```

---

**Template Version:** 5.0
**Template Type:** solo-soft
**Last Updated:** 2025-12-28
**Inherits From:** `~/.claude/settings.json` (global memory)
**See Also:** `.claude_project` for detailed configuration
