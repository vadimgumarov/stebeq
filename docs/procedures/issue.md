# Issue Procedure

Full analysis before starting work on any issue.

---

## When to Use

- Before starting work on any GitHub issue
- When switching to a new issue
- Alias: `/issue`

---

## Steps

### Step 0: Close Previous Issue (if applicable)
```bash
# If previous issue is complete
gh issue close #PREVIOUS --comment "Completed in [commit/PR]"
```
- Verify all acceptance criteria met
- Update PROGRESS.md if not done

### Step 1: Read and Understand Issue
```bash
gh issue view #ISSUE
```
- Read full description
- Understand the goal
- Note acceptance criteria

### Step 2: Assess Complexity (Workflow Depth)

```
┌─────────────────────────────────────┐
│  Is it a hotfix or simple bug?      │
│  (< 1 hour, obvious fix)            │
└───────────┬─────────────────────────┘
            │
           YES → QUICK PATH
            │    Skip to Step 8, minimal planning
            │
           NO
            │
            ▼
┌─────────────────────────────────────┐
│  Is it an Epic with 3+ children     │
│  OR unclear/ambiguous requirements? │
└───────────┬─────────────────────────┘
            │
           YES → FULL PATH
            │    All steps + Clarification (Step 5)
            │    Consider: docs/stack/research-[feature].md
            │
           NO → STANDARD PATH
                Steps 3-10 as normal
```

**Mark complexity:**
- [ ] QUICK - Simple fix, skip detailed planning
- [ ] STANDARD - Clear requirements, normal flow
- [ ] FULL - Needs clarification + research documentation

### Step 3: Verify Template Compliance
Check for required sections:
- [ ] Summary/Description
- [ ] Acceptance Criteria
- [ ] Test Plan (if applicable)
- [ ] Definition of Done

If missing, request update or clarify with user.

### Step 3: Identify Completed Work
- What's already done on this issue?
- Previous commits or PRs?
- Partial implementation?

### Step 4: Validate Requirements
- Are requirements still current?
- Any scope changes since creation?
- Dependencies resolved?

### Step 5: Clarify Ambiguities (FULL PATH only)

**Skip if QUICK or STANDARD path.**

Run through clarification checklist:

| Area | Question | Clear? |
|------|----------|--------|
| **Scope** | What's explicitly IN scope? | [ ] |
| **Scope** | What's explicitly OUT of scope? | [ ] |
| **Users** | Who uses this? What's their goal? | [ ] |
| **Data** | What data is needed? Source? | [ ] |
| **Edge Cases** | What happens when X fails? | [ ] |
| **Integration** | What existing code is affected? | [ ] |
| **Success** | How do we know it's done? | [ ] |

**If any unclear:**
1. List specific questions
2. Ask user before proceeding
3. Update issue with clarifications
4. Document decisions in issue comments

**For tech stack decisions:** Create `docs/stack/research-[feature].md`

### Step 6: Check Architecture Docs
```bash
cat docs/architecture/ARCHITECTURE.md
```
- Affected components?
- Existing patterns to follow?
- Integration points?

### Step 7: Check Test Cases
```bash
cat docs/test/MANUAL_TEST_CASES.md
```
- Existing test cases?
- New tests needed?
- Test data requirements?

### Step 8: Review Autoaccept Commands
```bash
cat docs/autoaccept.md
```
- Commands used for this type of work?
- Any new commands needed?

### Step 9: Create Implementation Plan
Document in issue or locally:
1. Task 1 - [description]
2. Task 2 - [description]
3. Task 3 - [description]
...

### Step 10: Check Technical Debt Issue
```bash
gh issue list --label "technical-debt"
```
- Related debt items?
- Should any be addressed now?
- New debt to document?

### Step 11: Display Verification Checklist

```
## Issue #XX Pre-Work Checklist

| # | Item | Status |
|---|------|--------|
| 1 | Issue read and understood | [ ] |
| 2 | Complexity assessed | [ ] QUICK / [ ] STANDARD / [ ] FULL |
| 3 | Template sections complete | [ ] |
| 4 | Previous work identified | [ ] |
| 5 | Requirements validated | [ ] |
| 6 | Clarification complete (if FULL) | [ ] N/A / [ ] Done |
| 7 | Architecture reviewed | [ ] |
| 8 | Test cases checked | [ ] |
| 9 | Implementation plan created | [ ] |

**Ready to proceed:** [ ] Yes / [ ] No (explain blockers)
```

---

## Auto-Detect Mode

Read CONTINUATION.md to determine:
- Last completed issue
- Whether it needs closing
- Next recommended issue

---

## Version Information
- Document Version: 1.0
- Last Updated: 2025-12-23
