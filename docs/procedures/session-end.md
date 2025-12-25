# Session End Procedure (Lightweight)

Quick wrap-up for ending a work session.

---

## When to Use

- Ending a work session
- Before extended break
- End of day

---

## Steps

### Step 1: Commit Current Work
```bash
git add .
git commit -m "type: description (#ISSUE)"
```
- Use WIP prefix if incomplete: `WIP: type: description (#ISSUE)`
- Never leave uncommitted changes

### Step 2: Push to Remote
```bash
git push origin HEAD
```
- Backup your work
- Enables continuation from another machine

### Step 3: Update CONTINUATION.md
```bash
# Rewrite with current state
```
**COMPLETE REPLACEMENT** - Overwrite entire file:
- Current Epic and Branch
- What was just completed
- Next immediate steps
- Any blockers or notes

### Step 4: Update PROGRESS.md (if issue completed)
```bash
# Append entry at TOP
```
**APPEND ONLY** - Add new entry:
- Date
- Issue number and title
- Achievement summary
- Business impact

### Step 5: Update GitHub Issue Status
```bash
# If status changed
gh issue edit #ISSUE --add-label "status: X"
```
- Mark in-progress, blocked, or done
- Add comment if needed

### Step 6: Note Blockers
- Document in CONTINUATION.md
- Create issue if significant
- Tag relevant people if needed

---

## Verification

- [ ] All changes committed
- [ ] Pushed to remote
- [ ] CONTINUATION.md updated
- [ ] PROGRESS.md updated (if issue completed)
- [ ] GitHub issue status current
- [ ] Blockers documented

---

## Version Information
- Document Version: 1.0
- Last Updated: 2025-12-23
