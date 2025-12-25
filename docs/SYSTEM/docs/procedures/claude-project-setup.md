# Claude Project Setup Procedure

How to create and configure the `.claude_project` file for project-specific context.

---

## What is .claude_project?

The `.claude_project` file provides **project-specific context** that supplements your global memory (`~/.claude/settings.json`). It contains:

- Project identity and tech stack
- Safety rules specific to this project
- Architecture and structure
- Commands and scripts
- Current status

**Location:** Project root (e.g., `/project/.claude_project`)

---

## When to Create

- New project setup
- Existing project missing `.claude_project`
- After major architectural changes

---

## Template

Create `.claude_project` in project root with this structure:

```yaml
# [PROJECT_NAME] - Project Context

## Project Identity

| Field | Value |
|-------|-------|
| **Name** | [Project name] |
| **Type** | [web/mobile/backend/desktop/cli/data/other] |
| **Phase** | [MVP/Alpha/Beta/Production] |
| **Repository** | [GitHub URL] |

## Tech Stack

| Layer | Technology |
|-------|------------|
| **Language** | [Primary language] |
| **Framework** | [Main framework] |
| **Database** | [DB technology] |
| **Hosting** | [Deployment platform] |

## Project Structure

```
[project-root]/
├── [folder]/     # [Description]
├── [folder]/     # [Description]
└── [folder]/     # [Description]
```

## Safety Rules

- [Project-specific safety rule 1]
- [Project-specific safety rule 2]
- [Never do X in this project]

## Commands

| Command | Purpose |
|---------|---------|
| `[command]` | [What it does] |
| `[command]` | [What it does] |

## Current Status

**Active Work:** [Current epic/issue]
**Branch:** [Current branch]
**Next:** [Next priority]
```

---

## Step-by-Step Instructions

### Step 1: Create the File

```bash
touch .claude_project
```

### Step 2: Fill Project Identity

Answer these questions:
- What is this project called?
- What type of application is it?
- What development phase is it in?
- Where is the repository?

```yaml
## Project Identity

| Field | Value |
|-------|-------|
| **Name** | RideCareShare Mobile |
| **Type** | mobile |
| **Phase** | MVP |
| **Repository** | https://github.com/user/ridecareshare-mobile |
```

### Step 3: Document Tech Stack

List the core technologies:
- What language?
- What framework?
- What database?
- Where is it deployed?

```yaml
## Tech Stack

| Layer | Technology |
|-------|------------|
| **Language** | TypeScript |
| **Framework** | React Native + Expo |
| **Database** | PostgreSQL + Prisma |
| **Hosting** | Railway |
```

### Step 4: Map Project Structure

Show the folder layout (top-level only):

```yaml
## Project Structure

```
ridecareshare-mobile/
├── mobile/           # React Native app
├── backend/          # Node.js API
├── shared/           # Shared TypeScript types
├── docs/             # Documentation
└── scripts/          # Utility scripts
```
```

### Step 5: Define Safety Rules

What should NEVER happen in this project?

**Examples by project type:**

| Project Type | Safety Rules |
|--------------|--------------|
| **Mobile** | Never hardcode API URLs, always handle offline state |
| **Trading** | Never skip audit trail, default to paper trading |
| **Scraper** | Rate limit 1-2 sec, respect robots.txt |
| **API** | Never expose internal errors, validate all input |
| **Data** | Never modify production data directly |

```yaml
## Safety Rules

- Never switch ports to avoid issues - FIX the root cause
- Never commit .env files or API keys
- Always use Prisma for database access (no raw SQL)
- Test on both iOS and Android before PR
```

### Step 6: List Common Commands

What commands are used daily?

```yaml
## Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start development server |
| `npm test` | Run test suite |
| `npm run db:migrate` | Run database migrations |
| `npx expo start` | Start Expo development |
```

### Step 7: Update Current Status

What's being worked on now?

```yaml
## Current Status

**Active Work:** Epic #14 - Real-time Notifications
**Branch:** feature/14-realtime-notifications
**Next:** Issue #99 - Ride Chat Room
```

---

## Verification

After creating `.claude_project`, verify:

- [ ] File exists in project root
- [ ] Project identity is complete
- [ ] Tech stack is accurate
- [ ] Structure matches actual folders
- [ ] Safety rules are project-specific (not generic)
- [ ] Commands work when run
- [ ] Status reflects current work

---

## Maintenance

| When | Action |
|------|--------|
| New technology added | Update Tech Stack |
| Folder structure changes | Update Project Structure |
| New safety concern discovered | Add to Safety Rules |
| New scripts added | Update Commands |
| Starting new work | Update Current Status |

---

## Examples

### Minimal (Simple Project)

```yaml
# PersonalPortfolio - Project Context

## Project Identity

| Field | Value |
|-------|-------|
| **Name** | Personal Portfolio |
| **Type** | web |
| **Phase** | Production |

## Tech Stack

| Layer | Technology |
|-------|------------|
| **Language** | TypeScript |
| **Framework** | Next.js |
| **Hosting** | Vercel |

## Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start dev server |
| `npm run build` | Build for production |
```

### Full (Complex Project)

```yaml
# TradingStrategy - Project Context

## Project Identity

| Field | Value |
|-------|-------|
| **Name** | Trading Strategy Platform |
| **Type** | backend |
| **Phase** | Alpha |
| **Repository** | https://github.com/user/trading-strategy |

## Tech Stack

| Layer | Technology |
|-------|------------|
| **Language** | Python 3.11 |
| **Framework** | FastAPI |
| **Database** | PostgreSQL + Redis |
| **Hosting** | AWS |

## Project Structure

```
trading-strategy/
├── src/              # Main application code
│   ├── strategies/   # Trading strategies
│   ├── brokers/      # Broker integrations
│   └── risk/         # Risk management
├── tests/            # Test suite
├── scripts/          # Utility scripts
└── docs/             # Documentation
```

## Safety Rules

- ALWAYS default to paper trading mode
- NEVER skip audit trail for any trade
- NEVER deploy on Friday afternoon
- Validate all market data before use
- Maximum position size enforced in code

## Commands

| Command | Purpose |
|---------|---------|
| `pytest` | Run test suite |
| `python -m src.main` | Start trading engine |
| `python scripts/backtest.py` | Run backtesting |

## Current Status

**Active Work:** Epic #45 - Risk Management
**Branch:** feature/45-risk-management
**Next:** Issue #112 - Position Sizing
```

---

## Version Information
- Document Version: 1.0
- Last Updated: 2025-12-23
