# Round Procedure

Full documentation update at session end or after significant work.

---

## When to Use

- End of work session
- After completing significant work
- After completing an issue
- Alias: `/round`

---

## Enforcement Protocol

### Absolute Prohibitions
- **NEVER assume** a document doesn't need updating without reading it
- **NEVER skip** verification steps to save time
- **NEVER conclude** without completing the checklist

### Quality Over Speed
Fast but wrong is WORSE than slow and correct.

---

## All 7 Documents (ALL MUST BE VERIFIED)

| # | Document | Update Frequency | Criteria |
|---|----------|------------------|----------|
| 1 | PROGRESS.md | Always | Every /round adds entry |
| 2 | CONTINUATION.md | Always | Every /round replaces content |
| 3 | ARCHITECTURE.md | When applicable | New features, endpoints, services |
| 4 | MANUAL_TEST_CASES.md | When applicable | New/modified testable features |
| 5 | autoaccept.md | When applicable | New commands used |
| 6 | ENVIRONMENTS.md | When applicable | Environment config changes |
| 7 | SERVICES.md | When applicable | Service/port changes |

**"When applicable" means READ and VERIFY, not skip.**

---

## Steps

### Step 1-2: PROGRESS.md
1. Read `docs/PROGRESS.md`
2. **APPEND** new entry at TOP (after header)

Format:
```markdown
## YYYY-MM-DD

### ✅ Issue #XXX - Brief Title COMPLETE

**Achievement:** One-sentence summary
**Impact:** Business value
**Status:** ✅ Complete

**Implementation:**
- Key change 1
- Key change 2
- Test results
```

### Step 3-4: CONTINUATION.md
1. Read `docs/CONTINUATION.md`
2. **REPLACE** entire file

Must include:
- Quick Context (for /issue auto-detect)
- Epic Child Issue Status Table
- Current Status
- Epic Progress
- Why [Next Issue] is Next
- Technical Notes

### Step 5-9: Verify Remaining Documents
For each document:
1. READ the document
2. DETERMINE if update needed
3. UPDATE if yes, mark NO if not needed

### Step 10: Complete Verification Checklist

```
## /round Verification Checklist

| # | Document | Read? | Needs Update? | Updated? |
|---|----------|-------|---------------|----------|
| 1 | PROGRESS.md | [ ] | [ ] YES / [ ] NO | [ ] |
| 2 | CONTINUATION.md | [ ] | [ ] YES / [ ] NO | [ ] |
| 3 | ARCHITECTURE.md | [ ] | [ ] YES / [ ] NO | [ ] |
| 4 | MANUAL_TEST_CASES.md | [ ] | [ ] YES / [ ] NO | [ ] |
| 5 | autoaccept.md | [ ] | [ ] YES / [ ] NO | [ ] |
| 6 | ENVIRONMENTS.md | [ ] | [ ] YES / [ ] NO | [ ] |
| 7 | SERVICES.md | [ ] | [ ] YES / [ ] NO | [ ] |

**Verification Complete:** [ ] All 7 documents checked
```

### Step 11: Check for New Procedures
Document if ALL true:
1. Repeatable process established
2. Will be used again
3. Multiple steps involved
4. Not obvious to others

Create in `docs/procedures/[name].md`

### Step 12: Check Technical Debt Issue
- Check if Epic Technical Debt issue exists
- Add any discovered issues

### Step 13: Commit Changes
```bash
git add docs/
git commit -m "docs: update session documentation"
```

---

## Key Differences: PROGRESS vs CONTINUATION

| Aspect | PROGRESS.md | CONTINUATION.md |
|--------|-------------|-----------------|
| Purpose | Historical record | Current state |
| Update | Append to top | Complete replacement |
| Length | 5-15 lines/issue | 100-200 lines total |
| Detail | High-level summary | Deep technical details |
| Audience | Stakeholders | Developers |

---

## Version Information
- Document Version: 1.0
- Last Updated: 2025-12-23
