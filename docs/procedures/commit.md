# Commit Procedure

Proper commit workflow with verification checks.

---

## When to Use

- Before committing any changes
- After completing a logical unit of work
- Before switching context

---

## Commit Format

```
type: description (#ISSUE)
```

### Types
| Type | Use For |
|------|---------|
| feat | New feature |
| fix | Bug fix |
| docs | Documentation |
| refactor | Code restructuring |
| test | Test additions |
| perf | Performance improvements |
| chore | Maintenance |

---

## Steps

### Step 1: Check Status
```bash
git status
```
- Review changed files
- Verify all changes are intentional

### Step 2: Review Changes
```bash
git diff
```
- Verify no debug code (console.log, print, debugger)
- Verify no TODO comments left
- Verify no hardcoded values

### Step 3: Run Tests
```bash
npm test  # or pytest
```
- All tests must pass
- If tests fail, fix before committing

### Step 4: Stage Changes
```bash
git add [files]
# or for all changes:
git add .
```

### Step 5: Commit
```bash
git commit -m "type: description (#ISSUE)"
```

### Step 6: Verify Commit
```bash
git log -1 --oneline
```

---

## Commit Message Rules

**DO:**
- Reference issue number: `fix: resolve login bug (#123)`
- Be concise but descriptive
- Use imperative mood: "add" not "added"

**DON'T:**
- Add AI signatures
- Add "Generated with Claude" messages
- Leave issue reference out (except chore)

---

## WIP Commits

For work-in-progress (incomplete work):
```bash
git commit -m "WIP: type: description (#ISSUE)"
```

WIP commits are acceptable for:
- End of day backup
- Context switching
- Tests failing but need to save progress

---

## Version Information
- Document Version: 1.0
- Last Updated: 2025-12-23
