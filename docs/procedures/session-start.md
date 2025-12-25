# Session Start Procedure

Beginning a new work session with full context restoration.

---

## When to Use

- Starting a new Claude Code conversation
- Resuming work after a break
- Beginning a new day of development

---

## Steps

### Step 1: Read CONTINUATION.md
```bash
# Priority #1 - Always first
cat docs/CONTINUATION.md
```
- Get current state, last work, next steps
- Understand where the project left off

### Step 2: Check Git Status
```bash
git status
```
- Any uncommitted changes?
- Clean working directory?

### Step 3: Check Last Commit
```bash
git log -1 --oneline
```
- Verify last work matches CONTINUATION.md
- Ensure no missing commits

### Step 4: Check Current Branch
```bash
git branch --show-current
```
- Correct branch for current work?
- Need to switch branches?

### Step 5: Check Open Issues
```bash
gh issue list --state open --limit 10
```
- Current priorities
- Blockers or urgent items

### Step 6: State Context
Before proceeding, state:
```
[branch: X | issue: #Y | status: Z]
```

### Step 7: Confirm Understanding
- Summarize current state
- Confirm next steps with user
- Proceed only after confirmation

---

## Verification

- [ ] CONTINUATION.md read
- [ ] Git status checked
- [ ] Branch verified
- [ ] Context stated
- [ ] Understanding confirmed

---

## Version Information
- Document Version: 1.0
- Last Updated: 2025-12-23
