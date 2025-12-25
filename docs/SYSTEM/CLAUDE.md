# CLAUDE.md - [Project Name]

> [One-line description for instant context recall]

> **Note:** Core rules (communication, code standards, TDD, error recovery, version control) are in global memory (`~/.claude/settings.json`). This file contains PROJECT-SPECIFIC configuration only.

---

## QUICK START

```
1. Read docs/CONTINUATION.md
2. State: [branch: X | issue: #Y | status: Z]
3. Proceed
```

---

## PROJECT

| | |
|---|---|
| **What** | [One sentence: what it does] |
| **Why** | [One sentence: problem it solves] |
| **Who** | [Target users] |
| **Phase** | [MVP / Alpha / Beta / Production] |

### Stack

| Layer | Technology | Notes |
|-------|------------|-------|
| Frontend | [React, Vue, etc.] | |
| Backend | [Node, Python, etc.] | |
| Database | [PostgreSQL, MongoDB, etc.] | [ORM, naming conventions] |
| Cache | [Redis, etc.] | (if applicable) |
| Hosting | [Vercel, AWS, etc.] | |

### Links

| Resource | URL |
|----------|-----|
| Repository | [GitHub URL] |
| Issues Board | [GitHub Project URL] |
| Staging | [URL if exists] |
| Production | [URL if exists] |

### Development Context

- **Approach:** [Solo / Team / Open-source]
- **Tracking:** [GitHub Issues / Jira]
- **CI/CD:** [GitHub Actions / None]

---

## PROJECT DOCS

| Doc | Location | Purpose |
|-----|----------|---------|
| Architecture | `docs/architecture/` | System design, flows |
| Stack | `docs/stack/` | Tech details, DB setup, migrations |
| API | `docs/api/` | Endpoints, contracts |
| Business Logic | `docs/business/` | Rules, terminology |
| Procedures | `docs/procedures/` | Step-by-step runbooks |

---

## PROJECT STRUCTURE

See: `docs/architecture/`

---

## SESSION

Procedures: `docs/procedures/`

| Procedure | When |
|-----------|------|
| `session-start.md` | Beginning work |
| `session-end.md` | Quick wrap-up |
| `issue.md` | Before starting any issue |
| `round.md` | Full docs update at session end |

---

## DOCS

| Doc | Purpose | Update |
|-----|---------|--------|
| `CONTINUATION.md` | Current state | Every session (rewrite) |
| `PROGRESS.md` | Accomplishment log | When completing issues (append) |
| `ISSUES.md` | Problems & solutions | When solving tricky problems |

Templates & process: See `docs/procedures/round.md`

---

## GITHUB ISSUES

Templates: `.github/ISSUE_TEMPLATE/`

| Template | Use For |
|----------|---------|
| `epic.md` | Large multi-issue effort |
| `feature.md` | New functionality |
| `bug.md` | Something broken |
| `improvement.md` | Enhancements |
| `child-issue.md` | Child of Epic |

Setup: See `docs/procedures/github-issue-templates-setup.md`

---

## LABELS

Setup: See `docs/procedures/github-labels-setup.md`

| Category | Examples |
|----------|----------|
| Type | `type: epic`, `type: bug`, `type: feature` |
| Priority | `priority: critical`, `priority: high`, `priority: medium`, `priority: low` |
| Area | Project-specific (e.g., `area: backend`, `area: mobile`) |
| Status | `status: blocked`, `status: needs-review` (optional) |

---

## PROJECT RULES

### Safety

- [Project-specific safety rules]

### Constraints

- [What NOT to do in this project]

### Conventions

- [Project-specific patterns and conventions]

<!-- Examples by project type:
- Scraper: "Rate limit 1-2 sec between requests, respect robots.txt"
- Trading: "Default to paper trading mode, never skip audit trail"
- Mobile: "Test on both iOS and Android, handle offline state"
- API: "Never expose internal errors, validate all input"
- Static Site: "Validate HTML5, optimize images, semantic HTML"
-->

---

## COMMANDS

Scripts: `package.json` / `Makefile` / `pyproject.toml`

---

## STATE TRACKING

Every code-related response should start with:

```
[branch: feature/123-feature-name | issue: #123 | status: clean]
```

---

**Template Version:** 3.1
**Last Updated:** [Date]
**Inherits From:** `~/.claude/settings.json` (global memory)
